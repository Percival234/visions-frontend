'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import type { Club, ClubSettings } from '@/types/entities/club.type';
import { MembershipStatus } from '@/types/enums/membership-status.enum';

import { Button } from '@/ui/button';
import { Icon } from '@/ui/icon';

import { clubsService } from '@/services/api-services/clubs/clubs.service';

interface MembershipButtonProps {
  clubId: string;
  membership: Club['membership'];
  isPrivate: ClubSettings['isPrivate'];
}

export const MembershipJoinButton = ({
  membership,
  isPrivate,
  clubId,
}: MembershipButtonProps) => {
  const [currentMembership, setCurrentMembership] =
    useState<MembershipButtonProps['membership']>(membership);
  const { isPending, mutate } = useMutation({
    mutationFn: () => clubsService.joinClub({ clubId }),
    onSuccess: (response) => {
      setCurrentMembership(response);
    },
  });

  const getButtonText = () => {
    if (!currentMembership) return isPrivate ? 'Подати заявку' : 'Долучитись';
    if (currentMembership?.status === MembershipStatus.Approved)
      return 'Покинути клуб';
    if (currentMembership?.status === MembershipStatus.Pending)
      return 'Відхилити заявку';
    if (currentMembership?.status === MembershipStatus.Blocked)
      return 'Доступ обмежено';
    if (currentMembership?.status === MembershipStatus.Rejected)
      return 'Заявку відхилено';
  };
  const getButtonIcon = () => {
    if (!currentMembership) return <Icon iconName="plus" />;
    if (currentMembership?.status === MembershipStatus.Blocked)
      return <Icon iconName="lock" />;
    if (currentMembership?.status === MembershipStatus.Rejected)
      return <Icon iconName="block" />;
  };

  const isDisabled =
    currentMembership?.status === MembershipStatus.Rejected ||
    currentMembership?.status === MembershipStatus.Blocked;

  const getButtonVariant = () =>
    !currentMembership
      ? 'default'
      : currentMembership?.status === MembershipStatus.Approved
        ? 'outline'
        : currentMembership?.status === MembershipStatus.Pending
          ? 'destructive'
          : 'secondary';

  return (
    <Button
      variant={getButtonVariant()}
      onClick={() => mutate()}
      size="sm"
      disabled={isPending || isDisabled}
    >
      {getButtonIcon()}
      <span>{getButtonText()}</span>
    </Button>
  );
};
