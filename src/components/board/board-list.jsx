import { useState } from "react"
import CreateBoard from "./create-board";





function BoardList( {children} ){

    const [boards, setBoards] = useState([])



    return (
        <div className={`fixed top-0 w-full grid grid-cols-1 bg-gray-300 gap-4 sm:grid-cols-2`}>
        { children }
        </div>
    )
}

export default BoardList;