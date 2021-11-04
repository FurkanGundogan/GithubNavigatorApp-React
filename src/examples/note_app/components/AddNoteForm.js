import React, {useState,useContext} from "react"
import NotesContext from "../context/Note-Context";
const AddFormNote = () => {

    const {dispatch} = useContext(NotesContext)

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    const addNote = (e)=> {
        e.preventDefault();

        if(title){
            /*setNotes([
                ...notes,
                {title,body}
            ])*/
            dispatch({type:'ADD_NOTE',title,body})

            setTitle('')
            setBody('')
        }

    }

   

    return (
        <form onSubmit={addNote}>
            <div className="form-group">
                <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="form-control mt-3"></textarea>
            </div>
            <button className="btn btn-primary btn-block mt-3">Add Task</button>
    </form>     
    )
}




export default AddFormNote