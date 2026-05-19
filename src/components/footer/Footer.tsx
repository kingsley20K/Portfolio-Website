import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../../hooks/useLanguage'

const socials = [
    { icon: FaGithub,   href: 'https://github.com/kingsley20K',                                           label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kingsley-le-sage-nguena-azanbou-836807297',     label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:lesagekingsley1@gmail.com',                                          label: 'Email'    },
]

const navLinks = ['hero', 'about', 'projects', 'skills', 'contact'] as const

export default function Footer() {
    const { translations } = useLanguage()

    return (
        <footer className="relative mt-24 overflow-hidden">

            {/* top gradient divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            {/* subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-violet-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="container-premium py-12 relative z-10">

                <div className="grid md:grid-cols-3 gap-10 items-start">

                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <a
                            href="#hero"
                            className="text-xl font-black tracking-tight text-[var(--foreground)] hover:text-violet-500 transition-colors"
                        >
                            NK
                        </a>
                        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[200px]">
                            Building immersive digital experiences.
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            <span className="text-xs text-emerald-500 dark:text-emerald-400">{translations.hero_available}</span>
                        </div>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-2">Navigation</p>
                        {navLinks.map(section => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className="text-sm text-[var(--muted)] hover:text-violet-500 transition-colors w-fit capitalize"
                            >
                                {translations[section as keyof typeof translations] as string}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Connect</p>
                        <div className="flex items-center gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={label !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ y: -3 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    className="
                                        w-9 h-9 rounded-xl
                                        flex items-center justify-center
                                        border border-zinc-200 dark:border-zinc-800
                                        bg-white/60 dark:bg-white/5
                                        backdrop-blur-md
                                        text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400
                                        hover:border-violet-400/50
                                        transition-colors duration-200
                                    "
                                >
                                    <Icon size={15} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* bottom bar */}
                <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-[var(--muted)]">
                        © {new Date().getFullYear()} Kingsley Nguena Azanbou. All rights reserved.
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                        Built with React · TypeScript · Tailwind
                    </p>
                </div>

            </div>
        </footer>
    )
}
