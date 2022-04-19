import axios from "axios";

import { USER_FETCHING, USER_FETCH_SUCCESS, USER_FETCH_ERROR, CHANGE_PAGE, CARD_VISIBILITY } from "./actionTypes";

export const fetchUser= (pn)=>{ 
    return function(dispatch){
        dispatch({
            type:USER_FETCHING,
            payload:[]
        })
        axios.get(`https://reqres.in/api/users?page=${pn}`)
        .then(response=>{
            dispatch(fetchUserSuccess(response.data.data));
        })
        .catch((error)=>{
            dispatch({
                type:USER_FETCH_ERROR,
                payload:error.message,
            })
        });
    };
};

function fetchUserSuccess(data){
    let userData=data.map((user)=>{
        return{
            id:user.id,
            firstName:user.first_name,
            lastName:user.last_name,
            email:user.email,
            avatar:user.avatar,
            status:user.id===1?"active":"inactive",
            access:user.id===1?"owner":"read",
            
        }
        });
        
    return{
        type:USER_FETCH_SUCCESS,
        payload: userData,
    };
}

export const showCard=(data)=>{
    return function(dispatch){
        dispatch({
            type:CARD_VISIBILITY,
            payload:data,
        });
    };
}

export const changePage=(page)=>{
    return function(dispatch){
        dispatch({
            type:CHANGE_PAGE,
            page:page
        })
    }
};