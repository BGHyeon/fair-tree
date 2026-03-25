import Text from '../../atoms/text.tsx';
import NumberWheelPicker from '../../atoms/picker/numberWheelPicker.tsx';
import SubButton from '../../atoms/buttons/subButton.tsx';
import PrimaryButton from '../../atoms/buttons/primaryButton.tsx';
import BottomSheet from '../../atoms/modal/bottomSheet.tsx';
import { useState } from 'react';

interface DateWheelPickerModalProps {
  visible: boolean;
  setVisible: (b: boolean) => void;
  onSelect: (year: number, month: number, day: number) => void;
  initValue: {
    year: number | null | undefined;
    month: number | null | undefined;
    day: number | null | undefined;
  };
}
const DateWheelPickerModal = (props: DateWheelPickerModalProps) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [year, setYear] = useState<number>(props.initValue.year ?? currentYear);
  const [month, setMonth] = useState<number>(
    props.initValue.month ?? date.getMonth() + 1,
  );
  const [day, setDay] = useState<number>(props.initValue.day ?? date.getDate());
  const onCloseModal = () => {
    props.setVisible(false);
  };
  const onConfirm = () => {
    if (year && month && day) {
      props.onSelect(year, month, day);
    }
    onCloseModal();
  };
  return (
    <BottomSheet
      isOpen={props.visible}
      onClose={() => {
        props.setVisible(false);
      }}
    >
      <div className={'bg-layer-2 flex pt-2 pb-4'}>
        <div className={'flex flex-1 flex-col items-center gap-2'}>
          <Text weight={'emphasize'} type={'body2'}>
            년
          </Text>
          <NumberWheelPicker
            defaultValue={year ?? currentYear - 20}
            value={year ?? currentYear - 20}
            onValueChange={setYear}
            options={Array.from({ length: 201 }, (_, i) => {
              {
                const year = currentYear - 100 + i;
                return {
                  label: year,
                  value: year,
                };
              }
            })}
          />
        </div>
        <div className={'flex flex-1 flex-col items-center gap-2'}>
          <Text weight={'emphasize'} type={'body2'}>
            월
          </Text>
          <NumberWheelPicker
            defaultValue={month ?? date.getMonth() + 1}
            value={month ?? date.getMonth() + 1}
            onValueChange={setMonth}
            options={Array.from({ length: 12 }, (_, i) => {
              {
                const month = i + 1;
                return {
                  label: month,
                  value: month,
                };
              }
            })}
          />
        </div>
        <div className={'flex flex-1 flex-col items-center gap-2'}>
          <Text weight={'emphasize'} type={'body2'}>
            일
          </Text>
          <NumberWheelPicker
            defaultValue={day ?? date.getDate()}
            value={day ?? date.getDate()}
            onValueChange={setDay}
            options={Array.from({ length: 31 }, (_, i) => {
              {
                const day = i + 1;
                return {
                  label: day,
                  value: day,
                };
              }
            })}
          />
        </div>
      </div>
      <div className={'flex gap-1'}>
        <SubButton
          text={'취소'}
          className={'flex-1 border-none'}
          onClick={onCloseModal}
        />
        <PrimaryButton text={'확인'} className={'flex-1'} onClick={onConfirm} />
      </div>
    </BottomSheet>
  );
};

export default DateWheelPickerModal;
