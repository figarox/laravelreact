import '../Style/login.css';
import { Link } from "react-router-dom";

const Login = () => {

    return (  
        <>
            <div className='bodyLogin'>
                <div className="window-login">

                    <div className='text'>
                        <h2>Sign in to your account</h2>
                        <p>Or <Link to="/signup">start your 14-day free trial</Link></p>
                    </div>
        
                    <form className='login'>
                        <input type='text' placeholder='Email address' required></input>
                        <input type='password' placeholder='Password' required></input>
                    </form>

                    <div className='remeber-forgot'>
                            <div className='remeber-me'>
                                <input type='checkbox'></input>Remeber me
                            </div>
                            <div className='forgot'>
                                <a>Forgot your password?</a>
                            </div>
                    </div>

                    <div className="sing-in" onSYubmit="">
                        Sing in
                    </div>
                </div>  
           
                   
            </div>
           
        </>
    );
}
 
export default Login;