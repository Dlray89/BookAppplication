


//import actions fro data call to server
import { FETCH_DATA, UPDATE_BOOKS } from "../actions"


//set initialState here
export const initialState = {
    books: [],
    isFetchingData: false
}

//set action up

export const bookReducer = (state = initialState, action) => {
    switch ( action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData:true,
                books: []
            };
            case UPDATE_BOOKS:
                return {
                    ...state,
                    books: action.payload,
                    isFetchingData: false
                }
                default: 
                    return state
                
    }
}