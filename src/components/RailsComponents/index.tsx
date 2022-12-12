import React from 'react';
import { RailContainer } from '../styles/rails';

interface RailProps {
  cards?: JSX.Element[];
  children?: string;
}

export const Rail = ({ cards, children }: RailProps) => {
  return (
    <div>
      <h3>{children}</h3>
      <RailContainer>
        {cards?.map((ex) => {
          return <div key={ex.key}>{ex}</div>;
        })}
      </RailContainer>
    </div>
  );
};
