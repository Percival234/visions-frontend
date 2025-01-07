import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const post = { id: '', title: 'Post title', description: 'Description' }; // TODO Отримання даних посту
  return {
    title: post.title,
    description: post.description,
  };
}

export default function Page() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel porro eaque
      numquam iste dolorum cumque obcaecati repellendus eveniet tempore, quasi
      blanditiis aut temporibus quae aspernatur doloribus facere. Doloremque,
      deleniti sit.
    </div>
  );
}
