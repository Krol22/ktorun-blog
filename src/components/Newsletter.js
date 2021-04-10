import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState("")
  const [sended, setSended] = useState(false)

  const validateEmail = email => {
    if (!email) {
      setError("Email is required!")
      return false
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Email is invalid!")
      return false
    }

    setError("")
    return true
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTouched(true)
    setSended(false)
    const valid = validateEmail(email)
    if (!valid) {
      return
    }

    addToMailchimp(email).then(({ result, msg }) => {
      if (result === "success") {
        setSended(true)
        return
      } else {
        setError(msg)
      }
    })
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    validateEmail(e.target.value)
  }

  const handleEmailFocus = () => {
    setTouched(true)
    setSended(false)
  }

  const handleEmailBlur = () => {
    validateEmail(email)
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
          className={`input ${error && touched && `input--error`} ${
            sended && `input--sended`
          }`}
          type="text"
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          placeholder="tom@mail.com"
        />
        <input
          className={`button ${error && touched && `button--error`} ${
            sended && `button--sended`
          }`}
          type="submit"
          value={!sended ? `Join!` : `Success!`}
        />
        <div className="newsletter__form-error">
          <div dangerouslySetInnerHTML={{ __html: error }} />
        </div>
        {sended && <div className="newsletter__form-sended">Thank you!</div>}
      </form>
    </section>
  )
}
