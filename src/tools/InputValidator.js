export const onlyLetters = (value) => {
    let isValid = false
    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i')
    if (pattern.test(value)) {
        isValid = true
    }
    return isValid
}

export const onlyNumbers = (value) => {
    let isValid = false
    const pattern = new RegExp('^[0-9]+$', 'i')
    if (pattern.test(value)) {
        isValid = true
    }
    return isValid
}

export const email = (value) => {
    let isValid = false
    const pattern = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$", "i")
    if (pattern.test(value)){
        isValid = true
    }
    return isValid
}

export const phoneNumber = (value) => {
    let isValid = false
    const pattern = new RegExp('^((\d{10})', 'i')
    if (pattern.test(value)){
        isValid = true
    }
    return isValid
}
