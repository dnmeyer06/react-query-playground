import React from "react";

function ContentBlock({ content }) {
  if (!content) return <p>Loading</p>;

  const { name, image, location, origin, dimension } = content;

  return (
    <div>
      <p>Name: {name}</p>
      {image && <img src={image} alt={name} />}
      {dimension && <p>Dimension: {dimension}</p>}
      {location && <p>Location: {location.name}</p>}
      {origin && <p>Origin: {origin.name}</p>}
    </div>
  );
}

export default ContentBlock;
