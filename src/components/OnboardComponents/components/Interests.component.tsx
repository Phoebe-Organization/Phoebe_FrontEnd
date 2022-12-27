import React, { useState } from 'react';
import { InterestButton, InterestButtonContainer } from '../../styles/interests';

interface InterestsProps {
  setData: (s: string[]) => void;
  data: string[];
}

interface InterestButtonProps {
  interest: string;
  clickEvent: (arg0: boolean, arg1: string) => void;
}

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

  const interests = [
    'Skating',
    'Dancing',
    'Fitness',
    'Yoga',
    'Art',
    'Music',
    'Basketball',
    'Soccer',
    'Golf',
    'Football',
    'Rock Climbing',
    'Concerts',
    'Photography',
    'Travel',
    'Video Games',
    'Food',
    'Technology',
    'Chess',
    'Painting',
    'Theater',
    'Gardening',
    'Baking',
  ];
  return (
    <InterestButtonContainer>
      {interests.map((vals) => {
        return <InterestBtn key={vals} interest={vals} clickEvent={handleInterest} />;
      })}
    </InterestButtonContainer>
  );
};

export default Interests;
