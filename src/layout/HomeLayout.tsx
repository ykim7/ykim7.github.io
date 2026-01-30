import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export default function HomeLayout() {
    return (
        <div className="min-h-dvh flex flex-col">
            <Outlet />
            <Footer />
        </div>
    );
}
