import { USER_FETCHING, USER_FETCH_SUCCESS, USER_FETCH_ERROR, CHANGE_PAGE, CARD_VISIBILITY } from "../actions/actionTypes";
export const initialState={
    loading:false,
    users:[],
    error:""
};

export const UserReducer=(state=initialState, action)=>{
    switch (action.type) {
        case USER_FETCHING:
            return{
                loading:true
            }
        case USER_FETCH_SUCCESS:
            return{
                loading:false,
                users:action.payload,
            }   
        case USER_FETCH_ERROR:
            return{
                loading:false,
                error:action.payload
            } 
        default:
            return state
    }
};

export const pageReducer=(state={pn:1},action)=>{
    switch (action.type) {
        case CHANGE_PAGE:
            return{
                pn:action.page
            }
        default:
            return state
    }
};

export const cardReducer=(state={userData:{}},action)=>{
    switch (action.type) {
        case CARD_VISIBILITY:
            return{
                userData:action.payload,
            }    
        
        default:
            return state;
    }

}