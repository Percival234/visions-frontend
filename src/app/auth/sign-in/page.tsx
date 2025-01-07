import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/ui/button';
import { CenteredContainer } from '@/ui/centered-container';
import { Title } from '@/ui/title';

import { SignInForm } from '@/components/auth/sign-in-form/sign-in-form';

import { authRoutes } from '@/constants/pages.constant';

export const metadata: Metadata = {
  title: 'Вхід',
  description: 'Ввійдіть в свій акаунт та продовжуйе досліджувати',
};

export default function Page() {
  return (
    <CenteredContainer className="items-center justify-center">
      <Title size="h1">Вхід</Title>
      <SignInForm />
      <div className="flex justify-center">
        <Button asChild variant="link">
          <Link href={authRoutes.signUp()}>Створити акаунт</Link>
        </Button>
      </div>
    </CenteredContainer>
  );
}
