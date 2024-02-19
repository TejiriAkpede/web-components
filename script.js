class MyTaskList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
         
        `;
      }
    }
 
customElements.define('my-task-list', MyTaskList);