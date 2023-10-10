import Link from "next/link";

export default function index({ posts, customKey }: { posts: Posts, customKey: string }) {
  // console.log(posts)
  console.log('customKey', customKey)
  console.log('NEXT_PUBLIC_ENVIRONMENT', process.env.NEXT_PUBLIC_ENVIRONMENT)
  return (
    <div>
      <h1>POST一覧</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json() as Posts;
  // console.log(posts);
  return { props: { posts, customKey: process.env.KEY } };
}