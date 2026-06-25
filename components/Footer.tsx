'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
          Built with Next.js, TypeScript, Tailwind CSS, and an obsession for
          shipping great products.
        </p>
        <p className="text-sm text-text-secondary/70">© 2026 Jugia Jabar</p>
      </div>
    </footer>
  )
}