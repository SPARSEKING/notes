/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">NOTES-APP</div>
          <ul class="navbar-list" v-if="auth">
            <li class="navbar-item" v-for="link in linksAuth" :key="link.title">
              <router-link class="navbar-link" :to="link.url">{{
                link.title
              }}</router-link>
            </li>
          </ul>
          <ul class="navbar-list" v-else>
            <li class="navbar-item" v-for="link in linksLogout" :key="link.title">
              <router-link class="navbar-link" :to="link.url">{{
                link.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
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
          url: "/note"
        },
        {
          title: "About",
          url: "/"
        },
        {
          title: "Sign Out",
          url: "/authorization"
        }
      ],
      linksLogout: [
        {
          title: "About",
          url: "/"
        },
        {
          title: "Sign In",
          url: "/authorization"
        },
      ],
      auth: false,
      user: {
        login: "",
        password: "",
        show: true
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
      }
      this.user.login = "";
      this.user.password = "";
      this.user.show = false;
    }
  },
  created() {
    this.auth = (localStorage.getItem("auth") === "true");
  }
});
</script>

<style scoped>
.router-link-exact-active {
  color: #5247e7;
}
</style>
