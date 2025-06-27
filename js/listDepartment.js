import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
createApp({
  data() {
    return {
      departments: [],
      department: {
        id: "",
        name: "",
      },
      openAddFormBoolean: false,
      addedNewDepartmentBoolean: false,
      deletedNewDepartmentBoolean: false,
      updatedNewDepartmentBoolean: false,
    };
  },
  created() {
    this.loadAllDepartments();
  },
  methods: {
    loadAllDepartments() {
      axios
        .get("http://localhost:8080/department/getAllDepartments")
        .then((response) => {
          this.departments = response.data;
        })
        .catch((error) => console.error(error));
    },

    sendDepartment() {
      axios
        .post("http://localhost:8080/department/addDepartment", this.department)
        .then((response) => {
          this.loadAllDepartments();
          this.department.id = "";
          this.department.name = "";
          this.openAddForm();
          this.addedNewDepartmentBoolean = true;

          setTimeout(() => {
            this.addedNewDepartmentBoolean = false;
          }, 4000);
        })
        .catch((error) => console.error(error));
    },

    updateDepartment() {
      axios
        .put(
          "http://localhost:8080/department/updateDepartment",
          this.department
        )
        .then((response) => {
          this.loadAllDepartments();
          this.department.id = "";
          this.department.name = "";
          this.updatedNewDepartmentBoolean = true;

          setTimeout(() => {
            this.updatedNewDepartmentBoolean = false;
          }, 4000);
        })
        .catch((error) => console.error(error));
    },

    deleteDepartment(id) {
      axios
        .delete("http://localhost:8080/department/deleteDepartment/" + id)
        .then((response) => {
          this.loadAllDepartments();
          this.department.id = "";
          this.department.name = "";
          this.deletedNewDepartmentBoolean = true;

          setTimeout(() => {
            this.deletedNewDepartmentBoolean = false;
          }, 4000);
        })
        .catch((error) => console.error(error));
    },

    selectDepartment(d) {
      this.department.id = d.id;
      this.department.name = d.name;
    },

    openAddForm() {
      this.openAddFormBoolean = !this.openAddFormBoolean;
    },
  },
}).mount("#app");
