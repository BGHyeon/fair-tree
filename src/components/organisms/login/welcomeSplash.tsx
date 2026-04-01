import Text from '../../atoms/text.tsx';

const WelcomeSplash = () => {
  return (
    <div className={'flex flex-1 flex-col items-center justify-center'}>
      <img src={`${import.meta.env.BASE_URL}logo.svg`} alt={'logo'} />
      <img
        src={`${import.meta.env.BASE_URL}title.svg`}
        alt={'title'}
        className={'my-3'}
      />
      <Text weight={'emphasize'} type={'headline1'}>
        박람회 정보는 페어트리에서
      </Text>
      <Text weight={'emphasize'} type={'headline1'}>
        찾아보세요!
      </Text>
    </div>
  );
};

export default WelcomeSplash;
