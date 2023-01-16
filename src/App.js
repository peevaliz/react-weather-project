import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
        <footer>
          <p>
            This project was coded by Yelyzaveta Pieieva and it`s{" "}
            <a
              href="https://github.com/peevaliz/react-weather-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
