import lib from '../src/library/libGeoloc.js'

// Set de datos de prueba
const negocios = [
    {
        nombre: 'getComercio1',
        apellido: 'allInOne',
        razonSocial:'SegundoSet',
        rubro: 'Deportes',
        latitud: -34.599181,
        longitud: -58.4991667,
        cuit: '2221'
    }, {
        nombre: 'getComercio2',
        apellido: 'allInTwo',
        razonSocial: 'InstitutoDeDanzas',
        rubro: 'Enseñanza',
        latitud: -34.5604496,
        longitud: -58.4608578,
        cuit: '2222'
    }, {
        nombre: 'getComercio3',
        apellido: 'allInThree',
        razonSocial: 'AMC2420',
        rubro: 'domicilio',
        latitud: -34.6103047,
        longitud: -58.4759652,
        cuit: '2223'
    }, {
        nombre: 'getComercio4',
        apellido: 'allInFour',
        razonSocial: 'AMC 4420',
        rubro: 'domicilio',
        latitud: -34.6242901,
        longitud: -58.4975828,
        cuit: '2224'
    }, {
        nombre: 'getComercio5',
        apellido: 'allInFive',
        razonSocial: 'AMC 3620',
        rubro: 'domicilio',
        latitud: -34.6183208,
        longitud: -58.4901888,
        cuit: '2225'
    }, {
        nombre: 'getComercio6',
        apellido: 'allInSix',
        razonSocial: 'AMC 3620',
        rubro: 'domicilio',
        latitud: 6.17136,
        longitud: -75.58825,
        cuit: '2225'
    }, {
        nombre: 'getComercio7',
        apellido: 'allInSeven',
        razonSocial: 'AMC 3620',
        rubro: 'domicilio',
        latitud: 6.33607,
        longitud: -75.56119, // 18.6km
        cuit: '2225'
    }
]
const user = {
    latitud: -34.6168483,
    longitud: -58.488353
}
const distance = 1.8
const negociosEsperados = [
    {
        nombre: 'getComercio3',
        apellido: 'allInThree',
        razonSocial: 'AMC2420',
        rubro: 'domicilio',
        latitud: -34.6103047,
        longitud: -58.4759652,
        cuit: '2223'
    },
    {
        nombre: 'getComercio4',
        apellido: 'allInFour',
        razonSocial: 'AMC 4420',
        rubro: 'domicilio',
        latitud: -34.6242901,
        longitud: -58.4975828,
        cuit: '2224'
    },
    { 
        nombre: 'getComercio5',
        apellido: 'allInFive',
        razonSocial: 'AMC 3620',
        rubro: 'domicilio',
        latitud: -34.6183208,
        longitud: -58.4901888,
        cuit: '2225'}
]


function testFilterByDistance() {
    let testFailed = false
    let msg = 'Test Get Filter By Distance: ok'
    let negociosFiltrados = []
    try {
        negociosFiltrados =  lib.filterByDistance(negocios,distance,user)
    } catch (error) {
        testFailed = true
        msg = `Get Filter By Distance: error - ${error.message}`
    } 
    return { testFailed, msg }
}

function testFilterByDistanceWithNegativeDistance(){
    let testFailed = false
    let msg = 'Test Get Filter By Distance With Negative Distance: ok'
    const DISTANCIA_NEGATIVA = -2.5

    try {
        lib.filterByDistance(comerceList,DISTANCIA_NEGATIVA,user)
        testFailed = true
        msg = `Get Filter By Distance: error - Valor de distancia negativo`
    } catch (error) {
        //testFailed = true
        //msg = `get by negative distance: error - ${error.message}`
    }
    return {testFailed, msg}
}

function testFilterByDistanceWithEmptyList() {
    let testFailed = false
    let msg = 'Test Get Filter By Distance With Empty List: ok'
    let LISTA_VACIA = []

    try {
        lib.filterByDistance(LISTA_VACIA,distance,user)
        testFailed = true
        msg = `Get Filter By Distance: error - Lista vacia`
    } catch (error) {
        // testFailed = true
        // msg = `Get Filter By Distance: error - ${error.message}`
    }
    return {testFailed, msg}
}

function testFilterByDistanceWithUsuarioVacio() {
    let testFailed = false
    let msg = 'Test Get filter By Distance With Empty User: ok'
    const USUARIO_VACIO = ''

    try {
        lib.filterByDistance(negocios,distance,USUARIO_VACIO)
        testFailed = true
        msg = `get filter by distance with empty user: error - se aceptó un usuario vacio`
    } catch (error) {                
            //msg = `get filter by distance with empty user: error - ${error.message}`            
    }
    return {testFailed, msg}
}

function testFilterByDistanceWithUsuarioNull() {
    let testFailed = false
    let msg = 'Test Get Filter By Distance With Null User: ok'
    let USUARIO_NULL = null

    try {
        lib.filterByDistance(negocios,distance,USUARIO_NULL)
        testFailed = true
        msg = `Get Filter By Distance With Null User: error - se aceptó un usuario nulo`
        testFailed = true
    } catch (error) {                
        //msg = `get filter by distance with null user: error - ${error.message}`            
    }
    return {testFailed, msg}
}

function testFilterByDistanceWithUsuarioUndefined() {
    let testFailed = false
    let msg = 'Test Get Filter By Distance With Undefined User: ok'
    let USUARIO_UNDEFINED

    try {
        lib.filterByDistance(negocios,distance,USUARIO_UNDEFINED)
        testFailed = true
        msg = `Get Filter By Distance With Undefined User: error - se aceptó un usuario indefinido`
        testFailed = true
    } catch (error) {                
        //msg = `get filter by distance with null user: error - ${error.message}`            
    }
    return {testFailed, msg}
}

console.table( testFilterByDistance())
console.table( testFilterByDistanceWithNegativeDistance())
console.table( testFilterByDistanceWithEmptyList())
console.table( (testFilterByDistanceWithUsuarioVacio()))
console.table( testFilterByDistanceWithUsuarioNull())
console.table( testFilterByDistanceWithUsuarioUndefined())


