import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { useLanguage } from '../../hooks/useLanguage'

const socials = [
    { icon: FaGithub,   href: 'https://github.com/kingsley20K',                                            label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kingsley-le-sage-nguena-azanbou-836807297',      label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:lesagekingsley1@gmail.com',                                           label: 'Email'    },
]

const stats = [
    { value: '3+',  label: 'Projects' },
    { value: '3',   label: 'Languages' },
    { value: '2+',  label: 'Years coding' },
]

export default function Hero() {
    const { translations } = useLanguage()

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >

            {/* background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(170,59,255,0.12),transparent)]" />

            {/* grid */}
            <div
                className="
                    absolute inset-0 opacity-[0.06]
                    [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]
                    [background-size:64px_64px]
                "
            />

            <div
                className="
                    relative z-10
                    max-w-7xl mx-auto px-6 py-24
                    grid lg:grid-cols-2 gap-16 items-center
                    w-full
                "
            >

                {/* ── LEFT ── */}
                <div className="flex flex-col items-start gap-6 text-left">

                    {/* availability badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="
                            inline-flex items-center gap-2
                            px-4 py-1.5 rounded-full
                            border border-emerald-400/30
                            bg-emerald-400/10
                            text-emerald-500 dark:text-emerald-400
                            text-xs font-medium tracking-wide
                        "
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        {translations.hero_available}
                    </motion.div>

                    {/* label */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs uppercase tracking-[0.3em] text-zinc-500"
                    >
                        {translations.hero_title}
                    </motion.p>

                    {/* big heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="
                            text-5xl md:text-7xl
                            font-black tracking-tight leading-[0.92]
                            text-zinc-900 dark:text-white
                        "
                    >
                        {translations.hero_big_title_1}
                        <br />
                        <span
                            className="
                                bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500
                                bg-clip-text text-transparent
                            "
                        >
                            {translations.hero_big_title_2}
                        </span>
                        <br />
                        {translations.hero_big_title_3}
                    </motion.h1>

                    {/* subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        className="max-w-md text-lg leading-relaxed text-zinc-500 dark:text-zinc-400"
                    >
                        {translations.hero_subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-3 flex-wrap"
                    >
                        <a
                            href="#projects"
                            className="
                                px-6 py-3 rounded-xl
                                bg-violet-600 hover:bg-violet-700
                                text-white text-sm font-semibold
                                transition-all duration-200
                                hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/25
                            "
                        >
                            {translations.hero_cta_projects}
                        </a>
                        <a
                            href="#contact"
                            className="
                                px-6 py-3 rounded-xl
                                border border-zinc-300 dark:border-zinc-700
                                text-zinc-700 dark:text-zinc-300
                                text-sm font-semibold
                                hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400
                                transition-all duration-200
                                hover:scale-[1.03]
                            "
                        >
                            {translations.hero_cta_contact}
                        </a>
                    </motion.div>

                    {/* socials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.85 }}
                        className="flex items-center gap-3"
                    >
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={label !== 'Email' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="
                                    w-9 h-9 rounded-lg
                                    flex items-center justify-center
                                    border border-zinc-200 dark:border-zinc-800
                                    text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400
                                    hover:border-violet-400/50
                                    transition-all duration-200 hover:scale-110
                                "
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </motion.div>

                </div>

                {/* ── RIGHT ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative flex justify-center"
                >

                    {/* glow ring */}
                    <div
                        className="
                            absolute inset-0 m-auto
                            w-[85%] h-[85%]
                            rounded-full
                            bg-violet-500/10
                            blur-3xl
                        "
                    />

                    {/* floating image */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative w-[85%] max-w-sm"
                    >
                        {/* decorative ring */}
                        <div
                            className="
                                absolute -inset-3 rounded-[2.5rem]
                                border border-violet-500/20
                                bg-gradient-to-br from-violet-500/5 to-transparent
                            "
                        />

                        {/* photo */}
                        <div
                            className="
                                aspect-square rounded-[2rem]
                                overflow-hidden
                                border border-zinc-200 dark:border-zinc-800
                                shadow-2xl shadow-black/20
                                bg-white/5 backdrop-blur-xl
                            "
                        >
                            <img
                                src="/images/profil.jpeg"
                                alt="Kingsley"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        {/* floating badge — top right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="
                                absolute -top-4 -right-4
                                px-3 py-2 rounded-xl
                                bg-white dark:bg-zinc-900
                                border border-zinc-200 dark:border-zinc-700
                                shadow-lg
                                text-xs font-semibold
                                text-zinc-700 dark:text-zinc-300
                                whitespace-nowrap
                            "
                        >
                            💻 &nbsp;{translations.hero_badge_role}
                        </motion.div>

                        {/* floating badge — bottom left */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 }}
                            className="
                                absolute -bottom-4 -left-4
                                px-3 py-2 rounded-xl
                                bg-white dark:bg-zinc-900
                                border border-zinc-200 dark:border-zinc-700
                                shadow-lg
                                text-xs font-semibold
                                text-zinc-700 dark:text-zinc-300
                                whitespace-nowrap
                            "
                        >
                            🔒 &nbsp;{translations.hero_badge_sec}
                        </motion.div>

                    </motion.div>
                </motion.div>

            </div>

            {/* stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="
                    absolute bottom-10 left-1/2 -translate-x-1/2
                    flex items-center gap-8
                "
            >
                {stats.map(({ value, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                        <span className="text-2xl font-black text-zinc-900 dark:text-white">{value}</span>
                        <span className="text-[11px] uppercase tracking-wider text-zinc-500">{label}</span>
                    </div>
                ))}

                {/* scroll hint */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-6 text-zinc-400"
                >
                    <FaArrowDown size={14} />
                </motion.div>
            </motion.div>

        </section>
    )
}
