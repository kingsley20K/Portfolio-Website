import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from '../theme/ThemeToggle'

const links = [
    'about',
    'projects',
    'skills',
    'contact',
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('about')

    // Navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link =>
                document.getElementById(link)
            )

            const scrollPosition = window.scrollY + 200

            sections.forEach(section => {
                if (!section) return

                const offsetTop = section.offsetTop
                const offsetHeight = section.offsetHeight

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(section.id)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
                scrolled
                    ? 'bg-black/70 backdrop-blur-xl border-b border-zinc-800 py-4'
                    : 'bg-transparent py-6'
            }
      `}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#hero"
                    className="
            text-lg font-semibold tracking-tight
            hover:opacity-80
            transition
          "
                >
                    YourName
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">

                    {links.map(link => {
                        const isActive = activeSection === link

                        return (
                            <a
                                key={link}
                                href={`#${link}`}
                                className="relative text-sm"
                            >
                <span
                    className={`
                    transition-colors duration-300
                    ${
                        isActive
                            ? 'text-[var(--foreground)]'
                            : 'text-zinc-500 hover:text-[var(--foreground)]'
                    }
                  `}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-full
                      rounded-full
                      bg-[var(--foreground)]
                    "
                                    />
                                )}
                            </a>
                        )
                    })}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <a
                        href="https://github.com"
                        target="_blank"
                        className="
              text-sm
              border border-zinc-800
              px-4 py-2
              rounded-xl
              transition-all duration-300
              hover:bg-[var(--card)]
            "
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.header>
    )
}