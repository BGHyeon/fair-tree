import BackSvg from '../../../assets/back.svg';

interface TabHeaderProps {
  onBack: () => void;
}
const TabHeader = ({ onBack }: TabHeaderProps) => {
  return (
    <div
      className={
        'flex items-center justify-between border-b border-gray-200 p-4'
      }
    >
      <img src={BackSvg} alt={''} onClick={onBack} width={32} height={32} />
    </div>
  );
};

export default TabHeader;
