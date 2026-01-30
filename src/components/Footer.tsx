import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="mt-auto px-6 pb-10">
            <div className="mx-auto max-w-3xl flex items-center justify-between text-xs text-muted-foreground">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Yujin Kim
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/ykim7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ykimcode/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="mailto:ykim.code@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
