import CodePart from "./components/CodePart";
import Comments from "./components/Comments";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntegratedApps from "./components/IntegratedApps";
import LinkRow from "./components/LinkRow";
import Scenarios from "./components/scenarios";

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
      <Scenarios />
      <Comments />
    </>
  );
}

export default App;
