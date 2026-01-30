import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
// import { ThemeToggle } from "./theme-toggle";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About me" },
    { to: "/resume", label: "Resume" },
    { to: "/blog", label: "Blog" },
];

export function Navigation() {
    return (
        <nav className="pt-8 px-6">
            <div className="mx-auto flex max-w-3xl items-center justify-between">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end={item.to === "/"}
                                className={({ isActive }) =>
                                    cn(
                                        "transition-colors hover:text-foreground",
                                        isActive
                                            ? "text-foreground font-medium"
                                            : "text-muted-foreground",
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* <ThemeToggle /> */}
            </div>
        </nav>
    );
}
