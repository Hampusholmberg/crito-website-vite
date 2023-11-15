import {messageSchema}    from '../../schemas/MessageSchema'
import { useFormik } from 'formik'

const MessageUs = () => {
  const apiUrl = 'https://win23-assignment.azurewebsites.net/api/contactform'

  const onSubmit = async () => {

    if (formik.isValid) {
      console.log("no errors")
      const result = await fetch(apiUrl, {
        method: 'POST', 
        headers: {  
          'content-type': 'application/json'
        },
        body: JSON.stringify(formik.values)
      }) 
      
      if (result.ok) {
        alert("Message sent")
      } else {
        alert("Error")
      }
    }
    formik.resetForm({
      values: {
        name: '',
        email: '',
        message: '',
      }
    })
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: messageSchema,
    onSubmit,
  })

  return (
    <section className='message-us'>
      <div className='container'>
        <form className='content-box' noValidate 
        onSubmit={formik.handleSubmit}>

          <h2>Leave us a message<br/>for any information</h2>

          <label 
            htmlFor='name'
            className={formik.errors.name && formik.touched.name ? 'error-label'
            :!formik.errors.name && formik.touched.name ? 'success-label': ''}>
            {formik.errors.name && formik.touched.name ? formik.errors.name : "Name*"}
          </label>
          <input
            id='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='name'
            className={formik.errors.name && formik.touched.name ? 'error'
            :!formik.errors.name && formik.touched.name ? 'success': ''}
            type='text' 
            required/>

          <label 
            htmlFor='email'
            className={formik.errors.email && formik.touched.email ? 'error-label'
            :!formik.errors.email && formik.touched.email ? 'success-label': ''}>
            {formik.errors.email && formik.touched.email ? formik.errors.email : "Email*"}
          </label>
          <input
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='email'
            className={formik.errors.email && formik.touched.email ? 'error'
            :!formik.errors.email && formik.touched.email ? 'success' : ''}
            type='email' 
            required/>

          <label 
            htmlFor='message'
            className={formik.errors.message && formik.touched.message ? 'error-label'
            :!formik.errors.message && formik.touched.message ? 'success-label': ''}>
            {formik.errors.message && formik.touched.message ? formik.errors.message : "Your Message*"}
          </label>
          <textarea
            id='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='message'
            className={formik.errors.message && formik.touched.message ? 'error'
            :!formik.errors.message && formik.touched.message ? 'success': ''}
            required>
          </textarea>

          <button            
            className='btn-yellow' 
            type='submit'>
            Send Message<i className='fa-solid fa-arrow-up-right-from-square'></i>
          </button>
        </form>
      </div>
    </section>
  )
}

export default MessageUs