import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface TextProps extends ComponentPropsWithoutRef<'span'> {
  weight: 'regular' | 'emphasize';
  type:
    | 'titleLarge'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'headline1'
    | 'headline2'
    | 'body1'
    | 'body2'
    | 'footnote'
    | 'caption';
  children?: ReactNode;
}

const Text = ({ weight, type, className, children, ...props }: TextProps) => {
  return (
    <span {...props} className={`text-${type} ${weight} ${className ?? ''}`}>
      {children}
    </span>
  );
};

export default Text;
