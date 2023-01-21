/** @format */

import React from "react"

const MultipleShadows = () => {
  return (
    <section id="Multiple shadows">
      <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Setting multiple shadows</h3>
      <p>You can chain multiple box shadows by seperating each rule with a comma.</p>
      <div className="lg:flex gap-8 justify-center">
        <div>
          <h4 className="font-bold my-8">Rule used below:</h4>
          <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
            <div className="flex gap-4 ">
              <div className="text-blue-300">
                box-shadow<span className="text-white px-[4px]">:</span> <br />
              </div>
              <div className="text-green-300">
                inset -14px -15px 22px -2px rgba(0, 0, 0,0.35),
                <br /> 0px 0px 0px 4px rgba( 150, 150, 150,1), <br />
                8px 12px 4px 0px rgba(255, 255, 255,0.29)
                <span className="text-white pl-[4px] ">;</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold my-8">Result:</h4>
          <div className="bg-transparent text-blue-200 px-8 py-5 rounded-xl w-fit mx-auto my-8   shadow-[inset_-8px_-8px_8px_0px_rgba(150,_255,_255,0.25),0px_0px_0px_2px_rgba(111,200,200,1),8px_12px_4px_0px_rgba(94,_161,_255,0.30)] ">
            <blockquote>
              <q>
                Do you think God stays in heaven because he, too,
                <br />
                lives in fear of what he's created here on earth?
              </q>
              <p className="text-right font-bold mt-4  text-green-200   ">
                &mdash; Dr. Romero
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MultipleShadows
