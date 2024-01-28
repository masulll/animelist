"use client";

import { useState } from "react";

const CollectionButton = ({ mal_id, user_email, anime_title, anime_img }) => {
  const [isCreated, setIscreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { mal_id, user_email, anime_title, anime_img };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
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
        <p className="text-color-primary">Added to Collection</p>
      ) : (
        <button
          className="px-2 py-1 rounded border border-color-primary text-color-primary hover:bg-color-accent hover:text-color-warning"
          onClick={handleCollection}
        >
          Add to Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
