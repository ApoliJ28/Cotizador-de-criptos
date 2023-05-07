const cotizador = new API('aeadb8e4fc6ec1cc23f8e9eded6b0cac6f4e316268a3aead0b79c469c8d4d6cb');
const ui = new Interfaz();

// leer el formulario

const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
     
     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
          // arrojar una alerta de error
          ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
     } else {
          // todo bien, consultar la api
          cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada) 
               .then(data => {
                    ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada, criptoMonedaSeleccionada );
               })
     }


})