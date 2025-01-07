import type { Metadata } from 'next';

import { PostNewSection } from '@/components/post/post-sections/post-new-section';
import { Card, CardContent } from '@/components/ui/card';
import { CenteredContainer } from '@/components/ui/centered-container';

export const metadata: Metadata = {
  title: 'Нові',
  description: 'Найновіші публікації за вашими вподобаннями',
};

export default function Page() {
  return (
    <CenteredContainer className="flex-row px-0 lg:px-0">
      <CenteredContainer className="px-0 @md:px-0">
        <Card>Підписки</Card>
        <Card>Опублікувати</Card>
        <PostNewSection />
      </CenteredContainer>
      <div className="max-w-[400px] w-full hidden lg:flex flex-col relative">
        <div className="sticky top-20">
          <Card>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              odit dolore maiores quidem excepturi quis a tempora commodi
              molestias corrupti at quas voluptatibus assumenda eaque, saepe
              placeat facere. Quia, ullam?
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              odit dolore maiores quidem excepturi quis a tempora commodi
              molestias corrupti at quas voluptatibus assumenda eaque, saepe
              placeat facere. Quia, ullam?
            </CardContent>
          </Card>
        </div>
      </div>
    </CenteredContainer>
  );
}
