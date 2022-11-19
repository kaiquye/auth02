import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { AuthContextProvider } from "../context/auth.context";
import { RegisterUser } from "../pages/newUser";

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<RegisterUser />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
