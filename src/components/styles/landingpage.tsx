import styled from 'styled-components';

export const IPhoneImage = styled.img({
  width: '250px',
  height: '500px',

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'cover',
  overflow: 'hidden',
});

export const FloatingShadow = styled.img({
  width: '250px',
});

export const IPhoneImageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const AppStoreButtonContainer = styled.div({
  cursor: 'pointer',
  backgroundColor: '#000000',
  color: 'white',
  borderRadius: '5px',
  width: '130px',
  height: '41px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  '.bigTxt': {
    textTransform: 'capitalize',
    fontSize: '14px',
  },
  p: {
    textTransform: 'uppercase',
    fontSize: '7px',
    lineHeight: '13px',
    margin: '0px',
    textAlign: 'left',
  },
  svg: {
    fontSize: '24px',
  },
});

// .flex {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//    }

//    .app {
//     &-btn {
//      width: 45%;
//      max-width: 160px;
//      color: #fff;
//      margin: 20px 10px;
//      text-align: left;
//      border-radius: 5px;
//      text-decoration: none;
//      font-family: "Lucida Grande", sans-serif;
//      font-size: 10px;
//      text-transform: uppercase;
//      &.blu {
//       background-color: #101010;
//       transition: background-color 0.25s linear;
//       &:hover {
//        background-color: #454545;
//       }
//      }
//      i {
//       width: 20%;
//       text-align: center;
//       font-size: 28px;
//       margin-right: 7px;
//      }
//      .big-txt {
//       font-size: 17px;
//       text-transform: capitalize;
//      }
//     }
//    }

// export const BackgroundImg = styled.img({
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   height: '100%',
//   width: '100%',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   objectFit: 'cover',
//   overflow: 'hidden',
//   //   zIndex: '-1',
// });

export const IPhoneBackgroundImage = styled.div({
  position: 'relative',
  height: '434px',
  width: '210px',
  overflow: 'hidden',
  backgroundColor: 'blue',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: "url('/src/assets/pexels-rodnae-productions-8217860.jpg')",
  objectFit: 'cover',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
