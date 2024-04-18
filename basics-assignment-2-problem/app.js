const app = Vue.createApp({
  data() {
    return {
      input: "",
      inputEnter: "",
    };
  },
  methods: {
    sayHey() {
      alert("Hey!");
    },
    setInput(event) {
      this.input = event.target.value;
    },
    setInputEnter(event) {
      this.inputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
