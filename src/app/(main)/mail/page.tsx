'use client';

import { useQuery } from '@tanstack/react-query';

// import type { Metadata } from 'next';
import { notificationsService } from '@/services/api-services/notifications/notifications.service';

// export const metadata: Metadata = {
//   title: 'Пошта',
//   description: 'Отримуйте та переглядайте список свої повідомлень',
// };

export default function Page() {
  const { data, isPending, error } = useQuery({
    queryKey: ['notifications'],
    queryFn: notificationsService.getMany,
  });
  if (isPending) return 'loading';
  if (error) return 'd';
  console.log(data);
  return <div></div>;
}
