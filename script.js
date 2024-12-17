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
            }
        },
        apagarTarefa(index) {
        this.tarefas.splice(index, 1);
        },
        deletarTarefa(){
            this.tarefas = [];
        }
    }
    
}




Vue.createApp(adicionarTarefa).mount('#app');

