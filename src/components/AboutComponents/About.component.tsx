import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface AboutSectionProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const About = () => {
  return (
    <div>
      <h1>Hello From About Section!</h1>
    </div>
  );
};

export default About;
