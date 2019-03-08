import React from "react";
import useFetch from "../utils/useFetch";
import { Image } from "react-bootstrap";
// import _ from "lodash"

const StashTabs = () => {
  let next_change_id = localStorage.getItem("next_change_id");
  let result = { stashes: [{ items: [] }] };
  const query = `https://api.pathofexile.com/public-stash-tabs/?id=${next_change_id}`;
  result = useFetch(query, result);
  localStorage.setItem("next_change_id", result.next_change_id);
  const stashTabs = result.stashes.map(stash => (
    <React.Fragment>
      {stash.items.map(item => (
        <Image src={`${item.icon}?scale=1&w=1&h=1`} />
      ))}
    </React.Fragment>
  ));

  return (
    <div>
      <div>{stashTabs}</div>
    </div>
  );
};

export default StashTabs;
