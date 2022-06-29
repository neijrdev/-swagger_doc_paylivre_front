import React from "react";
import AuthGoogleProvider from "./contexts/authGoogle";
import AppRoutes from "./pages/routes/routes";

function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}

export default App;
