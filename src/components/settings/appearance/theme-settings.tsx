'use client';

import { useTheme } from 'next-themes';

import { Label } from '@/ui/label';
import { Paragraph } from '@/ui/paragraph';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const ThemeSettings = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Title>Налаштування теми</Title>
        <Separator />
        <Paragraph>
          Виберіть, як {WEBSITE_NAME} виглядатиме для вас. Виберіть одну тему
          або синхронізуйте її з системою.
        </Paragraph>
      </div>
      <Title size="h5">Тема:</Title>
      <RadioGroup
        defaultValue={theme}
        onValueChange={(value) => setTheme(value)}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="light-theme" />
          <Label htmlFor="light-theme">Світла</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="dark-theme" />
          <Label htmlFor="dark-theme">Темна</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="system" id="system-theme" />
          <Label htmlFor="system-theme">Система</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
