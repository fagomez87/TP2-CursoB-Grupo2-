import { createRequire } from 'module';
import Error from '../services/error.js'
let res = createRequire(import.meta.url);

import send from 'gmail-send';

const defaultCredenciales = {
    user: 'ortpruebatp2@gmail.com',
    pass: 'Prueba1812'
}


function validar({to,subject,text,html,files}){
    validarTo(to)
    validarSubject(subject)
    validarText(text)
    validarHtml(html)
    validarFiles(files)
}

function validarTo(to){
    if(!to.includes('@')){
        throw Error(400, "El mail debe contener un '@'",2045)
    }
}

function validarSubject(subject){
    if(subject === undefined || subject === ''){
        throw Error(400, "Se debe incluir un Asunto",2046)
    }
}

function validarText(text){
    if(text === undefined || text === ''){
        throw Error(400, "No debe estar vacio el Texto",2047)
    }
}

function validarHtml(html){
    if(html === undefined || html === ''){
        throw Error(400, "Debe contener información HTML",2048)
    }
}

function validarFiles(files){
    if(!files.lenght<0){
        throw Error(404, "No se adjunta factura")
    }
}

class GMailer {
    constructor(credenciales = defaultCredenciales){
        this.credenciales = credenciales
    }

    async sendMail(content) {        
       validar(content)        
        try {
            res = await send(this.credenciales)(content);
        } catch (e){
            throw Error("ERROR: " + e)
        }
    }
}

export default GMailer