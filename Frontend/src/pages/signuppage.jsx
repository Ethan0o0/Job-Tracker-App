import '../components/css/signuppage.css'

export default function SignUp(props){
    return(
        <div className='signup-container'>
            <form action="" className="signup-form" onSubmit={props.submit}>
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name="name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" required/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label><br />
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                </div>
                <input type="submit" value='submit' id='submit-button'/>
            </form>
        </div>
    )
}