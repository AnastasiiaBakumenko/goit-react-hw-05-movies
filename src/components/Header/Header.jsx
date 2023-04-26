import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderLink, HeaderList, HeaderText } from './Header.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
const Header = () => {
  return (
    <>
      <HeaderList>
        {navItems.map(({ href, text }) => (
          <HeaderText key={href}>
            <HeaderLink to={href}>{text}</HeaderLink>
          </HeaderText>
        ))}
      </HeaderList>

      <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
    </>
  );
};
export default Header;