'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { EmptyState } from '@/ui/empty-state';
import { List } from '@/ui/list';

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
