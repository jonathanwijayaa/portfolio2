export default function Footer() {
  return (
    <footer className="pb-12 text-slate text-xs">
      <p className="leading-relaxed">
        <a
          href="https://github.com/jonathanwijayaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-lightest hover:text-green transition-colors duration-200 font-medium"
        >
          Jonathan Wijaya
        </a>
      </p>
      <p className="mt-1 font-mono opacity-60">
        Built with React · TypeScript · TailwindCSS
      </p>
    </footer>
  )
}
