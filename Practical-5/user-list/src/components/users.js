import PrintUser from './printUser'
import './users.css'

export const allUsers=[{
    id:1,
    avatar:"https://reqres.in/img/faces/1-image.jpg",
    firstName: "Michael",
    lastName: "Lawson",
    email: "michael.lawson@reqres.in",
    status:"active",
    access:'owner'
},
{
    id:2,
    avatar:"https://reqres.in/img/faces/2-image.jpg",
    firstName: "Rachel",
    lastName: "Howell",
    email: "rachel.howell@reqres.in",
    status:"inactive",
    access:'manager'
},
{
    id:3,
    avatar:"https://reqres.in/img/faces/3-image.jpg",
    firstName: "Lindsay",
    lastName: "Ferguson",
    email: "lindsay.ferguson@reqres.in",
    status:"inactive",
    access:'read'
},
{
    id:4,
    avatar:"https://reqres.in/img/faces/4-image.jpg",
    firstName: "George",
    lastName: "Edwards",
    email: "george.edwards@reqres.in",
    status:"inactive",
    access:'manager'
},
{
    id:5,
    avatar:"https://reqres.in/img/faces/5-image.jpg",
    firstName: "Byron",
    lastName: "Fields",
    email: "byron.fields@reqres.in",
    status:"inactive",
    access:'manager'
},
{
    id:6,
    avatar:"https://reqres.in/img/faces/6-image.jpg",
    firstName: "Tobias",
    lastName: "Funke",
    email: "tobias.funke@reqres.in",
    status:"inactive",
    access:'read'
},
{
    id:7,
    avatar:"https://reqres.in/img/faces/7-image.jpg",
    firstName: "Jube",
    lastName: "Bowman",
    email: "ullrich.owen@kristin.biz",
    status:"inactive",
    access:'manager'
},
{
    id:8,
    avatar:"https://reqres.in/img/faces/8-image.jpg",
    firstName: "Nombeko",
    lastName: "Mabandia",
    email: "kale_lehener@yahoo.com",
    status:"inactive",
    access:'read'
},
{
    id:9,
    avatar:"https://reqres.in/img/faces/9-image.jpg",
    firstName: "Michael",
    lastName: "Lawson",
    email: "michael.lawson@reqres.in",
    status:"inactive",
    access:'manager'
},
{
    id:10,
    avatar:"https://reqres.in/img/faces/10-image.jpg",
    firstName: "Phawta",
    lastName: "Tuntayakul",
    email: "ullrich.owen@kristin.biz",
    status:"inactive",
    access:'manager'
}];

function Users(){
  
    return(
        <ul>
            {allUsers.map((user )=>{
                return(
                    <PrintUser key={user.id} {...user} />
                );
            })}
        </ul>
    );
    
}
export default Users;


