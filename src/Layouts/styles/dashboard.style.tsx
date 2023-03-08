import styled from 'styled-components';

export const DashboardLayoutContainer = styled.div`
  display: flex;
  flex-flow: row;
  overflow: hidden;
`;
export const DashboardSideNav = styled.div`
  display: block;
  flex: 0 0 35%;
  max-width: 35%;
  position: relative;
  min-height: 1px;
  max-height: 100vh;
  overflow: scroll;
`;
export const DashboardComponent = styled.div`
  display: block;
  flex: 0 0 65%;
  max-width: 65%;
  max-height: 100vh;
  overflow: scroll;
`;
