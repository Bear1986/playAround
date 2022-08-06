const vm = Vue.createApp({
  data() {
    return {
      firstName: "first name",
      middleName: "middle name",
      lastName: "last name",
      age: "30",
      url: "https://google.com",
      raw_url: "<a href=https://google.com>Google<a>",
      num: 0,
    };
  },

  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    increment() {
      this.num++;
    },
    decrement() {
      this.num--;
    },
    updateLastName(msg, event) {
      // event.preventDefault();

      console.log(msg);

      this.lastName = event.target.value;
    },
  },
  updateMiddleName(event) {
    this.middleName = event.target.value;
  },
  computed: {
    fullName() {
      // console.log("Full name computed");
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");
