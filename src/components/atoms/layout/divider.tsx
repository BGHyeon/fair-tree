import { twMerge } from 'tailwind-merge';

interface DividerProps {
  className?: string;
}
const Divider = (props: DividerProps) => {
  return (
    <div
      className={twMerge(
        'border-border-strong h-1 w-full border-b',
        props.className,
      )}
    />
  );
};

export default Divider;
