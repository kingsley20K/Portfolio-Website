// import {useLanguage} from "../../hooks/useLanguage.ts";
//
// export default function Skills() {
//     const { translations } = useLanguage()
//
//     return (
//         <section className="h-screen flex flex-col justify-center items-center text-center">
//             <h1 className="text-5xl font-bold">Hi, ich bin Developer</h1>
//             <p className="text-gray-400 mt-4">
//                 {translations.skills}
//             </p>
//         </section>
//     )
// }
import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: 'Frontend',
        description:
            'Modern frontend architecture focused on scalability, performance and immersive UI systems.',
        skills: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 92 },
            { name: 'Next.js', level: 90 },
            { name: 'Tailwind CSS', level: 94 },
        ],
    },
    {
        title: 'Animation',
        description:
            'Cinematic interactions and premium motion experiences inspired by Apple & Awwwards.',
        skills: [
            { name: 'Framer Motion', level: 90 },
            { name: 'GSAP', level: 84 },
            { name: 'Three.js', level: 72 },
        ],
    },
    {
        title: 'Tools & Design',
        description:
            'Strong focus on developer workflow, UI systems and modern product design.',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'Figma', level: 82 },
            { name: 'UI/UX Design', level: 86 },
        ],
    },
]


export default function Skills() {
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

                    bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]
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
                            text-zinc-500
                            mb-8
                        "
                    >
                        Skills
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
                        Engineering scalable
                        frontend systems with
                        premium interaction.
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

                            text-zinc-700
                            dark:text-zinc-300

                            max-w-4xl
                        "
                    >
                        Specialized in modern frontend ecosystems,
                        cinematic motion systems, immersive interfaces
                        and scalable TypeScript architecture focused on
                        high-end user experience.
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

                    {skillCategories.map((category, index) => (

                        <motion.div
                            key={category.title}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                            }}
                            whileHover={{
                                y: -8,
                            }}
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

                                    bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_35%)]
                                "
                            />

                            <div className="relative z-10">

                                <h3
                                    className="
                                        text-3xl
                                        font-semibold
                                        tracking-tight
                                    "
                                >
                                    {category.title}
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        text-zinc-500
                                        leading-relaxed
                                    "
                                >
                                    {category.description}
                                </p>

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

                                                <span className="font-medium text-lg">
                                                    {skill.name}
                                                </span>

                                                <span className="text-zinc-500">
                                                    {skill.level}%
                                                </span>

                                            </div>

                                            {/* BAR */}
                                            <div
                                                className="
                                                    h-3

                                                    rounded-full

                                                    bg-zinc-200
                                                    dark:bg-zinc-800

                                                    overflow-hidden
                                                "
                                            >

                                                <motion.div
                                                    initial={{
                                                        width: 0,
                                                    }}
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

                                                        bg-black
                                                        dark:bg-white
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
            </div>

        </section>
    )
}