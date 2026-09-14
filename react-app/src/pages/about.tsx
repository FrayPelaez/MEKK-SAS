import AboutHero from "../components/about/abouthero";
import AboutInfo from "../components/about/aboutinfo";
import Commitments from "../components/about/commitments";
import DevelopmentTeam from "../components/about/developmentteam";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutInfo />
      <Commitments />
      <DevelopmentTeam />
    </main>
  );
}