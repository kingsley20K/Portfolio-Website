// import { motion } from 'framer-motion'
//
// export type Project = {
//     title: string
//     description: string
//     image?: string
//     video?: string
//     tech: string[]
//     github: string
// }
//
// type Props = {
//     project: Project
// }
//
// export default function ProjectCard({ project }: Props) {
//     return (
//         <motion.a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.4 }}
//             className="
//                 group
//                 relative
//                 block
//
//                 overflow-hidden
//                 rounded-[2.5rem]
//
//                 border
//                 border-zinc-200
//                 dark:border-zinc-800
//
//                 bg-white/70
//                 dark:bg-white/5
//
//                 backdrop-blur-xl
//             "
//         >
//
//             {/* MEDIA */}
//             <div className="relative h-[500px] overflow-hidden">
//
//                 {project.video ? (
//                     <video
//                         src={project.video}
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="
//                             h-full
//                             w-full
//                             object-cover
//
//                             transition-transform duration-700
//                             group-hover:scale-105
//                         "
//                     />
//                 ) : (
//                     <img
//                         src={project.image}
//                         alt={project.title}
//                         className="
//                             h-full
//                             w-full
//                             object-cover
//
//                             transition-transform duration-700
//                             group-hover:scale-105
//                         "
//                     />
//                 )}
//
//                 {/* DARK OVERLAY */}
//                 <div
//                     className="
//                         absolute
//                         inset-0
//
//                         bg-gradient-to-t
//                         from-black/80
//                         via-black/20
//                         to-transparent
//                     "
//                 />
//
//                 {/* TITLE ALWAYS VISIBLE */}
//                 <div
//                     className="
//                         absolute
//                         bottom-0
//                         left-0
//
//                         w-full
//
//                         p-8
//                     "
//                 >
//
//                     <div
//                         className="
//                             flex
//                             items-end
//                             justify-between
//                             gap-4
//                         "
//                     >
//
//                         <div>
//                             <h3
//                                 className="
//                                     text-3xl
//                                     font-bold
//                                     text-white
//                                 "
//                             >
//                                 {project.title}
//                             </h3>
//
//                             <p
//                                 className="
//                                     mt-3
//                                     text-zinc-300
//                                     max-w-md
//
//                                     opacity-0
//                                     translate-y-4
//
//                                     group-hover:opacity-100
//                                     group-hover:translate-y-0
//
//                                     transition-all duration-500
//                                 "
//                             >
//                                 {project.description}
//                             </p>
//                         </div>
//
//                     </div>
//
//                     {/* TECH */}
//                     <div
//                         className="
//                             flex
//                             flex-wrap
//                             gap-3
//
//                             mt-6
//
//                             opacity-0
//                             translate-y-6
//
//                             group-hover:opacity-100
//                             group-hover:translate-y-0
//
//                             transition-all duration-700
//                         "
//                     >
//
//                         {project.tech.map((tech, index) => (
//                             <motion.div
//                                 key={tech}
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 transition={{
//                                     delay: index * 0.08,
//                                 }}
//                                 className="
//                                     px-4
//                                     py-2
//
//                                     rounded-full
//
//                                     bg-white/10
//                                     backdrop-blur-md
//
//                                     border
//                                     border-white/10
//
//                                     text-sm
//                                     text-white
//                                 "
//                             >
//                                 {tech}
//                             </motion.div>
//                         ))}
//
//                     </div>
//                 </div>
//
//             </div>
//         </motion.a>
//     )
// }
import { motion } from 'framer-motion'

export type Project = {
    title: string
    description: string
    image?: string
    video?: string
    tech: string[]
    github: string
}

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                rotateX: 4,
                rotateY: -4,
                y: -10,
            }}
            transition={{
                type: 'spring',
                stiffness: 180,
                damping: 18,
            }}
            className="
                group
                relative
                block

                [perspective:2000px]
            "
        >

            {/* TECH FLOATING */}
            <div
                className="
                    absolute
                    -top-5
                    left-6

                    z-20

                    flex
                    flex-wrap
                    gap-3
                    text-white
                    opacity-0
                    -translate-y-4

                    group-hover:opacity-100
                    group-hover:translate-y-0

                    transition-all duration-500
                "
            >

                {project.tech.map((tech, index) => (

                    <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.08,
                        }}
                        className="
                            px-4
                            py-2

                            rounded-full

                            bg-white
                            dark:bg-zinc-900

                            border
                            border-zinc-200
                            dark:border-zinc-800

                            shadow-xl

                            text-sm
                            font-medium
                        "
                    >
                        {tech}
                    </motion.div>

                ))}

            </div>

            {/* CARD */}
            <div
                className="
                    relative
                    overflow-hidden

                    rounded-[2.5rem]

                    border
                    border-zinc-200
                    dark:border-zinc-800

                    bg-white/80
                    dark:bg-white/5

                    backdrop-blur-xl

                    shadow-[0_20px_80px_rgba(0,0,0,0.08)]

                    transition-all duration-500
                "
            >

                {/* MEDIA */}
                <div className="relative h-[580px] overflow-hidden">

                    {project.video ? (
                        <video
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="
                                h-full
                                w-full
                                object-cover

                                transition-transform duration-700
                                group-hover:scale-105
                            "
                        />
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="
                                h-full
                                w-full
                                object-cover

                                transition-transform duration-700
                                group-hover:scale-105
                            "
                        />
                    )}

                    {/* OVERLAY */}
                    <div
                        className="
                            absolute
                            inset-0

                            bg-gradient-to-t
                            from-black/90
                            via-black/20
                            to-transparent
                        "
                    />

                    {/* CONTENT */}
                    <div
                        className="
                            absolute
                            bottom-0
                            left-0

                            w-full

                            p-10
                        "
                    >

                        <h3
                            className="
                                text-4xl
                                font-bold
                                text-white
                            "
                        >
                            {project.title}
                        </h3>

                        <p
                            className="
                                mt-5

                                max-w-lg

                                text-zinc-300
                                leading-relaxed

                                opacity-0
                                translate-y-4

                                group-hover:opacity-100
                                group-hover:translate-y-0

                                transition-all duration-500
                            "
                        >
                            {project.description}
                        </p>

                    </div>
                </div>
            </div>
        </motion.a>
    )
}