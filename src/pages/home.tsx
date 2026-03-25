import HomeTemplate from '../components/templates/homeTemplate.tsx';
import EarlyBirdSection from '../components/organisms/home/earlyBirdSection.tsx';
import GatheringSection from '../components/organisms/home/gatheringSection.tsx';
import LocationFairs from '../components/organisms/home/locationFairs.tsx';

const Home = () => {
  return (
    <div>
      <HomeTemplate
        earlyBird={<EarlyBirdSection />}
        gather={<GatheringSection />}
        location1={<LocationFairs address={'서울'} />}
        location2={<LocationFairs address={'경기'} />}
      />
    </div>
  );
};

export default Home;
