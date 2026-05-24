import { Link } from 'react-router-dom'

type Project = {
  title: string
  description: string
  href?: string
}

type Entry = {
  role: string
  org: string
  period: string
  description: string
}

const projects: Project[] = [
  {
    title: 'synthia',
    description: 'a dna computing agent in rust.',
    href: 'https://github.com/zokhcat/synthia',
  },
  {
    title: 'cdbe',
    description:
      'a columnar db engine in rust, implementation of SIMD 4-lane and 8-lane is done',
    href: 'https://github.com/zokhcat/cdbe',
  },
  {
    title: 'bwdm',
    description: 'eBPF is very useful. a packet sniffer written in golang',
    href: 'https://github.com/zokhcat/bwdm',
  },
]

const experience: Entry[] = [
  {
    role: 'full time swe',
    org: 'dog tech startup',
    period: 'Nov 2025 — Present',
    description: 'I write rust and python and php here. They are cool.',
  },
  {
    role: 'swe intern',
    org: 'suprsend',
    period: 'Jun 2025 — Oct 2025',
    description:
      'i wrote a cli, go-sdk, mcp server and an otel serivce here. i liked blr more than the product in the end.',
  },
  {
    role: 'backend engineer',
    org: 'tickadoo',
    period: 'Nov 2024 - Feb 2025',
    description:
      'i wrote services in go. big heartbreak dawg cuz team shifted in-person(Prague).',
  },
  {
    role: 'swe intern',
    org: 'helmer',
    period: 'Sep 2023 - Feb 2024',
    description:
      'i wrote stuff in rust and tauri and ffmpeg that is very hard to comprehend ngl even rn.',
  },
  {
    role: 'swe intern',
    org: 'cloudqa',
    period: 'March 2023 - May 2023',
    description:
      'i wrote stuff in rabbitmq and C# and ion like hyd either so not a good exp.',
  },
  {
    role: 'research intern',
    org: 'tripul it blr',
    period: 'Sep 2022 - Dec 2022',
    description:
      'even though it was around compiler design, i figured ion like research man. great whoever does it.',
  },
]

export default function Home() {
  return (
    <main className="page">
      <header className="block">
        <h1>Zoheb Khan</h1>
        <p className="lede">born to read whitepapers, forced to write code.</p>
      </header>

      <section className="block">
        <h2>About</h2>
        <p>
          I am writing code since the age of 15. Writing good software comes from
          writing a lot of bad software. I pretend to do stuff in systems programming
          and am interested in developer toolchain software. I think the industry is more volatile than me.
        </p>
        <p>
          Rest, I am 35% west asia's history + 25% post-punk + 10% communist + 30% Delhi.{' '}
          <Link to="/notes">read notes</Link>.
        </p>
      </section>

      <section className="block">
        <h2>Work</h2>
        <ul className="list">
          {experience.map((e) => (
            <li key={e.role + e.org}>
              <div className="row">
                <span className="row-left">
                  <strong>{e.role}</strong>, {e.org}
                </span>
                <span className="row-right">{e.period}</span>
              </div>
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Projects</h2>
        <ul className="list">
          {projects.map((p) => (
            <li key={p.title}>
              <div className="row">
                <span className="row-left">
                  {p.href ? (
                    <a href={p.href}>
                      <strong>{p.title}</strong>
                    </a>
                  ) : (
                    <strong>{p.title}</strong>
                  )}
                </span>
              </div>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="block">
        <p className="muted">
          <a href="mailto:zoheballikhan@gmail.com">zoheballikhan@gmail.com</a>
          {'  ·  '}
          <a href="/resume.pdf">Resume</a>
          {'  ·  '}
          <a href="https://github.com/zokhcat/">GitHub</a>
          {'  ·  '}
          <a href="https://x.com/zokhcat/">Twitter</a>
        </p>
      </footer>
    </main>
  )
}
