import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { Icon } from '@/ui/icon';
import { Input } from '@/ui/input';

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  button?: boolean;
  onClear: () => void;
  onSearch: () => void;
}

export const Search = ({
  button = true,
  onSearch,
  value,
  onClear,
  ...props
}: SearchProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Card>
      <div className="flex items-center">
        <Icon
          className="size-10 py-1 px-2 text-foreground"
          size={16}
          iconName="search"
        />
        <Input
          value={value}
          {...props}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          onKeyDown={handleKeyDown}
        />
        {value && (
          <Button size="icon" variant="ghost" onClick={onClear}>
            <Icon className="rotate-45" iconName="plus" />
          </Button>
        )}
        {button && (
          <Button className="rounded-l-none" onClick={onSearch}>
            Пошук
          </Button>
        )}
      </div>
    </Card>
  );
};
