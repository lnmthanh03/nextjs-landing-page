import Navbar from "./Navbar/page";
import Home from "./Home/page";
import Achievements from "./Achievements/page";
import Results from "./Results/page";
import Experience from "./Experience/page";
import Pricing from "./Pricing/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";

export default function App() {
  return (
    <main className="sm:p-10 py-5 px-6 sm:px-16">
      <Navbar />
      <Home />
      <Achievements />
      <Results />
      <Experience />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
