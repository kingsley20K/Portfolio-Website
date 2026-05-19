import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage.ts'
import { useState } from 'react'

const categoryMeta: Record<string, { emoji: string; color: string }> = {
    frontend:  { emoji: '🎨', color: 'from-blue-500 to-cyan-400' },
    backend:   { emoji: '⚙️', color: 'from-emerald-500 to-green-400' },
    database:  { emoji: '🗄️', color: 'from-amber-500 to-orange-400' },
    security:  { emoji: '🔒', color: 'from-red-500 to-rose-400' },
    animation: { emoji: '✨', color: 'from-pink-500 to-fuchsia-400' },
    tools:     { emoji: '🛠️', color: 'from-slate-500 to-zinc-400' },
    langue:    { emoji: '🌐', color: 'from-violet-500 to-purple-400' },
}

export default function Skills() {
    const { translations } = useLanguage()
    const [showAll, setShowAll] = useState(false)

    const skillCategories = [
        {
            key: 'frontend',
            title: translations.skills_frontend,
            skills: [
                { name: 'React',          level: 70 },
                { name: 'TypeScript',     level: 58 },
                { name: 'Next.js',        level: 45 },
                { name: 'HTML5 / CSS3',   level: 92 },
                { name: 'Tailwind CSS',   level: 90 },
            ],
        },
        {
            key: 'backend',
            title: translations.skills_backend,
            skills: [
                { name: 'Java',                          level: 88 },
                { name: 'Spring Boot',                   level: 65 },
                { name: 'REST APIs',                     level: 60 },
                { name: 'Authentication & Authorization', level: 50 },
            ],
        },
        {
            key: 'database',
            title: translations.skills_database,
            skills: [
                { name: 'PostgreSQL',      level: 75 },
                { name: 'SQL',             level: 70 },
                { name: 'Database Design', level: 72 },
            ],
        },
        {
            key: 'security',
            title: translations.skills_security,
            skills: [
                { name: 'Web Security Basics',    level: 58 },
                { name: 'Authentication Systems', level: 62 },
            ],
        },
        {
            key: 'animation',
            title: translations.skills_animation,
            skills: [
                { name: 'Framer Motion', level: 65 },
                { name: 'Three.js Basics', level: 40 },
            ],
        },
        {
            key: 'tools',
            title: translations.skills_tools,
            skills: [
                { name: 'Git & GitLab',  level: 70 },
                { name: 'Docker Basics', level: 65 },
                { name: 'CI/CD Basics',  level: 50 },
            ],
        },
        {
            key: 'langue',
            title: translations.skills_Langue,
            skills: [
                { name: translations.Langue1, level: 100 },
                { name: translations.Langue2, level: 80  },
                { name: translations.Langue3, level: 70  },
            ],
        },
    ]

    const visible = showAll ? skillCategories : skillCategories.slice(0, 3)

    return (
        <section id="skills" className="relative py-40 overflow-hidden">

            <div className="absolute inset-0 -z-10 bg-[var(--glow)]" />

            <div className="container-premium">

                {/* label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-6"
                >
                    {translations.skills}
                </motion.p>

                {/* heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-[var(--foreground)]">
                        {translations.skills_title}
                    </h2>
                    <p className="text-[var(--muted)] max-w-xs text-sm leading-relaxed md:text-right">
                        {translations.skills_focused}
                    </p>
                </motion.div>

                {/* grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {visible.map((cat, i) => {
                        const meta = categoryMeta[cat.key]
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="
                                    relative overflow-hidden
                                    rounded-3xl p-8
                                    border border-zinc-200 dark:border-zinc-800
                                    bg-white/70 dark:bg-white/5
                                    backdrop-blur-xl
                                "
                            >
                                {/* top accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${meta.color} rounded-t-3xl`} />

                                {/* header */}
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="text-2xl">{meta.emoji}</span>
                                    <h3 className="text-lg font-bold text-[var(--foreground)]">
                                        {cat.title}
                                    </h3>
                                </div>

                                {/* skills */}
                                <div className="space-y-6">
                                    {cat.skills.map(skill => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-[var(--foreground)]">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs text-[var(--muted)] font-mono">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.1, ease: 'easeOut', delay: i * 0.06 }}
                                                    className={`h-full rounded-full bg-gradient-to-r ${meta.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* show more / less */}
                {skillCategories.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
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
                    </motion.div>
                )}

            </div>
        </section>
    )
}
