import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ButtonComponents/Button.component';
import { ButtonSizes } from '../../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../../ButtonComponents/ButtonStyles';
import {
  InterestButton,
  InterestButtonContainer,
  InterestButtonsWrapper,
  InterestsTitle,
} from '../../styles/interests';

interface InterestButtonProps {
  interest: string;
  clickEvent: (arg0: boolean, arg1: string) => void;
}

const InterestBtn = ({ interest, clickEvent }: InterestButtonProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <InterestButton
      key={interest}
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

export const Interest = () => {
  const [interestList, setInterestList] = useState<string[]>([]);

  const addInterest = (val: string) => {
    setInterestList((interestList) => [...interestList, val]);
  };
  const removeInterest = (val: string) => {
    setInterestList(interestList.filter((interest) => interest !== val));
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

  const navigate = useNavigate();
  return (
    <>
      <InterestsTitle>What are your Interests?</InterestsTitle>
      <InterestButtonsWrapper>
        <InterestButtonContainer>
          {interests.map((vals) => {
            return <InterestBtn interest={vals} clickEvent={handleInterest} />;
          })}
        </InterestButtonContainer>
        <Button
          btnSize={ButtonSizes.FILL}
          btnStyle={ButtonStyles.SECONDARY}
          action={() => navigate('/')}
          disabled={interestList.length === 0}
        >
          Find Your Next Step
        </Button>
      </InterestButtonsWrapper>
    </>
  );
};
