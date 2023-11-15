import * as yup from "yup"

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nameRegEx = /^[A-Za-zÅÄÖåäö]+(?: [A-Za-zÅÄÖåäö]+)?$/

export const messageSchema = yup.object().shape({

    name: yup.string().matches(nameRegEx, "Name can only contain letters and a single blank space between first and last name").min(2, "Name must contain at least 2 letters").required("Please enter your name"),
    email: yup.string().matches(emailRegEx, "Please enter a valid email address").required("Please enter your email address"),
    message: yup.string().min(5, "Your message must contain at least 5 letters").required("Please write a message"),
})