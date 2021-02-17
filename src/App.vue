/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">NOTES-APP</div>
          <ul class="navbar-list" v-if="auth">
            <li class="navbar-item">
              <router-link class="navbar-link" :to="linksAuth[0].url">{{
                linksAuth[0].title
              }}</router-link>
            </li>
            <li class="navbar-item">
              <router-link class="navbar-link" :to="linksAuth[1].url">{{
                linksAuth[1].title
              }}</router-link>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" @click="logout">
                Sign Out
              </a>
            </li>
          </ul>
          <ul class="navbar-list" v-else>
            <li class="navbar-item" v-if="clicklog">
              <router-link class="navbar-link" to="/note">Note</router-link>
            </li>
            <li class="navbar-item">
              <router-link class="navbar-link" :to="linksLogout[0].url">{{
                linksLogout[0].title
              }}</router-link>
            </li>
            <li
              class="navbar-item"
              v-if="linksLogout[1].flag"
              @click="user.show = !user.show"
            >
              <router-link class="navbar-link" :to="linksLogout[1].url">{{
                linksLogout[1].title
              }}</router-link>
            </li>
            <li class="navbar-item" v-if="!linksLogout[1].flag">
              <a class="navbar-link" @click="logout">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- this.$router.push(/authorization) -->
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      linksAuth: [
        {
          title: "Note",
          url: "/note",
          flag: true
        },
        {
          title: "About",
          url: "/"
        }
      ],
      linksLogout: [
        {
          title: "About",
          url: "/"
        },
        {
          title: "Sign In",
          url: "/authorization",
          flag: true
        }
      ],
      clicklog: false,
      auth: false,
      user: {
        login: "",
        password: "",
        show: false
      }
    };
  },
  provide() {
    return {
      auth: this.auth,
      user: this.user,
      logIn: this.logIn
    };
  },
  methods: {
    logIn() {
      if (this.user.login != "" && this.user.password != "") {
        localStorage.setItem("auth", "true");
        this.clicklog = true;
        this.linksLogout[1].flag = !this.linksLogout[1].flag;
      }
      this.user.login = "";
      this.user.password = "";
      this.user.show = false;
      this.$router.push("/note");
    },
    logout() {
      if (this.auth) {
        localStorage.removeItem("auth");
        this.$router.push("/authorization");
        this.linksAuth[0].flag = !this.linksAuth[0].flag;
        this.user.show = true;
      } else {
        localStorage.removeItem("auth");
        this.$router.push("/authorization");
        this.clicklog = false;
        this.linksLogout[1].flag = !this.linksLogout[1].flag;
        this.user.show = true;
      }
    }
  },
  created() {
    this.auth = localStorage.getItem("auth") === "true";
    this.linksAuth[0].flag = true;
  }
});
</script>

<style scoped>
.router-link-exact-active {
  color: #5247e7;
}
</style>
