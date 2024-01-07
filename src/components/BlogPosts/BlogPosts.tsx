import "./BlogPosts.css";

import MyAquariumImg from "../../assets/my-aquarium-1-sept-2023.jpg";
import MyAquariumImg2 from "../../assets/my-aquarium-18-sept-2023.jpg";
import BookFromAuction from "../../assets/book-from-auction.jpg";
import MyAquariumImg3 from "../../assets/my-aquarium-18-okt-2023.jpg";
import MyAquariumImg4 from "../../assets/my-aquarium-5-nov-2023.jpg";
import MyAquariumImg5 from "../../assets/my-aquarium-31-okt-2023.jpg";
import MyAquariumImg6 from "../../assets/my-aquarium-24-okt-2023.jpg";
import AncistrusHotel from "../../assets/ancistrus-hotel.jpeg";
import CobraGuppy from "../../assets/cobra-guppy.jpeg";
import AquariumInstallation from "../../assets/aquarium-installation.jpeg";
import FinnAd from "../../assets/finn-ad.jpeg";
import ScreenshotHomeAssistant from "../../assets/screenshot-home-assistant.png";
import DeadAncistrus1 from "../../assets/my-aquarium-21-nov-2023.jpg";
import DeadAncistrus2 from "../../assets/my-aquarium-21-nov-2023-2.jpg";
import AndreasInStorage from "../../assets/my-aquarium-21-nov-2023-3.jpg";
import TwoAquariums from "../../assets/my-aquarium-4-des-2023.jpg";
import AuctionHall from "../../assets/auction-hall.jpg";
import Figure, { FigureFormat } from "../Figure/Figure";
import HealthMethricsTable from "../HealthMethricsTable/HealthMethricsTable";
import Picture from "../Picture/Picture";
import Video, { VideoFormat } from "../Video/Video";
import InfoPanel from "../InfoPanel/InfoPanel";

