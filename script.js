const maisa = document.querySelector('img'); // DOCUMENTO PARA PERCORRER A IMAGEM
const lista = document.querySelector('ul'); // DOCUMENTO PARA PERCORRER A LISTA
const roleta = document.querySelector('main img');


//ESSA FUNÇÃO DIZ QUE SE TIVER ITENS NA CLASSE ATIVA ELE VAI REMOVER OS ITENS (VAI TIRAR DA TELA), SE NÃO TIVER VAI ADICIONAR ITENS(VAI MOSTRAR OS ITENS ESCONDIDOS)
function AbrirMenu (){
//    if(lista.classList.contains('ativa')){
//        lista.classList.remove('ativa');
//    }
//    else{
//        lista.classList.add('ativa')
//    }
lista.classList.toggle('ativa') // 
}

function RodaARoda(){
    roleta.classList.toggle('roda-jequiti');

}

maisa.onclick = AbrirMenu;
roleta.onclick = RodaARoda;