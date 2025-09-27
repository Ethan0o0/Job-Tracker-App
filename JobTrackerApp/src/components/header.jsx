import {Link, Outlet} from 'react-router-dom'

export default function Header(props){
    return(
        <>
            <header>
                <div className="title">
                    <Link to='/'><h1>Job Tracker</h1></Link>
                    <h3>Job tracking app to keep track of applications</h3>
                </div>
                { props.isLoggedIn ? 
                <div className='user'>
                    <h2 id='username'>{props.user}</h2>
                    <button id='logout' onClick={props.logOut}>LogOut</button>
                </div> : 
                <div className="account-buttons">
                    <Link to='/signup' className='links'><button>Sign Up</button></Link>
                    <Link to='/login' className='links'><button>Log In</button></Link>
                </div> }
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}