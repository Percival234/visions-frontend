'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { List } from '@/ui/list';

import { EmptyState } from '@/components/ui/empty-state';

interface ProfileFollowersProps {
  userId: string;
}

export const ProfileFollowers = ({ userId }: ProfileFollowersProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Підписники</CardTitle>
      </CardHeader>
      <CardContent>
        <List
          data={[]}
          renderItem={(data) => <div key={data}></div>}
          EmptyComponent={<EmptyState text="Підписники відсутні" />}
        />
      </CardContent>
    </Card>
  );
};
