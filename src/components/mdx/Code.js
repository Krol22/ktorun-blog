import React, { useState, useRef } from "react"
import PropTypes from "prop-types"

const Code = ({ type, children }) => {
  const ref = useRef(null)
  const [buttonText, setButtonText] = useState("copy")

  const onCopyClick = () => {
    const text = ref.current.innerHTML

    const el = document.createElement("textarea")
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")

    document.body.removeChild(el)
  }

  return (
    <>
      <code className="code" ref={ref}>
        {children}
      </code>
      <button className="code-cpy-btn" onClick={onCopyClick}>
        copy
      </button>
    </>
  )
}

Code.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  type: PropTypes.string,
}

export default Code
