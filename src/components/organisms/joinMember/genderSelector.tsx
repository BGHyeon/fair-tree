import Text from '../../atoms/text.tsx';
import SelectButton from '../../atoms/buttons/selectButton.tsx';
import { useJoinMemberStore } from '../../../state/joinMemberState.ts';

const GenderSelector = () => {
  const gender = useJoinMemberStore((state) => state.gender);
  const setGender = useJoinMemberStore((state) => state.setGender);
  return (
    <div className={'flex-col'}>
      <Text weight={'emphasize'} type={'body2'}>
        성별
      </Text>
      <div className={'flex gap-2'}>
        <SelectButton
          selected={gender === 0}
          onClick={() => setGender(0)}
          className={'flex-1'}
          text={'남자'}
        />
        <SelectButton
          selected={gender === 1}
          onClick={() => setGender(1)}
          className={'flex-1'}
          text={'여자'}
        />
      </div>
    </div>
  );
};

export default GenderSelector;
