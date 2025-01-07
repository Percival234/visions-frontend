import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const article = { id: '123', title: 'Article title', description: 'Опис' };
  return {
    title: article.title,
    description: article.description,
  };
}

export default function Page() {
  return <div></div>;
}
