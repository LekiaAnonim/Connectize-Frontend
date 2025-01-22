import React, { useEffect, useState } from "react";
import { timeAgo } from "../lib/utils";

export default function TimeAgo({ time }) {
  const [timestamp, setTimestamp] = useState(timeAgo(time));
  useEffect(() => {
    const interval = setInterval(() => setTimestamp(timeAgo(time)), 1000);
    return () => clearInterval(interval);
  });
  return <>{timestamp}</>;
}
