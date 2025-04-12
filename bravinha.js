/**
 * Bravinha.js
 * @autor Daniels Hogans - 2023
 * @email daniel.santos.ap@gmail.com
 */
    /**
     * funçãp que pega os dados de uma url e retorna um json, e passa para uma função de callback
     * @param {string} url - URL da API 
     * @param {function} callback - Função de callback que recebe os dados
     * @returns {void}
     */
    function getDataCallback(url, callback){

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
    /** 
     * função para pegar os dados online em alguma api no formato json
     * @param {string} url - URL da API
     * @returns {json} - Retorna um json com os dados da API
     */
    async function getData(url)
    {
        return await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        }).catch(error => {
            console.error(error);
        });
    }
    /**
     * Função que pega os templates HTML e substitui os placeholders pelos dados
     * @param {html} templateName - Arquivo que será carregado
     * @param {json} data - Dados que serão substituidos no template
     * @returns {html} - Retorna o html com os dados substituidos
     */
    async function loadTemplate(templateName, data) {
        try {
          // carregar o template HTML
          const response = await fetch(`${templateName}.html`);
          // converte o html em text
          const templateHtml = await response.text();
          const htmlFinal = templateHtml.replace(
            /{{(\w+)}}/g, 
            (match, placeholder) => data[placeholder] || ''
          );
          
          return htmlFinal;
        } catch (erro) {
          console.error('Erro ao carregar o template:', erro);
          return '';
        }
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
        
        const dados = {
          nome: "Maria Oliveira",
          email: "maria@exemplo.com",
          idade: 28
        };
        loadTemplate('template', dados)
        .then(html => {
          document.getElementById('container2').innerHTML = html;
        });
        /**
         * Não colocar nada depois desta ultima instrução
         */
        document.addEventListener('DOMContentLoaded', exibirPosts);