export const blogPosts = [
  {
    title: "Fiskene har det bra",
    date: "04. januar 2024",
    node: (
      <>
        <p>
          Nå er vi tilbake fra juleferie og fiskene har overlevd! Babyene har
          blitt såå store! Med unntak av noen som fremdeles er bittesmå. De
          minste virker litt redde for å forlate javamosen, så kanskje det ikke
          har kommet seg så mye mat dit. Jeg har slått av maskinene nå og mater
          de heller for hånd. Slik kan jeg sørge for at de minste babyene får i
          seg næring. Nå er de eldste babyene 1 måned gamle, og da skal man
          visst kunne begynne å se hvilke kjønn de er. Jeg synes ikke det er
          synlig nok helt enda.
        </p>
        <Figure
          caption="Akvariet med guppy-hunnene og babyene"
          format={FigureFormat.VIDEO}
        >
          <Video
            videoId="vcgav9"
            title="Akvarie med guppy og ancistrus"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Automatisk fôring",
    date: "23. desember 2023",
    node: (
      <p>
        Andreas har satt opp de automatiske foringsmaskinene. Det er koplet opp
        mot <em>Home Assistant</em>, så vi skal ideelt sett se om automasjonen
        feiler. Krysser fingra!
      </p>
    ),
  },
  {
    title: "Reiser på juleferie",
    date: "20. desember 2023",
    node: (
      <p>
        Vi reiser på juleferie. Jeg skulle egentlig fikse automatisk fôring for
        akvariene i førjulstiden, men dessverre utgikk dette grunnet sykdom.
        Andreas er mye mer rutinert på disse tingene og har tatt på seg denne
        arbeidsoppgaven som den helten han er.
      </p>
    ),
  },
  {
    title: "Guttastemning",
    date: "10. desember 2023",
    node: (
      <>
        <p>
          Her er akvarie nummer to! Gutta er ivrige og danser fra morgen til
          kveld. Slørhale-ancistrusen er sjenert og liker å gjemme seg.
          Dessverre har den ikke så mange gjemmesteder enda. Har noen planer om
          å lage i stand noe der senere. Ellers har de fått utsmykket karet sitt
          med flere skjell fra stranda i Frankrike og litt javamose.
        </p>
        <InfoPanel>
          <h3>
            Hvorfor danser Guppyhannene når det ikke er noen hunner tilstede?
          </h3>
          <p>
            Selv i fravær av hunner kan guppy-hanner fortsette å vise
            parringsatferd, inkludert dansing. Dette skyldes flere mulige
            årsaker:
          </p>
          <h4>Instinktiv atferd</h4>
          <p>
            Parringsdansen er en dypt rotfestet, instinktiv atferd hos
            guppy-hanner. De kan utføre denne atferden regelmessig, uavhengig av
            om det er hunner til stede eller ikke.
          </p>
          <h4>Øving</h4>
          <p>
            Hannene kan "øve" på sin parringsdans, forberede seg for fremtidige
            møter med hunner. Dette kan hjelpe dem å forbedre sin ytelse og øke
            sjansene for suksess når de faktisk møter en hunn.
          </p>
          <h4>Sosial interaksjon</h4>
          <p>
            I noen tilfeller kan hannene utføre dansen som en del av sosial
            interaksjon med andre hanner. Dette kan være en måte å etablere
            dominans eller hierarki i akvariet.
          </p>
          <h4>Refleksjon eller feiltolkning</h4>
          <p>
            Guppy-hanner kan noen ganger reagere på sin egen refleksjon i
            akvarieglasset eller feiltolke andre objekter eller bevegelser i
            vannet som potensielle parringspartnere. Selv om denne atferden kan
            virke bortkastet uten hunner til stede, er det en normal del av
            guppy-hannens naturlige adferdsrepertoar.
          </p>
        </InfoPanel>
        <Figure format={FigureFormat.VIDEO} caption="Akvariet til gutta">
          <Video
            videoId="il5oqa"
            title="Akvarie med Endlers Guppy-hanner"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Minst 10 babyer",
    date: "06. desember 2023",
    node: (
      <>
        <p>
          Nå har jeg telt kanskje 11 babyer i akvariet. Det er stor forskjell på
          størrelsen på babyene nå. De minste er bare øyer lol. De eldste ser jo
          faktisk ut som fisk.
        </p>
        <InfoPanel>
          <h3>Synlige kjønnsforskjeller på guppybabyer</h3>
          <p>
            Du kan begynne å se kjønnsforskjeller hos guppy-babyer (fry) fra de
            er omtrent en måned gamle. I denne alderen begynner hannene å vise
            farger og deres karakteristiske gonopodium (et omformet analfinne
            som brukes i reproduksjon). Hunnene er vanligvis større og mindre
            fargerike enn hannene. Imidlertid kan noen guppyvarianter vise
            kjønnsforskjeller litt tidligere eller senere, avhengig av genetikk
            og oppvekstvilkår. Husk at gode forhold, som ren vannkvalitet og
            riktig fôring, er viktig for sunn vekst og utvikling av guppyene.
          </p>
        </InfoPanel>
      </>
    ),
  },
  {
    title: "Bilde av akvariene",
    date: "04. desember 2023",
    node: (
      <Figure
        caption="To identiske akvarium på hver sin side av 3D-printeren"
        format={FigureFormat.IMAGE}
      >
        <Picture
          src={TwoAquariums}
          alt="To identiske akvarium på hver sin side av 3D-printeren"
        />
      </Figure>
    ),
  },
  {
    title: "Flere babyer!",
    date: "01. desember 2023",
    node: (
      <>
        <p>
          Nå kan jeg telle 4 babyer i akvariet. Det er ikke så lett å finne de i
          javamosen. Frøknene ser fremdeles veldig gravide ut så jeg forventer
          flere babyer. Jeg bytter ut bittelitt av vannet hver dag nå siden
          disse småtassene burde ha meget god vannkvalitet. Jeg passer også på
          at de får tak i maten, så jeg slipper litt mat i javamosen rett etter
          jeg gir mat til mødrene i andre enden av akvariet.
        </p>
        <Figure
          format={FigureFormat.VIDEO}
          caption="Kan telle 4 babyer i akvariet!"
        >
          <Video
            videoId="eow7ln"
            title="Akvarie med Endlers Guppy babyer"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "BABYER!",
    date: "30. november 2023",
    node: (
      <>
        <p>
          Jeg kan såvidt se noen babyer i akvariet. Lyset i akvariet gjør vondt
          i øynene mine så jeg får ikke sett så lenge av gangen. Jeg har funnet
          to babyer så langt. Det er veldig hyggelig at det skapes litt liv i
          dette akvariet.
        </p>
        <Figure format={FigureFormat.VIDEO} caption="Det er babyer i akvariet!">
          <Video
            videoId="eicsbi"
            title="Akvarie med Endlers Guppy babyer"
            format={VideoFormat.VERTICAL}
          />
        </Figure>
        <p>
          Guppy-frøknene virker veldig friske og avslappede nå som de har karet
          for seg selv. Gutta i det andre akvariet trives også. De danser like
          mye til tross for at damene er borte.
        </p>
      </>
    ),
  },
  {
    title: "Andreas flytter fisker",
    date: "29. november 2023",
    node: (
      <p>
        Jeg har vært på sykehus så det er Andreas som har ordnet med akvariene.
        Han lot akvarie nummer to stå noen dager og tok målinger underveis. Når
        målingene og temperaturen var riktig flyttet han alle guppy-guttene over
        i det nye akvariet sammen med den siste slørhale-anscistrusen. Det gamle
        akvariet inneholder alle guppy-jentene og Lars.
      </p>
    ),
  },
  {
    title: "Oisann, der kom et akvarie til",
    date: "21. november 2023",
    node: (
      <>
        <p>
          Det var ikke særlig respons på finnannonsen min og jeg har ikke funnet
          noe Japan Blue Endlers Guppy-jenter noe sted. Jeg snakket med han på
          Pets Liertoppen om problemet mitt og han sa at det var en grei løsning
          å bruke to akvarier om jeg hadde mulighet til det. Og det har jeg jo!
          Mari har et identisk akvarie liggende på lageret sitt. Så nå har vi to
          akvarier.
        </p>
        <Figure caption="Andreas på lageret" format={FigureFormat.IMAGE}>
          <Picture src={AndreasInStorage} alt="Andreas på lageret" />
        </Figure>

        <p>
          Jeg brukte en god slant av vannet fra det første akvariet som allerede
          har alle de riktige vannverdiene og temperatur for å gjøre klart
          akvarie nummer to. Dessverre har jeg ikkeno bilde av det for øyet mitt
          er vondt.
        </p>
      </>
    ),
  },
  {
    title: "KRISEDAG!",
    date: "21. november 2023",
    node: (
      <>
        <p>
          Jeg kom hjem fra jobb og fant en av ancistrusene liggende på rygg. Jeg
          flyttet den over på magen igjen og prøvde gi den mat, men den
          responderer ikke særlig. Mari mistenkte finneråte som dødsårsak på
          forrige anscistrus og jeg er redd det skjer igjen med denne, men jeg
          vet ikke hvorfor.
        </p>

        <InfoPanel>
          <h3>Finneråte</h3>
          <p>
            Finneråte er en vanlig sykdom som påvirker finnene på fisk, ofte
            sett i akvarier og fiskeoppdrett. Denne tilstanden er forårsaket av
            en bakteriell eller soppinfeksjon som resulterer i frynsete,
            splittet eller hull i finnene. Finneråte kan forverres av dårlig
            vannkvalitet eller stress hos fisken, og hvis den ikke behandles,
            kan den spre seg til andre deler av fisken og være dødelig. Tidlig
            behandling med riktig medisin og forbedring av vannforholdene er
            nøkkelen til å bekjempe finneråte.
          </p>
        </InfoPanel>
        <Figure caption="Sliten Ancistrus" format={FigureFormat.IMAGE}>
          <Picture src={DeadAncistrus1} alt="Sliten Ancistrus" />
        </Figure>
        <p>
          Vi dro til Pets Liertoppen for å høre om det var noe medisin vi kunne
          bruke for å redde fisken vår. Vi forklarte situasjonen vår til en
          ansatt og han syntes det så litt mørkt ut om fisken er i slik tilstand
          at den ligger på ryggen. Medisin ville sannsynlig ikke hjelpe og at
          det var bedre å finne roten til problemet enn å tilføre noe i
          akvariet. Vi snakket om vann-målinger, vannbytter, antall fisk, type
          fisk, hvor lenge vi hadde hatt dem, plantene, dekorasjon, lys og
          størrelse på akvariet, og ut fra dette fant han at vi skifter vann for
          sjeldent ut fra akvariestørrelse. Vi burde skifte vann dobbelt så ofte
          som vi har gjort siden det er et mindre akvarie. Vi viste bilde av
          fiskene som har dødd/vært syke og han var enig i at det liknet
          finneråte. Derfor anbefalte han heller å bytte 10% av vannet hver dag
          i en uke for å bedre vannkvaliteten snarest slik at de andre fiskene
          ikke lider samme skjebne. Han var virkelig flink han der altså.
        </p>
        <p>
          På veien hjem hentet vi et akvarie til. Vi skal skille guppy-guttene
          ut fra guppy-jentene, men mer om det i neste innlegg.
        </p>
        <p>
          Vi kom hjem noen timer etter vi hadde dratt. Nå er det ikke noe håp
          for ancistrusen lenger. Den er tydelig død. Vi tok den ut av akvariet.{" "}
        </p>
        <Figure
          caption="Holder død Ancistrus i håndflaten"
          format={FigureFormat.IMAGE}
        >
          <Picture
            src={DeadAncistrus2}
            alt="Holder død Ancistrus i håndflaten"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Finnannonse",
    date: "20. november 2023",
    node: (
      <>
        <p>Jeg la ut en annonse på Finn. Kanskje vi får napp.</p>

        <Figure caption="Finnannonse" format={FigureFormat.IMAGE}>
          <Picture src={FinnAd} alt="Finnannonse" />
        </Figure>
      </>
    ),
  },
  {
    title: "Nye romkamerater!",
    date: "19. november 2023",
    node: (
      <>
        <p>
          Hils på de nye fiskene! Det er 3 hanner og 3 huer. Jeg tror alle huene
          er gravide. Hannene (de med blå farge) er veldig opptatte av å vise
          seg frem for huene - i form av dans! Jeg lærte nå at jeg har for få
          huer i forhold til hanner, og at dette kan føre til at huene blir
          stresset. De kan dø av det. Litt usikker på hva jeg skal gjøre med
          det.
        </p>

        <InfoPanel>
          <h3>Hvorfor danser Guppyhannene?</h3>
          <p>
            Guppy-hannene danser som en del av deres parringsatferd, kjent som
            "courtship display". Denne oppvisningen er en måte for hannene å
            tiltrekke seg oppmerksomheten til hunnene og demonstrere sin
            vitalitet og genetiske kvalitet. Gjennom intrikate og ofte fargerike
            danser, viser hannene fram sine farger og bevegelsesevne, som kan
            være attraktive egenskaper for hunnene. Dette ritualet er ikke bare
            viktig for umiddelbar parringsinteresse, men det bidrar også til
            seksuell seleksjon, der hunnene velger de hannene de anser som mest
            egnet til å formere seg med. Dette sikrer at de sterkeste og mest
            livskraftige genene blir videreført til neste generasjon.
          </p>
        </InfoPanel>
        <Figure format={FigureFormat.VIDEO} caption="Mye aktivitet i karet">
          <Video
            videoId="gcwj1j"
            title="Akvarie med Endlers Guppy og Ancistrus"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
        <p>
          Jeg tok målinger av vannet i posen fiskene fulgte med i for å se
          hvilke verdier de var vant til i det forrige akvariet sitt. Jeg så at
          de kom fra en PH-verdi mellom 7 og 8, og 6dKH. Dette er det samme som
          i mitt så det passer bra. De burde kunne klimatisere seg helt fint.
        </p>
        <p>
          Disse fiskene går også veldig fint overens med ancistrusene mine. Se
          som de koser seg i lag.
        </p>
        <p>
          Jeg fikk litt javamose fra Mari så fiskene kan gjemme yngelet sitt
          litt.
        </p>
      </>
    ),
  },
  {
    title: "Fiskeauksjon i Larvik",
    date: "18. november 2023",
    node: (
      <>
        <p>
          Vi dro til Larvik for å bli med på auksjon! De har veldig fine
          lokaler. Vi satt tålmodig i tre timer før godsakene dukket opp.
          Andreas vant budrunden på 6 stk Japan Blue Endlers Guppy. Mari tok
          hjem 6 L144 Snow White Ancistrus. Vi vant til og med noen orkideer på
          auksjonens lotteri! Bra fangst!
        </p>

        <Figure caption="Mallehotell" format={FigureFormat.IMAGE}>
          <Picture src={AncistrusHotel} alt="Mallehotell" />
        </Figure>
        <Figure caption="En pen Cobra Guppy" format={FigureFormat.IMAGE}>
          <Picture src={CobraGuppy} alt="Cobra Guppy" />
        </Figure>
        <Figure
          caption="Akvariumsinstallasjon med potteplanter"
          format={FigureFormat.IMAGE}
        >
          <Picture
            src={AquariumInstallation}
            alt="Akvariumsinstallasjon med potteplanter"
          />
        </Figure>

        <Figure format={FigureFormat.VIDEO} caption="Fiskeauksjon i Larvik">
          <Video
            videoId="i45iw4"
            title="Fiskeauksjon i Larvik"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Måling",
    date: "17. november 2023",
    node: (
      <>
        <HealthMethricsTable nh4={0.05} no2={0.05} no3={0.75} ph={7.5} kh={6} />
        <p>
          Samlet sett ser akvariet ut til å ha ganske gode vannforhold.
          PH-verdien har økt fra 6.5 til 7.5 siden sist. Jeg leste meg opp og så
          at det kan komme av flere årsaker, her er noen av de:
        </p>
        <ul style={{ marginLeft: "25px" }}>
          <li>
            <strong>Naturlige biologiske prosesser:</strong> Biologiske
            prosesser i akvariet, som nedbrytning av organisk materiale, kan
            påvirke pH-verdien over tid.
          </li>
          <li>
            <strong>Dekorasjoner og substrat:</strong> Bruk av visse typer
            dekorasjoner eller substrat i akvariet kan påvirke pH-verdien. For
            eksempel kan bruk av drivved eller visse typer steiner bidra til å
            senke pH-verdien over tid.
          </li>
          <li>
            <strong>Vannbytte:</strong> Endringer i pH kan også skyldes
            vannbytte. Hvis det nye vannet som tilsettes under vannbytte har en
            annen pH-verdi enn akvarievannet, kan det påvirke den totale
            pH-verdien.
          </li>
          <li>
            <strong>Biologisk filtrering:</strong>
            Endringer i den biologiske filtreringen kan påvirke pH-verdien. For
            eksempel kan en reduksjon i antall gunstige nitrifiserende bakterier
            føre til en lavere pH.
          </li>
        </ul>
        <p>
          Jeg har både byttet vann og lagt i nye dekorasjoner. I tillegg så døde
          jo den ene fisken min. Det tikker tre av fire bokser. Får holde et
          lite øye med det.
        </p>
      </>
    ),
  },
  {
    title: "Nå styrer vi skuta!",
    date: "05. november 2023",
    node: (
      <>
        <Figure format={FigureFormat.VIDEO} caption="Ute og skrubber dekk.">
          <Video
            videoId="nrqzis"
            title="Ancistrusene har fått ny dekorasjon i akvariet - en skute"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "SORG",
    date: "05. november 2023",
    node: (
      <>
        <p>
          Vi ble møtt av skrekk og gru da vi kom hjem igjen fra helgetur! Det er
          den nest største ancistrusen som har forlatt oss, en hann. Nå har vi
          lært å aldri forlate huset.
        </p>
        <Figure caption="Død fisk" format={FigureFormat.IMAGE}>
          <Picture src={MyAquariumImg4} alt="Bilde av død fisk" />
        </Figure>
      </>
    ),
  },
  {
    title: "Happy halloween!",
    date: "31. oktober 2023",
    node: (
      <>
        <Figure caption="OBS OBS skummelt!" format={FigureFormat.IMAGE}>
          <Picture
            src={MyAquariumImg5}
            alt="Akvarie med fisk og edderkopp-dekorasjon"
          />
        </Figure>

        <Figure format={FigureFormat.VIDEO} caption="merker ugler i mosen.">
          <Video
            videoId="yvzg40"
            title="akvarie med fisk og edderkopp-dekorasjon"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Kosegutten",
    date: "24. oktober 2023",
    node: (
      <>
        <p>
          Gutt nummer 2. Man kan visst se kjønn ved at hannene får pigger på
          snuta. De to andre er for små enda til å vite kjønn. Synes han ser
          litt slitt ut på slørene sine. Da er det godt å slappe av litt unna de
          andre. De styrer jo så fælt.
        </p>
        <Figure
          caption="Kanskje han gjemmer seg fra Lars?"
          format={FigureFormat.IMAGE}
        >
          <Picture src={MyAquariumImg6} alt="Fisk på blad" />
          <figcaption>Bilde: Kanskje han gjemmer seg fra Lars?</figcaption>
        </Figure>
      </>
    ),
  },
  {
    title: "The setup",
    date: "18. oktober 2023",
    node: (
      <>
        <p>
          Homeassistant for å holde styr på lys, vannbytte og mating. Pluss litt
          informasjon.
        </p>
        <Figure
          caption="Oppsett med akvarie og Home Assistant"
          format={FigureFormat.IMAGE}
        >
          <Picture
            src={MyAquariumImg3}
            alt="Bilde av akvarie og en skjerm med Home Assistant"
          />
        </Figure>
        <Figure
          caption="Screenshot fra Home Assistant"
          format={FigureFormat.IMAGE}
        >
          <Picture
            src={ScreenshotHomeAssistant}
            alt="Skjermbilde av Home Assistant"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Boka fra auksjonen",
    date: "15. oktober 2023",
    node: (
      <>
        <Figure caption="Bok om L-maller" format={FigureFormat.IMAGE}>
          <Picture src={BookFromAuction} alt="Bok om L-maller" />
        </Figure>
      </>
    ),
  },
  {
    title: "Fiskeauksjon på Jar",
    date: "14. oktober 2023",
    node: (
      <>
        <p>
          I helga var det fiskeauksjon på Jar med Oslo akvarieklubb. Veldig
          flotte greier! Vi satt klare på stolspissen for å by på blå Guppy, men
          dessverre dukket den perfekte Guppy'n aldri opp. Jeg fikk heldigvis
          tak i en bok om L-maller. Om så bare for å si at jeg har deltatt
          aktivt på fiskeauksjon. Det var gøy!
        </p>
        <Figure
          caption="Fiskeauksjon på Jar med Oslo akvarieklubb."
          format={FigureFormat.IMAGE}
        >
          <Picture src={AuctionHall} alt="Fiskeauksjon" />
        </Figure>
      </>
    ),
  },
  {
    title: "Møt Lars!",
    date: "11. oktober 2023",
    node: (
      <>
        <p>
          Lars er en bølle av en Ancistrus. Jeg fant nylig ut at han ikke er av
          det samme slaget som resten av flokken. Så han er altså ikke en
          slørhale ancistrus som vi trodde tidligere. Han er en luring.
        </p>
        <Figure format={FigureFormat.VIDEO} caption="Bølla Lars">
          <Video
            videoId="sk6dr4"
            title="Møt fisken Lars"
            format={VideoFormat.VERTICAL}
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Første måling etter fisk",
    date: "01. oktober 2023",
    node: (
      <>
        <HealthMethricsTable nh4={0.05} no2={0.025} no3={1} ph={6.5} kh={6} />
        <p>Det er god helse i akvariet mitt!</p>
      </>
    ),
  },
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
        <Figure format={FigureFormat.VIDEO} caption="Gjengen slapper av.">
          <Video
            videoId="0x8x5t"
            title="Ancistrusene slapper av i akvariet"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
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
        <Figure
          format={FigureFormat.VIDEO}
          caption="Ancistrusene jobber hardt med å rense akvariet for alger"
        >
          <Video
            videoId="9h8ttl"
            title="Akvarie med fisk"
            format={VideoFormat.HORIZONTAL}
          />
        </Figure>
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
        <Figure
          caption="Det er masse grønn/brun-aktige alger i akvariet."
          format={FigureFormat.IMAGE}
        >
          <Picture
            src={MyAquariumImg2}
            alt="Bilde av et akvarie med mye alger"
          />
        </Figure>
        <p>
          Jeg tar en måling av de viktigste parameterne for å passe på at algene
          ikke er et resultat av noe annet.
        </p>
        <HealthMethricsTable nh4={0.05} no2={0.025} no3={0.5} ph={6.5} />
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
        <Figure
          caption="ser sunt ut. Litt grumsete fordi jeg rota litt i sanda."
          format={FigureFormat.IMAGE}
        >
          <Picture src={MyAquariumImg} alt="Bilde av akvariet" />
        </Figure>
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
        <HealthMethricsTable nh4={0.05} no2={1.0} no3={15} ph={6.5} kh={6} />
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
        <HealthMethricsTable nh4={0.05} no2={0.05} no3={0.75} ph={6.5} kh={6} />
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
        <HealthMethricsTable nh4={0.05} no2={0.001} no3={0.5} ph={6.5} kh={6} />
        <p>
          Siden jeg <em>kickstarta</em> syklusen til akvariet forventer jeg at
          nivåene for ammoniakk og nitritt er høyere ved neste ukes måling.
        </p>
      </>
    ),
  },
];
