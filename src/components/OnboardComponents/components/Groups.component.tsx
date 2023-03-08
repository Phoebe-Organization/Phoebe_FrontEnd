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
  OnboardingGroupsTitleContainer,
} from '../../styles/onboarding';
import * as Img from '../../../assets/places';
import { HorizontalDivider } from '../../styles/global';

const testData: GroupProps[] = [
  {
    img: Img.Store1,
    groupName: 'The Wiggleess!!',
    groupHeadline: 'Greatest Company',
    website: 'https://phoebe.com',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aperiam vel eligendi. Facilis molestias, alias eaque facere laudantium, quaerat blanditiis dolor fugiat tenetur id tempore vitae, libero saepe qui omnis?',
    interests: ['Skiing', 'Dancing'],
    members: 33,
    creationDate: Date.now().toString(),
  },
  {
    img: Img.Store2,
    groupName: 'The BLOOPPERRSS',
    groupHeadline: 'Big BLooops Company',
    website: 'https://phoebe.com',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti,',
    interests: ['Football', 'Art'],
    members: 12,
    creationDate: Date.now().toString(),
  },
  {
    img: Img.Store3,
    groupName: 'FlameBOYS',
    groupHeadline: 'Greatest Company',
    website: 'https://phoebe.com',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti,',
    interests: ['Skiing', 'Dancing'],
    members: 3325,
    creationDate: Date.now().toString(),
  },
];

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
            return <GroupInterests key={interest}>{interest}</GroupInterests>;
          })}
        </GroupInterestsContainer>
      </GroupSubHeaderContent>
    </GroupContainer>
  );
};

export const OnboardingGroups = () => {
  return (
    <div>
      <OnboardingGroupsTitleContainer>
        <h1>OnboardingGroups!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, aliquam eum eaque
          quisquam quidem enim!
        </p>
      </OnboardingGroupsTitleContainer>
      <GroupsWrapper>
        {testData.map((data) => {
          return (
            <Group
              img={data.img}
              groupName={data.groupName}
              groupHeadline={data.groupHeadline}
              website={data.website}
              description={data.description}
              interests={data.interests}
              members={data.members}
              key={data.groupName}
            />
          );
        })}
      </GroupsWrapper>
    </div>
  );
};
