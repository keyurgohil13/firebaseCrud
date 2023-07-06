import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../../services/actions/book.action';
import { v4 as uuid } from 'uuid';

function AddBook() {

    const dispatch = useDispatch()
    const [initial, setInitial] = useState({
        title:'',
        author:''
    });
    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({...initial, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        let uid = uuid();
        const data = {...initial, id: uid.slice(0,5)}
        dispatch(addBook(data));
        setInitial({
            title: '',
            author: ''
        })
    }
  return (
    <>
        <div style={{width: "500px", padding: "15px", border:"1px solid black", margin: '0 auto'}}>
            <div>
                <h1>
                    Add Book
                </h1>

                <div>
                    <form onSubmit={(e) => {handleSubmit(e)}}>

                        <label>
                            Title
                        </label>
                        <input type={'text'} name="title" value={initial.title} onChange={(e) => {handleChange(e)}}/>

                        <br/>

                        <label>
                            Author
                        </label>
                        <input type={'text'} name="author" value={initial.author} onChange={(e) => {handleChange(e)}}/>

                        <br/>

                        <button type='submit'>
                            Add
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddBook;