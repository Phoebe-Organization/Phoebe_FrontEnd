import React from 'react';
import { Card, CardContent, CardTag } from '../../styles/cards';

interface UserCardProps {
  img?: string;
  icon?: JSX.Element;
}

export const UserCard = (props: UserCardProps) => {
  return (
    <Card $imgSrc={props.img}>
      <CardTag>
        {props.icon}
        <p>Parks</p>
      </CardTag>
      <CardContent />
    </Card>
  );
};
