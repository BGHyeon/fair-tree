import { twMerge } from 'tailwind-merge';

interface CheckBoxProp {
  value: boolean;
  onValueChange: (v: boolean) => void;
}
const CheckBox = (props: CheckBoxProp) => {
  return (
    <div className="relative flex h-5 w-5 items-center justify-center">
      <input
        type="checkbox"
        checked={props.value}
        onChange={(e) => props.onValueChange(e.target.checked)}
        className={twMerge(
          'peer border-icon-tertiary h-full w-full cursor-pointer appearance-none rounded-md border-[3px]',
          'bg-white transition-all duration-200',
          'checked:border-border-accent checked:bg-primary-default',
        )}
      />
      <svg
        className={twMerge(
          'pointer-events-none absolute h-4 w-4 text-white transition-opacity duration-200',
          props.value ? 'opacity-100' : 'opacity-0', // 체크 여부에 따라 보이기/숨기기
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4" // 선 두께 조절 가능
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
};

export default CheckBox;
