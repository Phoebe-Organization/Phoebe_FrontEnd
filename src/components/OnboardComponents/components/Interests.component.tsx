import { useState } from 'react';
import { HorizontalDivider } from '../../styles/global';
import { InterestButton, InterestButtonContainer } from '../../styles/interests';

interface InterestsProps {
  setData: (s: string[]) => void;
  data: string[];
}

interface InterestButtonProps {
  interest: string;
  clickEvent: (arg0: boolean, arg1: string) => void;
}

interface InterestContainerProps {
  title: string;
  interests: string[];
}

const sportsInterests = [
  'Weight Lifting',
  'Yoga',
  'Soccer',
  'Basketball',
  'Football',
  'Bowling',
  'Surfing',
  'Hockey',
  'Tennis',
  'Baseball',
  'Golf',
  'Running',
  'Volleyball',
  'Skiing',
  'Skating',
  'Roller Skating',
  'Ice Skating',
  'Rock Climbing',
  'Dancing',
];

const artInterests = [
  'Painting',
  'Sculpture',
  'Literature',
  'Architecture',
  'Cinema',
  'Photography',
  'Theater',
];

const musicInterests = [
  'Hip-Hop/Rap',
  'Pop',
  'R&B/Soul',
  'Country',
  'Latin Music',
  'Jazz',
  'Rock',
  'Heavy Metal',
  'K-Pop',
  'Indie Rock',
];

const lifeStyleInterests = [
  'Travel',
  'Health/Wellness',
  'Pool Party',
  'Concerts',
  'Home Improvements',
  'NightClub',
  'House Party',
  'Bars',
  'Hiking',
];

const InterestBtn = ({ interest, clickEvent }: InterestButtonProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <InterestButton
      className={selected ? 'active' : ''}
      onClick={() => {
        clickEvent(!selected, interest);
        setSelected(!selected);
      }}
    >
      {interest}
    </InterestButton>
  );
};

const Interests = ({ data, setData }: InterestsProps) => {
  const addInterest = (val: string) => {
    setData([...data, val]);
  };
  const removeInterest = (val: string) => {
    setData(data.filter((interest) => interest !== val));
  };

  const handleInterest = (selected: boolean, val: string) => {
    if (selected) {
      addInterest(val);
    } else {
      removeInterest(val);
    }
  };

  const InterestContainer = ({ title, interests }: InterestContainerProps) => {
    return (
      <>
        <h5 style={{ margin: '0', textAlign: 'left', marginBottom: '5px' }}>{title}</h5>
        <HorizontalDivider style={{ width: '350px' }} />
        <InterestButtonContainer style={{ width: '100%', margin: '15px 0' }}>
          {interests.map((vals) => {
            return <InterestBtn key={vals} interest={vals} clickEvent={handleInterest} />;
          })}
        </InterestButtonContainer>
      </>
    );
  };

  return (
    <>
      <h3>Select your Interests</h3>
      <InterestContainer title={'Sports'} interests={sportsInterests} />
      <InterestContainer title={'Art'} interests={artInterests} />
      <InterestContainer title={'Music'} interests={musicInterests} />
      <InterestContainer title={'LifeStyle'} interests={lifeStyleInterests} />
    </>
  );
};

export default Interests;
