const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      if (value != 0) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
  methods: {
    addFive(num) {
      this.counter = this.counter + num;
    },
    addOne() {
      this.counter++;
    },
  },
  computed: {
    tip() {
      return this.counter <= 37 ? "Not there yet" : "Too much!";
    },
  },
});

app.mount("#assignment");
