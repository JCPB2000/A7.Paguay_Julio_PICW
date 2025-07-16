// Componente que escucha el evento y muestra la lista de números indicando si son pares o impares

class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Crea Shadow DOM
  }

  connectedCallback() {
    // Contenido del componente con estilos y contenedor de resultados
    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          font-size: 20px;
          color: #ca6f1e;
          text-align: center;
          margin-bottom: 10px;
        }

        p {
          background-color: #d6eaf8;
          padding: 6px 10px;
          margin: 4px 0;
          border-radius: 6px;
          font-family: monospace;
          width: fit-content;
        }
      </style>

      <h2>Resultado</h2>
      <div id="resultado"></div>
    `;

    // Escucha el evento personalizado enviado desde input-range
    window.addEventListener("rango-seleccionado", (event) => {
      const { inicio, fin } = event.detail;
      this.mostrarLista(inicio, fin);
    });
  }

  // Genera y muestra la lista de números con "Par" o "Impar"
  mostrarLista(inicio, fin) {
    const contenedor = this.shadowRoot.querySelector("#resultado");
    contenedor.innerHTML = ""; // Limpia contenido anterior

    for (let i = inicio; i <= fin; i++) {
      const parrafo = document.createElement("p");
      parrafo.textContent = `${i} - ${i % 2 === 0 ? "Par" : "Impar"}`;
      contenedor.appendChild(parrafo);
    }
  }
}

// Registro del componente personalizado
customElements.define("par-impar-lista", ParImparLista);


// https://github.com/JCPB2000/A7.Paguay_Julio_PICW.git