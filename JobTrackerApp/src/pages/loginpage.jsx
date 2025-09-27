import '../components/css/login.css'
import {useNavigate} from 'react-router-dom'

export default function LoginPage(props){

    const navigate = useNavigate();

    return (
        <div className="login-form-container">
            <form action="" className="login-form" onSubmit={props.submit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password'/>
                </div>
                <input type="submit" value='submit' id='submit-button'/>
            </form>
        </div>
    )
}