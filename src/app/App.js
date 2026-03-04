import { BreedersPage } from "../features/page/BreedersPage.js";
import { AppShell, Header, Title, Subtitle, Main, Footer } from "./App.styles.js";
import { AuthGate } from "../core/firebase/auth/AuthGate.js";

const App = () => {
  return (
    <AppShell>
      <Header>
        <Title>Baza Hodowców</Title>
        <Subtitle>Telefon • Mapa • Kontakt • Notatka (offline)</Subtitle>
      </Header>

      <Main>
        <AuthGate>
          {({ role }) => <BreedersPage role={role} />}
        </AuthGate>
      </Main>

      <Footer>Wersja MVP • Firebase</Footer>
    </AppShell>
  );
};

export default App;