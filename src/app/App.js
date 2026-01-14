import { BreedersPage } from "../features/page/BreedersPage.js";
import { AppShell, Header, Title, Subtitle, Main, Footer } from "./App.styles.js";

const App = () => {
  return (
    <AppShell>
      <Header>
        <Title>Baza Hodowców</Title>
        <Subtitle>Telefon • Mapa • Kontakt • Notatka (offline)</Subtitle>
      </Header>

      <Main>
        <BreedersPage />
      </Main>

      <Footer>Wersja MVP • localStorage</Footer>
    </AppShell>
  );
};

export default App;