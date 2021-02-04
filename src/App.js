import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import MemberList from "./components/MemberList";
import BookList from "./components/BookList";
import MemberDetails from "./components/MemberDetails";
import MemberForm from "./components/MemberForm";
import BookForm from "./components/BookForm";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#B9B9B9",
    backgroundColor: "#000000",
    secondaryColor: "#00AAA9",
    red: "#FF0000",
  },
  dark: {
    mainColor: "#000000",
    backgroundColor: "#B9B9B9",
    secondaryColor: "#00AAA9",
    red: "#FF0000",
  },
};

function App() {
  const [currentTheme, setTheme] = useState("light");

  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        currentTheme={currentTheme}
        toggleCurrentTheme={toggleCurrentTheme}
      />
      <Switch>
        <Route path={["/members/new", "/members/:memberSlug/edit"]}>
          <MemberForm />
        </Route>
        {/* <Route path={["/books/new", "/books/:bookSlug/edit"]}>
          <BookForm />
        </Route> */}
        <Route path="/members/:memberSlug">
          <MemberDetails />
        </Route>
        <Route path="/books">
          <BookList />
        </Route>
        <Route path="/">
          <MemberList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
