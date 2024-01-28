"use client";
import { useState } from "react";

const RemoveButton = ({ id }) => {
  const [isCreated, setIscreated] = useState(false);

  const handleDeleteCollection = async (event) => {
    event.preventDefault();

    const data = { id };
    const response = await fetch("/api/v1/collection", {
      method: "DELETE",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status === 200) {
      setIscreated(!isCreated);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Removed from Collection</p>
      ) : (
        <button
          className="px-2 py-1 rounded border border-color-primary text-color-primary hover:bg-red-600 hover:text-color-warning"
          onClick={handleDeleteCollection}
        >
          Remove from Collection
        </button>
      )}
    </>
  );
};

export default RemoveButton;
