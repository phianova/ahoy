// pages/index.js
"use client";

import React, { useState } from "react";
import AddPostModal from "@/components/AddPostModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Next.js App</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={handleOpenModal}
      >
        Open Add Post Modal
      </button>
      <AddPostModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
