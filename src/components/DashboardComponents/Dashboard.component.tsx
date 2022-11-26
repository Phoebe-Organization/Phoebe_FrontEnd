import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface DashboardProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const Dashboard = () => {
  return <div>Hello From Dashboard!</div>;
};

export default Dashboard;
