import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';


const Header = () => {
const {user, logOut}= useContext(AuthContext)
console.log('context', user);

const handelSingIn = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.error(error))
}

    return (
        <div>
        
              <div className="navbar bg-primary text-primary-content">
             <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth UI</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/login'>LogIn</Link>
             {user?.email && <span>Welcome- {user.email}</span>}
             {
                user?.email?
                <button onClick={handelSingIn} className="btn btn-outline btn-info">Log Out</button>
                : <Link  to='/login'>
                    <button className='btn btn-outline btn-info'>Log In</button>
                </Link>
             }
            </div>
        </div>
    );
};

export default Header;