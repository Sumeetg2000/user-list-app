import './card.css'

export default function Card(user) {
   return(
   <div className='card'>
       <div className='cardDiv'> 
       <img src={user.avatar} alt='avatar'/>
       <p className='name'>{user.firstName} {user.lastName} <sup className={user.status==='active'?"status active":"status inactive"}>.</sup></p>
       <p className='email'>{user.email}</p>
       <p className='plan'>Your Plan:Standard</p>
       <button className='userStatus'>{user.status} user</button>
       <div className='planUse'>
       <p>Plan Uses</p>
       <div className='line'></div>
       </div>
       <div className='cardFooter'>
           <div className='reviews'>
               <p className='number'>2,450</p>
               <p className='footerText'>clicks reviewed</p>
           </div>
           <div className='vl'></div>
           <div className='clicks'>
           <p className='number'>2,450</p>
               <p className='footerText'>Monthly clicks</p>
           </div>
        </div>       
       </div>
    </div>);
}