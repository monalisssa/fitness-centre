

import {BrowserRouter} from "react-router-dom";

import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/reset.css"
import "./styles/index.css"
import "./styles/media.css"





function App() {
  return (

      <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
      </BrowserRouter>

  );
}

export default App;
