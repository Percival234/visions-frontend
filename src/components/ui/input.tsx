import { type InputHTMLAttributes, forwardRef, useState } from 'react';

import { cn } from '@/libs/cn/cn';

import { Button } from './button';
import { Icon } from './icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [isVisible, setVisible] = useState(false);

    const togglePasswordVisibility = () => setVisible((prev) => !prev);

    return (
      <div className="relative flex items-center justify-end">
        <Input
          type={isVisible ? 'text' : 'password'}
          ref={ref}
          {...props}
          className="pr-12"
        />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={togglePasswordVisibility}
          className="absolute right-0"
        >
          <Icon iconName={isVisible ? 'eye' : 'noEye'} />
        </Button>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput, Input };
