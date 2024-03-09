"use client";
import React, { useEffect, useState } from "react";

const Toast: React.FC<{ text: string; error?: boolean }> = ({
  text,
  error = false,
}) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const toastClass = error ? "bg-red-500" : "bg-green-500";

  return (
    <div
      className={`text-white px-6 py-4 border-0 rounded fixed bottom-0 left-0 m-6 z-50 ${toastClass} ${
        showToast ? "block" : "hidden"
      }`}>
      {text}
    </div>
  );
};

export default Toast;
