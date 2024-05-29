import type { PropsWithChildren } from 'react';
import { ContactButton as Button } from './styles';

export const ContactButton = ({ children }: PropsWithChildren) => {
  return <Button>{children}</Button>;
};
