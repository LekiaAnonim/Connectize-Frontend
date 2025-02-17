import React from "react";
import { baseURL } from "../lib/helpers";

const PostImageCollage = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <section
      className={`mt-3 grid gap-2 rounded-lg overflow-hidden ${
        images.length === 1
          ? "grid-cols-1"
          : images.length === 2
          ? "grid-cols-2"
          : "grid-cols-2 md:grid-cols-3"
      }`}
    >
      {images.slice(0, 4).map((src, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            images.length === 3 && index === 0
              ? "col-span-2 row-span-2"
              : images.length === 4 && index > 1
              ? "aspect-square"
              : "aspect-video"
          }`}
        >
          <img
            src={src.startsWith("http") ? src : baseURL + src}
            alt={`Post-image ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}

      {images.length > 4 && (
        <div className="relative flex items-center justify-center bg-black/50 text-white text-lg font-bold rounded-lg">
          +{images.length - 4}
        </div>
      )}
    </section>
  );
};

export default PostImageCollage;
