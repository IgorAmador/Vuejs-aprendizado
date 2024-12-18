var tarefas = []

const adicionarTarefa = {
    data() {
        return {
            tarefas: window.tarefas,
            novaTarefa: {
                nome: '',
                active: false,
            }
        }
    },
    methods: {
        adicionarTarefa() {
            if (this.novaTarefa.nome) {
            this.tarefas.push({ ...this.novaTarefa});
            this.novaTarefa.nome = null;
            localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
            }   
        },
        apagarTarefa(index) {
        this.tarefas.splice(index, 1);
        },
        deletarTarefa(){
            this.tarefas = [];
        }
    },
    created() {
         this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated() {
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
    }
}




Vue.createApp(adicionarTarefa).mount('#app');

