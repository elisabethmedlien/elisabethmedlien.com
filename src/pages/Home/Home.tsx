import "./Home.css";
import ProfilePicture from "../../assets/image-em.png";
import Logo from "../../assets/logo.svg";

function Home() {
  return (
    <main>
      <img className="logo" src={Logo} />
      <article id="homepage">
        <section>
          <img className="profile-img" src={ProfilePicture} loading="lazy" />
          <hgroup>
            <span className="wordart-wrapper">
              <h1 className="wordart">Elisabeth Medlien</h1>
            </span>
            <h2>
              Software Engineer <span>|</span> Oslo, Norway
            </h2>
            <h3>Fullstack developer & certified SCRUM master</h3>
          </hgroup>
        </section>

        <p>
          Hello! I like people, animals and software. I am currently working in
          legal tech. Work stack is React+TypeScript & Kotlin orchestrated by
          K8s. I also like kayaking, puzzles and doing small software-related
          projects. I have recently started to learn Kotlin.
        </p>

        <p>
          <span>HTML5/JS/CSS3/SASS</span>
          <span>TypeScript/ReScript</span>
          <span>ReactJS/VueJS/NuxtJS</span>
          <span>REST/GraphQL</span>
          <span>Webpack</span>
          <span>NPM/yarn</span>
          <span>Node</span>
          <span>Kotlin</span>
          <span>MySQl</span>
          <span>PostgreSQL</span>
          <span>PHP</span>
          <span>Twig</span>
          <span>Jenkins/GitlabCI</span>
          <span>Docker</span>
          <span>GIT</span>
          <span>Github/Gitlab</span>
          <span>Firebase</span>
          <span>Design principles</span>
          <span>Responsive design</span>
          <span>Mobile first</span>
          <span>WCAG2.1</span>
          <span>SEO</span>
          <span>Inbound marketing</span>
          <span>Conversion design</span>
          <span>SCRUM</span>
        </p>

        <section>
          <ul>
            <li>
              <a
                href="https://github.com/elisabethmedlien"
                target="_blank"
                rel="nofollow"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/elisabeth-medlien-b564483a/"
                target="_blank"
                rel="nofollow"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="mailto:post@elisabethmedlien.com?cc=elisabethmedlien@gmail.com"
                target="_blank"
                rel="nofollow"
              >
                MAIL
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Home;
