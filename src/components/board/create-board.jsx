



function CreateBoard({ createBoard }){

    return (
        <div>
            <form>
            <button onClick={ createBoard } type="button" className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Board
            </button>
            </form>

        </div>
    )
}

export default CreateBoard;