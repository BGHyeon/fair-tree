import { type ReactNode, useEffect, useState } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const [animate, setAnimate] = useState(false);

  // 모달이 열릴 때 애니메이션 효과를 위해 약간의 지연을 줌
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* 배경 오버레이 */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* 바텀 시트 컨텐츠 */}
      <div
        className={`bg-layer-2 relative w-full max-w-lg transform rounded-t-3xl px-4 py-2 pb-10 shadow-xl transition-transform duration-300 ease-out ${
          animate ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
