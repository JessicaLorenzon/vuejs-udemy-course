const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskValue: "",
      listVisibility: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.listVisibility ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
    },
    toggleVisibility() {
      this.listVisibility = !this.listVisibility;
    },
  },
});

app.mount("#assignment");
