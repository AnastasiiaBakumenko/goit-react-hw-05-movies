import { Outlet } from 'react-router-dom';
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

      <Outlet />
    </>
  );
};
export default Header;