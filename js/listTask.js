import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      tasks: [],
      statuses: ["waiting", "in progress", "finished"],
      priorities: ["Low", "medium", "high"],
      workers: [],
      taskTypes: [],
      task: {
        id: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
        priority: "",
        worker: { id: "" },
        taskType: { id: "" },
      },
      openAddFormBoolean: false,
    };
  },
  created() {
    this.loadAllTasks();
    this.loadAllWorkers();
    this.loadAllTaskTypes();
  },
  methods: {
    loadAllTasks() {
      axios
        .get("http://localhost:8080/task/getAllTasks")
        .then((response) => {
          this.tasks = response.data;
          console.log("response", response);
        })
        .catch((error) => console.error(error));
    },
    loadAllWorkers() {
      axios
        .get("http://localhost:8080/worker/getAllWorkers")
        .then((response) => {
          this.workers = response.data;
        })
        .catch((error) => console.error(error));
    },
    loadAllTaskTypes() {
      axios
        .get("http://localhost:8080/taskType/getAlltaskTypes")
        .then((response) => {
          this.taskTypes = response.data;
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
          this.task.worker.id = "";
          this.task.taskType.id = "";
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
          this.task.worker.id = "";
          this.task.taskType.id = "";
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
          this.task.worker.id = "";
          this.task.taskType.id = "";
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
      this.task.worker.id = t.worker.id;
      this.task.taskType.id = t.taskType.id;
    },

    openAddForm() {
      this.openAddFormBoolean = !this.openAddFormBoolean;
    },
  },
}).mount("#app");
