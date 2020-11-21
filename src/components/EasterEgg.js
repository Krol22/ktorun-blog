import React, { useState, useEffect, useRef } from "react";

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
  const [ mode, setMode ] = useState(1);
  const [ command, setCommand ] = useState("");
  const inputRef = useRef();

  const onKeyDown = (event) => {
    switch (mode) {
      case 1: {
        if (event.keyCode === 27) {
          setMode(0);
        }

        if (event.keyCode === 13) {
          setMode(0);
          setCommand("");
        }
        break;
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
        break;
      case 1:
        inputRef.current.style.width = `0ch`;
        inputRef.current.focus();
        break;
    }
  }, [mode]);

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
  }, [mode]);

  return (
    <footer className={`footer ${mode !== 0 && "footer--opened"}`}>
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

