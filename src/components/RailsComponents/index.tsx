import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  RailContainer,
  RailContent,
  RailDivider,
  RailPageLeft,
  RailPageRight,
  RailParentContainer,
  RailTitle,
} from '../styles/rails';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface RailProps {
  cards: JSX.Element[];
  children?: string;
  initialCardsToDisplay?: number;
  viewAllLink?: string;
}

export const Rail = ({
  cards,
  children,
  initialCardsToDisplay = 4,
  viewAllLink = 'ooga',
}: RailProps) => {
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
      <RailParentContainer>
        <RailPageLeft onClick={() => paginateLeft()}>
          <BsChevronLeft style={{ display: `${translate === 0 ? 'none' : 'inline-block'}` }} />
        </RailPageLeft>

        <RailContainer style={{ maxWidth: `${railWidth}px` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <RailTitle>{children}</RailTitle>
            {viewAllLink !== '' ? (
              <Link to={viewAllLink} style={{ fontSize: '20px' }}>
                View All{' '}
              </Link>
            ) : null}
          </div>
          <RailDivider />
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
          <BsChevronRight
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
