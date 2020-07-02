export default (status, code, msg) => {
    let message = msg
    if (status)
        err.status = status
    if (code) {
        message = `Code: ${code} - Message: ${msg}`
    }    
    const err = new Error(message)
    return err
}