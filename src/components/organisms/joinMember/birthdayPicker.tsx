import { useState } from 'react';
import LabelInput from '../../molecules/input/labelInput.tsx';
import DateWheelPickerModal from '../modal/dateWheelPickerModal.tsx';
import { useJoinMemberStore } from '../../../state/joinMemberState.ts';

const BirthdayPicker = () => {
  const birthDay = useJoinMemberStore((state) => state.birthday);
  const setBirthDay = useJoinMemberStore((state) => state.setBirthday);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <LabelInput
        label={'생년월일'}
        placeholder={'생년월일을 선택해주세요'}
        value={
          birthDay
            ? `${birthDay.getFullYear()}년 ${birthDay.getMonth() + 1}월 ${birthDay.getDate()}일`
            : ''
        }
        onClick={() => setVisible(true)}
        readOnly={true}
      />
      <DateWheelPickerModal
        initValue={{
          year: birthDay?.getFullYear(),
          month: birthDay?.getMonth(),
          day: birthDay?.getDate(),
        }}
        visible={visible}
        setVisible={setVisible}
        onSelect={(y, m, d) => {
          setBirthDay(new Date(y, m - 1, d));
        }}
      />
    </>
  );
};

export default BirthdayPicker;
