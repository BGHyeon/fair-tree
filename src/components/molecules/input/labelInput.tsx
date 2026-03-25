import Text from '../../atoms/text.tsx';
import MainInput, { type MainInputProps } from '../../atoms/mainInput.tsx';
import { twMerge } from 'tailwind-merge';

interface LabelInputProps extends MainInputProps {
  label: string;
  wrapperClass?: string;
  showMaxLength?: boolean;
}

const LabelInput = ({ showMaxLength = false, ...props }: LabelInputProps) => {
  return (
    <div className={twMerge('flex-col', props.wrapperClass)}>
      <div className={'mb-1 flex justify-between'}>
        {!!props.label && (
          <Text weight={'emphasize'} type={'body2'}>
            {props.label}
          </Text>
        )}
        {showMaxLength && typeof props.value !== 'number' ? (
          <Text
            weight={'regular'}
            type={'footnote'}
            className={'text-text-strong'}
          >
            {(props.value ?? '').length}
            <Text
              className={'text-text-body2'}
              weight={'regular'}
              type={'footnote'}
            >
              /{props.maxLength ?? 0}
            </Text>
          </Text>
        ) : (
          <div />
        )}
      </div>
      <MainInput {...props} />
    </div>
  );
};

export default LabelInput;
