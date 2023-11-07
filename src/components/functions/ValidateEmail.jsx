
const ValidateEmail = (email) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return false

    return true
}

export default ValidateEmail