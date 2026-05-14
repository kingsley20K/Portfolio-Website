// import {useLanguage} from "../../hooks/useLanguage.ts";
//
// export default function Projects() {
//     const { translations } = useLanguage()
//
//     return (
//         <section className="h-screen flex flex-col justify-center items-center text-center">
//             <h1 className="text-5xl font-bold">Hi, ich bin Developer</h1>
//             <p className="text-gray-400 mt-4">
//                 {translations.projects}
//             </p>
//         </section>
//     )
// }
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../../components/project-card/ProjectCard'

const projects = [
    {
        title: 'AI SaaS Platform',
        description:
            'Modern AI dashboard with premium animations and responsive UX.',
        video: '/videos/itachi.mp4',
        tech: ['React', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/YOUR_USERNAME/project1',
    },
    {
        title: 'Finance Dashboard',
        description:
            'Analytics platform inspired by Stripe and Linear.',
        image: '/images/hero.png',
        tech: ['Next.js', 'Framer Motion', 'Chart.js'],
        github: 'https://github.com/YOUR_USERNAME/project2',
    },
    {
        title: 'Creative Studio',
        description:
            'Interactive portfolio experience with cinematic transitions.',
        image: '/images/project3.jpg',
        tech: ['React', 'GSAP', 'Three.js'],
        github: 'https://github.com/YOUR_USERNAME/project3',
    },
    {
        title: 'Creative Studio2',
        description:
            'Interactive portfolio experience with cinematic transitions.',
        image: '/images/project3.jpg',
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

export default function Projects() {
    const [showAll, setShowAll] = useState(false)

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
                        Projects
                    </p>

                    <h2 className="text-6xl md:text-8xl font-bold tracking-[-0.06em] leading-[0.9] text-[var(--foreground)]">
                        Selected work crafted
                        with cinematic interaction
                        & premium engineering.
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
                    A curated collection of modern products,
                    immersive interfaces and scalable frontend systems
                    combining motion, storytelling and refined UX.
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