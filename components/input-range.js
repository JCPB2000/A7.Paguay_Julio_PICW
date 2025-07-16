// Captura dos valores numéricos: inicio y fin, y emite un evento personalizado

class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Estructura HTML del componente con campos de entrada y botón
    this.shadowRoot.innerHTML = `
      <style>
        label, input, button {
          margin: 5px;
          font-size: 16px;
        }
      </style>
      <label for="inicio">Inicio:</label>
      <input type="number" id="inicio" min="0">
      <label for="fin">Fin:</label>
      <input type="number" id="fin" min="0">
      <button id="enviar">Enviar</button>
    `;

    // Asignación de evento al botón
    this.shadowRoot.querySelector('#enviar')
      .addEventListener('click', () => this.enviarRango());
  }

  // Función que valida y emite el rango mediante un evento personalizado
  enviarRango() {
    const inicio = parseInt(this.shadowRoot.querySelector('#inicio').value);
    const fin = parseInt(this.shadowRoot.querySelector('#fin').value);

    // Validación de campos numéricos y lógica del rango
    if (isNaN(inicio) || isNaN(fin)) {
      alert("Por favor, ingrese valores numéricos.");
      return;
    }

    if (inicio > fin) {
      alert("El número inicial debe ser menor o igual al final.");
      return;
    }

    // Emisión del evento personalizado con los datos del rango
    const evento = new CustomEvent('rango-seleccionado', {
      detail: { inicio, fin },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(evento);
  }
}

// Registro del componente personalizado
customElements.define('input-range', InputRange);
