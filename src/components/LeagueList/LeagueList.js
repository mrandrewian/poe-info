import React from "react";
import useFetch from "../utils/useFetch";
// import _ from "lodash"

const LeagueList = () => {
  const query = `http://api.pathofexile.com/leagues?type=main`;
  const result = useFetch(query, []);
  // const leagues = result.map(obj => { return obj })
  const leagues = result.map((league) => 
    <React.Fragment>
      <li>{league.id}</li>
      <ul>
        {league.rules.map((rules) => 
          <li>{rules.description}</li>
        )}
      </ul>
    </React.Fragment>
  );

  return (
    <div>
      {console.log(JSON.stringify(result, "id", 2))}
      <ul>{leagues}</ul>
    </div>
  );
};

export default LeagueList;
