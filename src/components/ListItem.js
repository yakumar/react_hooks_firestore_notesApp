import React from 'react'
import { useContext } from 'react'
import {NotesContext} from '../context/notesContext'

const ListItem = (props) => {
    const value = useContext(NotesContext)

   
    return (
        <>

            <div>{props.body}
            <button onClick={()=>value.deleteNote(props.id)}> Delete</button>
            </div>


            
        </>
    )
}

export default ListItem
