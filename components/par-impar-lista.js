// Escucha el evento y muestra la lista de números indicando si son pares o impares

class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    // Estructura HTML inicial del componente
    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        p {
          margin: 3px 0;
          font-family: monospace;
        }
      </style>
      <h2>Resultado</h2>
      <div id="resultado"></div>
    `;

    // Se escucha el evento personalizado emitido por el otro componente
    window.addEventListener('rango-seleccionado', (event) => {
      const { inicio, fin } = event.detail;
      this.mostrarLista(inicio, fin);
    });
  }

  