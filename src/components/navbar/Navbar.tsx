import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

    const { translations } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
                    ? 'backdrop-blur-xl backdrop-saturate-150'
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
            hover:opacity-80 transition
          "
                >
                    {translations.start}
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">

                    {sections.map(section => {
                        const isActive = activeSection === section

                        return (
                            <a
                                key={section}
                                href={`#${section}`}
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
                  {translations[section as keyof typeof translations]}
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

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    <LanguageSwitcher />

                    <ThemeToggle />

                </div>
            </div>
        </motion.header>
    )
}