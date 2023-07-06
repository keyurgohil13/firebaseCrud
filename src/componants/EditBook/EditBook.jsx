import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from '../../services/actions/book.action';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function EditBook() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { book } = useSelector(state => state.bookReducer);

    const [initial, setInitial] = useState(book);
    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({...initial, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateBook(initial));
    }

    if(book == null) {
        navigate('/');
    } else {

        return (
          <>
              <div style={{width: "500px", padding: "15px", border:"1px solid black", margin: '0 auto'}}>
                  <div>
                      <h1>
                          Edit Book
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
                                 Update
                              </button>
      
                          </form>
                      </div>
                  </div>
              </div>
          </>
        )
    }
}

export default EditBook;