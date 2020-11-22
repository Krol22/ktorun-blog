import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { commands } from "../commands";

const CommandMenu = ({ visible, command, onSelectCommand }) => {
  const [visibleCommands, setVisibleCommands] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    if (visible) {
      const filteredCommands = commands.filter(({ name }) =>
        name.toUpperCase().startsWith(command.toUpperCase())
      );

      setVisibleCommands(filteredCommands);
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);


  const selectNextOption = () => {
    if (selectedOption === visibleCommands.length - 1) {
      setSelectedOption(0);
      return;
    }

    setSelectedOption(selectedOption + 1);
  };

  const selectPrevOption = () => {
    if (selectedOption === 0) {
      setSelectedOption(visibleCommands.length - 1); 
      return;
    }  

    setSelectedOption(selectedOption - 1);
  };

  const onKeyDown = ({ keyCode, shiftKey }) => {
    switch(keyCode) {
      case 9: // tab
        if (shiftKey) {
          break;
        }
        break;
      case 38: // arrow up
        break;
      case 40: // arrow down
        break;
    }
  };

  return (
    <div className={`command-menu ${visible && "command-menu--open"}`}>
      <ul>
        {visibleCommands.map(({ name }, index) => (
          <li className={`command ${index === selectedOption && "command--selected"}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

CommandMenu.propTypes = {
  visible: PropTypes.bool,
  selectedItem: PropTypes.number.isRequired,
  command: PropTypes.string,
};

export default CommandMenu;
