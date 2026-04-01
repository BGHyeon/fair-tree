import type { ReactNode } from 'react';
import Text from '../atoms/text.tsx';

interface InfoProps {
  title: string;
  contentText?: string;
  content?: ReactNode;
}

const Info = (props: InfoProps) => {
  return (
    <div className={'flex items-center justify-between'}>
      <Text weight={'regular'} type={'body1'} className={'text-text-body'}>
        {props.title}
      </Text>
      {props.content ? (
        props.content
      ) : (
        <Text weight={'emphasize'} type={'body1'}>
          {props.contentText}
        </Text>
      )}
    </div>
  );
};

export default Info;
