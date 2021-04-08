import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  return (
    <section className="newsletter">
      <div className="newsletter__header">
        <h3>Did you liked what you read?</h3>
        <p>
          If you want to be notified about future posts join my mailing list.
          I&apos;ll send you an information as soon as new post will be
          published!
        </p>
      </div>
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={name}
          onChange={handleEmailChange}
          placeholder="Tom"
        />
        <input
          className="input"
          type="text"
          value={email}
          onChange={handleNameChange}
          placeholder="tom@mail.com"
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    </section>
  )
}
