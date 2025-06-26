import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      taskTypes: [],
      taskType: {
        id: "",
        name: "",
      },
      openAddFormBoolean: false,
    };
  },
  created() {
    this.loadAllTaskTypes();
  },
  methods: {
    loadAllTaskTypes() {
      axios
        .get("http://localhost:8080/taskType/getAlltaskTypes")
        .then((response) => {
          this.taskTypes = response.data;
        })
        .catch((error) => console.error(error));
    },

    sendTaskTypes() {
      axios
        .post("http://localhost:8080/taskType/addTaskType", this.taskType)
        .then((response) => {
          this.loadAllTaskTypes();
          this.taskType.id = "";
          this.taskType.name = "";
          this.openAddForm();
        })
        .catch((error) => console.error(error));
    },

    updateTaskType() {
      axios
        .put("http://localhost:8080/taskType/updateTaskType", this.taskType)
        .then((response) => {
          this.loadAllTaskTypes();
          this.taskType.id = "";
          this.taskType.name = "";
        })
        .catch((error) => console.error(error));
    },

    deleteTaskType(id) {
      axios
        .delete("http://localhost:8080/taskType/deleteTaskType/" + id)
        .then((response) => {
          this.loadAllTaskTypes();
          this.taskType.id = "";
          this.taskType.name = "";
        })
        .catch((error) => console.error(error));
    },

    selectTaskType(t) {
      this.taskType.id = t.id;
      this.taskType.name = t.name;
    },

    openAddForm() {
      this.openAddFormBoolean = !this.openAddFormBoolean;
    },
  },
}).mount("#app");
