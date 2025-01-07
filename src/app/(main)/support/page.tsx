import type { Metadata } from 'next';

import { NewReportForm } from '@/components/report/report-forms/new-report-form/new-report-form';
import { CenteredContainer } from '@/components/ui/centered-container';
import { Separator } from '@/components/ui/separator';
import { Title } from '@/components/ui/title';

export const metadata: Metadata = {
  title: 'Підтримка',
  description:
    'Надсилайте звіти про несправності або побажання для вдосконалення',
};

export default function Page() {
  return (
    <CenteredContainer>
      <Title size="h1">Ласкаво просимо до сторінки підтримки!</Title>
      <Separator />
      <div className="prose prose-sm md:prose-base prose-neutral dark:prose-invert max-w-6xl">
        <p>
          Ми тут, щоб допомогти вам. Якщо у вас виникли питання, проблеми або
          пропозиції, будь ласка, скористайтеся формою нижче.
        </p>
        <p>
          Ми прагнемо відповісти на ваш запит якнайшвидше. Усі звернення
          обробляються в порядку черги. У разі технічних несправностей ми
          постараємося вирішити проблему в найкоротші терміни.
        </p>
        <NewReportForm />
        <p>Дякуємо, що допомагаєте нам ставати кращими! ;)</p>
      </div>
    </CenteredContainer>
  );
}
