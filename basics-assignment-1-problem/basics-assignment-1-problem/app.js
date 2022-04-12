const app = Vue.createApp({
  data() {
    return {
      name: "Ahmar Hashmi",
      age: 30,
      imageUrl: "https://picsum.photos/200",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
