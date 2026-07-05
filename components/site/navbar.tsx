import Link from "next/link"

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-base font-bold tracking-tight text-[#16171c]"
        >
          Vault
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="group relative text-sm text-[#54565f] transition-colors duration-200 hover:text-[#16171c]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-[width] duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="rounded-full bg-[#16171c] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-black"
        >
          Get Protected
        </Link>
      </nav>
    </header>
  )
}
