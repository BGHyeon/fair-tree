import CheckBox from '../atoms/buttons/checkBox.tsx';
import Text from '../atoms/text.tsx';
import TextButton from '../atoms/buttons/textButton.tsx';

interface AgreementCheckBoxProps {
  title: string;
  agreed: boolean;
  onAgreeChange: (v: boolean) => void;
  toDetail?: () => void;
  required: boolean;
  textType?: 'body1' | 'headline2';
}

const AgreementCheckBox = (props: AgreementCheckBoxProps) => {
  return (
    <div className={'flex items-center gap-1'}>
      <CheckBox value={props.agreed} onValueChange={props.onAgreeChange} />
      <Text
        weight={props.required ? 'emphasize' : 'regular'}
        type={props.textType ?? 'body1'}
        className={'flex-1'}
      >
        {props.title}
      </Text>
      {!!props.toDetail && (
        <TextButton text={'보기'} onClick={props.toDetail} />
      )}
    </div>
  );
};

export default AgreementCheckBox;
