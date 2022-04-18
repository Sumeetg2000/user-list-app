import React from 'react';
import { useSelector } from 'react-redux';

import './card.css'

export default function userCard() {
    const userData=useSelector(state=>state.card.userData);

    return(
        <div className={userData.id?'visible card' : 'card'}>
            <div className='cardDiv'> 
                <img src={userData.avatar} alt='avatar'/>
                <p className='name'>{userData.firstName} {userData.lastName} <sup className={userData.id===1?"status active":"status inactive"}>.</sup></p>
                <p className='email'>{userData.email}</p>
                <p className='plan'>Your Plan:Standard</p>
                <button className='userStatus'>{userData.status} user</button>
                <div className='planUse'>
                    <p>Plan Uses</p>
                    <div className='line' />
                </div>
                <div className='cardFooter'>
                    <div className='reviews'>
                        <p className='number'>2,450</p>
                        <p className='footerText'>clicks reviewed</p>
                    </div>
                    <div className='vl' />
                    <div className='clicks'>
                        <p className='number'>2,450</p>
                        <p className='footerText'>Monthly clicks</p>
                    </div>
                </div>       
            </div>
        </div>
    );
}