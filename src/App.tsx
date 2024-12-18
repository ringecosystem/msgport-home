import CodePart from "./components/CodePart";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntegratedApps from "./components/IntegratedApps";
import LinkRow from "./components/LinkRow";

function App() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/cover.png"
          className="absolute top-0 right-0 left-0 bottom-0 h-full object-cover opacity-20"
          alt="msport"
        />
        <Header />
        <Hero />
      </div>
      <LinkRow />
      <IntegratedApps />
      <CodePart />
    </>
  );
}

export default App;
