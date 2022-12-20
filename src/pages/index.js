import React from "react"
import { Link } from "gatsby"
import "../layouts/index.css"

const Indexpage = () =>{
  return(
    <div>
     <div className="Hero">
      <div className="heroGroup">
        <h1>Hello welcome to Cording World!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <Link to="/page-2">Watch the video</Link>

      </div>

     </div>
    </div>
  )
}
export default Indexpage

export const Head = () => <title>Cording World</title>
