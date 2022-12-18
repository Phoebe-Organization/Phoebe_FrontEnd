import React from 'react';
import { Card, CardContent, CardImageBlur, CardTag } from '../../styles/cards';

interface EventCardProps {
  img?: string;
  icon?: JSX.Element;
  tagName?: string;
}

export const EventCard = ({ img, icon, tagName }: EventCardProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <CardImageBlur $imgSrc={img} />
      <Card $imgSrc={img}>
        <CardTag>
          {icon}
          <p>{tagName}</p>
        </CardTag>
        <CardContent />
      </Card>
    </div>
  );
};
