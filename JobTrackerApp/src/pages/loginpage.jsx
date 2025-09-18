import '../components/css/login.css'

export default function LoginPage(){
    return (
        <div className="login-form-container">
            <form action="" className="login-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>

            </form>
        </div>
    )
}