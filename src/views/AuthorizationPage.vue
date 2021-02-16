<template>
  <modals v-show="auth.show" title="Sign In" @close="auth.show = false">
    <template v-slot:body>
      <form @submit.prevent="submitForm">
        <label>Login</label>
        <input
          type="text"
          @input="e => (auth.login = e.target.value)"
          :value="auth.login"
        />
        <label>Password</label>
        <input
          type="password"
          @input="e => (auth.password = e.target.value)"
          :value="auth.password"
        />
        <button id="button-second" class="button-new-note" @click="showParam">
          Sign In
        </button>
      </form>
    </template>
  </modals>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import modals from "@/components/UI/Modal.vue";
import { Authorization } from "@/Authorization";
import { Auth } from "@/Auth";

export default defineComponent({
  name: "Authorization",
  components: {
    modals
  },
  data() {
    return {
      auth: {
        show: true,
        login: "",
        password: ""
      }
    } as Auth;
  },
  methods: {
    submitForm() {
      if (this.auth.login != " " && this.auth.password != " ") {
        localStorage.setItem("auth", "true");
      }
      this.auth.login = "";
      this.auth.password = "";
      this.auth.show = false;
    }
  }
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 400px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 10px;
}

label {
  padding-top: 20px;
}

#button-second {
  width: 200px;
}
</style>
