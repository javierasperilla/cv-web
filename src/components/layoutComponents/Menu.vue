<template>
  <div id="app-menu">
    <div class="navbar-background fixed">
      <nav class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #offcanvas-slide" uk-navbar-toggle-icon></a>
          <span class="uk-hidden@m my-name-responsive">JAVIER ASPERILLA</span>
          <ul class="uk-navbar-nav uk-visible@m">
            <router-link to="/" tag="li"><a><img class="profile-pic" src="../../assets/perfil.jpg"></a></router-link>
            <router-link to="/" tag="li"><a class="uk-visible@s my-name">Javier Asperilla</a></router-link>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m navigation">
            <router-link to="/" tag="li" active-class="uk-active" exact>
              <a class="menu-link" v-if="selectedLanguage == 'english'">Resume</a><a v-if="selectedLanguage == 'spanish'">Curriculum</a>
            </router-link>            
            <li class="uk-active">
              <a href="#" v-if="selectedLanguage == 'english'">Language</a>
              <a href="#" v-if="selectedLanguage == 'spanish'">Idiomas</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav" >
                  <li :class="{'uk-active': selectedLanguage == 'english'}" @click="changeLanguage(english)"><a href="#" class="navigation__language">{{ english }}</a></li>
                  <li :class="{'uk-active': selectedLanguage == 'spanish'}" @click="changeLanguage(spanish)"><a href="#" class="navigation__language">{{ spanish }}</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="offcanvas-slide" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-default navigation">
            <router-link to="/" tag="li"><a><img class="profile-pic-responsive" src="../../assets/perfil.jpg"></a></router-link>
            <router-link to="/" tag="li" active-class="uk-active" exact><a v-if="selectedLanguage == 'english'">Resume</a><a v-if="selectedLanguage == 'spanish'">Curriculum</a></router-link>
            <li class="uk-nav-divider"></li>
            <li class="uk-parent uk-nav">
              <span v-if="selectedLanguage == 'english'" class="navigation__language">Language</span>
              <span v-if="selectedLanguage == 'spanish'" class="navigation__language">Idiomas</span>
              <ul class="uk-nav-sub remove-left-padding">
                <li :class="{'uk-active': selectedLanguage == 'english'}" @click="changeLanguage(english)"><a href="#">{{ english }}</a></li>
                <li :class="{'uk-active': selectedLanguage == 'spanish'}" @click="changeLanguage(spanish)"><a href="#">{{ spanish }}</a></li>
              </ul>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  name: 'app-menu',
  data () {
    return {
      english: 'English',
      spanish: 'Spanish'
    }
  },
  computed: {
    ...mapState(['selectedLanguage', 'displayLanguages']),
    language () {
      return this.displayLanguages[this.selectedLanguage]
    }
  },
  methods: {
    changeLanguage (data) {
      this.$store.commit({
        type: 'changeLanguage',
        data
      })
    }
  }
}
</script>

<style scoped>
  .fixed {
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .profile-pic {
    width: 60px;
    height:60px;
    border-radius: 50%;
  }

  .profile-pic-responsive {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .navigation li,
  .navigation .uk-active a {
    color: #000;
  }
  
  .navbar-background {
    background-image: url('../../assets/screen.png') ;
    background-position: right;
    background-size: 100%;
  
  }

  .navigation__language a {
    color: #000;
  }

  .uk-offcanvas-bar {
    text-align: center;
  }

  .my-name {
    text-decoration: none;
    color: black !important;
    font-size: 14pt;
  }

  .my-name-responsive {
    padding: 10px;
    font-size: 14pt;
    color: black !important;
  }

  .remove-left-padding {
    padding-left: 0px;
  }
</style>
