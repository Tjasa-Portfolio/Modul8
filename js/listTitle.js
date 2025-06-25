import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      titles: [],
      title: {
        id: "",
        name: "",
      },
      openAddFormBoolean: false,
    };
  },
  created() {
    this.loadAllTitles();
  },
  methods: {
    loadAllTitles() {
      axios
        .get("http://localhost:8080/title/getAllTitles")
        .then((response) => {
          this.titles = response.data;
        })
        .catch((error) => console.error(error));
    },

    sendTitle() {
      axios
        .post("http://localhost:8080/title/addTitle", this.title)
        .then((response) => {
          this.loadAllTitles();
          this.title.id = "";
          this.title.name = "";
          this.openAddForm();
        })
        .catch((error) => console.error(error));
    },

    updateTitle() {
      axios
        .put("http://localhost:8080/title/updateTitle", this.title)
        .then((response) => {
          this.loadAllTitles();
        })
        .catch((error) => console.error(error));
    },

    deleteTitle(id) {
      axios
        .delete("http://localhost:8080/title/deleteTitle/" + id)
        .then((response) => {
          this.loadAllTitles();
          this.title.id = "";
          this.title.name = "";
        })
        .catch((error) => console.error(error));
    },

    selectTitle(t) {
      this.title.id = t.id;
      this.title.name = t.name;
    },
    openAddForm() {
      this.openAddFormBoolean = !this.openAddFormBoolean;
    },
  },
}).mount("#app");
