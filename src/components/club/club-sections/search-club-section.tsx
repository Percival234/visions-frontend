'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { toast } from 'sonner';

import { Button } from '@/ui/button';

import { clubsService } from '@/services/api-services/clubs/clubs.service';

import { useClubsQueryParams } from '@/hooks/params-hooks/useClubsQueryParams';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

import { ClubCard } from '../club-card';
import { ClubListSkeleton } from '../club-skeletons/club-list-skeleton';

export const SearchClubSection = () => {
  const { getAllParams } = useClubsQueryParams();

  const {
    data,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['clubs-search'],
    queryFn: ({ pageParam }) =>
      clubsService.getManyClubs({
        ...getAllParams(),
        limit: String(10),
        page: String(pageParam),
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 3) return undefined;
      return lastPageParam + 1;
    },
  });

  if (isPending) return <ClubListSkeleton />;
  if (error) {
    toast.error(getErrorMessage(error));
    return null;
  }

  // TODO зробити компонент List
  return (
    <div className="grid @xl:gap-4 gap-2.5">
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </Fragment>
      ))}
      {!isFetchingNextPage && hasNextPage && (
        <Button size="sm" onClick={() => fetchNextPage()}>
          Більше
        </Button>
      )}
      {isFetching && <ClubListSkeleton />}
    </div>
  );
};
