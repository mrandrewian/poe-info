import React from "react";
import useFetch from "../utils/useFetch";

const CharacterInfo = props => {
  let itemsResult = { items: [] };

  const itemQuery = `https://www.pathofexile.com/character-window/get-items?character=${
    props.accountName
  }`;
  itemsResult = useFetch(itemQuery, itemsResult);
  console.log("itemsResult", itemsResult);

  const items = itemsResult.items.map(item => (
    <React.Fragment>
      <div>{item.name}</div>
    </React.Fragment>
  ));

  return (
    <div>
      <div>{props.accountName}</div>
      <div>{items}</div>
    </div>
  );
};

export default CharacterInfo;
