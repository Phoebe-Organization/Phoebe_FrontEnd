import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
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

  const path = location.pathname;
  const sideBarPaths: string[] = [Paths.DASHBOARD, Paths.HOME];
  const showNavBarIfAuthBasePath = isAuthenticated && path === Paths.BASEPATH;
  const shouldNavbarShow = showNavBarIfAuthBasePath || sideBarPaths.includes(path);

  useEffect(() => {
    setShowNavbar(shouldNavbarShow);
  }, [shouldNavbarShow]);

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
    </div>
  ) : null;
};

export default SideNav;
