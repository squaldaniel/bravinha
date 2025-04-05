/**
 * Bravinha.js
 * @autor Daniels Hogans - 2023
 * @email daniel.santos.ap@gmail.com
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
    let url = 'https://jsonplaceholder.typicode.com/posts';
    /** 
     * 
    */
    async function getData(url)
    {
        return await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
    } 
    async function exibirPosts() {
            const posts = await getData(url);
            const container = document.getElementById('container');
            
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><strong>ID:</strong> ${post.id}</p>
                    <p><strong>User ID:</strong> ${post.userId}</p>
                    <p>${post.body}</p>
                `;
                container.appendChild(postDiv);
            });
        }
        // Executar quando o documento carregar
        // document.addEventListener('DOMContentLoaded', exibirPosts);
        async function carregarTemplate(templateName, dados) {
          try {
            const response = await fetch(`${templateName}.html`); 
            const templateHtml = await response.text();

            const htmlFinal = templateHtml.replace(
              /{{(\w+)}}/g, 
              (match, placeholder) => dados[placeholder] || ''
            );
            
            return htmlFinal;
          } catch (erro) {
            console.error('Erro ao carregar o template:', erro);
            return '';
          }
        }
        const dados = {
          nome: "Maria Oliveira",
          email: "maria@exemplo.com",
          idade: 28
        };
        carregarTemplate('template', dados)
        .then(html => {
          document.getElementById('container2').innerHTML = html;
        });
