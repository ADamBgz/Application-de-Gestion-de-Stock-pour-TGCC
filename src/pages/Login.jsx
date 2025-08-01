import "./Login.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import logo from "../assets/Logo-TGCC.jpg";
import { useTranslation } from "react-i18next"; // Ajout

function Login() {
  const { t } = useTranslation(); // Ajout

  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="TGCC Logo" className="logo" />
      </div>

      <div className="container">
        <div className="header">
          <div className="text">{t("Sign Up")}</div> {/* Traduction */}
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder={t("Username")} /> {/* Traduction */}
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder={t("Email")} /> {/* Traduction */}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder={t("Password")} />{" "}
            {/* Traduction */}
          </div>
        </div>
        <div className="forgot-password">
          {t("Forget password?")}{" "}
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">{t("Click here")}</button>
        </div>
        <div className="submit-container">
          <button className="submit bg-gray-300 hover:bg-gray-400 text-gray-800 font font-bold py-2 px-4 rounded-1">{t("Sign Up")}</button>
          <button className="submit bg-gray-300 hover:bg-gray-400 text-gray-800 font font-bold py-2 px-4 rounded-1">{t("Login")}</button>
        </div>
      </div>
    </>
  );
}

export default Login;
