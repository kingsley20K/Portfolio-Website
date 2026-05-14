import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener('mousemove', moveCursor)

        return () =>
            window.removeEventListener('mousemove', moveCursor)
    }, [])

    return (
        <motion.div
            animate={{
                x: position.x - 12,
                y: position.y - 12,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
            className="
                fixed
                top-0
                left-0
                z-[9999]

                h-6
                w-6

                rounded-full

                pointer-events-none

                mix-blend-difference

                bg-white
            "
        />
    )
}