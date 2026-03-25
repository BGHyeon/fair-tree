import type { ButtonHTMLAttributes } from 'react';
import Text from '../text.tsx';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const TextButton = ({ text, ...props }: TextButtonProps) => {
  return (
    <button type={'button'} {...props}>
      <Text weight={'emphasize'} type={'body2'}>
        {text}
      </Text>
    </button>
  );
};

export default TextButton;
