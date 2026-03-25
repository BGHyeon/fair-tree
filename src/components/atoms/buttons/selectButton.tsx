import type { ButtonHTMLAttributes } from 'react';
import Text from '../text.tsx';
import checkLogo from '../../../assets/check.svg';

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  buttonType?: 'check' | 'select';
  text: string;
}

const SelectButton = ({
  selected = false,
  buttonType = 'check',
  text,
  className,
  ...props
}: SelectButtonProps) => {
  return (
    <button
      type={'button'}
      {...props}
      // twMerge가 중복되는 rounded나 bg 클래스를 정리해줍니다.
      className={`inline-flex items-center justify-center gap-0.5 rounded-3xl border border-1 !bg-transparent px-4 py-2 ${
        selected
          ? buttonType === 'check'
            ? 'border-border-select'
            : 'border-border-accent'
          : 'border-border-strong'
      } ${className ?? ''}`}
    >
      {selected && buttonType === 'check' && (
        <img src={checkLogo} alt={'check'} width={20} />
      )}
      <Text
        weight={selected ? 'emphasize' : 'regular'}
        type={'body1'}
        className={
          selected
            ? buttonType === 'check'
              ? 'text-text-strong'
              : 'text-text-primary'
            : 'text-text-body'
        }
      >
        {text}
      </Text>
    </button>
  );
};

export default SelectButton;
