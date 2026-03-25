import { useEffect } from 'react';
import JoinMemberTemplate from '../components/templates/joinMemberTemplate.tsx';
import { useJoinMemberStore } from '../state/joinMemberState.ts';

const JoinMember = () => {
  const resetJoinMember = useJoinMemberStore((state) => state.resetJoinMember);

  useEffect(() => {
    resetJoinMember();
  }, [resetJoinMember]);

  return <JoinMemberTemplate />;
};

export default JoinMember;
