import { ContactButton as Button } from './styles';

interface PropsButton {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
}

export const ContactButton = ({ children, type }: PropsButton) => {
  return <Button type={type}>{children}</Button>;
};
