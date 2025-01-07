import { PostPageModal } from '@/components/post/post-modals/post-page-modal';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <PostPageModal id={id} />;
}
