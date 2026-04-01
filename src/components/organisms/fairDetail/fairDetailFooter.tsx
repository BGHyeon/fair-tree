import Footer from '../../molecules/footer.tsx';
import IconButton from '../../atoms/buttons/iconButton.tsx';
import BookMarkSvg from '../../../assets/bookmark.svg';

const FairDetailFooter = () => {
  return (
    <Footer
      text={'티켓 구매하기'}
      onClick={() => {}}
      subButton={<IconButton icon={BookMarkSvg} onClick={() => {}} />}
    />
  );
};

export default FairDetailFooter;
