// import { useLanguage } from '../../hooks/useLanguage'
//
// export default function Hero() {
//     const { translations } = useLanguage()
//
//     return (
//         <section className="min-h-screen flex items-center">
//             <div className="max-w-6xl mx-auto px-6">
//
//                 <h1 className="
//           text-5xl
//           md:text-7xl
//           font-bold
//           tracking-tight
//           max-w-4xl
//         ">
//                     {translations.hero_title}
//                     {translations.hero_subtitle}
//                 </h1>
//
//             </div>
//         </section>
//     )
// }
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section
            id="hero"
            className="
                relative
                min-h-screen

                flex
                items-center

                overflow-hidden
            "
        >

            {/* GRADIENT */}
            <div
                className="
                    absolute inset-0

                    bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]
                "
            />

            {/* GRID */}
            <div
                className="
                    absolute inset-0

                    opacity-[0.03]

                    [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]

                    [background-size:80px_80px]
                "
            />

            <div
                className="
                    relative z-10

                    max-w-7xl
                    mx-auto
                    px-6

                    grid
                    lg:grid-cols-2
                    gap-20
                    items-center
                "
            >

                {/* LEFT */}
                <div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-zinc-500
                            mb-8
                        "
                    >
                        Frontend Engineer • UI Designer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="
                            text-6xl
                            md:text-8xl

                            font-black
                            tracking-tight
                            leading-[0.9]
                        "
                    >
                        Building
                        immersive
                        digital
                        experiences.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="
                            mt-10

                            max-w-xl

                            text-xl
                            leading-relaxed

                            text-zinc-500
                        "
                    >
                        Premium frontend engineering with
                        cinematic interaction, modern architecture
                        and high-end user experiences.
                    </motion.p>

                </div>

                {/* RIGHT */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="
                        relative
                    "
                >

                    <div
                        className="
                            aspect-square

                            rounded-[3rem]

                            overflow-hidden

                            border
                            border-zinc-200
                            dark:border-zinc-800

                            bg-white/5

                            backdrop-blur-2xl
                        "
                    >

                        <img
                            src="/images/profil.jpeg"
                            alt="Profile"
                            className="
                                h-full
                                w-full

                                object-cover
                                object-top
                            "
                        />

                    </div>

                </motion.div>

            </div>
        </section>
    )
}