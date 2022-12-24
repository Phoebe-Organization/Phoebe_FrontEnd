import React from 'react';
import {
  Card,
  CardContent,
  CardImageBlur,
  CardSubContent,
  CardSubContentContainer,
  CardTag,
  ProfilePicture,
} from '../../styles/cards';
import LocationIcon from '../../../assets/icons/location.svg';
import Button from '../../ButtonComponents/Button.component';
import { ButtonSizes } from '../../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../../ButtonComponents/ButtonStyles';
import { FaUsers } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { formatDate } from '../../../globals/formatDate';

interface EventCardProps {
  img?: string;
  icon?: JSX.Element;
  tagName?: string;
  address?: string;
  title?: string;
  distance?: number;
  attendees?: number;
  start?: number;
  hostImage?: string;
  hostName?: string;
}

export const EventCard = ({
  img,
  icon,
  tagName,
  address = '34 West 57th Street, PH',
  title = 'Lincoln Park',
  distance = 9.8,
  attendees = 1,
  start = Date.now(),
  hostImage,
  hostName,
}: EventCardProps) => {
  return (
    <div style={{ position: 'relative', margin: '0px 10px' }}>
      {/* <CardImageBlur /> */}
      <Card $imgSrc={img}>
        <CardSubContentContainer>
          <CardSubContent>
            <div className='host'>
              <ProfilePicture src={hostImage} />
              <p>{hostName}</p>
            </div>
            <div className='attending'>
              <FaUsers />
              <p>
                <span>&#40;{attendees}&#41;</span> Attendees
              </p>
            </div>
            <p className='time'>
              <FiClock /> {formatDate(start)}
            </p>
          </CardSubContent>
        </CardSubContentContainer>
        <CardTag>
          {icon}
          <p>{tagName}</p>
        </CardTag>
        <CardContent>
          <div className='content-title'>
            <h4>{title}</h4>
          </div>
          <div className='content-location'>
            <img src={LocationIcon} alt='' />
            <p>{address}</p>
          </div>
          <div className='content-details-button-container'>
            <p>{distance} mi</p>
            <Button btnSize={ButtonSizes.XSMALL} btnStyle={ButtonStyles.CARD}>
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
