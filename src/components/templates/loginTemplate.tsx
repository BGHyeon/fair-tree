import { type ReactNode } from 'react';

interface LoginTemplateProps {
  welcome: ReactNode;
  googleLogin: ReactNode;
  appleLogin: ReactNode;
}

const LoginTemplate = (props: LoginTemplateProps) => {
  return (
    <div className={'flex h-screen w-full flex-col justify-center'}>
      {props.welcome}
      <div className={'mb-30 flex flex-col gap-3 px-4'}>
        {props.googleLogin}
        {props.appleLogin}
      </div>
    </div>
  );
};

export default LoginTemplate;
