import "./Login.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import logo from "../assets/Logo-TGCC.jpg";

function Login() {
  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="TGCC Logo" className="logo" />
      </div>

      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" />
          </div>
        </div>
        <div className="forgot-password">
          Forget password?   <button className="link-button">Click here</button>

        </div>
        <div className="submit-container">
          <button className="submit">Sign Up</button>
          <button className="submit">Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
