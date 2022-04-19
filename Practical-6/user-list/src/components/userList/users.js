import React from 'react';
import { useSelector } from 'react-redux';

import PrintUser from './printUser';
import './users.css'



function Users(){
    const allUsers=useSelector((state)=>state.users);

    return(
        <ul>
            {
                allUsers.users &&
                allUsers.users.map((user )=>{
                    return(
                        <PrintUser key={user.id} {...user} />
                    );
                })
            }
        </ul>
    );
    
}
export default Users;