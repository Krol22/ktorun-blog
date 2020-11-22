import React, { useState, useEffect, useRef } from "react";

import CommandMenu from "./CommandMenu";
import { commands } from "../commands";

const modes = [
  {
    text: "READ",
    class: "footer__mode--read",
  },
  {
    text: "COMMAND",
    class: "footer__mode--command",
  },
];


const EasterEgg = () => {
  const [ mode, setMode ] = useState(0);
  const [ command, setCommand ] = useState("");

  const [ menuVisible, setMenuVisible ] = useState(false);
  const [ selectedOption, setSelectedOption ] = useState(0);

  const inputRef = useRef();

  const onKeyDown = (event) => {
    console.log(event);
    switch (mode) {
      case 1: {
        if (event.keyCode === 27) { //ESC
          setMode(0);
        }

        if (event.keyCode === 13) { //Enter
          setMode(0);
          setCommand("");
        }

        if (event.keyCode === 9) { //Tab
          event.stopPropagation();
          event.preventDefault();

          if (!menuVisible) { // openMenu
            setMenuVisible(true); 
            setSelectedOption(0);
            break;
          }

          if (menuVisible) {
            if (event.shiftKey) {
              if (selectedOption === 0) {
                setSelectedOption(commands.length - 1);
                return;
              }

              setSelectedOption(selectedOption - 1);
              return
            }
            if (selectedOption === commands.length - 1) {
              setSelectedOption(0);
              return;
            }

            setSelectedOption(selectedOption + 1);
          }
        }

        if (event.keyCode === 32) { //Space
          if (menuVisible) {
            setMenuVisible(false);
          }
        }

        break;
      }
    }

    if (menuVisible) {
      if (event.keyCode === 38) { //Arrow up
        if (selectedOption === 0) {
          setSelectedOption(commands.length - 1);
          return;
        }

        setSelectedOption(selectedOption - 1);
      }

      if (event.keyCode === 40) { //Arrow down
        if (selectedOption === commands.length - 1) {
          setSelectedOption(0);
          return;
        }

        setSelectedOption(selectedOption + 1);
      }
    }
  };

  const onKeyPress = (event) => {
    switch(mode) {
      case 0:
        if (event.shiftKey && event.keyCode === 58) {
          setMode(1); 
        }
        break;
      case 1:
        break;
    }
  };

  useEffect(() => {
    switch (mode) {
      case 0:
        inputRef.current.blur();
        setMenuVisible(false);
        break;
      case 1:
        inputRef.current.style.width = `0ch`;
        inputRef.current.focus();
        break;
    }
  }, [mode]);

  useEffect(() => {
    if (!menuVisible) {
      return;
    }

    setCommand(commands[selectedOption].name);
  }, [selectedOption, menuVisible]);

  useEffect(() => {
    inputRef.current.style.width = `${command.length}ch`;
  }, [command])

  const onInputChange = (event) => {
    setCommand(event.target.value);
    inputRef.current.style.width = `${event.target.value.length}ch`;
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keypress", onKeyPress);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keypress", onKeyPress);
    }
  });

  return (
    <footer className={`footer ${mode !== 0 && "footer--opened"}`}>
      <CommandMenu visible={menuVisible} selectedItem={selectedOption} command={command}/>
      <div className="footer__status">
        <div>
          <div className={`footer__element footer__mode ${modes[mode].class}`}>
            {modes[mode].text}
          </div>
          <div className="footer__element footer__branch">
            ᚠmasterɆ
          </div>
        </div>
        <div>
          <div className="footer__element footer__utf">
            utf-8[unix]
          </div>
          <div className="footer__element footer__line">
            65% ☰ 17/26 ln
          </div>
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
  );
};

export default EasterEgg;

