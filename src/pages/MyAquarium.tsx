import "./MyAquarium.css";
import Logo from "../assets/logo2.svg";
import FishboneIcon from "../assets/fish-bone.svg";
import BlogPost from "../components/BlogPost";
import AquariumHealthMetrics from "../components/AquariumHealthMetrics";
import MyAquariumImg from "../assets/my-aquarium-1-sept-2023.jpg";
import MyAquariumImg2 from "../assets/my-aquarium-18-sept-2023.jpg";
// import MyAquariumGif from "../assets/my-aquarium-18-sept-2023.gif";
// import MyAquariumGif2 from "../assets/my-aquarium-21-sept-2023.gif";

const posts = [
  {
    title: "Husvarme",
    date: "21. september 2023",
    node: (
      <>
        <p>
          Jeg lurer på om det begynner å bli sparsommelig med alger for
          ancistrusene å spise. Damen på dyrebutikken fortalte at jeg kunne
          observere buken på ancistrus for å se om den trenger mat. I
          mellomtiden kunne jeg hvertfall vente til et par dager etter at de
          slutter å godte seg med algene.
        </p>
        <figure style={{ textAlign: "center" }}>
          <img
            src={MyAquariumImg}
            alt="Akvarie med fisk"
            loading="lazy"
            width="500"
          />
          <figcaption>Bilde: Gjengen slapper av.</figcaption>
        </figure>
      </>
    ),
  },
  {
    title: "Et rent akvarie",
    date: "19. september 2023",
    node: (
      <p>
        De fire ancistrusene har jobbet hardt med å rense akvariet for alger. Nå
        er det helt rent igjen. Det ser ut som om de fortsatt driver og spiser
        alger så jeg venter litt med å mate de med fiskefòr. De er nok ganske
        godt fødd nå.
      </p>
    ),
  },
  {
    title: "Velkommen fisker!",
    date: "18. september 2023",
    node: (
      <>
        <p>
          Nå er fiskene gradvis blitt introdusert til akvariet. De er fire
          slørhale ancistrus. Jeg puttet oppi noen skjell jeg fant på stranda
          Île de Ré i Frankrike i sommer. Jeg har kokt de på forhånd slik at de
          er fri for salt og andre buskelusker.
        </p>
        <figure style={{ textAlign: "center" }}>
          <img
            src={MyAquariumImg}
            alt="Akvarie med fisk"
            loading="lazy"
            width="500"
          />
          <figcaption>
            Bilde: Ancistrusene jobber hardt med å rense akvariet for alger.
          </figcaption>
        </figure>
        <p>
          Jeg passet forresten på at temperaturen i akvariet var den samme som
          akvariet de kom fra – 25-26 grader celsius.
        </p>
      </>
    ),
  },
  {
    title: "Alger!",
    date: "18. september 2023",
    node: (
      <>
        <p>
          Tilbake fra ferie og ser akvariet har fylt seg med alger! Jeg leste på
          nett at dette kan forekomme ved mye belysning for plantene. Visstnok
          skal det bare være 8-10 timer med belysning i akvariet i døgnet
          omtrent. Jeg har latt lyset stå på 24/7 siden jeg satte opp akvariet.
        </p>
        <figure style={{ textAlign: "center" }}>
          <img
            src={MyAquariumImg2}
            alt="Bilde av et akvarie med mye alger"
            loading="lazy"
            width="250"
          />
          <figcaption>
            Bilde: Det er masse grønn/brun-aktige alger i akvariet.
          </figcaption>
        </figure>
        <p>
          Jeg tar en måling av de viktigste parameterne for å passe på at algene
          ikke er et resultat av noe annet.
        </p>
        <AquariumHealthMetrics nh4={0.05} no2={0.025} no3={0.5} ph={6.5} />
        <p>
          Det ser ut til at syklusen i akvariet har stabilisert seg. Jeg tenker
          det passer fint å bekjempe algene med noen algespisende fisker.
        </p>
      </>
    ),
  },
  {
    title: "Ei lita pause",
    date: "01. september 2023",
    node: (
      <>
        <p>
          Vært en travel uke og nå stikker jeg på ferie en liten tur. Får ikke
          målt helsemetrikker for akvariet på en stund. Tipper det går bra.
          Visuelt sett ser akvariet sunt ut.
        </p>
        <figure style={{ textAlign: "center" }}>
          <img
            src={MyAquariumImg}
            alt="Bilde av akvariet"
            loading="lazy"
            width="250"
          />
          <figcaption>
            Bilde: ser sunt ut. Litt grumsete fordi jeg rota litt i sanda.
          </figcaption>
        </figure>
      </>
    ),
  },
  {
    title: "Pågående nedbrytning av giftstoffer",
    date: "24. august 2023",
    node: (
      <>
        <p>
          Forventningene var at verdiene ville være høye ved denne målingen.
        </p>
        <AquariumHealthMetrics nh4={0.05} no2={1.0} no3={15} ph={6.5} kh={6} />
        <p>
          Akvariet jobber med å bryte ned giftstoffene ved hjelp av nitrat.
          Ammoniakken virker til å ha blitt brutt ned helt. Nå har jeg et ønske
          om lavere verdier ved neste måling.
        </p>
      </>
    ),
  },
  {
    title: "Syklusen er i gang!",
    date: "18. august 2023",
    node: (
      <>
        <p>
          Det er gått en uke siden sist måling. Mine forventninger til denne
          målingen var at målingene skulle vise antydning til en start på
          syklusen.
        </p>
        <AquariumHealthMetrics
          nh4={0.05}
          no2={0.05}
          no3={0.75}
          ph={6.5}
          kh={6}
        />
        <p>
          Akvariet virker til å være i begynnelsen av den biologiske syklusen,
          og alt er godt. Gøy å se at nitrat-nivåene har steget allerede også.
          Forventer høye verdier ved neste måling.
        </p>
      </>
    ),
  },
  {
    title: "Jeg har fått akvarie",
    date: "10. august 2023",
    node: (
      <>
        <p>
          I går fikk jeg et 36L akvarie. I dag har jeg fylt det med vann og tatt
          første måling. Jeg tilsatte to klyper med fiskemat for å kickstarte
          akvariets syklus.
        </p>
        <AquariumHealthMetrics
          nh4={0.05}
          no2={0.001}
          no3={0.5}
          ph={6.5}
          kh={6}
        />
        <p>
          Siden jeg <em>kickstarta</em> syklusen til akvariet forventer jeg at
          nivåene for ammoniakk og nitritt er høyere ved neste ukes måling.
        </p>
      </>
    ),
  },
];

