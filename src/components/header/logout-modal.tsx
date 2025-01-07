'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/ui/alert-dialog';

import { authService } from '@/services/api-services/auth/auth.service';

import { authRoutes } from '@/constants/pages.constant';

export const LogoutModal = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: (response) => {
      queryClient.clear();
      toast.success(response.message);
      router.replace(authRoutes.signIn());
    },
  });

  return (
    <AlertDialogContent className="sm:max-w-[400px]">
      <AlertDialogHeader>
        <AlertDialogTitle>Ви впевнені?</AlertDialogTitle>
        <AlertDialogDescription>Ви вийдете з акаунту</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Скасувати</AlertDialogCancel>
        <AlertDialogAction onClick={() => mutate()} disabled={isPending}>
          Вийти
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
