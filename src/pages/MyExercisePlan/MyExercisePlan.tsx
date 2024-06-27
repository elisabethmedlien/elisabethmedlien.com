import Logo from "../../assets/logo2.svg";
import styles from "./MyExercisePlan.module.css";

function MyExercisePlan() {
  return (
    <main>
      <img className="logo" src={Logo} />
      <header className={styles.header}>
        <h1>MIN TRENINGSPLAN</h1>
      </header>
      <div className={styles.container}>
        <h1>Trenings- og Kostholdsplan</h1>
        <p>
          For å gå ned 5 kg på en sunn og bærekraftig måte, kombinerer denne
          planen en balansert diett med en treningsplan som passer dine
          interesser og aktivitetsnivå.
        </p>

        <h2>Kostholdsplan</h2>
        <ul>
          <li>
            <strong>Kaloriinntak:</strong> Sikt på 1500-1600 kcal per dag for å
            oppnå et kaloriunderskudd.
          </li>
          <li>
            <strong>Makronæringsstoffer:</strong>
            <ul>
              <li>Proteiner: 20-25% av kaloriinntaket (ca. 75-100g per dag)</li>
              <li>
                Karbohydrater: 45-55% av kaloriinntaket (ca. 170-220g per dag)
              </li>
              <li>Fett: 20-30% av kaloriinntaket (ca. 45-60g per dag)</li>
            </ul>
          </li>
          <li>
            <strong>Eksempel på måltider:</strong>
            <ul>
              <li>
                <strong>Frokost:</strong> Havregrøt med bær og nøtter eller en
                smoothie med proteinpulver.
              </li>
              <li>
                <strong>Lunsj:</strong> Salat med kylling eller tofu, quinoa, og
                en vinaigrette dressing.
              </li>
              <li>
                <strong>Mellommåltid:</strong> Frukt (f.eks. eple eller banan)
                og en håndfull nøtter.
              </li>
              <li>
                <strong>Middag:</strong> Grillet fisk eller kylling med
                grønnsaker og brun ris eller søtpotet.
              </li>
              <li>
                <strong>Kveldsmat:</strong> Yoghurt med litt honning og friske
                bær.
              </li>
            </ul>
          </li>
          <li>
            <strong>Hydrering:</strong> Drikk minst 2 liter vann om dagen. Unngå
            sukkerholdige drikker og begrens alkoholinntaket.
          </li>
        </ul>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "15px" }}>
            <h3>Hardkokte Egg og Fullkorns Toast</h3>
            <ul>
              <li>2 hardkokte egg</li>
              <li>1-2 skiver fullkornsbrød</li>
              <li>Litt smør eller avokado til å smøre på toasten</li>
            </ul>
            <small>
              Fordeler: Protein fra eggene og fiber fra fullkornsbrødet.
            </small>
          </div>
          <div style={{ margin: "15px" }}>
            <h3>Gym Time Smoothie på Cloud Cafè</h3>
          </div>
          <div style={{ margin: "15px" }}>
            <h3>Yoghurt med Bær og Nøtter</h3>
            <ul>
              <li>1 kopp gresk yoghurt eller vanlig yoghurt</li>
              <li>En håndfull bær (jordbær, blåbær, bringebær)</li>
              <li>1-2 ss nøtter (mandler, valnøtter, pekannøtter)</li>
              <li>1 ts honning (valgfritt)</li>
            </ul>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Uke</th>
              <th>Vekt</th>
              <th>Mandag</th>
              <th>Tirsdag</th>
              <th>Onsdag</th>
              <th>Torsdag</th>
              <th>Fredag</th>
              <th>Lørdag</th>
              <th>Søndag</th>
              <th>Kommentarer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23</td>
              <td>70kg</td>
              <td>–</td>
              <td>–</td>
              <td>–</td>
              <td className={styles.completed}>
                Klatring på Klatreverket Bryn 17:00 – 18:00
              </td>
              <td className={styles.completed}>
                ABSolution på SATS Akersgata kl. 16:00 – 16:30
              </td>
              <td className={styles.completed}>
                Indoor Running på SATS Schous plass kl. 13.00 – 13.30
              </td>
              <td className={styles.completed}>
                <a href="/min-styrketrening">Styrketrening</a>
              </td>
              <td>
                Klatret bare hvitt på Bryn.
                <br /> Jeg hadde en 20 min løpeøkt til oppvarming før
                ABSolution.
                <br />
                Jeg slet med å stå i planken på Absolution.{" "}
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>67.20kg</td>
              <td className={styles.completed}>
                YinYoga på SATS Schous plass kl. 19:30–20:30
              </td>
              <td className={styles.completed}>
                Klatring på Klatreverket Bryn 17:00 – 19:00
              </td>
              <td className={styles.completed}>
                Barrys Barcode: Chest, Back & Abs m/Julie kl. 16:30–17:30
              </td>
              <td className={styles.completed}>
                Klatring på Klatreverket Bryn 17:00 – 19:00
              </td>
              <td className={styles.pending}>Tvungen hviledag</td>
              <td className={styles.uncompleted}>Styrketrening</td>
              <td className={styles.completed}>
                Klatring på Klatreverket Bryn 18:00 – 19:30
              </td>
              <td>
                Klatret noe grønt på Bryn - i en del bedre form. På Barrys: mye
                sterkere i armenene (chest press) enn jeg visste. Burde bruke
                tungere vekter. Brukte 8kg. Sliter fremdeles med alt push-up,
                pull up og planke-relatert. Fikk ikke gjort styrketrening på
                lørdag. Hadde planlagt Power Step på SATS Schous plass 10–11 på
                søndag, men klatret i stedet.
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>68.5kg</td>
              <td className={styles.completed}>
                Absolution på SATS Bjørvika kl 17:15–17:45
              </td>
              <td className={styles.completed}>
                Klatring på Klatreverket Bryn 19:00 – 20:30
              </td>
              <td className={styles.completed}>
                Indoor Running på SATS Solli kl. 16:15–16:45 <br />
                Absolution på SATS Bjørvika kl. 18:30–19:00
              </td>
              <td className={styles.uncompleted}>
                Bodypump på SATS Bjørvika kl 11:30–12:15
              </td>
              <td className={styles.uncompleted}>Klatring</td>
              <td className={styles.uncompleted}>
                <s>
                  Absolution på SATS Schous kl 12:30–13.00 <br /> Indoor running
                  på SATS Schous lø 13:30–14:00
                </s>{" "}
                syk
              </td>
              <td className={styles.uncompleted}>
                <s>Yinyoga på SATS Schous kl 13:00–14:15</s> syk
              </td>
              <td>
                Absolution gikk veldig bra, men slet med planken. Klatring på
                tirsdag: nesten alt grønt. Ble syk på fredag.
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>68.0kg</td>
              <td>YinYoga på SATS Schous kl. 19:30–20:30</td>
              <td>Klatring på Klatreverket Bryn ? – ?</td>
              <td>Barrys???</td>
              <td>Klatring på Klatreverket Bryn ? – ?</td>
              <td>Padle kajakk: 1-2 timer / styrketrening</td>
              <td>Kardioøkt: 30-45 min</td>
              <td>Padle kajakk: 1-2 timer / styrketrening</td>
              <td></td>
            </tr>
            <tr>
              <td>27</td>
              <td>–</td>
              <td className={styles.undecided}>Hviledag eller yoga</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>Intervalltrening: 30 min</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td className={styles.undecided}>Kardioøkt: 30-45 min</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td></td>
            </tr>
            <tr>
              <td>28</td>
              <td>–</td>
              <td className={styles.undecided}>Hviledag eller yoga</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>Intervalltrening: 30 min</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td className={styles.undecided}>Kardioøkt: 30-45 min</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td></td>
            </tr>
            <tr>
              <td>29</td>
              <td>–</td>
              <td className={styles.undecided}>Hviledag eller yoga</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>Intervalltrening: 30 min</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td className={styles.undecided}>Kardioøkt: 30-45 min</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td></td>
            </tr>
            <tr>
              <td>30</td>
              <td>–</td>
              <td className={styles.undecided}>Hviledag eller yoga</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>Intervalltrening: 30 min</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td className={styles.undecided}>Kardioøkt: 30-45 min</td>
              <td className={styles.undecided}>
                Padle kajakk: 1-2 timer / styrketrening
              </td>
              <td></td>
            </tr>
            <tr>
              <td>31</td>
              <td>–</td>
              <td className={styles.undecided}>Hviledag eller yoga</td>
              <td className={styles.undecided}>Klatring: 1-2 timer</td>
              <td className={styles.undecided}>Intervalltrening: 30 min</td>
              <td>Klatring: 1-2 timer</td>
              <td>Padle kajakk: 1-2 timer / styrketrening</td>
              <td>Kardioøkt: 30-45 min</td>
              <td>Padle kajakk: 1-2 timer / styrketrening</td>
              <td></td>
            </tr>
            <tr>
              <td>32</td>
              <td>–</td>
              <td>Hviledag eller yoga</td>
              <td>Klatring: 1-2 timer</td>
              <td>Intervalltrening: 30 min</td>
              <td>Klatring: 1-2 timer</td>
              <td>Padle kajakk: 1-2 timer / styrketrening</td>
              <td>Kardioøkt: 30-45 min</td>
              <td>Padle kajakk: 1-2 timer / styrketrening</td>
              <td></td>
            </tr>
            <tr>
              <td>33</td>
              <td>–</td>
              <td>Hviledag eller yoga</td>
              <td>Klatring: 1-2 timer</td>
              <td>Intervalltrening: 30 min</td>
              <td>–</td>
              <td>–</td>
              <td>–</td>
              <td>–</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <h2>Ekstra tips</h2>
        <ul>
          <li>
            <strong>Søvn:</strong> Sørg for å få nok søvn (7-9 timer per natt)
            for optimal restitusjon og helse.
          </li>
          <li>
            <strong>Konsistens:</strong> Hold deg til planen og vær tålmodig.
            Vekttap er en gradvis prosess.
          </li>
          <li>
            <strong>Variasjon:</strong> Bytt ut treningsøvelser med jevne
            mellomrom for å unngå stagnasjon og holde motivasjonen oppe.
          </li>
          <li>
            <strong>Vei deg ukentlig:</strong> For å dokumentere vekttapet, vei
            deg én gang i uken, på samme tid og med samme vekt.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MyExercisePlan;
