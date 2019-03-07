import React from "react";
import useFetch from "../utils/useFetch";
// import _ from "lodash"

const StashTabs = () => {
  const id = ""
  let result = { stashes: [] }
  const query = `http://api.pathofexile.com/public-stash-tabs/?id=${id}`;
        result = useFetch(query, result);
  const stashTabs = result.stashes.map(stash => (
    <React.Fragment key={stash.id}>
      <li key={stash.id}>{stash.id}</li>
      <ul>
        {/* {stash.rules.map(tab => (
          <li>{tab.description}</li>
        ))} */}
      </ul>
    </React.Fragment>
  ));

  return (
    <div>
      {/* {console.log(JSON.stringify(result, "id", 2))} */}
      <ul>{stashTabs}</ul>
    </div>
  );
};

export default StashTabs;
