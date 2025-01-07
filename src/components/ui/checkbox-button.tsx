import type { CheckedState } from '@radix-ui/react-checkbox';

import { Button } from '@/ui/button';
import { Checkbox } from '@/ui/checkbox';
import { Label } from '@/ui/label';

interface CheckboxButtonProps {
  id: string;
  label: string;
  isChecked: boolean;
  onCheckedChange: (state: CheckedState) => void;
}

export const CheckboxButton = ({
  id,
  isChecked,
  label,
  onCheckedChange,
}: CheckboxButtonProps) => {
  return (
    <Button size="sm" asChild variant={isChecked ? 'default' : 'outline'}>
      <Label className="cursor-pointer" htmlFor={id}>
        <Checkbox
          className="hidden"
          checked={isChecked}
          onCheckedChange={onCheckedChange}
          id={id}
        />
        {label}
      </Label>
    </Button>
  );
};
