const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmedOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert.");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setConfirmedOutput() {
      this.confirmedOutput = this.output;
    },
  },
});

app.mount("#assignment");
