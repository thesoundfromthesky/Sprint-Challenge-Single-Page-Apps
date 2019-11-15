import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "./components/Header.js";
import Navigation from "./components/Navigation/Navigation";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [term, setTerm] = React.useState("");
  return (
    <main>
      <Header />
      <Navigation />
      <SearchForm term={term} setTerm={setTerm} />
      <Route exact path="/" render={_ => <Redirect to="/home" />} />
      <Route path="/home" component={WelcomePage} />
      <Route
        path="/character"
        render={props => <CharacterList {...props} term={term} />}
      />
    </main>
  );
}
