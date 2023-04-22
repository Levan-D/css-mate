/** @format */

import { useAppSelector } from "../app/hooks"
import styles from "./bgAnimattion.module.css"

type Props = {}

export default function BgAnimation({}: Props) {
  const { docHeight } = useAppSelector(store => store.navbar)

  return (
    <div>
      <style>
        {`
    
    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }
      80% {
     border-radius: 50%;
      }
      100% {
        transform: translateY(-${docHeight + 200}px) rotate(720deg) scaleY(0.90);
        opacity: 0;

        border-radius: 100%;
      }
    }

  `}
      </style>

      <ul className="circles invisible md:visible" style={{ height: `${docHeight}px` }}>
        {[...Array(10)].map((x, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  )
}
