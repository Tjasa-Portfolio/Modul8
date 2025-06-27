import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      tasks: [],
      //tasksByWorker: [],
      tasksByStatus: [],
      tasksByPriority: [],
      statuses: ["waiting", "in progress", "finished"],
      priorities: ["low", "medium", "high"],
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
    };
  },
  created() {
    this.loadAllTasks();
    this.loadAllWorkers();
    this.loadAllTaskTypes();
    this.getTasksByPriority();
    this.getTasksByStatus();
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
    getTasksByStatus() {
      axios
        .get("http://localhost:8080/task/byStatus/finished")
        .then((response) => {
          this.tasksByStatus = response.data;
          console.log("response status", response);
        })
        .catch((error) => console.error(error));
    },
    getTasksByPriority() {
      axios
        .get("http://localhost:8080/task/byPriority/high")
        .then((response) => {
          this.tasksByPriority = response.data;
          console.log("response priority", response);
        })
        .catch((error) => console.error(error));
    },
  },
}).mount("#app");
