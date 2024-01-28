"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CollectionButton = ({
  id,
  mal_id,
  user_email,
  anime_title,
  anime_img,
}) => {
  const [isCreated, setIscreated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    id;
  }, []);

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
      router.refresh();
    }
    return;
  };

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
      router.refresh();
    }
    return;
  };

  return (
    <>
      {id ? (
        <button
          className="px-2 py-1 rounded border border-color-primary text-color-primary hover:bg-red-600 hover:text-color-warning"
          onClick={handleDeleteCollection}
        >
          Remove from Collection
        </button>
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
