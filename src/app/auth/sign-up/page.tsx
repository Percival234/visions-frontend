import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/ui/button';
import { CenteredContainer } from '@/ui/centered-container';
import { Title } from '@/ui/title';

import { SignUpForm } from '@/components/auth/sign-up-form/sign-up-form';

import { authRoutes } from '@/constants/pages.constant';

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Створіть свій профіль та пориньте у світ фотографій',
};

export default function Page() {
  return (
    <CenteredContainer className="items-center justify-center">
      <Title size="h1">Реєстрація</Title>
      <SignUpForm />
      <div className="flex justify-center">
        <Button asChild variant="link">
          <Link href={authRoutes.signIn()}>Уже маєте акаунт?</Link>
        </Button>
      </div>
    </CenteredContainer>
  );
}
