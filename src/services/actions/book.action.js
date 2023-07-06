import {database} from '../../firebase';
import { set, ref, get, update, remove} from 'firebase/database';
import { ADD_BOOK_FAIL, ADD_BOOK_SUCCESS, SINGLE_RECORD, UPDATE_BOOK} from '../constant/action.types';
import { type } from '@testing-library/user-event/dist/type';


const addBookSuccess = (data) =>{
    return {
        type: ADD_BOOK_SUCCESS,
        payload: data
    }
}

const addBookFail = (err) =>{
    return {
        type: ADD_BOOK_FAIL,
        payload: err
    }
}

const singleRecord = (data) =>{
    return {
        type : SINGLE_RECORD,
        payload : data
    }
}

const editBook = () =>{
    return {
        type : UPDATE_BOOK,
    }
}

export const addBook = (data) =>{
    return dispatch => {
        set(ref(database, 'books/'+ data.id), data).then(() => {
            dispatch(getBooks())
        }).catch((err) => {
            dispatch(addBookFail(err))
        })
     }
}

export const getBooks = () => {

    return dispatch => {
        get(ref(database,'books/')).then((res) => {
            const data = res.val()
            console.log(data);
            if(data !== null){
                const newData = Object.keys(data).map((d) => {
                    return {
                        id : d,
                        ...data[d]
                    }
                });
                dispatch(addBookSuccess(newData));
            }
            else{
                const newData = [];
                dispatch(addBookSuccess(newData));
            }
            // console.log(data);
        })
    }
}

export const getBook = (id, de) =>{

    return dispatch => {
        get(ref(database, `books/${id}`)).then((res) => {
            console.log("Single record", res.val());
            const singleBook = res.val();
            if(de == "delete"){
                dispatch(deleteBook(id));
            }
            else {
                dispatch(singleRecord(singleBook));
            }
        }).catch((err) => {
            console.log("error", err);
        })
    }
}


export const updateBook = (data) =>{

    console.log(data);

    return dispatch => {
        update(ref(database, `books/${data.id}`), data).then(() => {
            dispatch(editBook());
        }).catch((err) => console.log("err",err))
    }
}


export const deleteBook = (id) =>{

    return dispatch => {
        remove(ref(database, `books/${id}`)).then(() =>{
            console.log("delete Success");
            dispatch(getBooks());
        }).catch((err) => {
            console.log("error",err);
        })
    }
}