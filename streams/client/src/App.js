import { Router, Route, Switch } from "react-router-dom";

import "./App.css";

import StreamShow from "./components/streams/StreamShow";
import StreamList from "./components/streams/StreamList";
import StreamEdit from "./components/streams/StreamEdit";
import StreamCreate from "./components/streams/StreamCreate";
import streamDelete from "./components/streams/StreamDelete";
import history from "./history";
import Header from "./containers/Header";

/**
 *
 * @returns
 */
const app = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/:id" exact component={StreamShow} />
            <Route path="/new" exact component={StreamCreate} />
            <Route path="/edit/:id" exact component={StreamEdit} />
            <Route path="/delete/:id" exact component={streamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default app;
