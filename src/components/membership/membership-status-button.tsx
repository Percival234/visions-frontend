'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import type { Membership } from '@/types/entities/membership.type';
import { ClubRoles } from '@/types/enums/club-roles.enum';
import { MembershipStatus } from '@/types/enums/membership-status.enum';

import { Button } from '@/ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '@/ui/command';
import { Icon } from '@/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import { Skeleton } from '@/ui/skeleton';

import { clubsService } from '@/services/api-services/clubs/clubs.service';

import { useAuthStore } from '@/store/useAuth.store';

import { useGetClubByIdQuery } from '@/hooks/queries-hooks/useGetClubByIdQuery';

const statusValues = Object.values(MembershipStatus);

const getStatusText = (status: MembershipStatus) => {
  const { Approved, Blocked, Pending, Rejected } = MembershipStatus;

  const statusText = {
    [Approved]: 'В клубі',
    [Pending]: 'Заявка на вступ',
    [Blocked]: 'Заблоковано',
    [Rejected]: 'Відмова',
  };
  return statusText[status];
};

interface MembershipStatusButtonProps {
  membership: Membership;
}

export const MembershipStatusButton = ({
  membership: { id, clubId, status, roles },
}: MembershipStatusButtonProps) => {
  const [open, setOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<MembershipStatus>(status);

  const { data: club, isPending, error } = useGetClubByIdQuery(clubId);
  const { user } = useAuthStore();
  const { mutate, isPending: isUpdating } = useMutation({
    mutationFn: (membershipData: { status: MembershipStatus }) =>
      clubsService.updateMembership(id, membershipData),
  });

  if (!user) return null;
  if (isPending) return <Skeleton className="h-16 w-36" />;
  if (error) return null;

  const onSelect = (value: string) => {
    const v = value as MembershipStatus;
    setCurrentStatus(v === currentStatus ? status : v);
    mutate({ status: v });
    setOpen(false);
  };

  const isMembership = club.membership;
  const isMeOwner = club.membership?.roles?.includes(ClubRoles.Owner);
  const isMeAssitant = club.membership?.roles?.includes(ClubRoles.Assistant);
  const isUserOwner = roles.includes(ClubRoles.Owner);
  const isUserAssitant = roles.includes(ClubRoles.Assistant);

  const shouldRender = (): boolean => {
    if (!isMembership) return false;
    if (!isMeAssitant) return false;
    if (isUserOwner) return false;
    if (isUserAssitant && isMeAssitant && !isMeOwner) return false;
    return true;
  };

  return (
    shouldRender() && (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={isUpdating}
            variant="outline"
            className="w-48 justify-between"
          >
            {getStatusText(currentStatus)}
            <Icon iconName="chevrons" className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {statusValues.map((status) => (
                  <CommandItem key={status} value={status} onSelect={onSelect}>
                    {getStatusText(status)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  );
};
