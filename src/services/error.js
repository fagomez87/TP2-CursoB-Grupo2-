export default (status, msg, code) => {
    let message = msg
    if (code) {
        message = `Code: ${code} - Message: ${msg}`
    }   
    const err = new Error(message)
    if (status)
        err.status = status
    return err
}