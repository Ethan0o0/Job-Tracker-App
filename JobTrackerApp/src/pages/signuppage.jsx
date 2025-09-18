import '../components/css/signuppage.css'

export default function SignUp(){
    return(
        <div className='signup-container'>
            <form action="" className="signup-form">
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label><br />
                    <input type="password" id="confirm-password" name="confirm-password"/>
                </div>
                <input type="submit" value='submit' id='submit-button'/>
            </form>
        </div>
    )
}