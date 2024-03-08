"use client";
import React, { useEffect, useState } from "react";

const Toast: React.FC<{ text: string }> = ({ text }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`bg-green-500 text-white px-6 py-4 border-0 rounded fixed bottom-0 left-0 m-6 z-50 ${
        showToast ? "block" : "hidden"
      }`}>
      {text}
    </div>
  );
};

export default Toast;
