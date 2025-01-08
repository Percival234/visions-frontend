'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { EmptyState } from '@/ui/empty-state';
import { List } from '@/ui/list';

interface ProfileAwardsProps {
  userId: string;
}

export const ProfileAwards = ({ userId }: ProfileAwardsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Нагороди</CardTitle>
      </CardHeader>
      <CardContent>
        <List
          data={[]}
          renderItem={(data) => <div key={data}></div>}
          EmptyComponent={<EmptyState text="Нагороди відсутні" />}
        />
      </CardContent>
    </Card>
  );
};
