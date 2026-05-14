// import {useLanguage} from "../../hooks/useLanguage.ts";
//
// export default function Contact() {
//     const { translations } = useLanguage()
//
//     return (
//         <section className="h-screen flex flex-col justify-center items-center text-center">
//             <h1 className="text-5xl font-bold">Hi, ich bin Developer</h1>
//             <p className="text-gray-400 mt-4">
//                 {translations.contact}
//             </p>
//         </section>
//     )
// }
import { motion } from 'framer-motion'

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Contact() {
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
                                text-zinc-500
                                mb-6
                            "
                        >
                            Contact
                        </p>

                        <h2
                            className="
                                text-6xl
                            md:text-8xl

                            font-bold
                            tracking-[-0.06em]
                            leading-[0.9]

                            max-w-6xl
                            "
                        >
                            Let’s create
                            something exceptional
                            together.
                        </h2>

                        <p
                            className="
                                text-2xl
                            md:text-3xl

                            leading-[1.5]

                            text-zinc-700
                            dark:text-zinc-300

                            max-w-4xl
                            "
                        >
                            Open for freelance work,
                            collaborations and premium
                            digital product development.
                        </p>

                        <a
                            href="mailto:your@email.com"
                            className="
                                inline-flex
                                items-center
                                gap-3

                                mt-14

                                px-8
                                py-4

                                rounded-2xl

                                bg-black
                                text-white

                                dark:bg-white
                                dark:text-black

                                hover:scale-[1.02]

                                transition
                            "
                        >
                            <FaEnvelope />

                            Get In Touch
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

                                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]
                            "
                        />

                        <div className="relative z-10">

                            <p
                                className="
                                    text-sm
                                    uppercase
                                    tracking-[0.25em]
                                    text-zinc-500
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
                                        value: 'your@email.com',
                                    },
                                    {
                                        icon: <FaPhoneAlt />,
                                        label: 'Phone',
                                        value: '+49 123 456789',
                                    },
                                    {
                                        icon: <FaMapMarkerAlt />,
                                        label: 'Location',
                                        value: 'Germany',
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
                                                w-12 h-12

                                                rounded-2xl

                                                flex
                                                items-center
                                                justify-center

                                                bg-zinc-100
                                                dark:bg-zinc-900
                                            "
                                        >
                                            {item.icon}
                                        </div>

                                        <div>

                                            <p className="text-zinc-500 text-sm mb-1">
                                                {item.label}
                                            </p>

                                            <p className="text-lg font-medium">
                                                {item.value}
                                            </p>

                                        </div>

                                    </motion.div>

                                ))}

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    )
}