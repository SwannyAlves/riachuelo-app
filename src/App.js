import { useEffect, useState } from "react";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message";
import Spinner from "./components/Spinner";
import CategoriesContext from "./contexts/CategoriesContext";
import FilterContext from "./contexts/FilterContext";
import LoadingContext from "./contexts/LoadingContext";
import MessageContext from "./contexts/MessageContext";
import useLoading from "./hooks/useLoading";
import Routes from "./routes/routes";
import CategoriesService from "./services/CategoriesService";

function App() {
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState({});
  const [addRequest, removeRequest, isLoading] = useLoading();

  // eslint-disable-next-line
  useEffect(() => loadCategories(), []);

  function loadCategories() {
    addRequest();
    CategoriesService.get()
      .then((c) => setCategories(c))
      .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
      .finally(() => removeRequest());
  }

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <GlobalStyle />
      <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <CategoriesContext.Provider value={{ categories }}>
            <Spinner />
            <div className="page-container">
              <Message />
              <Header />
              <Routes />
            </div>
            <Footer />
          </CategoriesContext.Provider>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
