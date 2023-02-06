/** @format */

const Basics = () => {
  return (
    <section id="Basics">
      <h3 className="mt-16 mb-4 font-cursiveCustom text-xl">Basics</h3>

      <p>
        CSS filters are a powerful tool that allow you to apply visual effects to elements
        on a web page. One of the most commonly used filters is the drop shadow, which
        adds a shadow to an element to give it a three-dimensional look.
      </p>
      <p className="mt-4">
        It's worth noting that the filter property is widely supported across modern
        browsers, but it may not be supported by older browsers. In such cases, you may
        want to use the box-shadow property as a fallback.
      </p>

      <div className="mx-auto my-12 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <p>
          <span className="text-blue-200">
            filter<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            drop-shadow<span className="pl-[4px] text-white ">&#40;</span>
            offset-x
            <span className="text-secondary-300">(&#177;px)</span>, offset-y
            <span className="text-secondary-300">(&#177;px)</span>, blur
            <span className="text-secondary-300">(&#177;px)</span>, color
            <span className="pl-[4px] text-white ">&#41;;</span>
          </span>
        </p>
      </div>

      <ol className="mx-auto max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          Horizontal offset:&#32;
          <span className="font-normal ">
            This value sets the distance the shadow should be offset from the left of the
            element. A positive value will move the shadow to the right, and a negative
            value will move it to the left.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Vertical offset:&#32;
          <span className="font-normal ">
            This value sets the distance the shadow should be offset from the top of the
            element. A positive value will move the shadow down, and a negative value will
            move it up.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Blur radius:&#32;
          <span className="font-normal ">
            This value sets the amount of blur applied to the shadow. A higher value will
            create a more diffuse shadow, while a lower value will create a sharper
            shadow.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Shadow color:&#32;
          <span className="font-normal ">
            This value sets the color of the shadow. This can be any valid CSS color
            value, such as a hex code or a color name.
          </span>
        </li>
      </ol>
    </section>
  )
}

export default Basics
