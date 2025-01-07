import type { Metadata } from 'next';

import { Paragraph } from '@/ui/paragraph';
import { Title } from '@/ui/title';

import { NewPasswordForm } from '@/components/settings/password/new-password-form';

export const metadata: Metadata = {
  title: 'Налаштування | Зміна паролю',
  description: 'Змінюйте свій пароль. Після збереження Ви вийдете з системи',
};

export default function Page() {
  return (
    <>
      <div className="space-y-2">
        <Title size="h2">Зміна паролю</Title>
        <Paragraph>
          Змінюйте свій пароль. Після збереження Ви вийдете з системи.
        </Paragraph>
      </div>
      <NewPasswordForm />
    </>
  );
}
