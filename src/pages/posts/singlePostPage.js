import React from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../api-services/posts";
import { useQuery } from "@tanstack/react-query";
import { useCustomQuery } from "../../context/queryContext";
import { DiscoverPostItem } from "../../components/admin/feeds/DiscoverPosts";

function SinglePostPage() {
  const params = useParams();
  const { refetchInterval } = useCustomQuery();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval,
  });

  const postItem = posts?.find((post) => post.id.toString() === params.id);

  if (isLoading) return <p>loading...</p>;
  if (!postItem && !isLoading) return <p>No content found</p>;
  return (
    <section className="space-y-4">
      <DiscoverPostItem
        postItem={postItem}
        hasImage={postItem.images.length > 0}
        isSinglePost={true}
      />
    </section>
  );
}

export default SinglePostPage;
