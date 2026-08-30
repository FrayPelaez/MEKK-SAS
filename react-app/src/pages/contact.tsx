import ContactForm from "../components/contact/contactform";
import ContactInfo from "../components/contact/contactinfo";
import Advisors from "../components/contact/advisors";
import LocationMap from "../components/contact/locationmap";
import ContactHero from "../components/contact/contacthero";
import ContactCards from "../components/contact/contactcards";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <ContactHero />

        <ContactCards />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfo />
          <ContactForm />
        </div>

        <Advisors />

        <LocationMap />
      </div>
    </main>
  );
}