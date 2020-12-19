import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { commands } from "../commands"

const CommandMenu = ({ visible, command, onSelectCommand }) => {
  const [visibleCommands, setVisibleCommands] = useState([])
  const [selectedOption, setSelectedOption] = useState(0)

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", onKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [visible, selectedOption, visibleCommands])

  useEffect(() => {
    if (visible) {
      const filteredCommands = commands.filter(({ name }) =>
        name.toUpperCase().startsWith(command.toUpperCase())
      )

      setVisibleCommands(filteredCommands)
      setSelectedOption(0)
      onSelectCommand(filteredCommands[0])
    }
  }, [visible])

  const selectNextOption = () => {
    if (visibleCommands.length <= 1) {
      return
    }

    if (selectedOption === visibleCommands.length - 1) {
      setSelectedOption(0)
      return
    }

    setSelectedOption(selectedOption + 1)
  }

  const selectPrevOption = () => {
    if (visibleCommands.length <= 1) {
      return
    }

    if (selectedOption === 0) {
      setSelectedOption(visibleCommands.length - 1)
      return
    }

    setSelectedOption(selectedOption - 1)
  }

  const onKeyDown = event => {
    const { keyCode, shiftKey } = event
    switch (keyCode) {
      case 9: // tab
        event.stopPropagation()
        event.preventDefault()

        if (shiftKey) {
          selectPrevOption()
          break
        }
        selectNextOption()
        break
      case 13: // enter
        onSelectCommand(visibleCommands[selectedOption])
        break
      case 38: // arrow up
        selectPrevOption()
        break
      case 40: // arrow down
        selectNextOption()
        break
    }
  }

  useEffect(() => {
    if (visible) {
      onSelectCommand(visibleCommands[selectedOption])
    }
  }, [selectedOption])

  return (
    <div className={`command-menu ${visible && "command-menu--open"}`}>
      <ul>
        {visibleCommands.map(({ name }, index) => (
          <li
            className={`command ${
              index === selectedOption && "command--selected"
            }`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

CommandMenu.propTypes = {
  visible: PropTypes.bool,
  command: PropTypes.string,
  onSelectCommand: PropTypes.func.isRequired,
}

export default CommandMenu
