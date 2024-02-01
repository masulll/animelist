"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CommentInput = ({ mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const [isCreated, setIscreated] = useState(false);

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();
    const data = { mal_id, user_email, comment, username, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.status === 200) {
      setIscreated(!isCreated);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2  text-color-primary">
      <h1 className="text-xl font-bold">Comments</h1>
      {isCreated && (
        <p className="text-color-primary">Comment has been posted.</p>
      )}
      <textarea
        name=""
        id=""
        value={comment}
        className="w-full h-32 rounded-xl text-color-primary placeholder:text-color-primary bg-transparent  focus:outline-1 outline-slate-50 border"
        onChange={handleInput}
      />
      <button
        onClick={handlePosting}
        className="py-2 px-3  w-52 rounded border border-color-primary text-color-primary hover:bg-color-accent hover:text-color-warning"
      >
        Post
      </button>
    </div>
  );
};

export default CommentInput;
