import ApplicationComponent from "./Components/Application/ApplicationComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import OpcitionsBottomComponent from "./Components/OptionsBottom/OpcitionsBottomComponent";

export default function Home() {
  const isLogued = true
  return (
    <main className="relative h-screen w-full flex flex-col">
      <NavbarComponent isLogued={isLogued}/>
      <ApplicationComponent />
      <OpcitionsBottomComponent isLogued={isLogued}/>
      <FooterComponent isLogued={isLogued}/>
    </main>
  );
}
