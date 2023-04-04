/** @format */
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter"
//@ts-ignore
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

type Content =
  | {
      type: "paragraph"
      data: string[]
    }
  | {
      type: "code"
      language: "css" | "javascript"
      data: string
    }
  | {
      type: "list"
      kind: "ul" | "ol"
      data: string[] | React.ReactNode[]
    }
  | {
      type: "demo"
      inlineStyle?: object
      styleC: string
      styleQ: string
      quote: string | React.ReactNode
      styleA: string
      author: string
    }
  | {
      type: "demo"
      element: React.ReactNode
    }
  | {
      type: "subHeader"
      subHeader: string
    }

export type BlogData = {
  title: React.ReactNode
  id: string
  sections: {
    title: string
    id: string
    content: Content[]
  }[]
}

type Data = { data: BlogData }

export default function BlogGenerator({ data }: Data) {
  const SwitchFunc = (piece: Content) => {
    switch (piece.type) {
      case "paragraph":
        if (Array.isArray(piece.data)) {
          return piece.data.map(paragraph => <div key={uuidv4()}>{paragraph}</div>)
        }

      case "code":
        if (typeof piece.data === "string" && "language" in piece) {
          return (
            <div key={uuidv4()}>
              <SyntaxHighlighter
                language={piece.language}
                style={vs2015}
                wrapLongLines={true}
                customStyle={{
                  backgroundColor: "#1e293b",
                  borderRadius: "12px",
                  borderWidth: `2px`,
                  borderColor: `#334155`,
                  boxShadow: `0px  0px  20px  0px  rgba(94,  161,  255,0.8)`,
                  width: `fit-content`,
                  margin: `3rem auto`,
                  padding: `2rem 1.5rem`,
                  overflowX: "hidden",
                }}
              >
                {piece.data}
              </SyntaxHighlighter>
            </div>
          )
        }

      case "list":
        if (Array.isArray(piece.data)) {
          const list = piece.data.map(li => {
            if (typeof li === `string`) {
              return (
                <li key={uuidv4()} className="mb-4 list-decimal font-bold  ">
                  {li.includes(`:`) ? (
                    <>
                      <span>{li.substring(0, li.indexOf(":"))}:</span>
                      <span className="font-normal ">
                        {li.substring(li.indexOf(":") + 1)}
                      </span>
                    </>
                  ) : (
                    <span className="font-normal ">{li}</span>
                  )}
                </li>
              )
            } else return <span key={uuidv4()}>{li}</span>
          })

          if ("kind" in piece && piece.kind === "ol") {
            return (
              <ol key={uuidv4()} className="mx-auto my-8 max-w-xl">
                {list}
              </ol>
            )
          } else if ("kind" in piece && piece.kind === "ul") {
            return (
              <ul key={uuidv4()} className="mx-auto  my-8 max-w-xl">
                {list}
              </ul>
            )
          }
        }

      case "demo":
        if (`element` in piece) {
          return <span key={uuidv4()}>{piece.element}</span>
        } else if ("styleQ" in piece) {
          return (
            <div
              key={uuidv4()}
              className={`${piece.styleC} !my-12`}
              style={piece.inlineStyle}
            >
              <blockquote>
                <q className={piece.styleQ}>{piece.quote}</q>
                <p className={piece.styleA}>&mdash; {piece.author}</p>
              </blockquote>
            </div>
          )
        }

      case "subHeader":
        if (`subHeader` in piece) {
          return (
            <h3 key={uuidv4()} className="my-8  font-cursiveCustom">
              {piece.subHeader}
            </h3>
          )
        }
      default:
        return
    }
  }

  return (
    <article key={uuidv4()}>
      <h2 id={data.id} className="text-center font-cursiveCustom text-2xl">
        {data.title}
      </h2>
      {data.sections.map(section => (
        <div key={uuidv4()} className="menuContainer mb-4  mt-16 ">
          <h3 id={section.id} className="menuHeader py-4  px-6 font-cursiveCustom text-xl">
            {section.title}
          </h3>
          <div key={uuidv4()} className="my-8 py-4  px-8">
            {section.content.map(piece => SwitchFunc(piece))}
          </div>
        </div>
      ))}
    </article>
  )
}
