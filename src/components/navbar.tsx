import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed w-24 h-auto bg-white rounded-xl shadow-lg top-72 right-12 p-4 z-50">
            <nav className="flex flex-col items-center gap-4">
                <Link href="/" className="text-blue-600 hover:underline font-medium transition-colors">Home</Link>
                <Link href="/about" className="text-blue-600 hover:underline font-medium transition-colors">About</Link>
                <Link href="/blog" className="text-blue-600 hover:underline font-medium transition-colors">Blog</Link>
                <Link href="/contact" className="text-blue-600 hover:underline font-medium transition-colors">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar
