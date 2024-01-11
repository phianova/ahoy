"use client";
import { useState, useEffect } from "react";
import Notifications from "./Notifications";

const AddPostModal = ({ isOpen, onClose }) => {
  const [postText, setPostText] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("profile");
    setCurrentUser(JSON.parse(currentUser));
  }, []);
  const [postError, setPostError] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setPostImageUrl(e.target.value);
  };

  const handleSubmit = () => {
    // Retrieve existing posts from local storage or initialize an empty array
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
      if (!postText || !postImageUrl) {
      setPostError(true)
      setTimeout(() => {
        setPostError(false)
      }, 3000)
      return;
    } else {
      setPostSuccess(true)
      setTimeout(() => {
        setPostSuccess(false)
      }, 3000)
    }

    // Create a new post object
    const newPost = {
      postText,
      postImage: postImageUrl,
      username: currentUser.username,
    };

    // Add the new post to the array of existing posts
    const updatedPosts = [...existingPosts, newPost];

    // Store the updated array in local storage
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Clear input fields
    setPostText("");
    setPostImageUrl("");

    // Check if the onClose prop is provided before calling it
    onClose && onClose();
  };

  return (
    <div>
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-container bg-white w-96 mx-auto mt-10 p-4 rounded shadow">
        <div className="modal-content">
          <h2 className="text-2xl font-bold mb-4">Add Post</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="postText"
                className="block text-sm font-medium text-gray-700"
              >
                Post Text:
              </label>
              <textarea
                id="postText"
                name="postText"
                rows="3"
                className="mt-1 p-2 w-full border rounded-md"
                value={postText}
                onChange={handleTextChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="postImageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL:
              </label>
              <input
                type="text"
                id="postImageUrl"
                name="postImageUrl"
                className="mt-1 p-2 w-full border rounded-md"
                value={postImageUrl}
                onChange={handleImageUrlChange}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="fixed bottom-5 right-4">
      {postError && <Notifications title="Errarr" text="Yer marooned! Try again matey!" type="danger"/>}
      {postSuccess && <Notifications title="Thar she blows!" text="New plunder added! Feast yer eyes!" type="success"/>}
    </div>
    </div>

  );
};

export default AddPostModal;