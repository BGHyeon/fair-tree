import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Text from '../../atoms/text.tsx';

interface AppMenuProps {
  focus: boolean;
  title: string;
  icon: (focus: boolean) => ReactNode;
  onClick: () => void;
}

const AppMenu = (props: AppMenuProps) => {
  return (
    <div
      className="relative flex flex-1 cursor-pointer flex-col items-center py-3 transition-colors"
      onClick={props.onClick}
    >
      {/* 1. 이동하는 배경 버블 (핵심) */}
      {props.focus && (
        <motion.div
          layoutId="active-pill"
          className="bg-layer-3 absolute inset-1 z-0 rounded-[5rem]"
          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
        />
      )}

      {/* 2. 아이콘 영역: 활성화 시 살짝 커지는 효과 */}
      <motion.div
        className="relative z-10"
        animate={{ scale: props.focus ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {props.icon(props.focus)}
      </motion.div>

      {/* 3. 텍스트 라벨 */}
      <div className="relative z-10">
        <Text
          weight={props.focus ? 'emphasize' : 'regular'}
          type={'footnote'}
          className={`text-text-${props.focus ? 'primary' : 'body'}`}
        >
          {props.title}
        </Text>
      </div>
    </div>
  );
};

export default AppMenu;
