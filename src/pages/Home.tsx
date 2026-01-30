import { NavLink } from "react-router-dom";
// import { ThemeToggle } from "../components/ThemeToggle";

const baseLink = "text-muted-foreground hover:text-foreground transition-colors";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div> */}

            <main className="flex-1 flex items-center justify-center px-6">
                <div className="max-w-md text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 text-balance">
                        Hello, I'm a Developer
                    </h1>

                    <p className="text-muted-foreground mb-10 leading-relaxed text-pretty">
                        Building thoughtful digital experiences with clean code and creative design.
                    </p>

                    <nav className="flex flex-col items-center gap-4">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-foreground font-medium" : baseLink
                            }
                        >
                            About me
                        </NavLink>

                        <NavLink
                            to="/resume"
                            className={({ isActive }) =>
                                isActive ? "text-foreground font-medium" : baseLink
                            }
                        >
                            Resume
                        </NavLink>

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-foreground font-medium" : baseLink
                            }
                        >
                            Blog
                        </NavLink>
                    </nav>
                </div>
            </main>
        </div>
    );
}
