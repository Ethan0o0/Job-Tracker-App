import {Link, Outlet} from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header>
                <div className="title">
                    <Link to='/'><h1>Job Tracker</h1></Link>
                    <h3>Job tracking app to keep track of applications</h3>
                </div>
                <div className="account-buttons">
                    <Link to='/signup' className='links'><button>Sign Up</button></Link>
                    <Link to='/login' className='links'><button>Log In</button></Link>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}