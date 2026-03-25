import {
  WheelPicker,
  type WheelPickerProps,
  WheelPickerWrapper,
} from '@ncdai/react-wheel-picker';

const NumberWheelPicker = (props: WheelPickerProps<number>) => {
  return (
    <WheelPickerWrapper className="bg-white">
      <WheelPicker
        classNames={{
          optionItem: 'text-headline1 text-text-tertiary',
          highlightItem: 'text-headline1 text-text-strong',
          highlightWrapper: ' bg-white',
        }}
        {...props}
      />
    </WheelPickerWrapper>
  );
};

export default NumberWheelPicker;
