import LoginTemplate from '../components/templates/loginTemplate.tsx';
import WelcomeSplash from '../components/organisms/login/welcomeSplash.tsx';
import AppleLogin from '../components/organisms/login/appleLogin.tsx';
import GoogleLogin from '../components/organisms/login/googleLogin.tsx';

const Login = () => {
  return (
    <div>
      <LoginTemplate
        welcome={<WelcomeSplash />}
        appleLogin={<AppleLogin />}
        googleLogin={<GoogleLogin />}
      />
    </div>
  );
};

export default Login;
