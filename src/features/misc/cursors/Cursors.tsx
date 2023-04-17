/** @format */

import tailwindIcon from ".././../../assets/icons/tailwind.png"
import cssIcon from ".././../../assets/icons/css.png"
import { cursorData } from "./Data"
import TableOfContents from "../../../components/TableOfContents"
import Tooltip from "../../../components/Tooltip"

const Cursors = () => {
  let TOCData: string[] = []
  return (
    <main className="my-16 mx-4">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Almost every CSS <span className="text-secondary-300">cursor</span> type presented
        below
      </h1>
      <p className="mb-8 text-center font-cursiveCustom text-base">
        Hover over to demo and click to copy!
      </p>
      <div className="mb-8">
        <TableOfContents TOCData={TOCData} />
      </div>
      <p className="text-center">
        The exact looks of the cursor is based on the browser defaults.
      </p>
      <p className=" text-center">
        You can also set custom cursors using the
        <span className="text-secondary-300">
          &#32; cursor: url&#x28; image link&#x29;, x y, fallback cursor type;&#32;
        </span>
        property.
      </p>
      <p className="mb-8 text-center">
        &#x28; Although... custom cursors don't work half the time&#x29;
      </p>

      <div>
        {cursorData.map((cursor, i) => {
          TOCData.push(cursor.category)
          return (
            <div key={i}>
              <h2
                id={`${cursor.category}`}
                className="mt-8 mb-6 text-center  font-cursiveCustom text-2xl"
              >
                {cursor.category}
              </h2>
              <div className="mb-1 flex flex-wrap justify-center gap-8">
                {cursor.contents.map((content, index) => (
                  <div
                    key={index}
                    className={`w-fit cursor-pointer select-none rounded-xl border-2  border-transparent  bg-slate-200 p-4 shadow-[6px_6px_4px_0px_rgba(_255,_114,_94,0.60)]      duration-300  ease-in-out active:border-secondary-200  sm:hover:border-secondary-300 sm:hover:shadow-[0px_0px_37px_10px_rgba(_255,_114,_94,0.8)] ${content.tailwind}`}
                  >
                    <h2 className="mb-2 text-center font-cursiveCustom text-xl text-slate-900 ">
                      {content.name}
                    </h2>
                    <div className="text-center text-slate-900 ">
                      {content.description}
                    </div>
                    <div className="mb-4 text-center font-semibold text-secondary-300">
                      {content.cssRule}
                    </div>
                    <div className={`flex justify-center gap-2  `}>
                      <Tooltip text="Copied" onClick={true} dArrow={true}>
                        <div
                          className={`btnPrimary flex gap-1 shadow-primaryBr`}
                          onClick={() => {
                            navigator.clipboard.writeText(content.vanilla)
                          }}
                        >
                          <div>
                            <img src={cssIcon} className="w-6" alt="css icon" />
                          </div>

                          <div className="text-sm leading-6">Copy</div>
                        </div>
                      </Tooltip>
                      <Tooltip text="Copied" onClick={true} dArrow={true}>
                        <div
                          className={`btnPrimary flex gap-1 shadow-primaryBr`}
                          onClick={() => {
                            navigator.clipboard.writeText(content.tailwind)
                          }}
                        >
                          <div>
                            <img
                              src={tailwindIcon}
                              className="w-6"
                              alt="tailwind css icon"
                            />
                          </div>
                          <div className="text-sm leading-6">Copy</div>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Cursors
