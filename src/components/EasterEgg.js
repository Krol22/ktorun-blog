import React, { useState, useEffect, useRef } from "react"

import CommandMenu from "./CommandMenu"

const modes = [
  {
    text: "READ",
    class: "footer__mode--read",
  },
  {
    text: "COMMAND",
    class: "footer__mode--command",
  },
]

const EasterEgg = () => {
  const [mode, setMode] = useState(0)
  const [command, setCommand] = useState("")

  const [menuVisible, setMenuVisible] = useState(false)

  const inputRef = useRef()

  const onKeyDown = event => {
    switch (mode) {
      case 1: {
        if (event.keyCode === 27) {
          //ESC
          setMode(0)
        }

        if (event.keyCode === 13) {
          //Enter
          setMode(0)
          setCommand("")
        }

        if (event.keyCode === 9 && !menuVisible) {
          // tab -> openMenu
          event.stopPropagation()
          event.preventDefault()
          setMenuVisible(true)
          break
        }

        if (event.keyCode === 32 && menuVisible) {
          setMenuVisible(false)
        }

        if (event.keyCode === 8 && menuVisible) {
          setMenuVisible(false)
        }

        break
      }
    }
  }

  const onKeyPress = event => {
    switch (mode) {
      case 0:
        if (event.shiftKey && event.keyCode === 58) {
          setMode(1)
        }
        break
    }
  }

  useEffect(() => {
    switch (mode) {
      case 0:
        inputRef.current.blur()
        setMenuVisible(false)
        setCommand("")
        break
      case 1:
        inputRef.current.style.width = `0ch`
        inputRef.current.focus()
        break
    }
  }, [mode])

  useEffect(() => {
    inputRef.current.style.width = `${command.length}ch`
  }, [command])

  const onInputChange = event => {
    setCommand(event.target.value)
    inputRef.current.style.width = `${event.target.value.length}ch`
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keypress", onKeyPress)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keypress", onKeyPress)
    }
  })

  const onSelectCommand = command => {
    if (!command) {
      return
    }

    setCommand(command.name)
  }

  return (
    <footer className={`footer ${mode !== 0 && "footer--opened"}`}>
      <CommandMenu
        visible={menuVisible}
        command={command}
        onSelectCommand={onSelectCommand}
      />
      <div className="footer__status">
        <div>
          <div className={`footer__element footer__mode ${modes[mode].class}`}>
            {modes[mode].text}
          </div>
          <div className="footer__element footer__branch">ᚠmasterɆ</div>
        </div>
        <div>
          <div className="footer__element footer__utf">utf-8[unix]</div>
          <div className="footer__element footer__line">65% ☰ 17/26 ln</div>
        </div>
      </div>
      <div className="footer__command">
        :
        <input
          className="footer__input"
          type="text"
          ref={inputRef}
          value={command}
          onChange={onInputChange}
        />
      </div>
    </footer>
  )
}

export default EasterEgg
