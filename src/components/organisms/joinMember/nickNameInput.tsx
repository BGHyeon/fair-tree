import LabelInput from '../../molecules/input/labelInput.tsx';
import { InputStatus } from '../../../models/inputStatus.ts';
import SubButton from '../../atoms/buttons/subButton.tsx';
import { useJoinMemberStore } from '../../../state/joinMemberState.ts';

const NickNameInput = () => {
  const status = useJoinMemberStore((state) => state.nicknameStatus);
  const nickName = useJoinMemberStore((state) => state.nickname);
  const setNicknameStatus = useJoinMemberStore(
    (state) => state.setNicknameStatus,
  );
  const setNickName = useJoinMemberStore((state) => state.setNickName);

  const switchStatus = () => {
    setNicknameStatus(
      status === InputStatus.default
        ? InputStatus.success
        : status === InputStatus.success
          ? InputStatus.fail
          : InputStatus.default,
    );
  };
  return (
    <div className={'flex flex-col gap-3'}>
      <LabelInput
        label={'닉네임'}
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        showMaxLength={true}
        placeholder={'닉네임을 입력해주세요.'}
        maxLength={12}
        status={status}
        statusMessage={(value) => {
          if (value === InputStatus.success) {
            return '사용 가능한 닉네임이에요.';
          } else {
            return '이미 사용중인 닉네임 이에요';
          }
        }}
      />
      <SubButton
        text={'중복 확인'}
        disabled={nickName.length === 0}
        onClick={switchStatus}
      />
    </div>
  );
};

export default NickNameInput;
