import BackSvg from '../../../assets/back.svg';
import type { ReactNode } from 'react';
import Text from '../../atoms/text.tsx';
import { useNavigate } from 'react-router';

interface TabHeaderProps {
  onBack?: () => void;
  title?: string;
  actions?: ReactNode | ReactNode[];
}
const PageHeader = ({ onBack, title, actions }: TabHeaderProps) => {
  const navigate = useNavigate();
  const defaultBack = () => {
    navigate(-1);
  };
  return (
    <div className="relative flex min-h-[64px] items-center justify-between border-b border-gray-200 p-2">
      <div className="z-10 flex flex-shrink-0 items-center">
        <img
          src={BackSvg}
          alt="back"
          onClick={onBack ?? defaultBack}
          className="cursor-pointer hover:opacity-70"
          width={32}
          height={32}
        />
      </div>
      {title && (
        <Text
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold whitespace-nowrap"
          type={'headline1'}
          weight={'emphasize'}
        >
          {title}
        </Text>
      )}
      <div className="z-10 flex flex-shrink-0 items-center gap-3">
        {actions}
      </div>
    </div>
  );
};

export default PageHeader;
