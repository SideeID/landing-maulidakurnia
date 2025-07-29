import { FaDiscord, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-100">
            <div className="max-w-6xl p-6  mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
                <div className="text-center md:text-left space-y-2">
                    <p>&copy; {new Date().getFullYear()} PT. Maulida Rafa Kurnia. All rights reserved.</p>
                </div>

                <div className="flex gap-4 text-xl text-gray-500">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}
