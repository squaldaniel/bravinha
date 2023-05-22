/**
 * Bravinha.js
 * @autor Daniels Hogans
 */
function ObserverBind(
    idElementObserved, 
    idElementStatus, 
    textMessage=''){
    const { fromEvent } = rxjs;
    const input = document.getElementById(idElementObserved);
    const statusElement = document.getElementById(idElementStatus);
    const inputObservable = fromEvent(input, 'input');
    inputObservable.subscribe(() => {
        statusElement.textContent = textMessage + input.value ;
        });
}
function lazySpa(){

}
const { Observable } = rxjs;
const observable = new Observable((subscriber) => {
subscriber.next('reduzir tempo');
subscriber.next('ferramentas e framework');
subscriber.next('escala');
setTimeout(() => {
    subscriber.next('carregamento dinâmico');
    subscriber.complete();
}, 3000);
});

console.log('Porquê criar um framework full?');
observable.subscribe({
next(x) {
    console.log('precisamos: ' + x);
},
error(err) {
    console.error('something wrong occurred: ' + err);
},
complete() {
    console.log('Finalizado');
},
});
console.log('Por isso estamos desenvolvendo o futuro');
function alertdata(data){
    alert(data[0].cep);
}
function getDataUrl(url, callback){
    fetch(url).then(response => {
        if (!response.ok) {
        throw new Error('Erro na requisição');
        }
        return response.json();
        }).then(data => {
            callback(data);
        }).catch(error => {
            console.error(error);
        });
};