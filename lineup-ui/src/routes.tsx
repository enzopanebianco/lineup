import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LineupDetails from './pages/LineupDetails';
import Login from './pages/Login';
import Register from "./pages/Register";
import { AuthContainer } from "./components/UI/defaultAuthRoute/styles";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function AuthRouteElement() {
    return (
        <AuthContainer>
            <Sidebar />
            <section>
                <Header />
                <Home />
            </section>
        </AuthContainer>
    )


}

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/field" element={<LineupDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/" element={<AuthRouteElement />} />
            </Routes>
        </Router>
    )
}