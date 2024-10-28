<template>
  <div>
    <p v-if="isVisible">Teks Visible</p>
    <p v-else>Teks 2 Disembunyikan</p>

    <p v-show="isTerlihat">TEKS INI TERLIHAT</p>

    <img v-bind:src="imageSrc" alt="Image" />
    <!-- SAMA AJA KYK DIATAS
    <img :src="imageSrc" alt="Image" /> -->
    
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>

    <input v-model="message" placeholder="masukkan text" />
    <p>{{ message }}</p>

    <button v-on:click="increment">Click Me</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, // Awalnya visible
      isTerlihat: true,

      imageSrc:
        "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png", // Gambar placeholder

      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ], // Array dummy data

      message: "",

      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
};
</script>

<style>
img {
  width: 100px;
}
</style>
