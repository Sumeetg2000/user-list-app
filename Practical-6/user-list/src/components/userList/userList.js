import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {  fetchUser} from '../../actions/actions'
import Users from './users'
import Paginate from '../pagination/pagination';
import UserCard from '../userCard/card';
import './userList.css'


function UserList() {
        const pageSelector=useSelector(state=>state.page.pn);
        const dispatch=useDispatch();      

        useEffect(()=>{
                dispatch(fetchUser(pageSelector));
        },[pageSelector,dispatch]);
        
        return (
                <div className='container'>
                        <div className='userList'>
                                <div className='header'>
                                        <span>Name</span>
                                        <span>Status</span>
                                        <span>Access</span>
                                </div>
                                <Users />
                                <UserCard />
                        </div>
                        <Paginate page={pageSelector}/>     
                </div>
        );
}

export default UserList;