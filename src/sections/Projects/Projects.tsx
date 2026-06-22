import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../../components/project-card/ProjectCard'
import { useLanguage } from '../../hooks/useLanguage.ts'

export default function Projects() {
    const { translations } = useLanguage()
    const [showAll, setShowAll] = useState(false)

    const projects = [
        {
            title: translations.projects_title1,
            description: translations.projects_description1,
            video: `${import.meta.env.BASE_URL}videos/Pacman-Spiel.mp4`,
            tech: ['Java'],
            github: 'https://github.com/kingsley20K/Pacman',
        },
        {
            title: translations.projects_title2,
            description: translations.projects_description2,
            image: `${import.meta.env.BASE_URL}images/portfolio.png`,
            tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
            github: 'https://github.com/kingsley20K/Portfolio-Website',
        },
        {
            title: translations.projects_title3,
            description: translations.projects_description3,
            video: `${import.meta.env.BASE_URL}videos/itachi.mp4`,
            tech: ['CSS', 'HTML', 'JavaScript'],
            github: 'https://kingsley20k.github.io/Portefolio_kingsley/',
        },
        {
            title: translations.projects_title4,
            description: translations.projects_description4,
            image: `${import.meta.env.BASE_URL}images/trello_MVP.png`,
            tech: ['TypeScript', 'React', 'Node.js' ,'PostgreSQL(Supabase)', 'Socket.IO' ,'Dockerfile'],
            github: 'https://frontend-seven-nu-59.vercel.app',
        },
        {
            title: translations.projects_title5,
            description: translations.projects_description4,
            image: `${import.meta.env.BASE_URL}images/Vintage Car Garage .jpeg`,
            tech: ['TypeScript', 'React', 'Java' ,'PostgreSQL(Supabase)'],
            github: 'https://github.com/shahriyarSS/Vintage-Car-Community',
        },
    ]

    const visible = showAll ? projects : projects.slice(0, 4)

    return (
        <section id="projects" className="relative py-40 overflow-hidden">

            <div className="absolute inset-0 -z-10 bg-[var(--glow)]" />

            <div className="container-premium">

                {/* label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-6"
                >
                    {translations.projects}
                </motion.p>

                {/* heading row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-[var(--foreground)] max-w-2xl">
                        {translations.projects_introductions}
                    </h2>

                    <p className="text-[var(--muted)] max-w-xs text-sm leading-relaxed md:text-right">
                        {translations.projects_subtitle}
                    </p>
                </motion.div>

                {/* divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="origin-left h-px bg-gradient-to-r from-violet-500/60 via-zinc-300 dark:via-zinc-700 to-transparent mb-20"
                />

                {/* cards grid — staggered */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {visible.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className={i % 2 !== 0 ? 'lg:translate-y-24' : ''}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                {/* show more */}
                {projects.length > 4 && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => setShowAll(v => !v)}
                            className="
                                px-7 py-3 rounded-xl text-sm font-semibold
                                border border-zinc-200 dark:border-zinc-700
                                text-[var(--foreground)]
                                hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400
                                transition-all duration-200
                            "
                        >
                            {showAll ? translations.show_less : translations.show_more}
                        </button>
                    </div>
                )}

            </div>
        </section>
    )
}
