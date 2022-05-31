import { Route, Switch, BrowserRouter } from "react-router-dom";
// component
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      {
        <Route
          render={() => (
            <div>
              <Routes />
            </div>
          )}
        />
      }
    </BrowserRouter>
  );
}

export default App;
