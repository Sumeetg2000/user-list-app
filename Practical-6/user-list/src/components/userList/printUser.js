import React from 'react';
import * as Icon from 'react-feather';
import { useDispatch } from 'react-redux';
import { showCard } from '../../actions/actions';

import './printUser.css';

function PrintUser(user){
    const dispatch=useDispatch();

    const handleMouseEnter=()=>{
        dispatch(showCard(user));
    }

    const handelMouseLeave=()=>{
        dispatch(showCard({}));
    }

    return(
        <li className="unitUser">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handelMouseLeave} className='avatar'>
                <span><img src={user.avatar} alt="avatar"/></span>
            </div>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handelMouseLeave} className='details'>
                <p className='name'>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
            </div>
            {
                user.id===1
                ?<div className='userDetails'>
                    <div className='statusBlock'>
                        <span className='active'>Active</span>
                    </div>
                    <div className='accessBlock'>
                        <span>owner</span>
                    </div>
                    <span className='icon'><Icon.Lock /></span>
                </div>
                :<div className='userDetails'>
                    <div className='statusBlock'>        
                        <select className='status' >
                            <option value='inactive'>Inactive</option>
                            <option value='active'>Active</option>
                        </select>    
                    </div>
                    <div className='accessBlock'>
                        <select className='access'>
                            <option value='read'>Read</option>
                            <option value='manager'>Manager</option>
                        </select>                           
                    </div>
                    <span className='icon'><Icon.Trash2 /></span>
                </div>
            }
        </li>
    );
}
export default PrintUser;