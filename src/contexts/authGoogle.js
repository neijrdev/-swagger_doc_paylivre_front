import React, { createContext, useEffect, useState } from "react";
import { app } from "./../services/firebaseConfig";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { API_DOC_BASE_URL } from "../constants/api_doc";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export default function AuthGoogleProvider({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  async function validateAccessToken(accessToken) {
    const response = await fetch(
      `${API_DOC_BASE_URL}/api-docs/json?access_token=${accessToken}`
    );
    console.log(response.status);
    return response.status === 200;
  }

  function setAlertErrorLogin() {
    alert("Não altorizado! :/");
  }

  useEffect(() => {
    const loadStoreAuth = async () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      if (sessionToken && sessionUser) {
        setToken(sessionToken);
        setUser(JSON.parse(sessionUser));
        const isValid = await validateAccessToken(sessionToken);
        if (!isValid) {
          setAlertErrorLogin();
          signOut();
        }
      }
    };
    loadStoreAuth();
  }, []);

  async function signInGoogle() {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        try {
          const isValid = await validateAccessToken(token);
          if (isValid) {
            setUser(result.user);
            setToken(token);
            sessionStorage.setItem("@AuthFirebase:token", token);
            sessionStorage.setItem(
              "@AuthFirebase:user",
              JSON.stringify(result.user)
            );
          } else {
            setAlertErrorLogin();
            signOut();
          }
        } catch (error) {
          setAlertErrorLogin();
          signOut();
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  async function signOut() {
    sessionStorage.clear();
    setUser(null);
    setToken(null);
  }

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, signed: !!user, user, signOut, token }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
}
