import HomeTemplate from '../../components/templates/homeTemplate.tsx';
import EarlyBirdSection from '../../components/organisms/fairHome/earlyBirdSection.tsx';
import LocationFairs from '../../components/organisms/fairHome/locationFairs.tsx';
import AppMenuBar from '../../components/molecules/menu/appMenuBar.tsx';
import { useState } from 'react';

const Home = () => {
  const [tabIdx, setTabIdx] = useState(0);
  return (
    <div>
      {tabIdx === 0 && (
        <HomeTemplate
          earlyBird={<EarlyBirdSection />}
          location1={<LocationFairs address={'서울'} />}
          location2={<LocationFairs address={'경기'} />}
        />
      )}
      <AppMenuBar index={tabIdx} setIndex={setTabIdx} />
    </div>
  );
};

export default Home;
