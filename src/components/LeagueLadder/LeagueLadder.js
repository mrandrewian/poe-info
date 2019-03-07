import React from "react";
import useFetch from "../utils/useFetch";
import {
  ProgressBar,
  Table,
  OverlayTrigger,
  Tooltip,
  Image
} from "react-bootstrap";
import ico from "./twitch_icon.png";
// import _ from "lodash"

const LeagueLadder = () => {
  const i = {
    id: "standard",
    limit: "",
    offset: "",
    type: "",
    track: "",
    accountName: "",
    difficulty: "",
    start: ""
  };
  const max = 4250334444;
  const adjustment = max / 100;
  let result = { entries: [] };
  // prettier-ignore
  const query = `http://api.pathofexile.com/ladders/${i.id}?limit=${i.limit}&offset=${i.offset}&type=${i.type}&track=${i.track}&accountName=${i.accountName}&difficulty=${i.difficulty}&start=${i.start}`;
  result = useFetch(query, result);
  console.log("entries", result.entries);
  const leagueLadder = result.entries.map(entry => (
    <React.Fragment key={entry.rank}>
      <tr>
        <td>{entry.rank}</td>
        <OverlayTrigger
          key={entry.character.name}
          placement="left"
          overlay={<Tooltip id={`tooltip-left`}>{entry.account.name}</Tooltip>}
        >
          <td>
            <span>
              {entry.character.name}
              {entry.account.twitch ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.twitch.tv/${entry.account.twitch.name}`}
                >
                  <Image className="ml-2" src={ico} />
                </a>
              ) : null}
            </span>
          </td>
        </OverlayTrigger>
        <td>{entry.character.class}</td>
        <td>{entry.character.level}</td>
        <td>{entry.account.challenges.total}</td>
        <td>
          <ProgressBar
            animated
            label={`${entry.character.experience} / ${max}`}
            now={entry.character.experience / adjustment}
          />
        </td>
      </tr>
    </React.Fragment>
  ));

  return (
    <div>
      {/* {console.log(JSON.stringify(result.entries, null, 2))} */}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Character Name</th>
            <th>Character Class</th>
            <th>Character Level</th>
            <th>Challenges Complete</th>
            <th>To Level 100</th>
          </tr>
        </thead>
        <tbody>{leagueLadder}</tbody>
      </Table>
    </div>
  );
};

export default LeagueLadder;
