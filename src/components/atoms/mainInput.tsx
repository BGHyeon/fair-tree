import { type InputHTMLAttributes, type ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from './text.tsx';
import FailSvg from '../../assets/failed.svg';
import SuccessSvg from '../../assets/check_blue.svg';
import { InputStatus, type InputStatusType } from '../../models/inputStatus.ts';

export interface MainInputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: InputStatusType;
  statusMessage?: (status: InputStatusType) => string;
  editable?: boolean;
  inputClass?: string;
  tailIcon?: ReactNode;
  preIcon?: ReactNode;
}

const MainInput = ({
  status = InputStatus.default,
  ...props
}: MainInputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <div
        className={twMerge(
          `flex w-full items-center rounded-xl border p-2`,
          status === InputStatus.default
            ? focus
              ? 'border-black'
              : 'border-border-strong'
            : status === InputStatus.success
              ? 'border-border-accent'
              : 'border-border-failed',
          props.disabled ? 'bg-layer-2' : '',
        )}
      >
        {props.preIcon}
        <input
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={twMerge(
            'regular text-body1 flex-1 focus:outline-none',
            props.inputClass,
          )}
          onChange={(e) => {
            const maxLength = props.maxLength ?? 0;
            if (maxLength > 0 && e.target.value.length > maxLength) {
              return;
            }
            props.onChange?.(e);
          }}
        />
        {props.tailIcon}
      </div>
      {!!props.statusMessage && status !== InputStatus.default && (
        <div className={'flex'}>
          <img
            src={status === InputStatus.success ? SuccessSvg : FailSvg}
            alt={''}
          />
          <Text
            weight={'regular'}
            type={'footnote'}
            className={`${status === InputStatus.success ? 'text-text-primary' : 'text-text-failed'}`}
          >
            {props.statusMessage(status)}
          </Text>
        </div>
      )}
    </div>
  );
};

export default MainInput;
