/** @format */

import React from "react"

const Cheese = () => {
  return (
    <section id="Cheese">
      <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Let the cheese flow</h3>
      <p>
        You can use box shadow and rotate properties to create the cheesiest collage ever!
      </p>
      <h4 className="font-bold my-8 font-cursiveCustom">Rule used below:</h4>
      <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300">
            box-shadow<span className="text-white px-[4px]">:</span> <br />
          </div>
          <div className="text-green-300">
            0px 0px 0px 30px rgba(255,255,255,1), <br />
            0px 30px 0px 30px rgba(255,255,255,1), <br />
            -10px 60px 30px 5px rgba(0, 0, 0,1), <br />
            35px 60px 30px 0px rgba(0, 0, 0,1), <br />
            35px -10px 30px 0px rgba(0, 0, 0,1)
            <span className="text-white pl-[4px] ">;</span>
          </div>
        </div>
      </div>
      <h4 className="font-bold  my-8 font-cursiveCustom">Results:</h4>
      <div className="flex justify-center gap-8 w-fit mx-auto ">
        <div className="    bg-gradient-to-r from-orange-400 to-orange-500  rotate-[-7deg] md:rotate-[-25deg] mt-20 z-40 text-white px-6 py-16 rounded-sm w-[300px] shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] ">
          <blockquote>
            <q className="    text-lg font-cursiveCustom block translate-y-[20px]  ">
              Carpe diem. Seize the day, boys. Make your lives extraordinary.
            </q>
            <p className="text-right font-bold mt-4 text-slate-900 translate-y-[105px] translate-x-4 font-handWritten text-2xl">
              &mdash; John Keating
            </p>
          </blockquote>
        </div>
        <div className=" hidden md:block  bg-gradient-to-r from-red-400 to-red-500  rotate-[30deg]  lg:rotate-[4deg] z-30  sm:translate-x-[-140px]  lg:translate-x-[-40px] translate-y-[-60px] mt-20 text-white px-6 py-16 rounded-sm w-[300px]  shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] ">
          <blockquote>
            <q className="    text-lg font-cursiveCustom block translate-y-[20px] translate-x-[15px]  ">
              They may take our lives, but they'll never take our freedom!
            </q>
            <p className="text-right font-bold mt-4 text-slate-900 translate-y-[105px]  translate-x-4 font-handWritten text-2xl">
              &mdash; William Wallace
            </p>
          </blockquote>
        </div>
        <div className=" hidden lg:block bg-gradient-to-r from-purple-400 to-purple-500 rotate-[30deg] z-20 translate-x-[-90px]  translate-y-[40px] mt-20 text-white px-6 py-16 rounded-sm w-[300px]  shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] ">
          <blockquote>
            <q className="    text-lg  font-cursiveCustom block translate-y-[30px] translate-x-[15px]">
              What we've got here is failure to communicate.
            </q>
            <br />
            <p className="text-right font-bold mt-4 text-slate-900 translate-y-[110px] translate-x-4 font-handWritten text-2xl">
              &mdash; Captain
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Cheese
