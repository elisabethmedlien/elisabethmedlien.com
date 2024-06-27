import Logo from "../../assets/logo2.svg";
import HabitCard from "../../components/HabitCard/HabitCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import Progressbar from "../../components/Progressbar/Progressbar";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import SimpleFlipCard from "../../components/SimpleFlipCard/SimpleFlipCard";
import styles from "./MyNewYearsResolution.module.css";

const getDaysOfNotBitingNails = (): number => {
  const dateOfStopping: Date = new Date(2024, 0, 1); // JavaScript months are 0-indexed: 0 is January
  const today: Date = new Date();
  const differenceInTime = today.getTime() - dateOfStopping.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const daysOfNotBitingNails = Math.floor(differenceInDays);
  return daysOfNotBitingNails;
};

const getStopBitingNailsProgress = (): number => {
  const daysOfNotBitingNails = getDaysOfNotBitingNails();
  if (daysOfNotBitingNails >= 66) {
    return 66;
  } else return daysOfNotBitingNails;
};

function MyNewYearsResolution() {
  return (
    <main>
      <img className="logo" src={Logo} />
      <header className={styles.header}>
        <h1>MITT NYTTÅRSFORSETT 2024</h1>
      </header>
      <div className={styles.myResolutions}>
        <section className={styles.section}>
          <HabitCard goal="Slutte å bite negler">
            <p>
              Gjennomsnittlig grense for å slutte å bite negler er 66 dager.
              Dager uten å bite negler: {getDaysOfNotBitingNails()}
            </p>
            <Progressbar value={getStopBitingNailsProgress()} max={66} />
          </HabitCard>
          <HabitCard goal="Stresse mindre på jobb">
            <p>Bytte jobb</p>
            <Progressbar value={1} max={1} />
          </HabitCard>
        </section>
        <section className={styles.section}>
          <ProgressCard
            goal="Fullføre Red Dead Redemption 2"
            percentage={100}
          />
          <ProgressCard goal="Fullføre The Last Of Us 2" percentage={0} />
          <ProgressCard goal="Lage 5 bål" percentage={40} label="2/5" />
          <ProgressCard
            goal="Lese 4 bøker"
            percentage={(3 / 4) * 100}
            label="3/4"
          />
        </section>
        <section className={styles.section}>
          <SimpleFlipCard
            goal="Ta brattkort"
            list={[
              { title: "Bestille time", checked: false },
              { title: "Ta brattkort", checked: false },
            ]}
          />
          <SimpleCard goal="Være med på et DNT-arrangement" completed />
          <SimpleFlipCard
            goal="Ta båtførerprøven"
            list={[
              { title: "Finne pensum", checked: true },
              { title: "Lese pensum", checked: false },
              { title: "Bestille eksamen", checked: false },
              { title: "Bestå eksamen", checked: false },
            ]}
          />
          <SimpleCard goal="Prøve fridykking" />
          <SimpleCard goal="Selge fisker på auksjon" />
          <SimpleFlipCard
            goal="Digitalisere gamle videoer"
            list={[
              { title: "Levere DV-filmene fra tante", checked: false },
              { title: "Se over VHS-filmene fra bestefar", checked: false },
              { title: "Levere inn VHS-filmene til bestefar", checked: false },
            ]}
          />
        </section>
        <section className={styles.section}>
          <ProgressCard
            goal="Dra på yoga 10 ganger"
            percentage={20}
            label="2/10"
          />
          <ProgressCard
            goal="Dra til svømmehall 2 ganger"
            percentage={100}
            label="2/2"
          />
          <ProgressCard
            goal="Klare 3 blå løyper"
            percentage={100}
            label="3/3"
          />
          <ProgressCard goal="Padle 3 kayakkturer" percentage={0} label="0/3" />
        </section>
      </div>
    </main>
  );
}

export default MyNewYearsResolution;
