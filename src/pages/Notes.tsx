import { Link } from 'react-router-dom'

type Note = {
  date: string
  title: string
  body: string[]
}

const notes: Note[] = [
 {
    date: 'May 2026',
    title: 'humans',
    body: [
      'they are inherently quite complex & selfish. we should always put an effort to understand and simplify.',
      'systems should be built around improving human experiences in communally not individually.',
      'taste is used as a weapon for class distinction. there is massive amounts of money spent on creating cultural capital.'
    ],
  },
  {
    date: 'May 2026',
    title: 'friction',
    body: [
      'i am 20 so i romanticize and i like to romanticize friction. friction is the highest signal for anything.',
      "the ladder will look steep but you should climb to find yourself and it's an endless discovery of yourself.",
    ],
  },
  {
    date: 'May 2026',
    title: 'cities',
    body: [
      'delhi is something i can never dislike. I have seen more blr than del but i think i like jnu teflas paneer roti.',
      'mughal architecture is one of the reasons, metro is another, my close friends are also in del.',
      'i think del is more artsy and cultured.',
    ],
  },
  {
    date: 'May 2026',
    title: 'ai',
    body: [
      'we will reach a state of anti-intellectualism at this rate.',
      'the knowledge we have created as humans is repackaged and sold to us.',
      'computing costs makes sense, data collection ion think so.'
    ],
  },
]

export default function Notes() {
  return (
    <main className="page">
      <header className="block">
        <p className="muted">
          <Link to="/">← back</Link>
        </p>
        <h1>Notes</h1>
        <p className="lede">
          things i think about, written down.
        </p>
      </header>

      <section className="block">
        <ul className="list">
          {notes.map((n) => (
            <li key={n.date + n.title}>
              <div className="row">
                <span className="row-left">
                  <strong>{n.title}</strong>
                </span>
                <span className="row-right">{n.date}</span>
              </div>
              {n.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
