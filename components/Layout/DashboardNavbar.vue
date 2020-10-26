<template>
  <base-nav
          v-model="showMenu"
          class="navbar-absolute top-navbar"
          type="white"
          :transparent="true"
          expand="lg"
  >
    <div slot="brand" class="navbar-wrapper">
      <div class="navbar-minimize d-inline"><sidebar-toggle-button /></div>
      <div
              class="navbar-toggle d-inline"
              :class="{ toggled: $sidebar.showSidebar }"
      >
        <button type="button" class="navbar-toggler" @click="toggleSidebar">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <nuxt-link class="nav-logo d-none d-lg-block d-xl-block" to="/">
        <img src="/carfromaustralia.png" />
      </nuxt-link>
      <nuxt-link class="navbar-brand " to="/">
        Car from Australia
      </nuxt-link>
    </div>

    <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
      <base-dropdown
              tag="li"
              :menu-on-right="!$rtl.isRTL"
              title-tag="a"
              class="nav-item"
              title-classes="nav-link"
              menu-classes="dropdown-navbar"
      >
        <template
                slot="title"
        >
          <div class="photo"><img src="img/mike.jpg" /></div>
          <b class="caret d-none d-lg-block d-xl-block"></b>
          <p class="d-lg-none">Log out</p>
        </template>
        <li class="nav-link">
          <nuxt-link class="link nav-item dropdown-item" to="/profile">
            Profile
          </nuxt-link>
        </li>
        <div class="dropdown-divider"></div>
        <li class="nav-link">
          <a href="#" class="nav-item dropdown-item" @click="logout">Log out</a>
        </li>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import { BaseNav, Modal } from '@/components';
  import SidebarToggleButton from './SidebarToggleButton';

  export default {
    components: {
      SidebarToggleButton,
      CollapseTransition,
      BaseNav,
      Modal
    },
    computed: {
      routeName() {
        const { path } = this.$route;
        let parts = path.split('/')
        return parts.map(p => this.capitalizeFirstLetter(p)).join(' ');
      },
      isRTL() {
        return this.$rtl.isRTL;
      }
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: ''
      };
    },
    methods: {
      capitalizeFirstLetter(string) {
        if (!string || typeof string !== 'string') {
          return ''
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      async logout() {
        this.$store.dispatch('user/logout')
      }
    }
  };
</script>
<style scoped>
  .top-navbar {
    top: 0px;
  }
  .nav-logo {
    display: inline-block;
    height: 45px;
    width: 80px;
    vertical-align: middle;
    overflow: hidden;
  }
</style>
