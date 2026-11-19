import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {/* One card per toy; handlers are passed down so cards can update App's state */}
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDeleteToy={onDeleteToy}
          onUpdateToy={onUpdateToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;