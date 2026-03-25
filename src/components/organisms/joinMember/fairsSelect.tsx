import SelectButton from '../../atoms/buttons/selectButton.tsx';
import { useJoinMemberStore } from '../../../state/joinMemberState.ts';

const FairsSelect = () => {
  const selects = useJoinMemberStore((state) => state.selectedFairs);
  const toggleFairSelection = useJoinMemberStore(
    (state) => state.toggleFairSelection,
  );
  const items = [
    '캠핑',
    '베이비/육아',
    '반려동물',
    'IT/창업',
    '카페/디저트',
    '음식',
    '아트/일러스트/케릭터',
  ];
  const onFairCategoryClick = (index: number) => {
    toggleFairSelection(index);
  };
  return (
    <div className={'grid grid-cols-2 gap-4 md:grid-cols-4'}>
      {items.map((e, i) => (
        <SelectButton
          key={`fair_category_${i}`}
          text={e}
          buttonType={'select'}
          selected={selects.includes(i)}
          onClick={() => onFairCategoryClick(i)}
        />
      ))}
    </div>
  );
};

export default FairsSelect;
