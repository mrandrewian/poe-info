import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
// import _ from "lodash"

const LeagueList = () => {
  const query = `http://api.pathofexile.com/leagues?type=main`;
  const result = useFetch(query, []);

  useEffect(() => {
    console.log("result", result);
  });

  // const leagueItems = result.map((league, index) => (
  //   <li key="index">{league}</li>
  // ));

  return (
    <div>
      <span>{JSON.stringify(result, "id", 2)}</span>
      {/* <ul>{leagueItems}</ul> */}
    </div>
  );
};

export default LeagueList;
