import { createRequire } from 'module';
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
        throw new Error("el mail debe contener un '@'")
    }
    if(!to.includes('.com')){
        throw new Error("El mail debe contener '.com'")
    }
}

function validarSubject(subject){
    if(subject === ''){
        throw new Error("Se debe incluir un Asunto")
    }
}

function validarText(text){
    if(text === ''){
        throw new Error("No debe estar vacio el Texto")
    }
}

function validarHtml(html){
    if(html === ''){
        throw new Error("Debe contener información HTML")
    }
}

function validarFiles(files){
    if(!files.lenght<0){
        throw new Error("No se ajunta factura")
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
            console.log(e.stack)
            throw new Error("ERROR: " + e)
        }
    }
}

export default GMailer