import "./App.css";
import Card from "./Components/Cards";
import { content } from "./const/constants";

function App() {
  return (
    <div className="app">
      <div className="text_container">
        <h1>how to Make a </h1>
        <h1><span className="gradient">Cartoon video?</span></h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui commodi
          illum debitis ad obcaecati sunt aliquid 
  
        </p>
      </div>

      <main className="card_container">
        {content.map((e, i) => {
          return (
            <Card
              step={e.step}
              heading={e.heading}
              img={e.img}
              content={e.content}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
