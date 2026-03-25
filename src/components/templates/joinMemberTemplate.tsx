import BaseInfoTab from '../organisms/joinMember/tabs/baseInfoTab.tsx';
import AgreementTab from '../organisms/joinMember/tabs/agreementTab.tsx';
import InterestFairsTab from '../organisms/joinMember/tabs/interestFairsTab.tsx';
import JoinResultTab from '../organisms/joinMember/tabs/joinResultTab.tsx';
import PrimaryButton from '../atoms/buttons/primaryButton.tsx';
import TabHeader from '../organisms/common/tabHeader.tsx';
import { useNavigate } from 'react-router';
import { useJoinMemberStore } from '../../state/joinMemberState.ts';

const tabItems = [
  { label: '약관동의', content: <AgreementTab /> },
  { label: '기본정보', content: <BaseInfoTab /> },

  { label: '관심박람회', content: <InterestFairsTab /> },
  { label: '가입완료', content: <JoinResultTab /> },
] as const;

const JoinMemberTemplate = () => {
  const activeTabIndex = useJoinMemberStore((state) => state.activeTabIndex);
  const nextTab = useJoinMemberStore((state) => state.nextTab);
  const prevTab = useJoinMemberStore((state) => state.prevTab);
  const navigate = useNavigate();
  const currentTab = tabItems[activeTabIndex] ?? tabItems[0];

  const handleNext = () => {
    if (activeTabIndex === tabItems.length - 1) {
      navigate('/');
      return;
    } else {
      nextTab(tabItems.length - 1);
    }
  };
  const prev = () => {
    prevTab();
  };

  return (
    <div className={'flex h-screen w-full flex-col'}>
      {activeTabIndex !== 0 && activeTabIndex !== tabItems.length - 1 && (
        <TabHeader onBack={prev} />
      )}
      <div className={'flex h-full flex-col px-4'}>
        <div className={'flex-1 pb-6'}>{currentTab.content}</div>
        <div className={'mb-5'}>
          <PrimaryButton
            text={
              activeTabIndex === tabItems.length - 1 ? '로그인 하기' : '다음'
            }
            className={'w-full'}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinMemberTemplate;
