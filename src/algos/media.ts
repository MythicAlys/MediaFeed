import { AlgoHandler, FeedPost } from "../types";

export const handler: AlgoHandler = async (ctx) => {
  const posts = await ctx.algos.getPosts(); // fetch all posts

  const filtered = posts.filter((post: FeedPost) => {
    const record = post.record as any;
    const embed = record?.embed;

    return (
      embed?.images?.length > 0 ||
      !!embed?.video ||
      !!embed?.external
    );
  });

  return filtered;
};
