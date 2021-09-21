import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import ArchivePage from "./pages/archivePage/ArchivePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/landing" />
        </Route>

        <Route path="/landing">
          <LandingPage />
        </Route>

        <Route path="/events">
          <EventsPage />
        </Route>

        <Route path="/archive">
          <ArchivePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
