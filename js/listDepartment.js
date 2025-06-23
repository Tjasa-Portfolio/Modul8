import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            departments: [],
            department : {
                id : '',
                name: '',
            },
        }
    },
    created(){
        this.loadAllDepartments();
    },
    methods:{
        loadAllDepartments(){
            axios.get("http://localhost:8080/department/getAllDepartments")
            .then((response) => {
                this.departments = response.data;
            })
            .catch((error) => console.error(error));
        },

        sendDepartment(){
            axios.post("http://localhost:8080/department/addDepartment", this.department)
            .then((response) => {
                this.loadAllDepartments();
                this.department.id = '';
                this.department.name = '';
            })
            .catch((error) => console.error(error));
        },

        deleteDepartment(id){
            axios.delete("http://localhost:8080/department/deleteDepartment/"+id)
            .then((response) => {
                this.loadAllDepartments();
            })
            .catch((error) => console.error(error));
        },
        
        selectDepartment(d){
            this.department.id = d.id;
            this.department.name = d.name;
        }
    }
}).mount('#app')