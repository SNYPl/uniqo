import { FC } from 'react';
import Link from 'next/link';

interface NavItemProps {
  path: string;
  label: string;
  isActive: boolean;
  matchStartsWith?: boolean;
}

const NavItem: FC<NavItemProps> = ({ path, label, isActive }) => (
  <li className={`menu-item-children ${isActive ? 'active' : ''}`}>
    <Link href={path}>{label}</Link>
  </li>
);

export default NavItem;