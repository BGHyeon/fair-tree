import Text from '../../../atoms/text.tsx';
import NickNameInput from '../nickNameInput.tsx';
import GenderSelector from '../genderSelector.tsx';
import BirthdayPicker from '../birthdayPicker.tsx';

const BaseInfoTab = () => {
  return (
    <div className={'flex flex-col pt-12'}>
      <div className={'mb-6 flex flex-col items-center'}>
        <Text weight={'emphasize'} type={'title3'}>
          가입 전 기본 정보를
        </Text>
        <Text weight={'emphasize'} type={'title3'}>
          입력해주세요.
        </Text>
      </div>
      <div className={'flex flex-col gap-6'}>
        <NickNameInput />
        <GenderSelector />
        <BirthdayPicker />
      </div>
    </div>
  );
};

export default BaseInfoTab;
