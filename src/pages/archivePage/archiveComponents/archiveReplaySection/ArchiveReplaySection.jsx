import React, { useState, useEffect } from "react";
import { ArchiveCardEvent } from "../../../../components/cards/archiveCardEvent/ArchiveCardEvent";
import "./archiveReplaySection.scss";
// import { ArchiveReplayCardOne } from "../../../../data/ArchivePageData";

export function ArchiveReplaySection() {
  const [videos, setVideos] = useState([
    {
      uri: "videos/0",
      name: "Loading...",
      description: "Loading...",
      embed: { html: "<p>loading..</p>" },
    },
  ]);
  useEffect(() => {
    fetch(
      "https://api.vimeo.com/users/122555139/albums/8613448/videos?sort=alphabetical&direction=asc",
      {
        method: "GET",
        headers: {
          Authorization:
            "basic MTI1MGZkNjA0ODE0Y2U3ODM0MTVkYzUyYTA2ZTQ0NTg0NzYyNzgxNzoxUjZldDBtM0o1UGZuV0ltdUFrT0tLWVVlSUZDZlh2bEx5dXNjYUwzM2JBOGRReUdjNWJ3ZTBHRHFLWnhLanRBS3BRK1VUMUE5VUxFNmdiODFyZ0wyRHg5S2MySWZ6TEFYbktNRk9SVDJOZkE2QTFnajh1OXRzSnF3VTBxbkNIcw==",
        },
      }
    )
      .then((r) => {
        return r.json();
      })
      .then((j) => {
        console.log(j);
        setVideos(j.data);
      });
  }, []);

  return (
    <section className="archive-replay-section">
      <h3 className="archive-replay-header">Catch a replay</h3>
      <ul className="archive-section-ul-flex">
        {videos.map((v) => (
          <li key={v.uri} className="archive-flex-li">
            <ArchiveCardEvent
              name={v.name}
              description={v.description}
              iframe={{ __html: v.embed.html }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
