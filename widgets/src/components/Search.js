import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
/**
 *
 * @returns
 */
const search = () => {
  //
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  /**
   * [] Run at initial render
   * ...nothing run at initial render -> run after re-render
   * [data] run at initial render, run after every re-render if data has changed since last render
   */
  useEffect(() => {
    //console.log("Run Once");
    //console.log("Run after every render and at initial render");
    //const search = async () =>

    const timerOf = setTimeout(() => {
      //
      const fSearch = async () => {
        const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });
        setResults(data.query.search);
      };
      if (term && !results.length) {
        fSearch();
      } else {
        // rxJS have a better approach
        const timeOfWiki = setTimeout(() => {
          if (term) fSearch();
        }, 1000);
        //
        return () => {
          clearTimeout(timeOfWiki);
        };
      }

      //
    }, 500);

    // search();
  }, [term]);

  const renderResults = results.map((result, _i) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </Fragment>
  );
};

export default search;
