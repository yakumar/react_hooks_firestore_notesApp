import React, {useState, useContext, useEffect} from 'react'
import ListItem from '../components/ListItem'
import { NotesContext } from '../context/notesContext'
import { db } from '../firebase/config'
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore"; 





const Notes = () => {

    const [text, setText] = useState("");

    const value = useContext(NotesContext)

    const [data, setData] = useState(null)

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        value.getNotes()   

    }, [])


    

    //  console.log('value', value)

    //  const deleteItem = (id)=>{

    //     console.log(id)
    //     value.deleteNotes
        

    //  }


    const submitForm = (e)=>{
        e.preventDefault()
        

         value.addNote(text)
         setText("")




    }
    console.log('vale:', value)
    // let myNotes = value.notes
    // if(myNotes <1) {
    //     console.log('mynotes', myNotes.length)
    //     return(<div></div>)
    // }
    // console.log('mynotes1', myNotes.length)

    
    return (
        <div>
            <h2>Notes</h2>
            {value.notes.length > 0 ? "Positive": "negative"}
            {value.notes.length}
            {value.notes.length > 0 && value.notes.map((note)=>{
                return <div key={note.id}><ListItem body={note.title} id={note.id} /></div>

            })}

            <form>
                <input value={text} onChange={(e)=>setText(e.target.value)}/>
                <button onClick={submitForm}>Submit</button>

            </form>
            <h1>{text}</h1>
            
        </div>
    )
}

export default Notes




// (snapshot)=>{
    // if (snapshot.empty) {
    //     setError('No Notes to load')
    //     setIsPending(false)

    // } else {
    //    let notes = []
    //    console.log('snapshot', snapshot)
    //    console.log('snapshot DOCS', snapshot.docs)
    //    snapshot.docs.forEach(note=>{
    //        notes.push({ ...note.data(), id: note.id})
    //    })
    //    console.log(notes)
    //    setData(notes)
    //    value.getNotes(notes)

    //    setIsPending(false)


    // }
    
// }