import React, {useEffect,useReducer } from "react"
import notesReducer from '../reducers/notes'
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm"
import NotesContext from "../context/Note-Context";
const NoteApp = () => {

    //const [notes,setNotes] = useState([]);
    const [notes,dispatch]=useReducer(notesReducer,[])
   

    useEffect(()=>{
        const notesData=JSON.parse(localStorage.getItem('notes'))
        if(notesData){
            //setNotes(notesData)
            dispatch({type:'POPULATE_NOTES',notes:notesData})
        }
    },[])


    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])

    

    return (
        <NotesContext.Provider value={{notes,dispatch}}>
            <div className="container p-5">
                <div className="card mb-3">
                    <div className="card-header">Notes</div>
                    {
                        notes && (
                            <table className="table table-sm table-strippted mb-0">
                                <tbody>
                                    {
                                        <NoteList/>
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="card mb-3">
                    <div className="card-header">Add New Task</div>
                    <div className="card-body">
                        <AddNoteForm/>

                    </div>
                </div>
            </div>
        </NotesContext.Provider>
    )
}

export default NoteApp;
