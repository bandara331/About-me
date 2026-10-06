import LossCurve from "@/components/LossCurve";
import { profile as p } from "@/data/profile";

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">{p.name}</a>
        <nav aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="role">{p.role}</p>
            <h1>{p.name}</h1>
            <p className="lead">{p.tagline}</p>
            <div className="actions">
              <a className="btn" href="#projects">See my projects</a>
              <a className="btn ghost" href={p.github}>GitHub</a>
            </div>
          </div>
          <LossCurve />
        </section>

        <section className="block">
          <h2>About</h2>
          <p className="prose">{p.about}</p>
          <p className="edu"><strong>{p.education.degree}</strong>, {p.education.school}, {p.education.years}</p>
        </section>

        <section id="projects" className="block">
          <h2>Projects</h2>
          <ul className="projects">
            {p.projects.map((x) => (
              <li key={x.title}>
                <a href={x.link}>
                  <h3>{x.title}</h3>
                  <p>{x.summary}</p>
                  <span className="stack">{x.stack.join(", ")}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="block">
          <h2>Skills</h2>
          <dl className="skills">
            {p.skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="block contact">
          <h2>Contact</h2>
          <p className="prose">Hiring, collaborating, or just curious about a project? Send me a message.</p>
          <div className="actions">
            <a className="btn" href={`mailto:${p.email}`}>Email me</a>
            <a className="btn ghost" href={p.linkedin}>LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {p.name}</footer>
    </>
  );
}
