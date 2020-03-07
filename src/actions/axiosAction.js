import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_BOOK = "UPDATE_BOOK";



export const getData = () =>
dispatch({type: FETCH_DATA });
axios
.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=0AjLiy1yPFRQdjP2anUaZiBALrfh5FSN')
.then(res => {
    console.log("Book list", res)
    dispatch({ type: UPDATE_BOOK, payload:res.data.results})
})
.catch(error => console.log("Fetching crashed", error))
