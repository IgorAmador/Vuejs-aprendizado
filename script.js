var jogos = [
    {
    "photo": "Demons_Souls_capa.png",
    "name": "Demons souls",
    "price": "9.99",
    "activite": false,
    "quantity": 1
},
{
    "photo": "Dark_Souls_1_capa.png",
    "name": "Dark Souls",
    "price": "100.00",
    "activite": false,
    "quantity": 1
},
{
    "photo": "Dark_Souls_3_capa.png",
    "name": "Dark souls 3",
    "price": "100.00",
    "activite": false,
    "quantity": 1
},
{
    "photo": "Bloodborne_capa.png",
    "name": "Bloodborne",
    "price": "50.00",
    "activite": false,
    "quantity": 1
},
{
    "photo": "Sekiro_capa.jpg",
    "name": "Sekiro",
    "price": "50.00",
    "activite": false,
    "quantity": 1
},
{
    "photo": "Elden_Ring_capa.jpg",
    "name": "Elden Ring",
    "price": "1000.00",
    "activite": false,
    "quantity": 1
},
];

var comentario =  [];

const SelecioneJogo = {
    data() {
        return {
            jogos: window.jogos,
            comentario: window.comentario,
            novoComentario: {
                nome: null,
                comenta: null,
            }
        }
    },
    methods: {
        total: function() {
            var total = 0;
            
            this.jogos.forEach(function(item){
                if (item.activite) {
                    total += item.price * item.quantity;
                }
            });
            
            return total.toFixed(2);
        },
   adicionarComentario() {
    if (this.novoComentario.nome && this.novoComentario.comenta) {
        this.comentario.push({ ...this.novoComentario});
            this.novoComentario.nome = null;
            this.novoComentario.comenta = null;
    } else {
        alert("Os campos não foram preenchidos corretamente");
    }
   },
},
};



Vue.createApp(SelecioneJogo).mount('#app');