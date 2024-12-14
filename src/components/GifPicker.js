import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "sonner";

const GifPicker = ({ onGifSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "KXB1d2I1cefxvpLahiZo3ngJFHd82tLY";

  const fetchGifs = async () => {
    if (!searchTerm.trim()) {
      toast.info("Please enter a search query");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=12`
      );
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      //   console.error("Error fetching GIFs:", error);
      toast.error(
        "An error occurred while fetching gifs. Check your internet connection and try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg w-full max-w-md">
      <h3 className="text-lg font-bold mb-4">GIF Picker</h3>

      {/* Search Input */}
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search GIFs..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 placeholder:!text-sm"
      />

      {/* Search Button */}
      <button
        onClick={fetchGifs}
        className={`px-4 py-2 text-white rounded-lg ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search GIFs"}
      </button>

      {/* GIF Results */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height_small.url}
            alt={gif.title}
            className="w-full h-auto rounded-lg cursor-pointer hover:shadow hover:scale-105 transition-transform duration-200 size-full"
            onClick={() => onGifSelect(gif.images.fixed_height_small.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default GifPicker;
