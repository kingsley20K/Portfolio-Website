// import {useLanguage} from "../../hooks/useLanguage.ts";
//
// export default function About() {
//     const { translations } = useLanguage()
//
//     return (
//         <section className="h-screen flex flex-col justify-center items-center text-center">
//             <h1 className="text-5xl font-bold">Hi, ich bin Developer</h1>
//             <p className="text-gray-400 mt-4">
//                 {translations.about}
//             </p>
//         </section>
//     )
// }
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section
            id="about"
            className="
                relative
                py-52
                overflow-hidden
            "
        >

            {/* Background Glow */}
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
                    className="
                        max-w-6xl
                    "
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
                        About
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
                        Building cinematic digital experiences
                        with modern engineering & premium interaction.
                    </h2>

                </motion.div>

                {/* CONTENT */}
                <div
                    className="
                        mt-32

                        grid
                        xl:grid-cols-[1.2fr_0.8fr]
                        gap-20
                        items-start
                    "
                >

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >

                        <p
                            className="
                                text-2xl
                                md:text-3xl

                                leading-[1.5]

                                text-[var(--foreground)]

                                max-w-4xl
                            "
                        >
                            I design and engineer immersive web experiences
                            blending motion, performance and scalable frontend architecture.

                            Inspired by Apple, Stripe, Linear and Framer,
                            my work focuses on creating interfaces that feel
                            fluid, cinematic and deeply interactive.
                        </p>

                        <p
                            className="
                                mt-10

                                text-xl
                                leading-relaxed

                                text-[var(--muted)]

                                max-w-3xl
                            "
                        >
                            Specialized in React ecosystems, TypeScript systems,
                            motion design and premium UI engineering
                            for high-end modern products.
                        </p>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}