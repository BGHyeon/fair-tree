import type { ReactNode } from 'react';
import PageHeader from '../organisms/common/pageHeader.tsx';
import ShareSvg from '../../assets/share.svg';
import IconButton from '../atoms/buttons/iconButton.tsx';

interface FairDetailTemplateProps {
  fairInfo: ReactNode;
  fairPhoto: ReactNode;
  footer: ReactNode;
}
const FairDetailTemplate = (props: FairDetailTemplateProps) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <PageHeader
        title={'박람회 상세 정보'}
        actions={
          <IconButton
            icon={ShareSvg}
            onClick={() => {}}
            className={'bg-transparent p-0'}
          />
        }
      />
      <div className="scrollbar-hide flex flex-1 flex-col overflow-y-scroll">
        {props.fairPhoto}
        <div className="border-border-default mx-4 border-b-1 py-4">
          {props.fairInfo}
        </div>
      </div>

      {props.footer}
    </div>
  );
};

export default FairDetailTemplate;
