// Variables
let nombreUsuario = prompt ("Este es el asistente virtual de BanaNet, ingresa tu nombre para que podamos ayudarte");

//Funciones
function descuento (respuesta){return respuesta * 0.7}

function precioPlanUsuario (velocidad, telefonia, television){
    if (telefonia == " con telefonia"){telefonia=200}else{telefonia=0}
    if (television == " y television por cable"){television=500}else{televiq=0}
    return (velocidad * 4) + telefonia + television;
}

//objetos
class planBanaNet{
    constructor(velocidad, telefonia, television){
        this.velocidad = velocidad;
        this.telefonia = telefonia;
        this.television = television;
    }
}

//Arrays
let menuSi = [
"Si queres conocer el monto y fecha de vencimiento de tu proxima factura, ingresa 1.",
"Si queres hacer un reclamo, ingresa 2.",
"Si queres dar de baja el servicio, ingresa 3."
]

let menuNo = [
"Para conocer nuestros planes de internet disponibles, ingresa 1.",
"Si queres q te llame un asesor comercial, ingresa 2."
]

// Asistente virtual
function asistenteVirtual () {
let cliente = prompt ("hola " + nombreUsuario + ", actualmente sos cliente de BanaNet?");
    if (cliente == "si"){
        let respuestaCliente = prompt (menuSi.join("-------")); //hay q ver como ponerlo en forma de lista o meter un enter, lo quise hacer con un for, pero me hacia un promp para cada opcion  
        switch (respuestaCliente){
            case "1": prompt("Ingresa el numero de DNI del titular del servcio, sin puntos ni espacios");
                      alert ("el monto de tu facura es de $46.000 y vence el 27 de agosto de 2023");
            break;
            case "2": alert("Estamos registrando problemas en tu zona, nuestros equipos estan trabajando para solucionarlo a la brevedad.")
            break;
            case "3": let respuestaDescuento = parseInt (prompt ("Nos gustaria ofrecerte un descuento del 30% por 6 meses para que te quedes con nosotros. Ingresa el monto de tu ultima factura"));
                      let bajaServicio = prompt("Durante los próximos 6 meses pagarias: " + descuento(respuestaDescuento) + ". Queres continuar con la baja del servicio?");
                      if (bajaServicio == "si"){
                        alert("Lamentamos que te vayas. Un tecnico pasara a buscar los equipos a la brevedad.");
                      }else{
                        alert("Gracias por seguir confiando en BanaNet.");
                      }
            break;
            default: alert ("La opcion ingresada es incorrecta. Gracias por comunicarte con BanaNet");
            break;
        }
    }
    else if (cliente == "no"){
        let respuestaClienteNo = prompt (menuNo.join("-------"));
        switch (respuestaClienteNo){
            case "1": let velocidadUsuario = parseInt (prompt("En BanaNet te ofrecemos un plan a tu medida. Ingresa la cantidad de megas que te gustaria tener de velocidad de internet (un numero entre 10 y 1000)."));
                    let telefoniaUsuario = prompt ("¿Te gustaría contar con telefonia?");
                        if (telefoniaUsuario == "si"){
                            telefoniaUsuario = " con telefonia";
                        }else{
                            telefoniaUsuario = "";
                        }
                    let televisionUsuario = prompt ("¿Te gustaría contar con el servicio de television por cable?");
                        if (televisionUsuario == "si"){
                            televisionUsuario = " y television por cable";
                        }else{
                            televisionUsuario = "";
                        }
                    let planBanaNetUsuario = new planBanaNet (velocidadUsuario, telefoniaUsuario, televisionUsuario);
                    alert ("Seleccionaste el plan BanaNet: " + planBanaNetUsuario.velocidad + "MB" + planBanaNetUsuario.telefonia + planBanaNetUsuario.television + ". Ingresa aceptar para calcular el precio.");
                    prompt ("el precio del plan seleccionado es: $" + precioPlanUsuario(velocidadUsuario, telefoniaUsuario, televisionUsuario) + ". Si estas de acuerdo, dejanos tu numero de contacto, y te llamara un represetante.");
                    alert ("Gracias por elegirnos!");

            break;
            case "2": prompt ("ingresa tu numero de contacto, y en breve un asesor se comunicara con vos.");
                      alert ("Gracias por elegirnos!");
            break;
            default: alert ("La opcion ingresada es incorrecta. Gracias por comunicarte con BanaNet");
            break;
        }
    }
    else{
        alert("No se registro una respuesta valida.");
    }
};

asistenteVirtual();