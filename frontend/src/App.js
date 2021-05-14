import React from "react";
import { Route, Switch } from "react-router-dom";

import "./scss/main.scss";

import Home from "./pages/Home";
import PhoneDetail from "./pages/PhoneDetail";
import Login from "./pages/Login";
import PhoneItems from "./pages/PhoneItems";

import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import CartModal from "./components/cart/CartModal";
import ModalColor from "./components/ModalColor";
import Tests from "./pages/Tests";
import Invoice from "./components/invoice/Invoice";
import Shipping from "./components/cart/Shipping";
import EvaluateAll from "./components/evaluate/EvaluateAll";

function App() {
  return (
    <div>
      <div className="footer__copyright">
        <p>
          Trang web chỉ mang tính demo, quý khách có nhu cầu vui lòng truy cập
          thegioididong.com - <b>Dang Quoc Lai</b>
        </p>
      </div>
      <Header />
      <div className="trangChu__cate">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dtdd" component={PhoneItems} />
          <Route
            exact
            path="/dtdd/:modalId/:restUrl/danh-gia"
            component={EvaluateAll}
          />
          <Route path="/dtdd/:modalId/:restUrl" component={PhoneDetail} />
          <Route path="/Login" component={Login} />
          <Route path="/Invoice" component={Invoice} />
          <Route path="/Tests" component={Tests} />
          <Route path="/Shipping" component={Shipping} />
        </Switch>
        <CartModal />
      </div>
      <Footer />
      <ModalColor />
    </div>
  );
}

export default App;
