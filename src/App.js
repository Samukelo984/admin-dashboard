import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SinglePage from "./pages/singlepage/SinglePage";
import NewPage from "./pages/newpage/NewPage";
import { productInputs, userInputs } from "./FormSource";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="newpage"
                element={<NewPage inputs={userInputs} title="Add new User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="newpage"
                element={
                  <NewPage inputs={productInputs} title="Add new Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
