import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setIsOpen, setIsMin } from "./sliderSlice";
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";

export default function Slider() {
  const dispatch = useAppDispatch();
  const { isOpen, isMin, minWidth, maxWidth, title, renderedPaths } =
    useAppSelector((store) => store.slider);
  const { path } = useAppSelector((store) => store.navbar);

  return (
    <>
      {renderedPaths.some((x) => path.includes(x)) && (
        <>
          <div
            className={`fixed top-0 left-0 z-50 flex  h-screen  justify-center transition-transform duration-500`}
            style={{
              transform: isOpen
                ? `translate(${0}px)`
                : `translate(-${isMin ? minWidth : maxWidth}px)`,
            }}
          >
            <div
              className={`${
                isOpen ? `visible` : `collapse `
              }  z-40 bg-slate-600 duration-500 `}
              style={{ width: isMin ? minWidth + "px" : maxWidth + "px" }}
            >
              <div className="menuHeader flex items-center justify-between rounded-t-none ">
                <h3 className="  p-2 font-cursiveCustom text-lg">{title}</h3>
                <div onClick={() => dispatch(setIsMin())}>
                  <ChevronIcon
                    height={26}
                    width={26}
                    fill={isMin ? "white" : "#ff725e"}
                    className={`${
                      !isMin ? " rotate-[180deg]" : ""
                    } mr-2 cursor-pointer px-2 py-1 duration-300`}
                  />
                </div>
              </div>

              <div> babies</div>
            </div>

            <div
              onClick={() => dispatch(setIsOpen())}
              className={`z-50  translate-y-[50%]`}
            >
              <ChevronIcon
                height={26}
                width={26}
                fill={!isOpen ? "white" : "#ff725e"}
                className={`${
                  isOpen ? "translate-x-[-30px] rotate-[180deg]" : ""
                } cursor-pointer duration-300 `}
              />
            </div>
          </div>
          {isOpen && (
            <div
              className="fixed top-0 right-0 bottom-0 left-0 z-30 bg-slate-900 opacity-20		 "
              onMouseDown={() => dispatch(setIsOpen())}
            ></div>
          )}
        </>
      )}
    </>
  );
}
