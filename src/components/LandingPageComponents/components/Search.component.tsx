import React from 'react';
import { useGenericInputText } from '../../../hooks/TextHooks';
import InputField from '../../InputFieldComponents/InputField.component';
import { BsSearch } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { FlexColumnContainer, FlexRowContainer } from '../../styles/global';
import Button from '../../ButtonComponents/Button.component';
import { ButtonSizes } from '../../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../../ButtonComponents/ButtonStyles';

export const Search = () => {
  const keywordSearch = useGenericInputText();
  const locationSearch = useGenericInputText();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FlexColumnContainer style={{ minWidth: '1000px', margin: '60px 0px' }}>
        <FlexRowContainer style={{ margin: '10px' }}>
          <InputField
            title={'Keyword Search'}
            showLabel={false}
            type={'text'}
            inputChange={keywordSearch.inputChange}
            inputName={'Search'}
            val={keywordSearch.textVal}
            icon={<BsSearch />}
            inputWidth={450}
          >
            Search By Keywords
          </InputField>
          <Button btnSize={ButtonSizes.SMALL} btnStyle={ButtonStyles.PRIMARY}>
            Search
          </Button>
        </FlexRowContainer>

        <FlexRowContainer style={{ margin: '10px' }}>
          <InputField
            title={'Location Search'}
            showLabel={false}
            type={'text'}
            inputChange={locationSearch.inputChange}
            inputName={'Search'}
            val={locationSearch.textVal}
            icon={<FaLocationArrow />}
            inputWidth={450}
          >
            Search By Location
          </InputField>
          <Button btnSize={ButtonSizes.SMALL} btnStyle={ButtonStyles.SECONDARY}>
            Search
          </Button>
        </FlexRowContainer>
      </FlexColumnContainer>
    </div>
  );
};
