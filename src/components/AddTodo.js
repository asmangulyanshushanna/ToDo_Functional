import React from 'react';

export default function AddTodo (props) {
    return (
        <form onSubmit = {props.addTodo} style = {{ display: 'flex' }} id='myForm'>
            <input 
                type = 'text'
                name = 'title'
                style = {{ flex: '10' }}
                placeholde = 'Add Todo'
             />
             <input
                type = 'Submit'
                style = {{ flex: '1' }}
             />
        </form>
    )
}