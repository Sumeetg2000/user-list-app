import React from "react";
import { useDispatch } from "react-redux";

import { changePage } from "../../actions/actions";
import "./pagination.css"

export default function Paginate(page){
    const dispatch=useDispatch();
    const handleClick=(e)=>{
                const num=Number(e.target.innerHTML);
                dispatch(changePage(num));
        }
        return(
                <div className="pagination">
                        <button onClick={handleClick}  className={page.page===1?"selected page" : "page"}>
                                1
                        </button>
                        <button onClick={handleClick} className={page.page===2?"selected page" : "page"}>
                                2
                        </button>
                </div>   
        );
};