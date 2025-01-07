import type { Metadata } from 'next';

import { CenteredContainer } from '@/ui/centered-container';

import { AsideFiltration } from '@/components/filtration/aside-filtration';
import { PostSearch } from '@/components/post/post-search';
import { PostSearchSection } from '@/components/post/post-sections/post-search-section';

export const metadata: Metadata = {
  title: 'Пошук',
  description: 'Відкрийте для себе свій фотографій',
};

export default function Page() {
  return (
    <div className="flex">
      <AsideFiltration />
      <div className="flex-1">
        <CenteredContainer className="max-w-full">
          <PostSearch />
          <PostSearchSection />
        </CenteredContainer>
      </div>
    </div>
  );
}
