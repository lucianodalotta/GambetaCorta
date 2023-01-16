import React from "react";
import { GoogleSignIn, GoogleSignOut, GoogleSignUp } from "../../../commons/services/FsAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom"
import FirebaseApp from '../../../commons/services/FsConfig'

const LoginComponent = () => {
  const auth = FirebaseApp().getAuth();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleProfile = async () => {
    if (!user) {
      GoogleSignIn()
    } else {
      handlePath()
    }
  }

  const handleLogOut = () => {
    GoogleSignOut();
  }

  const handleSingUp = async () => {
    GoogleSignUp();
  }

  const handlePath = () => {
    navigate("/_admin");
  }

  return (

    <div 
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: "70vh",
    }}
    >
        <>
        { !user &&
        <><div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>

            <h3>Inicia sesión para continuar.</h3>
          </div>
          <button onClick={handleProfile}>INICIA SESIÓN</button></> 
        }
        { user &&
        <>
        <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>

            <h3>Bienvenido {user.displayName}</h3>
          </div>
          <Link to='/_admin'>ENTRAR</Link>
          <button onClick={handleLogOut}>CERRAR SESIÓN</button></>
        }
        </>
    
    </div>
  );
}
export default LoginComponent;