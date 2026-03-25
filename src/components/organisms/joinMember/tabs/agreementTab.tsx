import { useParams } from 'react-router';
import Text from '../../../atoms/text.tsx';
import LabelInput from '../../../molecules/input/labelInput.tsx';
import FairTreeAgreement from '../fairTreeAgreement.tsx';

const AgreementTab = () => {
  const params = useParams();

  return (
    <div className={'flex flex-col pt-24'}>
      <div className={'mb-3 flex flex-col items-center'}>
        <Text weight={'emphasize'} type={'title3'}>
          사용할 이메일과
        </Text>
        <Text weight={'emphasize'} type={'title3'}>
          서비스 이용 약관을 확인해주세요.
        </Text>
      </div>
      <LabelInput
        wrapperClass={'mb-6'}
        label={'사용할 이메일'}
        disabled={true}
        value={params.email ?? 'test@naver.com'}
        showMaxLength={false}
      />
      <FairTreeAgreement />
    </div>
  );
};

export default AgreementTab;
