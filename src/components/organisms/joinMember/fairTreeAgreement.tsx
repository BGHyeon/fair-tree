import AgreementCheckBox from '../../molecules/agreementCheckBox.tsx';
import Divider from '../../atoms/layout/divider.tsx';
import { useJoinMemberStore } from '../../../state/joinMemberState.ts';

const FairTreeAgreement = () => {
  const serviceAgree = useJoinMemberStore((state) => state.serviceAgree);
  const privateAgree = useJoinMemberStore((state) => state.privateAgree);
  const marketingAgree = useJoinMemberStore((state) => state.marketingAgree);
  const setServiceAgree = useJoinMemberStore((state) => state.setServiceAgree);
  const setPrivateAgree = useJoinMemberStore((state) => state.setPrivateAgree);
  const setMarketingAgree = useJoinMemberStore(
    (state) => state.setMarketingAgree,
  );
  const setAllAgreements = useJoinMemberStore(
    (state) => state.setAllAgreements,
  );
  return (
    <div>
      <AgreementCheckBox
        title={'모든 항목에 동의합니다.'}
        agreed={serviceAgree && privateAgree && marketingAgree}
        onAgreeChange={setAllAgreements}
        required={true}
      />
      <Divider className={'my-3'} />
      <div className={'flex flex-col gap-3'}>
        <AgreementCheckBox
          title={'(필수) 개인정보 처리방침'}
          agreed={privateAgree}
          onAgreeChange={setPrivateAgree}
          toDetail={() => {}}
          required={true}
        />
        <AgreementCheckBox
          title={'(필수) 서비스 이용약관'}
          agreed={serviceAgree}
          onAgreeChange={setServiceAgree}
          toDetail={() => {}}
          required={true}
        />
        <AgreementCheckBox
          title={'(선택) 마케팅 정보 수신 동의'}
          agreed={marketingAgree}
          onAgreeChange={setMarketingAgree}
          toDetail={() => {}}
          required={false}
        />
      </div>
    </div>
  );
};

export default FairTreeAgreement;
