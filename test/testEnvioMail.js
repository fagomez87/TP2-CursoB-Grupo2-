import GMailer from '../src/mail/GMailer.js'
//import path from 'path'

async function testOk(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = './Factura.pdf'

    const datosMails = {
        to: 'nadiaalebri@gmail.com',
        subject: 'PruebaConCambios1',
        text: 'Envío correcto de mail',
        html: "<h1>Factura</h1><br>Saludos cordiales<br>", //ESTE ES EL BODY DEL MAIL. SIN ESTO MUESTRA EL TEXT
        files: [archivoAdjunto],
    }

    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
    return {failed, description}

}

async function testErrorMail(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = 'test/static/archivoPDF.pdf'

    const datosMails = {
        to: 'nadiaalebri.com.ar',
        subject: 'PruebaConCambios1',
        text: 'Prueba de error en el mail sin @',
        html: "<h1>Factura</h1><br>Saludos cordiales<br>",
        files: [archivoAdjunto]
    }


    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
   return {failed, description}
}

async function testErrorMailSinCom(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = 'test/static/archivoPDF.pdf'

    const datosMails = {
        to: 'nadiaalebri@gmail',
        subject: 'PruebaConCambios1',
        text: 'Prueba de error en el mail sin el .com',
        html:"<h1>Factura</h1><br>Saludos cordiales<br>",
        files: [archivoAdjunto]
    }


    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
   return {failed, description}
}


async function testErrorSubject(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = 'test/static/archivoPDF.pdf'

    const datosMails = {
        to: 'nadiaalebri@gmail.com',
        subject: '',
        text: 'Prueba Asunto vacío',
        html: "<h1>Factura</h1><br>Saludos cordiales<br>",
        files: [archivoAdjunto]
    }

    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
   return {failed, description}
}

async function testErrorText(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = 'test/static/archivoPDF.pdf'

    const datosMails = {
        to: 'nadiaalebri@gmail.com',
        subject: 'Prueba error sin Texto',
        text: '',
        html: "<h1>Factura</h1><br>Saludos cordiales<br>",
        files: [archivoAdjunto]
    }

    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
   return {failed, description}
}

async function testErrorHtml(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = 'test/static/archivoPDF.pdf'

    const datosMails = {
        to: 'nadiaalebri@gmail.com',
        subject: 'Prueba error info HTML',
        text: 'Envío de mail sin HTML',
        html: "",
        files: [archivoAdjunto]
    }

    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
   return {failed, description}
}

async function testErrorAdjunto(){

    const credenciales = {
        user: 'ortpruebatp2@gmail.com',
        pass: 'Prueba1812'
    }

    const archivoAdjunto = ''

    const datosMails = {
        to: 'nadiaalebri@gmail.com',
        subject: 'Prueba error sin adjunto',
        text: 'Envío de mail sin Adjunto',
        html: "<h1>Factura</h1><br>Saludos cordiales<br>",
        files: [archivoAdjunto]
    }

    let description = "manejo de datos ok: "
    let failed = false

    const mail = new GMailer(credenciales)
        try {
            await mail.sendMail(datosMails)
            description += 'ok'
        }catch(error){
            failed= true
            description += 'Error'
            description += '\ndetalles>>\n'
            description += error
            description += '\n<<fin error\n'
        }
        
   return {failed, description}
}

async function main(){

    const tests = [
        testOk,
        testErrorMail,
        testErrorMailSinCom,
        testErrorSubject,
        testErrorText,
        testErrorHtml,
        testErrorAdjunto,
    ]
    
    let ejecutado= 0
    let enviado= 0
    let errores= 0

    console.log('runing test.....\n')
 
    for(const test of tests) {
        let result = await test()
        console.log(result)
        if(result.failed){
                errores++
            }else{
                enviado++
            }
        console.log(result.description)
        console.log("...............................")
        ejecutado++
    }
    console.log('\nejecutado:' + ejecutado)
    console.log('enviado: ' + enviado)
    console.log('errores: ' + errores)
}


export { main }

