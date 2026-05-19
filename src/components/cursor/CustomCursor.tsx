import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
    const [mouse, setMouse]     = useState({ x: -200, y: -200 })
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY })
            if (!visible) setVisible(true)
        }

        const onOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            setHovered(!!target.closest('a, button, [role="button"], input, label, select, textarea'))
        }

        const onDown = () => setClicked(true)
        const onUp   = () => setClicked(false)
        const onLeave = () => setVisible(false)
        const onEnter = () => setVisible(true)

        window.addEventListener('mousemove',  onMove)
        window.addEventListener('mouseover',  onOver)
        window.addEventListener('mousedown',  onDown)
        window.addEventListener('mouseup',    onUp)
        document.documentElement.addEventListener('mouseleave', onLeave)
        document.documentElement.addEventListener('mouseenter', onEnter)

        return () => {
            window.removeEventListener('mousemove',  onMove)
            window.removeEventListener('mouseover',  onOver)
            window.removeEventListener('mousedown',  onDown)
            window.removeEventListener('mouseup',    onUp)
            document.documentElement.removeEventListener('mouseleave', onLeave)
            document.documentElement.removeEventListener('mouseenter', onEnter)
        }
    }, [visible])

    const ringSize = hovered ? 52 : 36

    return (
        <>
            {/* ── Trailing ring ── */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
                animate={{
                    x: mouse.x - ringSize / 2,
                    y: mouse.y - ringSize / 2,
                    width:  ringSize,
                    height: ringSize,
                    opacity: visible ? 1 : 0,
                    scale: clicked ? 0.85 : 1,
                    backgroundColor: hovered
                        ? 'rgba(139,92,246,0.12)'
                        : 'rgba(139,92,246,0)',
                    borderColor: hovered
                        ? 'rgba(139,92,246,0.8)'
                        : 'rgba(139,92,246,0.4)',
                }}
                transition={{
                    x:    { type: 'spring', stiffness: 160, damping: 20, mass: 0.6 },
                    y:    { type: 'spring', stiffness: 160, damping: 20, mass: 0.6 },
                    width:  { duration: 0.2 },
                    height: { duration: 0.2 },
                    opacity:         { duration: 0.3 },
                    scale:           { duration: 0.12 },
                    backgroundColor: { duration: 0.2 },
                    borderColor:     { duration: 0.2 },
                }}
                style={{ border: '1.5px solid' }}
            />

            {/* ── Fast dot ── */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
                animate={{
                    x: mouse.x - (hovered ? 3 : 4),
                    y: mouse.y - (hovered ? 3 : 4),
                    width:  hovered ? 6 : 8,
                    height: hovered ? 6 : 8,
                    opacity: visible ? 1 : 0,
                    scale: clicked ? 0.5 : 1,
                    backgroundColor: 'rgb(139,92,246)',
                }}
                transition={{
                    x:    { type: 'spring', stiffness: 900, damping: 50, mass: 0.1 },
                    y:    { type: 'spring', stiffness: 900, damping: 50, mass: 0.1 },
                    width:  { duration: 0.15 },
                    height: { duration: 0.15 },
                    opacity: { duration: 0.2 },
                    scale:   { duration: 0.1 },
                }}
            />
        </>
    )
}
