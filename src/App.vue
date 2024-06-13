<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header :class="{'static': $route.name.match('map') || $route.name.match('object'), 'mob-active': showMobMenu && isMobile}">
    <div class="container header">
      <a href="/" class="logo-container">
        <img alt="KM logo" class="logo" src="@/assets/svg/logo.svg" width="60" height="60" />
      </a>

      <div class="wrapper d-none d-md-block">
        <nav>
          <RouterLink to="/"><img src="@/assets/svg/home.svg" width="16" height="15" alt="Sākums"></RouterLink>
          <RouterLink :to="{ name: 'map', params: { category: 'parki' } }">Karte</RouterLink>
          <RouterLink to="/about-uni">Par Universitāti</RouterLink>
          <RouterLink to="/about-me">Par mani</RouterLink>
        </nav>
      </div>
      <div class="theme-switcher">
        <div class="form-check form-switch">
          <input @click="changeTheme" :checked="theme === 'dark'" class="form-check-input" type="checkbox" role="switch" id="themeSwitcher">
        </div>
      </div>
      <div v-if="isMobile" class="mob-menu">
        <div @click="openMobMenu" class="hamburger" :class="{'checked': showMobMenu}"><span></span></div>
        <div id="overlay" :class="{'active': showMobMenu}">
          <ul class="menu">
            <RouterLink @click="showMobMenu = false" to="/"><img src="@/assets/svg/home.svg" width="16" height="15" alt="Sākums"></RouterLink>
            <RouterLink @click="showMobMenu = false" :to="{ name: 'map', params: { category: 'parki' } }">Karte</RouterLink>
            <RouterLink @click="showMobMenu = false" to="/about-uni">Par Universitāti</RouterLink>
            <RouterLink @click="showMobMenu = false" to="/about-me">Par mani</RouterLink>
          </ul>
        </div>
      </div>
      
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </RouterView>

  <footer>
    <div class="container">
      <div class="top d-md-none">
        <img alt="KM logo" class="logo" src="@/assets/svg/logo-footer.svg" width="76" height="76" />
        <ul class="footer-socials-list">
          <li class="footer-socials-list-item"><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
          <li class="footer-socials-list-item"><a href="https://lv.linkedin.com/" target="_blank">LinkedIn</a></li>
          <li class="footer-socials-list-item"><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
        </ul>
      </div>
      <div class="row footer-menu">
        <div class="col-md-3">
          <p @click="toggleFooterMenu(1)" class="footer-menu-title" :class="{'active': activeMenu === 1}">Parki</p>
          <ul v-if="activeMenu === 1 || !isMobile" class="footer-menu-list">
            <li
              v-for="object in objects.filter((obj) => obj.category === 'parki')"
              :key="object.id"
              class="footer-menu-list-item"
            >
              <RouterLink
                :to="{ name: 'object', params: { slug: object.slug } }"
              >{{ object.title }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <p @click="toggleFooterMenu(2)" class="footer-menu-title" :class="{'active': activeMenu === 2}">Kafejnīcas</p>
          <ul v-if="activeMenu === 2 || !isMobile" class="footer-menu-list">
            <li
              v-for="object in objects.filter((obj) => obj.category === 'kafejnicas')"
              :key="object.id"
              class="footer-menu-list-item"
            >
              <RouterLink
                :to="{ name: 'object', params: {slug: object.slug } }"
              >{{ object.title }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <p @click="toggleFooterMenu(3)" class="footer-menu-title" :class="{'active': activeMenu === 3}">Ēdnīcas</p>
          <ul v-if="activeMenu === 3 || !isMobile" class="footer-menu-list">
            <li
              v-for="object in objects.filter((obj) => obj.category === 'ednicas')"
              :key="object.id"
              class="footer-menu-list-item"
            >
              <RouterLink
                :to="{ name: 'object', params: { slug: object.slug } }"
              >{{ object.title }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <p @click="toggleFooterMenu(4)" class="footer-menu-title last" :class="{'active': activeMenu === 4}">Par Latvijas Universitāti</p>
          <ul v-if="activeMenu === 4 || !isMobile" class="footer-menu-list last">
            <li class="footer-menu-list-item"><RouterLink to="/about-uni">Kāpēc izvēlēties Latvijas Universitāti?</RouterLink></li>
            <li class="footer-menu-list-item"><a href="https://www.lu.lv/gribustudet/izvelies-panakumus/" target="_blank">Gribu studēt!</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <a href="/" class="logo-container">
          <img alt="KM logo" class="logo d-none d-md-block" src="@/assets/svg/logo-footer.svg" width="76" height="76" />
        </a>
        <p class="copyrights">© Kamila Mickeviča</p>
        <ul class="footer-socials-list d-none d-md-flex">
          <li class="footer-socials-list-item"><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
          <li class="footer-socials-list-item"><a href="https://lv.linkedin.com/" target="_blank">LinkedIn</a></li>
          <li class="footer-socials-list-item"><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      activeMenu: 1,
      isMobile: false,
      objects: sourceData.objects,
      theme: '',
      showMobMenu: false,
    }
  },
  watch: {
    $route() {
      this.showMobMenu = false;
    }
  },
  mounted() {
    this.theme = this.getDefaultTheme();
    this.isMobile = screen.width <= 760;
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.isMobile = screen.width <= 760;
      });
    })
  },
  methods: {
    getDefaultTheme() {
      const isDarkMode = window.matchMedia(`(prefers-color-scheme: dark)`).matches;

      if (isDarkMode) {
        return 'dark';
      }
      
      return 'light';
    },
    toggleFooterMenu(index) {
      if (this.activeMenu === index || !this.isMobile) {
        return;
      }
      this.activeMenu = index;
    },
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme)
    },
    openMobMenu() {
      this.showMobMenu = !this.showMobMenu;
    },
  }
};
</script>

<style>
  /* moveUp: name="moveUp" */
  .moveUp-enter-active {
    animation: fadeIn 1s ease-in;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  .moveUp-leave-active {
    animation: moveUp 0.3s ease-in;
  }

  @keyframes moveUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(-400px); }
  }

  /* slide: name="slide" mode="out-in" */
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: .1;
    transform: translateX(-30%);
  }

  /* fade: name="fade" mode="out-in" */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.7;
  }
</style>
