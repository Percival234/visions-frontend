import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const user = { id: '', username: 'username' }; // TODO Отримання даних користувача
  return {
    title: user.username,
    description: `Досліджуйте профіль користувача ${user.username}`,
  };
}

export default function Page() {
  return <div></div>;
}
