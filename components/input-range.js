class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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

    this.shadowRoot.querySelector('#enviar')
      .addEventListener('click', () => this.enviarRango());
  }

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