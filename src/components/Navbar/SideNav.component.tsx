import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { OnboardingContext } from '../../contexts/Onboarding/OnboardingContext';
import { Paths } from '../../globals/paths';

export interface NavItem {
  label: string;
  link: string;
}

interface SideNavProps {
  items: NavItem[];
}

const SideNav: React.FC<SideNavProps> = ({ items }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedItem, setSelectedItem] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const { toggleOnboardModal } = useContext(OnboardingContext);

  const path = location.pathname;

  const handleItemClick = (item: NavItem) => {
    setSelectedItem(item.label);
    navigate(item.link);
  };

  return showNavbar ? (
    <div>
      <ul>
        {items.map((item) => (
          <li
            key={item.label}
            className={item.link === path ? 'selected' : ''}
            onClick={() => handleItemClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <button onClick={() => toggleOnboardModal()}>GetMe</button>
    </div>
  ) : null;
};

export default SideNav;
