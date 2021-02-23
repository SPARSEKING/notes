<template>
  <modals v-if="edit">
    <template v-slot:body>
      <form @submit.prevent="">
        <label>Title</label>
        <input
          type="text"
          :value="notes[indexNote].title"
          @input="e => (notes[indexNote].title = e.target.value)"
        />
        <label>Description</label>
        <input
          type="text"
          :value="notes[indexNote].description"
          @input="e => (notes[indexNote].description = e.target.value)"
        />
        <button id="button-second" class="button-new-note" @click="close">
          Edit Note
        </button>
      </form>
    </template>
  </modals>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import modals from "@/components/UI/Modal.vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Edit",
  components: {
    modals
  },
  computed: {
    ...mapGetters(["notes", "indexNote", "edit"])
  },
  methods: {
    ...mapMutations(["close"])
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
