import { Visibility } from '@/types/enums/visibility.enum';

interface PostPrivateStateProps {
  visibility: Visibility;
}

export const PostPrivateState = ({ visibility }: PostPrivateStateProps) => {
  return (
    <div>
      {visibility === Visibility.Followers &&
        'Ця публікація доступна лише підписникам'}
      {visibility === Visibility.Private && 'Ця публікація є приватною'}
    </div>
  );
};
