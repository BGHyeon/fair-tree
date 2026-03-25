import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../text.tsx';

interface SubButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SubButton = ({
  text,
  disabled = false,
  className,
  ...props
}: SubButtonProps) => {
  return (
    <button
      type={'button'}
      {...props}
      className={twMerge(
        `border-border-strong inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2`,
        className,
      )}
    >
      <Text
        weight={'emphasize'}
        type={'headline2'}
        className={disabled ? 'text-text-disabled' : 'text-text-body'}
      >
        {text}
      </Text>
    </button>
  );
};

export default SubButton;
