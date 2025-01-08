import { Button, type ButtonProps } from './button';

interface SubmitButtonProps extends ButtonProps {
  submittingText: string;
}

export const SubmitButton = ({
  type = 'submit',
  children,
  submittingText,
  disabled,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button type={type} disabled={disabled} {...props}>
      {disabled ? (
        <div className="flex items-center gap-2">
          <span className="animate-spin w-5 h-5 rounded-full border-[3px] border-solid border-background/50 border-r-background"></span>
          {submittingText}
        </div>
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
};
