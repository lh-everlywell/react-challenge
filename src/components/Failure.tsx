import React from "react"
import { Link } from "react-router-dom"

const Failure: React.FC = () => {
    return (
        <div className={"failure"}>
            <h1>Sorry</h1>
            <p>It looks like we had some trouble looking up that item, please click <Link to={"/"}>here</Link> to return to the home page</p>
        </div>
    )
}

export default Failure
