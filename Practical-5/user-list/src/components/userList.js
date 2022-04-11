import React from 'react'
import Users from './users'
import './userList.css'


function UserList() {
        return (
                <div className='container'>
                        <div className='userList'>
                                <div className='header'>
                                        <span>Name</span>
                                        <span>Status</span>
                                        <span>Access</span>
                                </div>
                                <Users />
                        </div>
                </div>
        );
}

export default UserList;