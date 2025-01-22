import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../api-services/posts";
import { useQuery } from "@tanstack/react-query";
import { useCustomQuery } from "../../context/queryContext";
import {
  DiscoverPostItem,
  DiscoverPostSkeleton,
} from "../../components/admin/feeds/DiscoverPosts";
import { Button } from "@chakra-ui/react";
import { ArrowBackIos } from "@mui/icons-material";

function SinglePostPage() {
  const { id } = useParams();
  const { refetchInterval } = useCustomQuery();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval,
    staleTime: 300000, // Reduce unnecessary fetching by making data stale after 5 minutes
    cacheTime: 600000, // Cache data for 10 minutes to minimize re-fetching
  });

  // Use useMemo to avoid re-computation of the postItem on every render
  const postItem = useMemo(
    () => posts?.find((post) => post.id.toString() === id),
    [posts, id]
  );

  if (isLoading) return <DiscoverPostSkeleton />;
  if (!postItem) return <p>No post found</p>;

  return (
    <section className="space-y-4">
      <Button
        className="!bg-gold hover:!bg-opacity-70 !text-xs !h-fit !py-2 transition-all duration-300 active:scale-95"
        onClick={() => window.history.back()}
      >
        <ArrowBackIos fontSize="10" />
        <span>Go Back</span>
      </Button>
      <DiscoverPostItem
        postItem={postItem}
        hasImage={postItem.images?.length > 0}
        isSinglePost
      />
    </section>
  );
}

export default SinglePostPage;
