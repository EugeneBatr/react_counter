import React, { useState, useCallback } from 'react'
import ToDoListLayout from '../components'

const  ToDoListContainer = () => {

        const [formData, setFormData] = useState({note: ''})

        const handleFormChange = useCallback((event) => {
                        const {value, name} = event.target;
                        
                        setFormData({...formData,[name]: value});
                        
                },[formData])

        

        const [noteData, setNoteData]  = useState([])    
        
        const handleCreateNote = useCallback(() => {

                const copy = {...formData}

                const newNote = {
                        note: copy.note
                        }
                
                console.log(newNote);
                setNoteData([...noteData, newNote])
                },[formData])


                const handleNoteRemove = useCallback((index) => {
                        setNoteData(state => {
                                const copy = [...state]
        
                                copy.splice(index, 1)

                                return copy.map(({note}) => ({
                                        note: note
                                }));
        
                        })
                })
                
                const [isHidden, setIsHidden] = useState(false)

                const handleRedacted = useCallback((isHidden) => {

                                const newHidden = isHidden === true ? false : true
                                
                                
                                setIsHidden(newHidden)

                        },[])
                        console.log(isHidden)
        return (
        <ToDoListLayout 
                isHidden={isHidden}
                noteData={noteData}
                formData={formData}
                handleNoteRemove={handleNoteRemove}
                handleFormChange={handleFormChange}
                handleCreateNote={handleCreateNote}
                handleRedacted={handleRedacted}
        />
        )
}

export default ToDoListContainer
