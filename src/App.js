import { Route, Switch, BrowserRouter } from "react-router-dom";
// component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import Manager from "./pages/Manager";

function App() {
  return (
    <BrowserRouter>
      {
        <Route
          render={() => (
            <div>
              <Header />
              <Routes />
              <Footer />
            </div>
          )}
        />
      }
    </BrowserRouter>
  );
}

export default App;
