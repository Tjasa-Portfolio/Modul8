import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            taskTypes: [],
            taskType : {
                id : '',
                name: '',
            },
        }
    },
    created(){
        this.loadAllTaskTypes();
    },
    methods:{
        loadAllTaskTypes(){
            axios.get("http://localhost:8080/taskType/getAlltaskTypes")
            .then((response) => {
                this.taskTypes = response.data;
            })
            .catch((error) => console.error(error));
        },

        sendTaskTypes(){
            axios.post("http://localhost:8080/taskType/addTaskType", this.taskType)
            .then((response) => {
                this.loadAllTaskTypes();
                this.dtaskType.id = '';
                this.dtaskType.name = '';
            })
            .catch((error) => console.error(error));
        },

        deleteTaskType(id){
            axios.delete("http://localhost:8080/taskType/deleteTaskType/"+id)
            .then((response) => {
                this.loadAllTaskTypes();
            })
            .catch((error) => console.error(error));
        },
        
        selectTaskType(t){
            this.taskType.id = t.id;
            this.taskType.name = t.name;
        }
    }
}).mount('#app')