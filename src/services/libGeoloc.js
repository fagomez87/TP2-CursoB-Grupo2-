function validarUsuario(user) {
    if(user == null || user == undefined || user == '') {
        throw { message: 'Usuario invalido' }
    }
}

function asegurarDistanciaValida(distance) {
    if (distance < 0) {
        throw new Error('Valor de distancia negativa') 
    }
}

function asegurarContenidoLista(lista) {
    if ( ! lista || lista.length == 0)  {
        throw new Error('Lista vacia')
    }
}

function validarSonIguales(arrA,arrB) { 
    let sonIguales = false

    if(arrA.length == arrB.length) {
        let obj1 = JSON.stringify(arrA)
        let obj2 = JSON.stringify(arrB)
        sonIguales = obj1 === obj2      
    }
    return sonIguales
}

/**
 * Método que retorna el listado con los objetos filtrados que cumplen 
 * la condición 
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
  * Método que calcula con la formula de HANIVIER la distancia entre dos 
  * puntos, mediante sus coordenadas geográficas
  * @param {*} point1 primer punto de referencia
  * @param {*} point2 segundo punto para hacer cálculo de distancia
  */
 function calcularDistancia(point1, point2) {
    let radianes = Math.PI/180
    let dlat = point2['latitud'] - point1['latitud']
    let dlong = point2['longitud'] - point1['longitud']
    let radioT = 6372.795477598
    let a = (Math.sin(radianes*dlat/2))**2 + Math.cos(radianes*point1['latitud'])*Math.cos(radianes*point2['latitud'])*(Math.sin(radianes*dlong/2))**2
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
