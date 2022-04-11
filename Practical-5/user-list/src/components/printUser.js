import './printUser.css';
import Card from './card';
import * as Icon from 'react-feather';

function PrintUser(user){
    return(
        <li className="user">
            <div className='avatar'>
                <span><img src={user.avatar} alt="avatar"/></span>
            </div>
            <div className='details'>
                <p className='name'>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
            </div>
            {
                user.id===1
                ?<>
                <div className='statusBlock'>
                    <span className='active'>Active</span>
                </div>
                <div className='accessBlock'>
                    <span>owner</span>
                </div>
                <span className='icon'><Icon.Lock /></span>
                </>
                :<>
                <div className='statusBlock'>        
                    <select className='status' defaultValue={user.status==='inactive'?'inactive':'active'}>
                        <option value='inactive'>Inactive</option>
                        <option value='active'>Active</option>
                    </select>    
                </div>
                <div className='accessBlock'>
                    <select className='access' defaultValue={user.access==='read'?'read':'manager'}>
                        <option value='manager'>Manager</option>
                        <option value='read'>Read</option>
                    </select>                           
                </div>
                <span className='icon'><Icon.Trash2 /></span>
                </>
            }
            <Card {...user}/>
        </li>
    );
}
export default PrintUser;