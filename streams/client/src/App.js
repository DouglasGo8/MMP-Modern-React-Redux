import { Router, Route } from "react-router-dom";

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
          <Route path="/" exact component={StreamList} />
          <Route path="/new" exact component={StreamCreate} />
          <Route path="/edit/:id" exact component={StreamEdit} />
          <Route path="/delete" exact component={streamDelete} />
          <Route path="/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default app;
