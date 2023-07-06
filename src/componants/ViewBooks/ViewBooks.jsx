import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getBook, getBooks } from '../../services/actions/book.action'

function ViewBooks() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { books, isEdit } = useSelector(state => state.bookReducer);
    const handleClick = () => {
        dispatch(getBooks());
    }

    const handleEdit = (id) =>{
        console.log(id,"edit id");
        dispatch(getBook(id));
        
    }

    const handleDelete = (id, de) =>{
        console.log(id, de, "Delete ID");

        dispatch(getBook(id, de));
    }
    useEffect(() => {
        handleClick();
    }, [])


    if(isEdit){
        navigate('/editBook');
    }
    else{

        return (
            <>
                <div style={{ width: "500px", padding: "15px", border: "1px solid black", margin: '0 auto' }}>
                    <h5>
                        View Books
                    </h5>

                    {
                        books !== null ?
                            <ul>
                                {
                                    books.map((book) => {
                                        return (
                                            <li>
                                                <span>
                                                    {
                                                        book.title
                                                    }
                                                </span>
                                                <p>
                                                    {
                                                        book.author
                                                    }
                                                </p>
                                                <button onClick={() => handleEdit(book.id)}>
                                                    Edit
                                                </button> || 
                                                <button onClick={() => handleDelete(book.id, "delete")}>
                                                    Delete
                                                </button>
                                            </li>
                                        )
                                    })

                                }
                            </ul>
                            :
                            null
                    }
                </div>
            </>
        )
    }
}

export default ViewBooks