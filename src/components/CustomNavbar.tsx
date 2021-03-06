import { Navbar, Container, Nav } from 'react-bootstrap';
import Styled from 'styled-components';

const CustomNavbar = Styled(Navbar)`
  position:fixed;
  width:100%
`
import { NavLink } from 'react-router-dom';
function CustomNav() {
  const links = [
    { id: '1', name: 'About', link: '/' },
    { id: '2', name: 'Courses', link: '/courses' },
    { id: '3', name: 'Education', link: '/education' },
    { id: '5', name: 'Stuff', link: '/stuff' },

  ];
  return (
    <CustomNavbar bg='dark' variant='dark'>
      <Container>
        <Nav className='me-auto'>
          {links.map(({ name, link, id }) => (
            <NavLink
              id={id}
              className='me-3'
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
              })}
              to={link}
              key={id}
            >
              {name}
            </NavLink>
          ))}
        </Nav>
      </Container>
    </CustomNavbar>
  );
}

export default CustomNav;
