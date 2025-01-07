'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { List } from '@/ui/list';

import { ClubPreview } from '@/components/club/club-preview-card';
import { EmptyState } from '@/components/ui/empty-state';

interface ProfileClubsProps {
  userId: string;
}

export const ProfileClubs = ({ userId }: ProfileClubsProps) => {
  // const {
  //   data: profile,
  //   isPending,
  //   error,
  // } = useQuery({
  //   queryKey: ['profile', userId],
  //   queryFn: () => clubsSe.getProfile(userId),
  // });

  // if (isPending) return 'Loading...';
  // if (error) return 'Error';
  return (
    <Card>
      <CardHeader>
        <CardTitle>Клуби</CardTitle>
      </CardHeader>
      <CardContent>
        <List
          data={[]}
          renderItem={(club) => (
            // <ClubPreview key={club.id} club={club} />
            <div></div>
          )}
          EmptyComponent={<EmptyState text="Клуби відсутні" />}
        />
      </CardContent>
    </Card>
  );
};
