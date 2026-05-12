import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { FaBars, FaGithub, FaTimes } from 'react-icons/fa'

import ThemeToggle from '../theme/ThemeToggle'
import LanguageSwitcher from '../language/LanguageSwitcher'

import { useLanguage } from '../../hooks/useLanguage'

const sections = [
    'hero',
    'about',
    'projects',
    'skills',
    'contact',
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('about')
    const [menuOpen, setMenuOpen] = useState(false)

    const { translations } = useLanguage()

    // Navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Active section detection
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY + 200

            sections.forEach(section => {
                const element = document.getElementById(section)

                if (!element) return

                const offsetTop = element.offsetTop
                const offsetHeight = element.offsetHeight

                if (
                    currentPosition >= offsetTop &&
                    currentPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(section)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Prevent body scroll when menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`
                    fixed top-0 left-0 w-full z-50
                    transition-all duration-300

                    ${
                    scrolled
                        ? `     
                                rounded-xl
                                bg-black/60
                                dark:bg-white/5

                                backdrop-blur-md

                                hover:scale-105

                                transition-all duration-300
                                
                                
                                py-4

                                backdrop-blur-xl
                                backdrop-saturate-150


                                dark:bg-black/60
                                dark:border-zinc-800
                              `
                        : 'py-6 bg-transparent'
                }
                `}
            >
                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-6

                        flex
                        items-center
                        justify-between
                    "
                >

                    {/* Logo */}
                    <a
                        href="#hero"
                        className="
                            text-lg
                            font-semibold
                            tracking-tight

                            shrink-0

                            hover:opacity-80
                            transition
                        "
                    >
                        {translations.start}
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        className="
                            hidden lg:flex
                            items-center
                            gap-6 xl:gap-8
                        "
                    >

                        {sections.map(section => {
                            const isActive =
                                activeSection === section

                            return (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className="
                                        relative
                                        text-sm
                                    "
                                >
                                    <span
                                        className={`
                                            transition-colors duration-300

                                            ${
                                            isActive
                                                ? 'text-zinc-900 dark:text-white'
                                                : 'text-zinc-500 hover:text-[var(--foreground)]'
                                        }
                                        `}
                                    >
                                        {
                                            translations[
                                                section as keyof typeof translations
                                                ]
                                        }
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
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </a>
                            )
                        })}
                    </nav>

                    {/* Right Side */}
                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            shrink-0
                        "
                    >

                        {/* Desktop Controls */}
                        <div className="hidden lg:flex items-center gap-3">

                            <LanguageSwitcher />

                            <ThemeToggle />

                            <a
                                href="https://github.com/YOUR_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
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

                                    hover:bg-white
                                    dark:hover:bg-zinc-900

                                    hover:scale-105
                                    active:scale-95

                                    transition-all duration-300
                                "
                            >
                                <FaGithub size={18} />
                            </a>

                        </div>

                        {/* Burger */}
                        <button
                            onClick={() =>
                                setMenuOpen(true)
                            }
                            className="
                                lg:hidden

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

                                transition-all duration-300
                            "
                        >
                            <FaBars size={16} />
                        </button>

                    </div>
                </div>
            </motion.header>

            {/* Mobile / Responsive Menu */}
            <AnimatePresence>

                {menuOpen && (

                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="
                                fixed inset-0 z-40

                                bg-black/10
                                backdrop-blur-sm
                            "
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 300,
                            }}
                            className="
                                fixed
                                top-0
                                right-0

                                z-50

                                h-screen
                                w-[320px]

                                overflow-y-auto

                                bg-white/95
                                backdrop-blur-2xl
                                dark:bg-black/80

                                backdrop-blur-2xl
                                backdrop-saturate-150

                                border-l
                                border-zinc-200
                                dark:border-zinc-800

                                p-8

                                flex
                                flex-col
                            "
                        >

                            {/* Top */}
                            <div className="flex items-center justify-between">

                                <h2 className="text-black/80
                                            dark:text-white font-semibold">
                                    Menu
                                </h2>

                                <button
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                    className="
                                        w-10 h-10
                                        rounded-xl

                                        flex items-center justify-center

                                        border

                                        border-zinc-200
                                        dark:border-zinc-200
                                    "
                                >
                                    <FaTimes size={16} />
                                </button>

                            </div>

                            {/* Links */}
                            <div className="flex flex-col gap-8 mt-20">

                                {sections.map(section => (

                                    <a
                                        key={section}
                                        href={`#${section}`}
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                        className="
                                            text-3xl
                                            font-medium

                                            text-black/80
                                            dark:text-white

                                            transition-all duration-300
                                            hover:translate-x-1
                                        "
                                    >
                                        {
                                            translations[
                                                section as keyof typeof translations
                                                ]
                                        }
                                    </a>

                                ))}

                            </div>

                            {/* Bottom */}
                            <div className="mt-auto flex items-center gap-3">

                                <LanguageSwitcher />

                                <ThemeToggle />

                                <a
                                    href="https://github.com/YOUR_USERNAME"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        w-10 h-10
                                        rounded-xl

                                        flex items-center justify-center

                                        border

                                        border-zinc-200
                                        dark:border-zinc-200
                                    "
                                >
                                    <FaGithub size={18} />
                                </a>

                            </div>

                        </motion.div>
                    </>
                )}

            </AnimatePresence>
        </>
    )
}