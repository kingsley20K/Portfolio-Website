import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage.ts'
import { FaMapMarkerAlt, FaUniversity, FaShieldAlt, FaCode } from 'react-icons/fa'

const techStack = [
    'React', 'TypeScript', 'Java', 'Spring Boot',
    'Tailwind CSS', 'PostgreSQL', 'Docker', 'Git',
]

export default function About() {
    const { translations } = useLanguage()

    const info = [
        { icon: <FaMapMarkerAlt size={14} />, label: translations.about_info_location, value: 'Gießen, Germany' },
        { icon: <FaUniversity size={14} />,   label: translations.about_info_uni,      value: 'THM — Sem. 5' },
        { icon: <FaCode size={14} />,         label: translations.about_info_focus1,   value: translations.about_info_focus1_val },
        { icon: <FaShieldAlt size={14} />,    label: translations.about_info_focus2,   value: translations.about_info_focus2_val },
    ]

    return (
        <section id="about" className="relative py-40 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 -z-10 bg-[var(--glow)]" />

            <div className="container-premium">

                {/* label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-6"
                >
                    {translations.about}
                </motion.p>

                {/* heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-[var(--foreground)] max-w-4xl"
                >
                    {translations.about_me_name1}
                    <br />
                    <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                        {translations.about_me_name2}
                    </span>
                </motion.h2>

                {/* content grid */}
                <div className="mt-20 grid xl:grid-cols-2 gap-16 items-start">

                    {/* LEFT — bio + tech stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-10"
                    >
                        <p className="text-lg md:text-xl leading-[1.8] text-[var(--muted)] max-w-xl">
                            {translations.about_me_interesse}
                        </p>

                        {/* tech stack */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-4">
                                {translations.about_stack}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.05 }}
                                        className="
                                            px-3 py-1.5 rounded-lg text-sm font-medium
                                            border border-zinc-200 dark:border-zinc-800
                                            bg-white/60 dark:bg-white/5
                                            text-[var(--foreground)]
                                            backdrop-blur-sm
                                        "
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT — info cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {info.map(({ icon, label, value }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 + i * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="
                                    relative overflow-hidden
                                    rounded-2xl p-6
                                    border border-zinc-200 dark:border-zinc-800
                                    bg-white/70 dark:bg-white/5
                                    backdrop-blur-xl
                                "
                            >
                                {/* top accent line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-2xl" />

                                <div className="flex items-center gap-2 text-[var(--muted)] text-xs uppercase tracking-wider mb-3">
                                    {icon}
                                    {label}
                                </div>
                                <p className="text-[var(--foreground)] font-semibold text-sm leading-snug">
                                    {value}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    )
}
