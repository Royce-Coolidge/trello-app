import useState from "react"


function Board(){

    const [listName, setListName] = useState("")

    return(
        <div classname="">
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Createa a List
                </h3>
            </div>

                <input
                    classname="input"
                    value={listName}


                />
        </div>
    )
}