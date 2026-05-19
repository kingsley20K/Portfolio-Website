import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage.ts'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const links = [
    {
        icon: <FaEnvelope size={16} />,
        label: 'Email',
        value: 'lesagekingsley1@gmail.com',
        href: 'mailto:lesagekingsley1@gmail.com',
        color: 'from-violet-500 to-fuchsia-500',
    },
    {
        icon: <FaGithub size={16} />,
        label: 'GitHub',
        value: 'github.com/kingsley20K',
        href: 'https://github.com/kingsley20K',
        color: 'from-zinc-600 to-zinc-400',
    },
    {
        icon: <FaLinkedin size={16} />,
        label: 'LinkedIn',
        value: 'kingsley-le-sage-nguena',
        href: 'https://www.linkedin.com/in/kingsley-le-sage-nguena-azanbou-836807297',
        color: 'from-blue-600 to-blue-400',
    },
]

export default function Contact() {
    const { translations } = useLanguage()

    return (
        <section id="contact" className="relative py-40 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 -z-10 bg-[var(--glow)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-[120px] rounded-full -z-10" />

            <div className="container-premium">

                {/* label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-6"
                >
                    {translations.contact}
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >
                        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-[var(--foreground)]">
                            {translations.contact_title}
                        </h2>

                        <p className="text-lg leading-relaxed text-[var(--muted)] max-w-md">
                            {translations.contact_subtitle}
                        </p>

                        {/* location chip */}
                        <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                            <FaMapMarkerAlt size={12} />
                            {translations.location}
                        </div>

                        {/* primary CTA */}
                        <a
                            href="mailto:lesagekingsley1@gmail.com"
                            className="
                                self-start
                                inline-flex items-center gap-3
                                px-7 py-3.5 rounded-xl
                                bg-violet-600 hover:bg-violet-700
                                text-white text-sm font-semibold
                                transition-all duration-200
                                hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/25
                            "
                        >
                            <FaEnvelope size={14} />
                            {translations.take_contact}
                        </a>
                    </motion.div>

                    {/* RIGHT — contact cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        {links.map(({ icon, label, value, href, color }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={label !== 'Email' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 + i * 0.1 }}
                                whileHover={{ x: 6 }}
                                className="
                                    group relative overflow-hidden
                                    flex items-center gap-5
                                    p-5 rounded-2xl
                                    border border-zinc-200 dark:border-zinc-800
                                    bg-white/70 dark:bg-white/5
                                    backdrop-blur-xl
                                    transition-colors duration-300
                                    hover:border-violet-400/40
                                "
                            >
                                {/* left color strip */}
                                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${color} rounded-l-2xl`} />

                                {/* icon */}
                                <div className={`
                                    w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                                    bg-gradient-to-br ${color} text-white
                                `}>
                                    {icon}
                                </div>

                                {/* text */}
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wider text-[var(--muted)] mb-0.5">
                                        {label}
                                    </p>
                                    <p className="text-sm font-semibold text-[var(--foreground)] truncate">
                                        {value}
                                    </p>
                                </div>

                                {/* arrow */}
                                <span className="ml-auto text-zinc-300 dark:text-zinc-700 group-hover:text-violet-500 transition-colors text-lg">
                                    →
                                </span>
                            </motion.a>
                        ))}

                        {/* availability note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="
                                flex items-center gap-3 mt-2
                                px-5 py-4 rounded-2xl
                                border border-emerald-400/20
                                bg-emerald-400/5
                            "
                        >
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                                {translations.hero_available}
                            </p>
                        </motion.div>

                    </motion.div>

                </div>

            </div>
        </section>
    )
}
