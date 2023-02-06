/** @format */

import React from "react"

const Cheese = () => {
  return (
    <section id="Cheese">
      <h3 className="mb-4 mt-24 font-cursiveCustom text-xl">Let the cheese flow</h3>
      <p>
        You can use box shadow and rotate properties to create the cheesiest collage ever!
      </p>

      <div className="mx-auto  mt-16  flex w-fit justify-center gap-8 ">
        <div className="    z-40 mt-20 w-[300px]  rotate-[-7deg] rounded-sm bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-16 text-white shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] md:rotate-[-25deg] ">
          <blockquote>
            <q className="    block translate-y-[20px] font-cursiveCustom text-lg  ">
              Carpe diem. Seize the day, boys. Make your lives extraordinary.
            </q>
            <p className="mt-4 translate-y-[105px] translate-x-4 text-right font-handWritten text-2xl font-bold text-slate-900">
              &mdash; John Keating
            </p>
          </blockquote>
        </div>
        <div className=" z-30 mt-20  hidden w-[300px] translate-y-[-60px]  rotate-[30deg]  rounded-sm bg-gradient-to-r  from-red-400  to-red-500 px-6 py-16 text-white shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] sm:translate-x-[-140px] md:block lg:translate-x-[-40px]  lg:rotate-[4deg] ">
          <blockquote>
            <q className="    block translate-y-[20px] translate-x-[15px] font-cursiveCustom text-lg  ">
              They may take our lives, but they'll never take our freedom!
            </q>
            <p className="mt-4 translate-y-[105px] translate-x-4 text-right font-handWritten  text-2xl font-bold text-slate-900">
              &mdash; William Wallace
            </p>
          </blockquote>
        </div>
        <div className=" z-20 mt-20 hidden w-[300px] translate-x-[-90px] translate-y-[40px] rotate-[30deg] rounded-sm  bg-gradient-to-r from-purple-400 to-purple-500 px-6 py-16 text-white shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)]  lg:block ">
          <blockquote>
            <q className="    block  translate-y-[30px] translate-x-[15px] font-cursiveCustom text-lg">
              What we've got here is failure to communicate.
            </q>
            <br />
            <p className="mt-4 translate-y-[110px] translate-x-4 text-right font-handWritten text-2xl font-bold text-slate-900">
              &mdash; Captain
            </p>
          </blockquote>
        </div>
      </div>

      <div className=" mx-auto mb-8 mt-16 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300">
            box-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            0px 0px 0px 30px rgba(255,255,255,1), <br />
            0px 30px 0px 30px rgba(255,255,255,1), <br />
            -10px 60px 30px 5px rgba(0, 0, 0,1), <br />
            35px 60px 30px 0px rgba(0, 0, 0,1), <br />
            35px -10px 30px 0px rgba(0, 0, 0,1)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cheese
