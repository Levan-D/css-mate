import React, { useState } from "react";
import SideMenu from "../../../../components/wrappers/SideMenu";
import Tooltip from "../../../../components/Tooltip";

const inputBtns = [
  { name: `HEX`, value: "#ffffff" },
  { name: `RGB`, value: "255, 255, 255" },
  { name: `HSL`, value: "0°, 0%, 100%" },
  { name: `CMYK`, value: "0%, 0%, 0%, 0%" },
  { name: `HSV`, value: "0°, 0%, 100%" },
];

export default function ConverterSidemenu() {
  const [inputType, setInputType] = useState(inputBtns[0]);
  const [inputText, setInputText] = useState("");

  const [outputType, setOutputType] = useState(inputBtns[1]);
  const [outputText, setOutputText] = useState("");

  const handleOutput = (obj: { name: string; value: string }) => {
    if (obj.name !== inputType.name) {
      setOutputType(obj);
    } else if (obj.name === inputType.name) {
    }
  };

  const handleInput = (obj: { name: string; value: string }) => {
    setInputType(obj);
    if (obj.name !== outputType.name) {
      return;
    } else if (obj.name === outputType.name) {
      const index = inputBtns.findIndex((x) => x.name === obj.name);
      if (index + 1 === inputBtns.length) {
        setOutputType(inputBtns[0]);
      } else if (index + 1 !== inputBtns.length) {
        setOutputType(inputBtns[index + 1]);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Color Converter`}>
        <div className="menuContainer m-4  pb-4  ">
          <div className="menuHeader py-1 text-center">Input Color Values</div>
          <div className="menuBlock m-2 flex justify-between px-2 py-1">
            {inputBtns.map((btnType, i) => (
              <div
                key={i}
                onClick={() => {
                  handleInput(btnType);
                }}
                className={`${
                  inputType.name === btnType.name
                    ? "btnSecondary"
                    : "btnSecondaryDisabled"
                }   h-8 px-3 text-sm leading-4`}
              >
                {btnType.name}
              </div>
            ))}
          </div>
          <div className="menuBlock mx-2  !mb-0  px-2 py-1">
            <form onSubmit={handleFormSubmit}>
              <div className="flex justify-between   ">
                <input
                  type="text"
                  required
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                  }}
                  autoComplete="off"
                  name="name"
                  placeholder={inputType.value}
                  className={`mr-4 w-full rounded-md bg-slate-400   px-3 py-2 text-slate-900 placeholder-slate-600 outline  outline-transparent duration-200 `}
                />

                <button
                  type="submit"
                  value="Rename"
                  className=" my-1 h-8 w-8 rotate-[140deg] rounded-full border-2 border-transparent text-4xl font-bold leading-[25px]  text-slate-300 duration-200  sm:hover:border-slate-300  "
                >
                  &#8630;
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="menuContainer m-4  pb-4  ">
          <div className="menuHeader py-1 text-center">Output Color Value</div>
          <div className="menuBlock m-2 flex justify-between px-2 py-1">
            {inputBtns.map((btnType, i) => (
              <div
                key={i}
                onClick={() => handleOutput(btnType)}
                className={`${
                  outputType.name === btnType.name
                    ? "btnSecondary"
                    : "btnSecondaryDisabled"
                } ${
                  inputType.name === btnType.name && " cursor-auto opacity-60"
                }   h-8 px-3 text-sm leading-4`}
              >
                {btnType.name}
              </div>
            ))}
          </div>

          <div className="menuBlock m-2   px-2 py-1 text-center">
            <div className=" menuContainer py-2 text-lg font-bold">
              {outputText === "" ? outputType.value : outputText}
            </div>
            <Tooltip text="Copied" onClick={true}>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(outputText);
                }}
                className="btnPrimary shadow-custom my-1 w-full !py-1 "
              >
                Copy
              </div>
            </Tooltip>
          </div>
        </div>
      </SideMenu>
    </div>
  );
}
