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
      data: string[]
    }
  | {
      type: "demo"
      styleQ: string
      quote: string
      styleA: string
      author: string
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
          return piece.data.map((paragraph, parI) => <div key={parI}>{paragraph}</div>)
        }

      case "code":
        if (typeof piece.data === "string" && "language" in piece) {
          return (
            <div key={uuidv4()}>
              <SyntaxHighlighter
                language={piece.language}
                style={vs2015}
                customStyle={{
                  backgroundColor: "#1e293b",
                  borderRadius: "12px",
                  borderWidth: `2px`,
                  borderColor: `#334155`,
                  boxShadow: `0px  0px  20px  0px  rgba(94,  161,  255,0.8)`,
                  width: `fit-content`,
                  margin: `3rem auto`,
                  padding: `2rem 1.5rem`,
                }}
              >
                {piece.data}
              </SyntaxHighlighter>
            </div>
          )
        }

      case "list":
        if (Array.isArray(piece.data)) {
          const list = piece.data.map((li, itemI) => (
            <li key={itemI} className="mb-4 list-decimal font-bold">
              <span>{li.substring(0, li.indexOf(":"))}:</span>
              <span className="font-medium ">{li.substring(li.indexOf(":") + 1)}</span>
            </li>
          ))

          if ("kind" in piece && piece.kind === "ol") {
            return (
              <ol key={uuidv4()} className="mx-auto max-w-xl">
                {list}
              </ol>
            )
          } else if ("kind" in piece && piece.kind === "ul") {
            return (
              <ul key={uuidv4()} className="mx-auto max-w-xl">
                {list}
              </ul>
            )
          }
        }

      case "demo":
        if ("styleQ" in piece) {
          return (
            <div key={uuidv4()} className={piece.styleQ}>
              <blockquote>
                <q>{piece.quote}</q>
                <p className={piece.styleA}>&mdash; {piece.author}</p>
              </blockquote>
            </div>
          )
        }
      default:
        return
    }
  }

  return (
    <article>
      <h2 className="text-center font-cursiveCustom text-2xl">{data.title}</h2>
      {data.sections.map((section, i) => (
        <div key={i}>
          <h3 id={section.id} className="mt-16 mb-4 font-cursiveCustom text-xl">
            {section.title}
          </h3>
          {section.content.map(piece => SwitchFunc(piece))}
        </div>
      ))}
    </article>
  )
}
