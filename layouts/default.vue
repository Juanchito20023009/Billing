<template>
  <v-app ligth>
    <div id="app">
      {{ $store.state }}
      <div v-if="$store.state.userData.state">
        <div class="sidebar close">
          <div class="logo-details">
            <i class="bx bxl-c-plus-plus"></i>
            <span class="logo_name">Billing</span>
          </div>
          <ul class="nav-links">
            <li v-for="(item, index) in items" :key="index">
              <div v-if="!item.sublinks">
                <a>
                  <v-icon>{{ item.icon }}</v-icon>
                  <nuxt-link class="link_name" :to="item.to">
                    {{ item.title }}
                  </nuxt-link>
                </a>
                <ul class="sub-menu blank">
                  <li>
                    <nuxt-link class="link_name" :to="item.to">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div v-else>
                <li>
                  <div class="iocn-link">
                    <a>
                      <v-icon style="color: white">{{ item.icon }}</v-icon>
                      <nuxt-link class="link_name" :to="item.to">
                        {{ item.title }}
                      </nuxt-link>
                    </a>
                    <v-icon class="arrow">mdi-menu-down</v-icon>
                  </div>
                  <ul class="sub-menu">
                    <li>
                      <a class="link_name" href="#">{{ item.title }}</a>
                    </li>
                    <li
                      v-for="(sublinks, indexSublinks) in item.subitems"
                      :key="indexSublinks"
                    >
                      <a>
                        <nuxt-link :to="sublinks.to">
                          {{ sublinks.title }}
                        </nuxt-link>
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </li>
            <li>
              <div class="profile-details">
                <div class="profile-content">
                  <img
                    src="\img\profile-icon-design-free-vector.jpg"
                    alt="profileImg"
                  />
                </div>
                <div class="name-job">
                  <div class="profile_name">Juan</div>
                  <div class="job">Administrator</div>
                </div>
                <v-icon>mdi-logout</v-icon>
              </div>
            </li>
          </ul>
        </div>
        <section class="home-section">
          <v-icon class="bx-menu" style="color: black; font-size: 35px">
            mdi-menu
          </v-icon>
          <div class="home-content">
            <Nuxt />
          </div>
        </section>
      </div>
      <div v-else>
        <div>
          <nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      idleTimer: null,
      idleTimeout: 15 * 60 * 1000,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/Dashboards/Admin',
          sublinks: false,
          subitems: [],
        },
        {
          icon: 'mdi-book',
          title: 'Billings',
          to: '',
          sublinks: true,
          subitems: [
            {
              icon: '',
              title: 'Listado',
              to: '/Billings/List',
            },
            {
              icon: '',
              title: 'Masivas',
              to: '',
            },
          ],
        },
        {
          icon: 'mdi-briefcase-account',
          title: 'Clients',
          to: '/Clients',
          sublinks: false,
          subitems: [],
        },
        {
          icon: 'mdi-seal',
          title: 'Briefcase',
          to: '',
          sublinks: true,
          subitems: [
            {
              icon: '',
              title: 'Productos',
              to: '',
            },
            {
              icon: '',
              title: 'Tabla de precios',
              to: '',
            },
          ],
        },
        {
          icon: 'mdi-chart-bar',
          title: 'Reports',
          to: '',
          sublinks: true,
          subitems: [
            {
              icon: '',
              title: 'Facturas',
              to: '',
            },
            {
              icon: '',
              title: 'Ventas',
              to: '',
            },
          ],
        },
        {
          icon: 'mdi-run-fast',
          title: 'Billing',
          to: '/Billing',
          sublinks: false,
          subitems: [],
        },
        {
          icon: 'mdi-cog',
          title: 'Settings',
          to: '/Settings',
          sublinks: false,
          subitems: [],
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  mounted() {
    if (this.$store.state.userDate) {
      // Slide Bar
      const arrow = document.querySelectorAll('.arrow')
      for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener('click', (e) => {
          const arrowParent = e.target.parentElement.parentElement
          arrowParent.classList.toggle('showMenu')
        })
      }
      const sidebar = document.querySelector('.sidebar')
      const sidebarBtn = document.querySelector('.bx-menu')
      sidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('close')
      })

      // Disconnection Inactive
      this.startIdleTimer()
      this.setupIdleEvents()
    }
  },
  beforeDestroy() {
    this.removeIdleEvents()
  },
  methods: {
    logout() {
      console.log('se desconecto')
    },
    startIdleTimer() {
      this.idleTimer = setTimeout(() => {
        this.logout() // Función para cerrar sesión y redirigir al usuario a la página de inicio de sesión
      }, this.idleTimeout)
    },

    resetIdleTimer() {
      clearTimeout(this.idleTimer)
      this.startIdleTimer()
    },

    setupIdleEvents() {
      window.addEventListener('mousemove', this.resetIdleTimer)
      window.addEventListener('keydown', this.resetIdleTimer)
    },

    removeIdleEvents() {
      window.removeEventListener('mousemove', this.resetIdleTimer)
      window.removeEventListener('keydown', this.resetIdleTimer)
    },
    getDataUser(){
      this.$store.commit('SET_USER', {state: true})
    }
  },
}
</script>

<style>
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  overflow: hidden;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #0040a8;
  z-index: 100;
  transition: all 0.5s ease;
}

.sidebar.close {
  width: 78px;
}

.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}

.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}

.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}

.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}

.sidebar .nav-links li:hover {
  background: #01378f;
}

.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar.close .nav-links li .iocn-link {
  display: block;
}

.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
}

.sidebar.close .nav-links i.arrow {
  display: none;
}

.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
}

.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #01378f;
  display: none;
}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}

.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 2px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #01378f;
  padding: 12px 0;
  transition: all 0.5s ease;
}

.sidebar.close .profile-details {
  background: none;
}

.sidebar.close .profile-details {
  width: 78px;
}

.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}

.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #01378f;
  transition: all 0.5s ease;
}

.sidebar.close .profile-details img {
  padding: 10px;
}

.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}

.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}

.sidebar .profile-details .job {
  font-size: 12px;
}

.home-section {
  position: relative;
  background: #e1e8fb;
  height: 100vh;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
  padding: 12px;
}

.sidebar.close ~ .home-section {
  left: 78px;
  width: calc(100% - 78px);
}

.home-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.home-section .home-content .bx-menu {
  color: #0040a8;
  font-size: 35px;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #0040a8;
  font-size: 35px;
}

.home-section .home-content .bx-menu {
  cursor: pointer;
  margin-right: 10px;
}

.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}

@media screen and (max-width: 400px) {
  .sidebar {
    width: 240px;
  }

  .sidebar.close {
    width: 78px;
  }

  .sidebar .profile-details {
    width: 240px;
  }

  .sidebar.close .profile-details {
    background: none;
  }

  .sidebar.close .profile-details {
    width: 78px;
  }

  .home-section {
    left: 240px;
    width: calc(100% - 240px);
  }

  .sidebar.close ~ .home-section {
    left: 78px;
    width: calc(100% - 78px);
  }
}
</style>
