var app = new class Mensagem{
  constructor () {
    this.message = 'Ola mundo'
  }

  insertMessages() {
    let getElement = document.querySelector('#app');
    let newTextElement = document.createTextNode(this.message);
    getElement.appendChild(newTextElement);
  }
}

app.insertMessages();