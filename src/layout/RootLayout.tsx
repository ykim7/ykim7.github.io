import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function RootLayout() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <Navigation />

            <main className="mx-auto w-full max-w-3xl px-6 py-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