function MyAquarium() {
  return (
    <main>
      <img className="logo" src={Logo} />
      <header>
        <h1>Mitt akvarium</h1>
      </header>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img width="40" src={FishboneIcon} loading="lazy" />
        <p>
          Jeg skaffet et akvarie 9 august 2023. Her logger jeg helsemetrikker og
          fører dagbok for akvariet mitt.
        </p>
      </div>

      <div className="container">
        {posts.map((post) => (
          <BlogPost post={post}>{post.node}</BlogPost>
        ))}
      </div>

      {/*</main>

        <section>
          <div>
            <h2>Logg</h2>

            <div>
              <p className="subtext">10 august 2023</p>
              <table>
                <tr>
                  <td>Ammoniakk</td>
                  <td>
                    NH<sub>4</sub>
                  </td>
                  <td>&gt; 0.05</td>
                </tr>
                <tr>
                  <td>Nitritt</td>
                  <td>
                    NO<sub>2</sub>
                  </td>
                  <td>&gt; 0.001</td>
                </tr>
                <tr>
                  <td>Nitrat</td>
                  <td>
                    NO<sub>3</sub>
                  </td>
                  <td>&gt; 0.5</td>
                </tr>
                <tr>
                  <td>PH</td>
                  <td>-</td>
                  <td>6.5</td>
                </tr>
                <tr>
                  <td>Karbonathardhet</td>
                  <td>KH</td>
                  <td>6 dKH</td>
                </tr>
              </table>
              <p className="subtext">
                Sammendrag: etter målingene tok jeg to klyper fiskemat i vannet
                for å starte syklusen. Jeg forventer derfor at nivåene for
                ammoniakk og nitritt er høyere ved neste måling.
              </p>
            </div>
            <div>
              <p className="subtext">10 august 2023</p>
              <table>
                <tr>
                  <td>Ammoniakk</td>
                  <td>
                    NH<sub>4</sub>
                  </td>
                  <td>&gt; 0.05</td>
                </tr>
                <tr>
                  <td>Nitritt</td>
                  <td>
                    NO<sub>2</sub>
                  </td>
                  <td>0.05</td>
                </tr>
                <tr>
                  <td>Nitrat</td>
                  <td>
                    NO<sub>3</sub>
                  </td>
                  <td>0.75</td>
                </tr>
                <tr>
                  <td>PH</td>
                  <td>-</td>
                  <td>6.5</td>
                </tr>
                <tr>
                  <td>Karbonathardhet</td>
                  <td>KH</td>
                  <td>6 dKH</td>
                </tr>
              </table>
              <p className="subtext">Sammendrag:</p>
            </div>
            <div>
              <p className="subtext">24 august 2023</p>
              <table>
                <tr>
                  <td>Ammoniakk</td>
                  <td>
                    NH<sub>4</sub>
                  </td>
                  <td>&gt; 0.05</td>
                </tr>
                <tr>
                  <td>Nitritt</td>
                  <td>
                    NO<sub>2</sub>
                  </td>
                  <td>&lt; 1.0</td>
                </tr>
                <tr>
                  <td>Nitrat</td>
                  <td>
                    NO<sub>3</sub>
                  </td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>PH</td>
                  <td>-</td>
                  <td>6.5</td>
                </tr>
                <tr>
                  <td>Karbonathardhet</td>
                  <td>KH</td>
                  <td>6 dKH</td>
                </tr>
              </table>
              <p className="subtext">Sammendrag:</p>
            </div>
          </div>
    
        </section> */}
      {/* </article>  */}
    </main>
  );
}

export default MyAquarium;
