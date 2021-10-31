import React from 'react'
import NoteComponent from './noteComponent'

const  ToDoListLayout = ({handleFormChange, formData, handleCreateNote, noteData,handleNoteRemove,handleRedacted, isHidden}) => {
        return (
                <div>
                <h1>To Do List</h1>
                        <form>
                                <input 
                                onChange={handleFormChange} 
                                value={formData.note} 
                                type='note' 
                                name='note'/>
                        </form>
                        <button onClick={handleCreateNote}>Create Note</button>
                        <div>{noteData.map(({note}, index) => (
                                <NoteComponent 
                                isHidden={isHidden}
                                note={note}
                                index={index}
                                handleNoteRemove={handleNoteRemove}
                                handleRedacted={() =>handleRedacted(isHidden, index)}
                                />


                               
                        ))}</div>
                </div>
        )
}

export default ToDoListLayout
