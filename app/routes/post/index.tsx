import { Link, useLoaderData } from '@remix-run/react';

import { getPosts } from '~/utils/post';
import type { Post } from '~/utils/post';

export const loader = async () => {
  return getPosts();
};

export default function PostIndex() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
