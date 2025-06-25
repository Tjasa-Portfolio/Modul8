import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      tasks: [],
      task: {
        id: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
        priority: "",
      },
      openAddFormBoolean: false,
    };
  },
  created() {
    this.loadAllTasks();
  },
  methods: {
    loadAllTasks() {
      axios
        .get("http://localhost:8080/task/getAllTasks")
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => console.error(error));
    },

    sendTask() {
      axios
        .post("http://localhost:8080/task/addTask", this.task)
        .then((response) => {
          this.loadAllTasks();
          this.task.id = "";
          this.task.name = "";
          this.task.description = "";
          this.task.startDate = "";
          this.task.endDate = "";
          this.task.status = "";
          this.task.priority = "";
          this.openAddForm();
        })
        .catch((error) => console.error(error));
    },

    updateTask() {
      axios
        .put("http://localhost:8080/task/updateTask", this.task)
        .then((response) => {
          this.loadAllTasks();
          this.task.id = "";
          this.task.name = "";
          this.task.description = "";
          this.task.startDate = "";
          this.task.endDate = "";
          this.task.status = "";
          this.task.priority = "";
        })
        .catch((error) => console.error(error));
    },

    deleteTask(id) {
      axios
        .delete("http://localhost:8080/task/deleteTask/" + id)
        .then((response) => {
          this.loadAllTasks();
          this.task.id = "";
          this.task.name = "";
          this.task.description = "";
          this.task.startDate = "";
          this.task.endDate = "";
          this.task.status = "";
          this.task.priority = "";
        })
        .catch((error) => console.error(error));
    },

    selectTask(t) {
      this.task.id = t.id;
      this.task.name = t.name;
      this.task.description = t.description;
      this.task.startDate = t.startDate;
      this.task.endDate = t.endDate;
      this.task.status = t.status;
      this.task.priority = t.priority;
    },

    openAddForm() {
      this.openAddFormBoolean = !this.openAddFormBoolean;
    },
  },
}).mount("#app");
