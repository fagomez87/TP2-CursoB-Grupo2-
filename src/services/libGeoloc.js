function validarUsuario(user) {
    if(user == null || user == undefined || user == '') {
        throw { message: 'Usuario invalido' }
    }
}

function asegurarDistanciaValida(distance) {
    if (distance < 0) {
        throw new Error('Valor de distancia negativa')  // revisar si es correcto
    }
}

function asegurarContenidoLista(lista) {
    //if (!lista[0])
    if ( ! lista || lista.length == 0)  {
        throw new Error('Lista vacia')
    }
}

/************************** TO DO **************************/
function validarSonIguales(arrA,arrB) { 
    let sonIguales = false

    if( (arrA.length == arrB.length) ) {
        // to do*********************************
        sonIguales = true
    }
    return sonIguales
}
/************************** TO DO **************************/


/**
 * Método que nos muestra por consola el listado con los objetos filtrados 
 * de la lista que recibe
 * @param {*} comerceList Es la lista a filtrar
 * @param {*} distance Distancia máxima para referenciar el filtrado
 * @param {*} coords Ubicación de referencia para comparar la distancia
 */
function filterByDistance(comerceList,distance,coords) {
    let dist
    let filtrados = []

    validarUsuario(coords)
    asegurarDistanciaValida(distance)
    asegurarContenidoLista(comerceList)

    for (const obj of comerceList) {
        dist = calcularDistancia( (obj['latitud']), (obj['longitud']), (coords['latitud']), (coords['longitud']))    
        if(dist <= distance) {
            filtrados.push(obj) 
        }
    }
    return filtrados
}

 /**
  * Calcula con la formula de HANIVIER la distancia entre dos 
  * puntos mediante sus coordenadas geográficas
  * @param {*} lat1 Latitud del primer punto
  * @param {*} long1 Longitud del primer punto
  * @param {*} lat2 Latitud del segundo punto
  * @param {*} long2 Longitud del segundo punto
  */
 function calcularDistancia(lat1,long1,lat2,long2) {
    let radianes = Math.PI/180
    let dlat = lat2 - lat1
    let dlong = long2 - long1
    let radioT = 6372.795477598
    let a = (Math.sin(radianes*dlat/2))**2 + Math.cos(radianes*lat1)*Math.cos(radianes*lat2)*(Math.sin(radianes*dlong/2))**2
    let distanc = 2 * radioT * Math.asin(Math.sqrt(a))
    return distanc     
}

export default {
    asegurarDistanciaValida,
    asegurarContenidoLista,
    calcularDistancia,
    filterByDistance,
    validarSonIguales,
    validarUsuario
}