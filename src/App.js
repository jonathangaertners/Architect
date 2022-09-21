import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header"
import SplitBoxImgAndText from "./components/SplitBoxImgAndText"
import Projects from './components/Projects';
import Footer from './components/Footer';
//Images
import heroImg from "./assets/heroImg.jpg"
import beratenImg from "./assets/beraten.jpg"
import planenImg from "./assets/planen.jpg"
import umsetzenImg from "./assets/umsetzen.jpg"
import item1 from "./assets/item1.jpg"
import item2 from "./assets/item2.jpg"
import item3 from "./assets/item3.jpg"
import item4 from "./assets/item4.jpg"
import Testemonials from './components/Testemonials';
import Lisa from './assets/Lisa.jpg';
import Mark from './assets/Mark.jpg';
import About from './components/About';
import team1 from "./assets/team1.jpg"
import team2 from "./assets/team2.jpg"
import team3 from "./assets/team3.jpg"
import team4 from "./assets/team4.jpg"
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header args={{
          headerText:"Ihr Partner für moderne Architektur",
          bodyText:`Von den ersten Schritten zur ganzheitlichen Planung bis zur konkreten Umsetzung - wir stehen Ihnen mit unserer Erfahrung aus hunderten Projekten zur Seite. Und das mit Leidenschaft und Kompetenz.`,
          imagePath:heroImg,
          buttonText1:"Leistungen",
          buttonText2:"Planen"}}/>

      <SplitBoxImgAndText args={{
          name:"services",
          headerText:"WIR BERATEN",
          bodyText:`Von den ersten Schritten zur ganzheitlichen Planung bis zur konkreten Umsetzung - wir stehen Ihnen mit unserer Erfahrung aus hunderten Projekten zur Seite. Und das mit Leidenschaft und Kompetenz.`,
          imagePath:beratenImg,
          buttonText:"Mehr erfahren",
          }}/>

      <SplitBoxImgAndText args={{
          headerText:"WIR PLANEN",
          bodyText:`Von den ersten Schritten zur ganzheitlichen Planung bis zur konkreten Umsetzung - wir stehen Ihnen mit unserer Erfahrung aus hunderten Projekten zur Seite. Und das mit Leidenschaft und Kompetenz.`,
          imagePath:planenImg,
          buttonText:"Mehr erfahren",
          reverse:true
          }}/>
      <SplitBoxImgAndText args={{
          headerText:"WIR SETZEN UM",
          bodyText:`Von den ersten Schritten zur ganzheitlichen Planung bis zur konkreten Umsetzung - wir stehen Ihnen mit unserer Erfahrung aus hunderten Projekten zur Seite. Und das mit Leidenschaft und Kompetenz.`,
          imagePath:umsetzenImg,
          buttonText:"Mehr erfahren",
          }}/>
      <Projects args={{
        headerTitle:"UNSERE PROJEKTE",
        headerBody:`Eine kleine Auswahl unserer bisherigen Projekte.`,
        imagePath1:item1,
        itemTitle1:"Wohnzimmer",
        itemBody1:"Das Bürgerbüro der Stadt Münster wurde von uns komplett neu saniert",
        imagePath2:item2,
        itemTitle2:"Penthaus",
        itemBody2:"Das Bürgerbüro der Stadt Münster wurde von uns komplett neu saniert",
        imagePath3:item3,
        itemTitle3:"Wohnraum",
        itemBody3:"Das Bürgerbüro der Stadt Münster wurde von uns komplett neu saniert",
        imagePath4:item4,
        itemTitle4:"Wohlfülen",
        itemBody4:"Das Bürgerbüro der Stadt Münster wurde von uns komplett neu saniert",
        }}/>
      <About args={{
        headerBody:`Architektur, Inneneinrichtung und Design aus Leidenschaft`,
        imagePath1:team1,
        name1:"Ferdinand Brügers",
        job1:"Geschäftsführer",
        text1:"Ich stehe ihnen mit Rat und Tat beiseite und beaufsichtige ihr Projekt.",
        imagePath2:team2,
        name2:"Melina Birgis",
        job2:"Designerin",
        text2:"Hey, ich bin Melina und ich bin für die schönen Dinge zuständig.",
        imagePath3:team3,
        name3:"Theresa Jafort",
        job3:"Zeichnerin",
        text3:"Ich bin für den technischen Teil ihres Projekts zuständig.",
        imagePath4:team4,
        name4:"Manu Schmidt",
        job4:"Planer",
        text4:"Ich bin für die Planung zuständig und ihr direkter Ansprechpartner",
      }}/>
      <Contact args={{
        email:"ferdinand-brügers@architekt.de",
        adress:"Stifstraße 1 59494 Soest",
        phonenumber:"015212345678",
        contactText:"Wir freuen uns von ihnen zu hören.",

      }}/>
      <Testemonials args={{
        itemBody1:"Vom ersten Beratungsgespräch über die ständingen Fortschrittsberichte zu der Schlüsselübergabe war alles Perfekt",
        itemTestemonialName1:"Mark Ebauer",
        itemTestemonialJob1:"Bauingeneur",
        imagePath1:Mark,
        itemBody2:"Besonders gefallen hat mir die reibungslose Umsetzung meiner Ideen und das auch bei jeder Kleinigkeit die noch nicht perfekt war, jemand diese ausgebessert hat.",
        itemTestemonialName2:"Lisa Bautinger",
        itemTestemonialJob2:"Grafikerin",
        imagePath2:Lisa
      }}/>
      
      <Footer/>
      
      
    </div>
  );
}

export default App;
