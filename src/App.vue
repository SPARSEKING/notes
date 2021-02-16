<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">NOTES-APP</div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
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
      links: [
        {
          title: "About",
          url: "/"
        },
        {
          title: "Sign In",
          url: "/authorization"
        }
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
      logIn: this.logIn,
      logOut: this.logOut
    };
  },
  methods: {
    logIn() {
      if (this.user.login != "" && this.user.password != "") {
        localStorage.setItem("auth", "true");
        this.links.unshift({
          title: "Note",
          url: "/note"
        });
        this.links[1].title = "Log Out";
      }
      this.user.login = "";
      this.user.password = "";
      this.user.show = false;
    },
    logOut() {
      if (this.user.login === "" && this.user.password === "") {
        localStorage.removeItem("auth");
        delete this.links[0];
      }
    }
  }
});
</script>

<style scoped>
.router-link-exact-active {
  color: #5247e7;
}
</style>
