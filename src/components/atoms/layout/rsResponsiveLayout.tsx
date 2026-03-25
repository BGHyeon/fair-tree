import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface RsResponsiveLayoutProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}
const RsResponsiveLayout = (props: RsResponsiveLayoutProps) => {
  return (
    <div className="w-fullbg-red-500">
      <div className="scrollbar-hide flex flex-nowrap items-start gap-4 overflow-x-auto px-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 xl:grid-cols-4">
        {props.children}
      </div>
    </div>
  );
};

export default RsResponsiveLayout;
