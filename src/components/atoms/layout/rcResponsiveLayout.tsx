import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface RcResponsiveLayoutProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}
const RcResponsiveLayout = (props: RcResponsiveLayoutProps) => {
  return (
    <div
      {...props}
      className={`flex h-screen w-full flex-col overflow-scroll md:flex-row ${props.className}`}
    >
      {props.children}
    </div>
  );
};
export default RcResponsiveLayout;
