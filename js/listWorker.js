import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            workers: [],
            worker : {
                id : '',
                name: '',
                surname:'',
                birthday:'',
                EMSO:''
            },
        }
    },
    created(){
        this.loadAllWorkers();
    },
    methods:{
        loadAllWorkers(){
            axios.get("http://localhost:8080/worker/getAllWorkers")
            .then((response) => {
                this.workers = response.data;
            })
            .catch((error) => console.error(error));
        },

        sendWorker(){
            axios.post("http://localhost:8080/worker/addWorker", this.worker)
            .then((response) => {
                this.loadAllWorkers();
                this.worker.id = '';
                this.worker.name = '';
                this.worker.surname = '';
                this.worker.birthday = '';
                this.worker.EMSO = '';
            })
            .catch((error) => console.error(error));
        },

        deleteWorker(id){
            axios.delete("http://localhost:8080/worker/deleteWorker/"+id)
            .then((response) => {
                this.loadAllWorkers();
            })
            .catch((error) => console.error(error));
        },
        
        selectWorker(w){
            this.worker.id = w.id;
            this.worker.name = w.name;
            this.worker.surname = w.surname;
            this.worker.birthday = w.birthday;
            this.worker.EMSO = w.EMSO;
        }
    }
}).mount('#app')