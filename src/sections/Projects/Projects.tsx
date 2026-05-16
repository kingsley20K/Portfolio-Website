import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../../components/project-card/ProjectCard'
import {useLanguage} from "../../hooks/useLanguage.ts";


export default function Projects() {
    const { translations } = useLanguage()
    const [showAll, setShowAll] = useState(false)
    const projects = [
        {
            title: translations.projects_title1,
            description:
                translations.projects_description1,
            image: '/images/Pacman.png',
            tech: ['Java'],
            github: 'https://github.com/kingsley20K/Pacman',
        },
        {
            title: translations.projects_title2,
            description:
                translations.projects_description2,
            image: '/images/portfolio.png',
            tech: ['TypeScript', 'CSS', 'React','i18next'],
            github: 'https://github.com/kingsley20K/Portfolio-Website',
        },
        {
            title: translations.projects_title3,
            description:translations.projects_description3,
            video: '/videos/itachi.mp4',
            tech: ['CSS', 'HTML', 'JavaScript'],
            github: 'https://github.com/YOUR_USERNAME/project3',
        },
        {
            title: 'Creative Studio2',
            description:
                'Interactive portfolio experience with cinematic transitions.',
            video: '/videos/itachi.mp4',
            tech: ['React', 'GSAP', 'Three.js'],
            github: 'https://github.com/YOUR_USERNAME/project3',
        },
        {
            title: 'Creative Studio 2',
            description:
                'High-end interactive product focused on storytelling and motion.',
            image: '/images/project3.jpg',
            tech: ['React', 'Three.js', 'Motion'],
            github: 'https://github.com/YOUR_USERNAME/project4',
        },
        {
            title: 'Creative Studio 3',
            description:
                'Advanced experimental UI concept with motion systems.',
            image: '/images/project3.jpg',
            tech: ['React', 'Three.js', 'Framer Motion'],
            github: 'https://github.com/YOUR_USERNAME/project5',
        },
    ]

    const visibleProjects = showAll
        ? projects
        : projects.slice(0, 4)


    return (
        <section
            id="projects"
            className="
                relative
                py-52
                overflow-hidden
            "
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10 bg-[var(--glow)]" />

            <div className="container-premium">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl"
                >
                    <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)] mb-8">
                        {translations.projects}
                    </p>

                    <h2 className="text-6xl md:text-8xl font-bold tracking-[-0.06em] leading-[0.9] text-[var(--foreground)]">
                        {translations.projects_introductions}
                    </h2>
                </motion.div>

                {/* INTRO */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.8 }}
                    className="
                        mt-14
                        text-2xl md:text-3xl
                        leading-[1.5]
                        text-[var(--muted)]
                        max-w-4xl
                    "
                >
                    {translations.projects_subtitle}
                </motion.p>

                {/* GRID */}
                <div className="mt-36 grid lg:grid-cols-2 gap-24">

                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                delay: index * 0.12,
                            }}
                            className={
                                index % 2 !== 0
                                    ? 'lg:translate-y-32'
                                    : ''
                            }
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                {/* BUTTON */}
                {projects.length > 4 && (
                    <div className="flex justify-center mt-20">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="
                                px-8 py-4

                                rounded-2xl

                                border
                                border-zinc-200
                                dark:border-zinc-800

                                bg-white/60
                                dark:bg-white/5

                                text-[var(--foreground)]

                                backdrop-blur-md

                                hover:scale-105
                                transition-all duration-300
                            "
                        >
                            {showAll ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                )}

            </div>
        </section>
    )
}