'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { toast } from 'sonner';

import { MembershipStatus } from '@/types/enums/membership-status.enum';

import { Button } from '@/ui/button';

import { clubsService } from '@/services/api-services/clubs/clubs.service';

import { useQueryParams } from '@/hooks/params-hooks/useQueryParams';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

import { MembershipCard } from '../membership-card';
import { MemebershipListSkeleton } from '../membership-skeletons/membership-list-skeleton';

interface MembershipSearchSectionProps {
  clubId: string;
}

export const MembershipSearchSection = ({
  clubId,
}: MembershipSearchSectionProps) => {
  const { getAllParams } = useQueryParams();

  const {
    data,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['memberships-search'],
    queryFn: ({ pageParam }) =>
      clubsService.getManyMemberships({
        ...getAllParams(),
        clubId,
        limit: String(30),
        page: String(pageParam),
        status: MembershipStatus.Approved,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 3) return undefined;
      return lastPageParam + 1;
    },
  });

  if (isPending) return <div>Loading</div>;
  if (error) return toast.error(getErrorMessage(error));

  return (
    <div className="grid @xl:gap-4 gap-2.5">
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.map((membership) => (
            <MembershipCard key={membership.id} membership={membership} />
          ))}
        </Fragment>
      ))}
      {!isFetchingNextPage && hasNextPage && (
        <Button size="sm" onClick={() => fetchNextPage()}>
          Більше
        </Button>
      )}
      {isFetching && <MemebershipListSkeleton />}
    </div>
  );
};
