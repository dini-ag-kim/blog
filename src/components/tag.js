import * as React from "react"
import { Link } from "gatsby"
import { stringToColor } from "../common"

export const Tag = ({ tag }) => {
  return (
    <Link to={"/" + tag} style={{ backgroundColor: stringToColor(tag) }} className="chip">
      {tag}
    </Link>
  )
}
