import React, { useEffect } from "react";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";

export default function NewsFeed() {
  useEffect(() => {
    document.title = "Welcome to connectize | Feed";
  });
  return <DiscoverFeed />;
}
