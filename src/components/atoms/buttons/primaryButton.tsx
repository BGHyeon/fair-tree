import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../text.tsx';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const PrimaryButton = ({
  text,
  disabled = false,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      type={'button'}
      {...props}
      className={twMerge(
        `inline-flex items-center justify-center rounded-xl px-4 py-2 ${disabled ? 'bg-primary-disabled' : 'bg-primary-default'}`,
        className,
      )}
    >
      <Text weight={'emphasize'} type={'headline2'} className={'text-white'}>
        {text}
      </Text>
    </button>
  );
};

export default PrimaryButton;
