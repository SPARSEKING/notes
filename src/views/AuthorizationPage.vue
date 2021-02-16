<template>
  <modals v-show="user.show" title="Sign In" @close="user.show = false">
    <template v-slot:body>
      <form @submit.prevent="">
        <label>Login</label>
        <input
          type="text"
          @input="e => (user.login = e.target.value)"
          :value="user.login"
        />
        <label>Password</label>
        <input
          type="password"
          @input="e => (user.password = e.target.value)"
          :value="user.password"
        />
        <button id="button-second" class="button-new-note" @click="logIn">
          Sign In
        </button>
      </form>
    </template>
  </modals>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import modals from "@/components/UI/Modal.vue";

export default defineComponent({
  name: "Authorization",
  components: {
    modals
  },
  inject: ["user", "logIn"]
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
