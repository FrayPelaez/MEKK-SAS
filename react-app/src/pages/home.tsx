import Hero from "../components/home/hero";
import AboutPreview from "../components/home/aboutpreview";
import Categories from "../components/home/categories";
import FeaturedProducts from "../components/home/featuredproducts";
import Benefits from "../components/home/benefits";
import TrustedCompanies from "../components/home/trustedcompanies";
import QuotationCTA from "../components/home/quotationcta";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <TrustedCompanies />
      <QuotationCTA />
    </main>
  );
}