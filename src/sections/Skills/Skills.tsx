import { motion } from 'framer-motion'
import { useLanguage } from "../../hooks/useLanguage.ts"
import { useState } from "react"

export default function Skills() {

    const { translations } = useLanguage()

    const [showAll, setShowAll] = useState(false)

    const skillCategories = [
        {
            title: translations.skills_frontend,
            skills: [
                { name: 'React', level: 70 },
                { name: 'TypeScript', level: 58 },
                { name: 'Next.js', level: 85 },
                { name: 'HTML5 / CSS3', level: 92 },
                { name: 'Tailwind CSS', level: 90 },
            ],
        },

        {
            title: translations.skills_backend,
            skills: [
                { name: 'Java', level: 88 },
                { name: 'Spring Boot', level: 65 },
                { name: 'REST APIs', level: 60 },
                { name: 'Authentication & Authorization', level: 50 },
            ],
        },

        {
            title: translations.skills_database,
            skills: [
                { name: 'PostgreSQL', level: 75 },
                { name: 'SQL', level: 70 },
                { name: 'Database Design', level: 72 },
            ],
        },

        {
            title: translations.skills_security,
            skills: [
                { name: 'Web Security Basics', level: 58 },
                { name: 'Authentication Systems', level: 62 },
            ],
        },

        {
            title: translations.skills_animation,
            skills: [
                { name: 'Framer Motion', level: 65 },
                { name: 'Three.js Basics', level: 60 },
            ],
        },

        {
            title: translations.skills_tools,
            skills: [
                { name: 'Git & GitLab', level: 70 },
                { name: 'Docker Basics', level: 65 },
                { name: 'CI/CD Basics', level: 50 },
            ],
        },

        {
            title: translations.skills_Langue,
            skills: [
                { name: translations.Langue1, level: 100 },
                { name: translations.Langue2, level: 80 },
                { name: translations.Langue3, level: 40 },
            ],
        },
    ]

    const visibleSkills = showAll
        ? skillCategories
        : skillCategories.slice(0, 3)

    return (
        <section
            id="skills"
            className="
                relative
                py-52
                overflow-hidden
            "
        >

            {/* BACKGROUND */}
            <div
                className="
                    absolute
                    inset-0
                    -z-10

                    bg-[var(--glow)]
                "
            />

            <div className="container-premium">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl"
                >

                    <p
                        className="
                            text-sm
                            uppercase
                            tracking-[0.35em]

                            text-[var(--muted)]

                            mb-8
                        "
                    >
                        {translations.skills}
                    </p>

                    <h2
                        className="
                            text-6xl
                            md:text-8xl

                            font-bold
                            tracking-[-0.06em]
                            leading-[0.9]

                            max-w-6xl

                            text-[var(--foreground)]
                        "
                    >
                        {translations.skills_title}
                    </h2>

                </motion.div>

                {/* INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.15,
                        duration: 0.8,
                    }}
                    className="
                        mt-14

                        grid
                        xl:grid-cols-[1fr_0.6fr]
                        gap-20
                        items-start
                    "
                >

                    <p
                        className="
                            text-2xl
                            md:text-3xl

                            leading-[1.5]

                            text-[var(--muted)]

                            max-w-4xl
                        "
                    >
                        {translations.skills_focused}
                    </p>

                </motion.div>

                {/* SKILLS GRID */}
                <div
                    className="
                        mt-36

                        grid
                        lg:grid-cols-3
                        gap-10
                    "
                >

                    {visibleSkills.map((category, index) => (

                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                            }}
                            whileHover={{ y: -8 }}
                            className="
                                relative

                                rounded-[2.5rem]

                                border
                                border-zinc-200
                                dark:border-zinc-800

                                bg-white/70
                                dark:bg-white/5

                                backdrop-blur-2xl

                                overflow-hidden

                                p-10
                            "
                        >

                            {/* GLOW */}
                            <div
                                className="
                                    absolute
                                    inset-0

                                    bg-[var(--glow)]
                                "
                            />

                            <div className="relative z-10">

                                <h3
                                    className="
                                        text-3xl
                                        font-semibold
                                        tracking-tight

                                        text-[var(--foreground)]
                                    "
                                >
                                    {category.title}
                                </h3>

                                {/* SKILLS */}
                                <div className="mt-12 space-y-8">

                                    {category.skills.map(skill => (

                                        <div key={skill.name}>

                                            {/* TOP */}
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between

                                                    mb-3
                                                "
                                            >

                                                <span className="font-medium text-lg text-[var(--foreground)]">
                                                    {skill.name}
                                                </span>

                                                <span className="text-[var(--muted)]">
                                                    {skill.level}%
                                                </span>

                                            </div>

                                            {/* BAR */}
                                            <div
                                                className="
                                                    h-3

                                                    rounded-full

                                                    border
                                                    border-zinc-200
                                                    dark:border-zinc-800

                                                    bg-white/60
                                                    dark:bg-white/5

                                                    backdrop-blur-md
                                                "
                                            >

                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        ease: 'easeOut',
                                                    }}
                                                    className="
                                                        h-full
                                                        rounded-full

                                                        bg-[var(--accent)]
                                                    "
                                                />

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* SHOW MORE BUTTON */}
                {skillCategories.length > 3 && (

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
                                active:scale-95

                                transition-all duration-300
                            "
                        >
                            {showAll
                                ? translations.show_less
                                : translations.show_more}
                        </button>

                    </div>

                )}

            </div>

        </section>
    )
}