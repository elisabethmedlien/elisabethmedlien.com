import Logo from "../../assets/logo2.svg";
import styles from "./MyStrengthTrainingSessions.module.css";

function MyStrengthTrainingSessions() {
  return (
    <main>
      <img className="logo" src={Logo} />
      <header className={styles.header}>
        <h1>MIN STYRKETRENING</h1>
      </header>
      <div className={styles.container}>
        <h2>Rygg- og Nakketreningsøkt</h2>
        <p>
          Her er en treningsøkt som fokuserer på styrking av rygg og nakke.
          Disse øvelsene er utformet for å styrke musklene i øvre del av ryggen,
          skuldrene og nakken, noe som kan være nyttig for å forbedre holdning,
          redusere risikoen for skader og forbedre ytelsen i aktiviteter som
          kajakkpadling og klatring:
        </p>
        <p>Lengde: 55 minutter – 1 time og 20 minutter </p>
        <p>
          <strong>Oppvarming:</strong>Start med 5-10 minutters lett
          kardiovaskulær oppvarming, for eksempel rask gange, jogging eller
          sykling. Gjør noen dynamiske strekkøvelser for å varme opp musklene,
          inkludert arm- og skulderrotasjoner, sidebøyninger og halsrotasjoner.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Øvelse</th>
              <th>Sett x Repetisjoner</th>
              <th>Beskrivelse</th>
              <th>Kommentar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assisted Pull-ups</td>
              <td>3 x 8-12</td>
              <td>
                Trener øvre rygg, skuldre og armer.{" "}
                <a href="https://www.youtube.com/watch?v=wFj808u2HWU">
                  Assisted pull ups
                </a>
              </td>
              <td>
                55kg: 5, 6, 6. Slet litt med å finne ut av hvordan maskina
                fungerte. Syntes den på Schous var ganske vond.
              </td>
            </tr>
            <tr>
              <td>Roing med vektstang eller manualer</td>
              <td>3 x 10-15</td>
              <td>
                Ligg på en benk med brystet ned og løft vektstangen eller
                manualene mot ribbeina mens du trekker skulderbladene sammen.{" "}
                <a href="https://www.gymgrossisten.no/sittende-roing.html">
                  Sittende roing
                </a>
                ,{" "}
                <a href="https://www.gymgrossisten.no/hantelroing.html">
                  Roing med manualer
                </a>
              </td>
              <td>
                4kg til oppvarming. 5kg: 3 x 10. Kan øke repitisjoner til 15
                neste gang.
              </td>
            </tr>
            <tr>
              <td>Supermann</td>
              <td>3 x 12-15</td>
              <td>
                Ligg på magen med armene og bena strakt ut, løft overkroppen og
                bena samtidig og hold i noen sekunder før du senker ned igjen.
                Dette styrker ryggmusklene.
              </td>
              <td>3 x 12</td>
            </tr>
            <tr>
              <td>Face Pulls</td>
              <td>3 x 12-15</td>
              <td>
                Fest et strikk eller et tau til en høy kabelmaskin, ta tak i
                enden og trekk tauet mot ansiktet mens du holder albuene høye.
                Dette trener skuldre og øvre rygg.{" "}
                <a href="https://www.gymgrossisten.no/face-pull.html">
                  Face pull
                </a>
              </td>
              <td>10kg, 12 x 3. øke til 15 reps neste gang.</td>
            </tr>
            <tr>
              <td>Nakkeforlengelse</td>
              <td>3 x 15-20</td>
              <td>
                Stå eller sitte rett opp med en nøytral nakke, løft hodet
                forsiktig opp mot taket og senk det tilbake ned. Dette styrker
                musklene i nakken.
              </td>
              <td>
                det her forstod jeg ikkeno av. tror ikke det er en vanlig øvelse
                for styrke??? Bytte ut med noe annet neste gang.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Avslutt økten med noen statiske strekk for rygg, skuldre og nakke.
          Hold hvert strekk i 15-30 sekunder og gjenta ved behov.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Øvelse</th>
              <th>Sett x Repetisjoner</th>
              <th>Beskrivelse</th>
              <th>Kommentar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assisted Pull-ups</td>
              <td>55kg: 3 x 6</td>
              <td>
                Trener øvre rygg, skuldre og armer.{" "}
                <a href="https://www.youtube.com/watch?v=wFj808u2HWU">
                  Assisted pull ups
                </a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Roing med vektstang eller manualer</td>
              <td>5kg: 3 x 15</td>
              <td>
                Ligg på en benk med brystet ned og løft vektstangen eller
                manualene mot ribbeina mens du trekker skulderbladene sammen.{" "}
                <a href="https://www.gymgrossisten.no/sittende-roing.html">
                  Sittende roing
                </a>
                ,{" "}
                <a href="https://www.gymgrossisten.no/hantelroing.html">
                  Roing med manualer
                </a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Supermann</td>
              <td>3 x 15</td>
              <td>
                Ligg på magen med armene og bena strakt ut, løft overkroppen og
                bena samtidig og hold i noen sekunder før du senker ned igjen.
                Dette styrker ryggmusklene.
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Face Pulls</td>
              <td>10kg: 3 x 15</td>
              <td>
                Fest et strikk eller et tau til en høy kabelmaskin, ta tak i
                enden og trekk tauet mot ansiktet mens du holder albuene høye.
                Dette trener skuldre og øvre rygg.{" "}
                <a href="https://www.gymgrossisten.no/face-pull.html">
                  Face pull
                </a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Shoulder abduction (armløft ut til siden).</td>
              <td>3 x 10-15</td>
              <td>
                Slowly raise your arm out to the side until the wrist is
                slightly above the shoulders. Your arm should be slightly bent
                and your wrist straight. Pause briefly at the top of the motion,
                then slowly lower your arm back down to your side.
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>
          notat til senere trening:{" "}
          <a href="https://nhi.no/trening/aktivitet-og-helse/treningsrad-generelle/bli-kvitt-nakkesmerter-med-styrketrening">
            NHI: styrkeøvelser mot nakkesmerter
          </a>
          . Basert på studie{" "}
          <a href="https://journals.physiology.org/doi/full/10.1152/japplphysiol.00555.2009">
            Effect of contrasting physical exercise interventions on rapid force
            capacity of chronically painful muscles
          </a>
        </p>
      </div>
    </main>
  );
}

export default MyStrengthTrainingSessions;
