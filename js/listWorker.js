import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      workers: [],
      departments: [],
      titles: [],
      worker: {
        id: "",
        name: "",
        surname: "",
        birthday: "",
        emso: "",
        department: { id: null, name: "" },
        title: { id: null, name: "" },
      },
      openAddFormBoolean: false,
      addedNewWorkerBoolean: false,
      deletedNewWorkerBoolean: false,
      updatedNewWorkerBoolean: false,
    };
  },
  created() {
    this.loadAllWorkers();
    this.loadAllDepartments();
    this.loadAllTitles();
  },
  methods: {
    loadAllWorkers() {
      axios
        .get("http://localhost:8080/worker/getAllWorkers")
        .then((response) => {
          this.workers = response.data;

          console.log("response", response);
        })
        .catch((error) => console.error(error));
    },
    loadAllDepartments() {
      axios
        .get("http://localhost:8080/department/getAllDepartments")
        .then((response) => {
          this.departments = response.data;
        })
        .catch((error) => console.error(error));
    },
    loadAllTitles() {
      axios
        .get("http://localhost:8080/title/getAllTitles")
        .then((response) => {
          this.titles = response.data;
        })
        .catch((error) => console.error(error));
    },
    sendWorker() {
      axios
        .post("http://localhost:8080/worker/addWorker", this.worker)
        .then((response) => {
          this.loadAllWorkers();
          this.worker.id = "";
          this.worker.name = "";
          this.worker.surname = "";
          this.worker.birthday = "";
          this.worker.emso = "";
          this.worker.department.id = "";
          this.worker.title.id = "";
          this.openAddForm();
          this.addedNewWorkerBoolean = true;

          setTimeout(() => {
            this.addedNewWorkerBoolean = false;
          }, 4000);
        })
        .catch((error) => console.error(error));
    },

    updateWorker() {
      axios
        .put("http://localhost:8080/worker/updateWorker", this.worker)
        .then((response) => {
          this.loadAllWorkers();
          this.worker.id = "";
          this.worker.name = "";
          this.worker.surname = "";
          this.worker.birthday = "";
          this.worker.emso = "";
          this.worker.department.id = "";
          this.worker.title.id = "";
          this.updatedNewWorkerBoolean = true;

          setTimeout(() => {
            this.updatedNewWorkerBoolean = false;
          }, 4000);
        })
        .catch((error) => console.error(error));
    },

    deleteWorker(id) {
      axios
        .delete("http://localhost:8080/worker/deleteWorker/" + id)
        .then((response) => {
          this.loadAllWorkers();
          this.worker.id = "";
          this.worker.name = "";
          this.worker.surname = "";
          this.worker.birthday = "";
          this.worker.emso = "";
          this.worker.department.id = "";
          this.worker.title.id = "";
          this.deletedNewWorkerBoolean = true;

          setTimeout(() => {
            this.deletedNewWorkerBoolean = false;
          }, 4000);
        })
        .catch((error) => console.error(error));
    },

    selectWorker(w) {
      this.worker.id = w.id;
      this.worker.name = w.name;
      this.worker.surname = w.surname;
      this.worker.birthday = w.birthday;
      this.worker.emso = w.emso;
      this.worker.department.id = w.department.id;
      this.worker.title.id = w.title.id;
    },

    openAddForm() {
      this.openAddFormBoolean = !this.openAddFormBoolean;
    },
  },
}).mount("#app");
