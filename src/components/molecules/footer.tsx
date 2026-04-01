import type { ReactNode } from 'react';
import PrimaryButton from '../atoms/buttons/primaryButton.tsx';

interface FooterProps {
  subButton?: ReactNode;
  text: string;
  onClick: () => void;
}

const Footer = (props: FooterProps) => {
  return (
    <div className={'flex gap-3 px-3 py-4'}>
      {props.subButton}
      <PrimaryButton className={'flex-1'} {...props} />
    </div>
  );
};

export default Footer;
