import { useState } from 'react';

interface UseToggleReturn {
  open: () => void;
  close: () => void;
  toggle: () => void;
  state: boolean;
}

export const useToggle = (defaultState: boolean = false): UseToggleReturn => {
  const [state, setState] = useState(defaultState);

  const toggle = () => setState((prev) => !prev);
  const open = () => setState(true);
  const close = () => setState(false);

  return { state, toggle, open, close };
};
