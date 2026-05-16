import { motion } from 'framer-motion'
import {useLanguage} from "../../hooks/useLanguage.ts";
import {
    FaEnvelope, FaGithub, FaLinkedin,
    // FaPhoneAlt,
    FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Contact() {
    const { translations } = useLanguage()
    return (
        <section
            id="contact"
            className="
                relative
                py-40
                px-6
            "
        >

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-start
                    "
                >

                    {/* LEFT */}
                    <div>

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.25em]

                                text-[var(--muted)]

                                mb-6
                            "
                        >
                            {translations.contact}
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
                            {translations.contact_title}
                        </h2>

                        <p
                            className="
                                text-2xl
                                md:text-3xl

                                leading-[1.5]

                                text-[var(--muted)]

                                max-w-4xl
                            "
                        >
                            {translations.contact_subtitle}
                        </p>

                        <a
                            href="mailto:lesagekingsley1@gmail.com"
                            className="
                                inline-flex
                                items-center
                                gap-3

                                mt-14

                                px-8
                                py-4

                                rounded-2xl

                                border
                                border-zinc-200
                                dark:border-zinc-800

                                bg-white/60
                                dark:bg-white/5

                                backdrop-blur-md

                                hover:bg-white
                                dark:hover:bg-zinc-500

                                hover:scale-105
                                active:scale-95

                                transition-all duration-300

                                text-[var(--foreground)]
                            "
                        >
                            <FaEnvelope />
                            {translations.take_contact}
                        </a>

                    </div>

                    {/* RIGHT */}
                    <motion.div
                        whileHover={{ y: -6 }}
                        className="
                            relative

                            rounded-[2.5rem]

                            border
                            border-zinc-200
                            dark:border-zinc-800

                            bg-white/70
                            dark:bg-white/5

                            backdrop-blur-2xl

                            p-10
                        "
                    >

                        {/* Glow */}
                        <div
                            className="
                                absolute
                                inset-0

                                rounded-[2.5rem]

                                bg-[var(--glow)]
                            "
                        />

                        <div className="relative z-10">

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.25em]

                                    text-[var(--muted)]

                                    mb-10
                                "
                            >
                                Information
                            </p>

                            <div className="space-y-10">

                                {[
                                    {
                                        icon: <FaEnvelope />,
                                        label: 'Email',
                                        value: 'lesagekingsley1@gmail.com',
                                    },
                                    {
                                        icon: <FaGithub />,
                                        label: 'GitHub',
                                        value: 'lesagekingsley1@gmail.com',
                                    },

                                    // {
                                    //     icon: <FaPhoneAlt />,
                                    //     label: 'Phone',
                                    //     value: '+49 17643601624',
                                    // },
                                    {
                                        icon: <FaMapMarkerAlt />,
                                        label: 'Location',
                                        value: translations.location,
                                    },
                                ].map(item => (

                                    <motion.div
                                        key={item.label}
                                        whileHover={{ x: 6 }}
                                        className="
                                            flex
                                            items-start
                                            gap-5
                                        "
                                    >

                                        <div
                                            className="
                                                w-10 h-10
                                                rounded-xl

                                                flex items-center justify-center

                                                border
                                                border-zinc-200
                                                dark:border-zinc-800

                                                bg-white/60
                                                dark:bg-white/5

                                                backdrop-blur-md
                                            "
                                        >
                                            {item.icon}
                                        </div>

                                        <div>

                                            <p className="text-[var(--muted)] text-sm mb-1">
                                                {item.label}
                                            </p>

                                            <p className="text-lg font-medium text-[var(--foreground)]">
                                                {item.value}
                                            </p>

                                        </div>

                                    </motion.div>

                                ))}
                                <a
                                    href="https://www.linkedin.com/in/kingsley-le-sage-nguena-azanbou-836807297"
                                    className="
                                inline-flex
                                items-center
                                gap-3

                                mt-14

                                px-8
                                py-4

                                rounded-2xl

                                border
                                border-zinc-200
                                dark:border-zinc-800

                                bg-white/60
                                dark:bg-white/5

                                backdrop-blur-md

                                hover:bg-white
                                dark:hover:bg-zinc-500

                                hover:scale-105
                                active:scale-95

                                transition-all duration-300

                                text-[var(--foreground)]
                                "
                                >
                                    <FaLinkedin />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/kingsley20K"
                                    className="
                                inline-flex
                                items-center
                                gap-3

                                mt-14

                                px-8
                                py-4

                                rounded-2xl

                                border
                                border-zinc-200
                                dark:border-zinc-800

                                bg-white/60
                                dark:bg-white/5

                                backdrop-blur-md

                                hover:bg-white
                                dark:hover:bg-zinc-500

                                hover:scale-105
                                active:scale-95

                                transition-all duration-300

                                text-[var(--foreground)]
                            "
                                >
                                    <FaGithub/>
                                    GitHub
                                </a>



                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    )
}