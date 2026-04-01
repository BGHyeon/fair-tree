import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
  icon: string;
  className?: string;
  onClick: () => void;
}
const IconButton = (props: IconButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'bg-button-secondary-default center p-auto flex h-10 w-10 items-center justify-center rounded',
        props.className,
      )}
    >
      <img src={props.icon} alt={'button'} />
    </button>
  );
};

export default IconButton;
