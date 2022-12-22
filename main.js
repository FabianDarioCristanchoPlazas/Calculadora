const inputIngresoDatos = document.querySelector('.input-ingreso-datos');
const inputResultado = document.querySelector('.input-resultado');
const btnResultado = document.querySelector('.btn-resultado');
const btnInv = document.querySelector('.btn-operacion-inversa');
const btnGrados = document.querySelector('.btn-operacion-grados');
const btnNegacion = document.querySelector('.btn-operacion-negacion');
const btnParentesisAbierto = document.querySelector('.btn-parentesis-abierto');
const btnParentesisCerrado = document.querySelector('.btn-parentesis-cerrado');
const btnBorrarTodo = document.querySelector('.btn-borrar-todo');
const btnBorrarUnidad = document.querySelector('.btn-borrar-unidad');
const btnLogaritmoNatural = document.querySelector('.btn-operacion-logaritmo-natural');
const btnSin = document.querySelector('.btn-operacion-seno');
const btnPorcentaje = document.querySelector('.btn-operacion-porcentaje');
const btnNumeroSiete = document.querySelector('.btn-numero-siete');
const btnNumeroOcho = document.querySelector('.btn-numero-ocho');
const btnNumeroNueve = document.querySelector('.btn-numero-nueve');
const btnDivision = document.querySelector('.btn-operacion-division');
const btnLogaritmo = document.querySelector('.btn-operacion-logaritmo');
const btnCoseno = document.querySelector('.btn-operacion-coseno');
const btnRaiz = document.querySelector('.btn-operacion-raiz');
const btnNumeroCuatro = document.querySelector('.btn-numero-cuatro');
const btnNumeroCinco = document.querySelector('.btn-numero-cinco');
const btnNumeroSeis = document.querySelector('.btn-numero-seis');
const btnMultiplicacion = document.querySelector('.btn-operacion-multiplicacion');
const btnExponencial = document.querySelector('.btn-operacion-exponencial');
const btnTangente = document.querySelector('.btn-operacion-tangente');
const btnUnoSobreX = document.querySelector('.btn-operacion-UnoSobreX');
const btnNumeroUno = document.querySelector('.btn-numero-uno');
const btnNumeroDos = document.querySelector('.btn-numero-dos');
const btnNumeroTres = document.querySelector('.btn-numero-tres');
const btnResta = document.querySelector('.btn-operacion-resta');
const btnExp = document.querySelector('.btn-operacion-exp');
const btnPI = document.querySelector('.btn-operacion-pi');
const btnEpsilon = document.querySelector('.btn-operacion-epsilon');
const btnNumeroCero = document.querySelector('.btn-numero-cero');
const btnComa = document.querySelector('.btn-coma');
const btnSuma = document.querySelector('.btn-operacion-suma');


btnSuma.addEventListener('click', imprimirTipoOperacion);
btnResta.addEventListener('click', imprimirTipoOperacion);
btnMultiplicacion.addEventListener('click', imprimirTipoOperacion);
btnDivision.addEventListener('click', imprimirTipoOperacion);
btnResultado.addEventListener('click', calcularOperacion);
btnNumeroTres.addEventListener('click', imprimirTipoOperacion);
btnNumeroSeis.addEventListener('click', imprimirTipoOperacion);
btnNumeroNueve.addEventListener('click', imprimirTipoOperacion);
btnComa.addEventListener('click', imprimirTipoOperacion);
btnNumeroDos.addEventListener('click', imprimirTipoOperacion);
btnNumeroCinco.addEventListener('click', imprimirTipoOperacion);
btnNumeroOcho.addEventListener('click', imprimirTipoOperacion);
btnParentesisCerrado.addEventListener('click', imprimirTipoOperacion);
btnNumeroCero.addEventListener('click', imprimirTipoOperacion);
btnNumeroUno.addEventListener('click', imprimirTipoOperacion);
btnNumeroCuatro.addEventListener('click', imprimirTipoOperacion);
btnNumeroSiete.addEventListener('click', imprimirTipoOperacion);
btnParentesisAbierto.addEventListener('click', imprimirTipoOperacion);
btnEpsilon.addEventListener('click', imprimirTipoOperacion);
btnUnoSobreX.addEventListener('click', imprimirTipoOperacion);
btnRaiz.addEventListener('click', imprimirTipoOperacion);
btnPorcentaje.addEventListener('click', imprimirTipoOperacion);
btnNegacion.addEventListener('click', imprimirTipoOperacion);
btnPI.addEventListener('click', imprimirTipoOperacion);
btnTangente.addEventListener('click', imprimirTipoOperacion);
btnCoseno.addEventListener('click', imprimirTipoOperacion);
btnSin.addEventListener('click', imprimirTipoOperacion);
btnGrados.addEventListener('click', imprimirTipoOperacion);
btnExp.addEventListener('click', imprimirTipoOperacion);
btnExponencial.addEventListener('click', imprimirTipoOperacion);
btnLogaritmo.addEventListener('click', imprimirTipoOperacion);
btnLogaritmoNatural.addEventListener('click', imprimirTipoOperacion);






function imprimirTipoOperacion() {
    let inputIngresoDatos = document.querySelector('.input-ingreso-datos');
    let btnOprimido = this.innerHTML;
    let inputIngresoDatosValue = inputIngresoDatos.value;
    inputIngresoDatos.value = inputIngresoDatosValue + btnOprimido;

}

function calcularOperacion() {
    const primerValor = Number(inputIngresoDatos.value.match(/\d+/g)[0]);
    const segundoValor = Number(inputIngresoDatos.value.match(/\d+/g)[1]);
    const operador = inputIngresoDatos.value.match(/[\+\-\*\/]/g)[0];

    let resultadoOperacion;
    switch (operador) {
        case '+':
            resultadoOperacion = primerValor + segundoValor;
            break;
        case '-':
            resultadoOperacion = primerValor - segundoValor;
            break;
        case '*':
            resultadoOperacion = primerValor * segundoValor;
            break;
        case '/':
            resultadoOperacion = primerValor / segundoValor;
            break;
        case 'e':
            resultadoOperacion = Math.exp(primerValor);
            break;
        case '1/x':
            resultadoOperacion = (1 / primerValor);
            break;
        case 'raiz':
            resultadoOperacion = Math.SQRT2(primerValor);
            break;


    }
    inputResultado.value = resultadoOperacion;
}
































