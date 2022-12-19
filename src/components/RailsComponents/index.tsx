import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  RailContainer,
  RailContent,
  RailPageLeft,
  RailPageRight,
  RailParentContainer,
} from '../styles/rails';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';

interface RailProps {
  cards: JSX.Element[];
  children?: string;
  initialCardsToDisplay?: number;
}

export const Rail = ({ cards, children, initialCardsToDisplay = 5 }: RailProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [railWidth, setrailWidth] = useState(0);

  const [translate, setTranslate] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current !== null) {
      setWidth(cardRef.current.clientWidth);
      setrailWidth(initialCardsToDisplay * width);
    }
  });

  const paginateLeft = () => {
    setTranslate((val) => {
      return val <= 0 ? 0 : (val -= width);
    });
  };

  const paginateRight = () => {
    setTranslate((val) => {
      return val >= (cards.length - initialCardsToDisplay) * width ? val : (val += width);
    });
  };

  return (
    <>
      <h3>{children}</h3>

      <RailParentContainer>
        <RailPageLeft onClick={() => paginateLeft()}>
          <CgChevronLeftO style={{ display: `${translate === 0 ? 'none' : 'inline-block'}` }} />
        </RailPageLeft>

        <RailContainer style={{ maxWidth: `${railWidth}px` }}>
          <RailContent style={{ transform: `translateX(-${translate}px)` }}>
            {cards?.map((ex) => {
              return (
                <div key={ex.key} ref={cardRef}>
                  {ex}
                </div>
              );
            })}
          </RailContent>
        </RailContainer>

        <RailPageRight onClick={() => paginateRight()}>
          <CgChevronRightO
            style={{
              display: `${
                translate >= (cards.length - initialCardsToDisplay) * width
                  ? 'none'
                  : 'inline-block'
              }`,
            }}
          />
        </RailPageRight>
      </RailParentContainer>
    </>
  );
};
