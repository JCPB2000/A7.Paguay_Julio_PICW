// Componente para capturar el rango e iniciar el evento

class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Crea Shadow DOM
  }

  connectedCallback() {
    // Estructura HTML con campos numéricos y botón
    this.shadowRoot.innerHTML = `
      <style>
        label {
          margin-right: 8px;
          font-weight: bold;
          color: #884ea0;
        }

        input {
          padding: 6px;
          border-radius: 6px;
          border: 1px solid #bb8fce;
          margin-right: 10px;
        }

        button {
          padding: 6px 14px;
          background-color: #5dade2;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background-color: #3498db;
        }
      </style>

      <label for="inicio">Inicio:</label>
      <input type="number" id="inicio" min="0">
      <label for="fin">Fin:</label>
      <input type="number" id="fin" min="0">
      <button id="enviar">Enviar</button>
    `;

    // Acción del botón: obtiene valores y llama a enviarRango()
    this.shadowRoot.querySelector('#enviar')
      .addEventListener('click', () => this.enviarRango());
  }

  // Valida los números y lanza un evento con el rango
  enviarRango() {
    const inicio = parseInt(this.shadowRoot.querySelector('#inicio').value);
    const fin = parseInt(this.shadowRoot.querySelector('#fin').value);

    // Validación de campos
    if (isNaN(inicio) || isNaN(fin)) {
      alert("Por favor, ingrese valores numéricos.");
      return;
    }

    if (inicio > fin) {
      alert("El número inicial debe ser menor o igual al final.");
      return;
    }

    // Enviar evento personalizado con los datos del rango
    const evento = new CustomEvent('rango-seleccionado', {
      detail: { inicio, fin },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(evento);
  }
}

// Registro del componente
customElements.define('input-range', InputRange);
