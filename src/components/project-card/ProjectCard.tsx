import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export type Project = {
    title: string
    description: string
    image?: string
    video?: string
    tech: string[]
    github: string
}

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="group relative block"
        >
            {/* card */}
            <div
                className="
                    relative overflow-hidden rounded-3xl
                    border border-zinc-200 dark:border-zinc-800
                    bg-white/80 dark:bg-white/5
                    backdrop-blur-xl
                    shadow-[0_8px_40px_rgba(0,0,0,0.06)]
                    dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)]
                    transition-all duration-500
                    group-hover:border-violet-400/30
                    group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]
                "
            >
                {/* media */}
                <div className="relative h-[420px] overflow-hidden">
                    {project.video ? (
                        <video
                            src={project.video}
                            autoPlay muted loop playsInline
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}

                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* github icon top-right */}
                    <div
                        className="
                            absolute top-4 right-4
                            w-9 h-9 rounded-xl
                            flex items-center justify-center
                            bg-black/40 backdrop-blur-md
                            border border-white/10
                            text-white/60 group-hover:text-white
                            opacity-0 group-hover:opacity-100
                            translate-y-2 group-hover:translate-y-0
                            transition-all duration-300
                        "
                    >
                        <FaExternalLinkAlt size={13} />
                    </div>

                    {/* content at bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-7">

                        {/* tech badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="
                                        px-2.5 py-1 rounded-lg
                                        text-[11px] font-semibold uppercase tracking-wide
                                        bg-white/15 backdrop-blur-md
                                        border border-white/20
                                        text-white/80
                                    "
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold text-white leading-tight">
                            {project.title}
                        </h3>

                        <p
                            className="
                                mt-2 text-sm leading-relaxed text-white/65
                                max-w-sm
                                opacity-0 translate-y-3
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-400
                            "
                        >
                            {project.description}
                        </p>

                        {/* GitHub label */}
                        <div
                            className="
                                mt-4 inline-flex items-center gap-1.5
                                text-xs font-medium text-white/50
                                opacity-0 translate-y-2
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-300 delay-75
                            "
                        >
                            <FaGithub size={12} />
                            View on GitHub
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    )
}
