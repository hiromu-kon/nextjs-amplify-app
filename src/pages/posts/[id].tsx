import { GetServerSideProps } from "next";
import Link from "next/link";

export default function post({ post }: { post: Post }) {
  console.log(post)
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/posts">一覧に戻る</Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params)
  const id = context.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post } };
}