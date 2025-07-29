"use client"

import { useInView } from "framer-motion"
import { RefObject } from "react"

const useInViewOnce = (ref: RefObject<HTMLElement | null>) => {
  const isInView = useInView(ref, {amount: "all"})
  return isInView
}

export default useInViewOnce