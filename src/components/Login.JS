import React, { useState } from "react";
import '../styles/Login.css'
import ClusterLogo from '../img/Cluster Logo.png'


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="login">
        <div className="auth-form-container">
            <img
                    src={ClusterLogo}
                    width={220}
                    height={220}
                    alt="Cluster Logo"
                />
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Usuario o correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Acceder</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('forgotpassword')}>¿Olvidaste tu contraseña?</button>
            </form>
        </div>
        </div>

        
    )
    
}

export default Login