import './App.css'
const Contact = ()=>{
    return (
        <>
        <section className='contact'>
      <h1>Get in Touch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores, culpa nulla dolores consequatur voluptatum. Illum <br />temporibus inventore ab magni commodi ipsam perspiciatis voluptate facilis. Architecto tenetur iusto rerum eos?
      </p>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' placeholder='Your Name' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' placeholder='Your Email' />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' placeholder='Your Message' />
        </div>
        <button type='submit'>Send Message</button>
      </form>
      <div className='contact-info'>
        <h2>Contact Information</h2>
        <p>
          Phone: 565-588-5599
        </p>
        <p>
          Email: [info@example.com](mailto:info@example.com)
        </p>
        <p>
          Address: 123 Main St, Anytown, USA
        </p>
      </div>
    </section>
        </>
    )
}

export default Contact