import React from "react";
import { render } from "react-dom";

// import css
import css from "./styles/style.styl";

// import components
import Main from "./components/main";
import Single from "./components/single";
import PhotoGrid from "./components/photo-grid";

// import react router depts
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
