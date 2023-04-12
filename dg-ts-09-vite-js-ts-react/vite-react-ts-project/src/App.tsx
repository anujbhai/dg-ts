import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Heading title="Hey there" />
      <Section>
        <p>Section goes here ... </p>
      </Section>

      <Counter />
    </>
  );
}

export default App;
