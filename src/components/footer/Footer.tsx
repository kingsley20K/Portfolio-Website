import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer
            className="
                border-t
                border-zinc-200
                dark:border-zinc-800

                mt-32
            "
        >
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-10

                    flex
                    flex-col
                    md:flex-row

                    items-center
                    justify-between

                    gap-8
                "
            >

                {/* Left */}
                <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        NK
                    </h3>

                    <p className="text-sm text-[var(--muted)] mt-2">
                        Building modern digital experiences.
                    </p>

                    <span className="text-xs text-[var(--muted)]">
                        ©{new Date().getFullYear()} YourName
                    </span>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4">

                    <a
                        href="https://github.com"
                        target="_blank"
                        className="
                            w-10 h-10
                            rounded-xl

                            flex items-center justify-center

                            border
                            border-zinc-200
                            dark:border-zinc-800

                            bg-white/60
                            dark:bg-white/5

                            backdrop-blur-md

                            hover:scale-105
                            hover:bg-white
                            dark:hover:bg-zinc-900

                            transition-all duration-300
                        "
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="
                            w-10 h-10
                            rounded-xl

                            flex items-center justify-center

                            border
                            border-zinc-200
                            dark:border-zinc-800

                            bg-white/60
                            dark:bg-white/5

                            backdrop-blur-md

                            hover:scale-105
                            hover:bg-white
                            dark:hover:bg-zinc-900

                            transition-all duration-300
                        "
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <a
                        href="mailto:your@email.com"
                        className="
                            w-10 h-10
                            rounded-xl

                            flex items-center justify-center

                            border
                            border-zinc-200
                            dark:border-zinc-800

                            bg-white/60
                            dark:bg-white/5

                            backdrop-blur-md

                            hover:scale-105
                            hover:bg-white
                            dark:hover:bg-zinc-900

                            transition-all duration-300
                        "
                    >
                        <FaMailBulk size={18} />
                    </a>

                </div>
            </div>
        </footer>
    )
}