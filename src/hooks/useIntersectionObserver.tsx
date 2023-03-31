/** @format */

import { useEffect, useState, MutableRefObject } from "react"

export default function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options = {},
  baseColor: string
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        if (ref.current) {
          observer.unobserve(ref.current) // Stop observing when the element is in view
        }
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options, baseColor])

  useEffect(() => {
    setIsIntersecting(false)
  }, [baseColor])

  return isIntersecting
}
