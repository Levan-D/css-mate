import SideMenu from "../../../../components/wrappers/SideMenu";
import Input from "./Input";
import Output from "./Output";

export default function ConverterSidemenu() {
  // const handleColorValidation = () => {
  //   ;
  //   const RGBRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;

  //   const expression = inputText.trim();

  //   switch (inputType.name) {
  //     case `HEX`:
  //       let hexColor;
  //       if (!expression.startsWith("#")) {
  //         hexColor = "#" + expression;
  //       } else hexColor = expression;

  //       if (HEXRegex.test(hexColor)) {
  //         setIsValid(() => true);
  //       } else {
  //         setIsValid(() => false);
  //       }
  //       break;
  //     case `RGB`:
  //       const match = expression.trim().match(RGBRegex);
  //       if (!match) {
  //         console.log(false);
  //       }

  //     case `HSL`:
  //     case `CMYK`:
  //     case `HSV`:
  //     default:
  //       return;
  //   }
  // };

  // const handleConversion = () => {
  //   const expression = inputType.name + "to" + outputType.name;

  //   switch (expression) {
  //     case `CMYKtoHEX`:
  //     case `CMYKtoHSV`:
  //     case `CMYKtoRGB`:
  //     case `CMYKtoHSL`:
  //     case `HEXtoCMYK`:
  //     case `HEXtoHSL`:
  //     case `HEXtoHSV`:
  //     case `HEXtoRGB`:
  //       return setOutputText(() => HexToRGB(inputText));
  //     case `HSLtoCMYK`:
  //     case `HSLtoHEX`:
  //     case `HSLtoHSV`:
  //     case `HSLtoRGB`:
  //     case `HSVtoCMYK`:
  //     case `HSVtoHEX`:
  //     case `HSVtoHSL`:
  //     case `HSVtoRGB`:
  //     case `RGBtoCMYK`:
  //     case `RGBtoHEX`:
  //     case `RGBtoHSL`:
  //     case `RGBtoHSV`:

  //     default:
  //       return;
  //   }
  // };

  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Color Converter`}>
        <Input />
        <Output />
      </SideMenu>
    </div>
  );
}
