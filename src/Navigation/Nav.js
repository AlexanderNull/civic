import React, { PropTypes } from 'react';
import NavLink from './NavRouterLink';
import isClient from '../utils/isClient';

const defaultMenu = ['Collections', 'Explore', 'About'];

const Nav = ({ menu = defaultMenu }) => {
  if (isClient) require('./Nav.css');
  return (
    <ul style={{ display: 'flex', width: '100%', listStyle: 'none', padding: '1rem', flex: '1 1 100%' }}>
      {menu.map((item, idx) => <NavLink style={{ flex: '1 1 100%' }} key={idx} name={item.name} path={item.path} />)}
    </ul>
  );
};

Nav.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })),
};

export default Nav;