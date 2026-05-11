import ThemeToggle from "../theme/ThemeToggle"

export default function Navbar() {
    return (
        <nav className="flex justify-between px-6 py-4 border-b">
            <div className="font-bold">Portfolio</div>

            <div className="flex gap-4 items-center">
                <ThemeToggle />
            </div>
        </nav>
    )
}