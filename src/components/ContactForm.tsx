import React from 'react'

const ContactForm = () => {
  return (
    // TODO - add Handle function
    <div>
      <form onSubmit={() => console.log('submitted')}>
        <div>
          <label htmlFor='name'>Contact Name </label>
          {/* Add input component here */}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
