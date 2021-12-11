import { createContext, useReducer, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { collection, getDocs, onSnapshot, doc, setDoc, addDoc, deleteDoc } from "firebase/firestore"; 
import { db } from '../firebase/config'





 export const NotesContext = createContext()

 const notesReducer = (state, action)=>{

    switch (action.type) {
        case 'GET_NOTES':
            const noteList = [...state.notes]
            console.log('action.payloa:', action.payload)

            return {...state, notes: action.payload}
        case 'ADD_NOTE':
            // console.log('from add_note', action.payload)
            
            return {...state}
            
        case 'DELETE_NOTE':
            const oldState = [...state.notes]
            const newNotes = oldState.filter((note)=>{
                return note.id !== action.payload
            })
            return {...state}
    
        default:
            return state
    }



 }

export const NotesProvider = ({children}) => {

    const [state, dispatch] = useReducer(notesReducer, {
        notes:[
           
        ]
    }
    )
    // console.log('state', state)

    const addNote = async(note)=>{
         console.log('from add note', note)
        const colref = collection(db, 'notes')
        await addDoc(colref, {
            title: note,
            id: uuidv4()
        })

        dispatch({type: 'ADD_NOTE', payload: note})

    }

    const deleteNote = async(id)=>{
        console.log('ID', id )
        await deleteDoc(doc(db, 'notes', id))

        dispatch({type: 'DELETE_NOTE', payload: id})
    }

    const getNotes = () => {

        const colref = collection(db, 'notes')
        onSnapshot(colref, (snapshot)=>{
            let notesList = []


       

       
            if (snapshot.empty) {
                return
               
        
            } else {
            //    console.log('snapshot', snapshot)
            //    console.log('snapshot DOCS', snapshot.docs)
               snapshot.docs.forEach(note=>{

                   notesList.push({ ...note.data(), id: note.id})
                //    console.log('notesList', notesList)


               })
              
        
        
            }
            dispatch({type:'GET_NOTES', payload: notesList})


        })
            
  

    }




    return (
        <NotesContext.Provider value={{...state, addNote, deleteNote, getNotes}}>


            {children}
        </NotesContext.Provider>
        )


    
    
}



