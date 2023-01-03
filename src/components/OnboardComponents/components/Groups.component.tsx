import {
  GroupContainer,
  GroupContentContainer,
  GroupHeaderContent,
  GroupImage,
  GroupInterests,
  GroupInterestsContainer,
  GroupName,
  GroupSubHeaderContent,
  GroupsWrapper,
} from '../../styles/onboarding';
import * as Img from '../../../assets/places';
import { HorizontalDivider } from '../../styles/global';

interface GroupProps {
  description?: string;
  img?: string;
  groupName?: string;
  groupHeadline?: string;
  members?: number;
  creationDate?: string;
  interests?: string[];
  website?: string;
}

const Group = ({
  description,
  img,
  groupName,
  members = 1,
  groupHeadline,
  creationDate,
  interests,
  website,
}: GroupProps) => {
  return (
    <GroupContainer>
      <GroupHeaderContent>
        <GroupImage src={img} />
        <GroupContentContainer>
          <GroupName>{groupName}</GroupName>
          <p>{groupHeadline}</p>
          <p>{website}</p>
          <p>{members} Members</p>
        </GroupContentContainer>
      </GroupHeaderContent>
      <HorizontalDivider style={{ width: '100%', margin: '10px 0px' }} />
      <GroupSubHeaderContent>
        <p>{description}</p>
        <GroupInterestsContainer>
          {interests?.map((interest) => {
            return <GroupInterests>{interest}</GroupInterests>;
          })}
        </GroupInterestsContainer>
      </GroupSubHeaderContent>
    </GroupContainer>
  );
};

export const OnboardingGroups = () => {
  return (
    <div>
      <h1>OnboardingGroups!</h1>
      <GroupsWrapper>
        <Group
          img={Img.Store1}
          groupName={'The Wiggleess!!'}
          groupHeadline={'Greatest Company'}
          website={'https://phoebe.com'}
          description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam.'}
          interests={['Skiing', 'Dancing']}
        />
      </GroupsWrapper>
    </div>
  );
};
