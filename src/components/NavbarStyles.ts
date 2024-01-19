import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #f3dace;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const NavbarBrandContainer = styled.div`
  display: flex;
  align-items: center;

  .navbar-brand {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    color: #5a3825;

    img {
      height: 40px;
      margin-right: 10px;
    }
  }
`;

export const StyledNav = styled(Nav)`
  display: flex;
  margin-right: 125.5px;
  justify-content: center;
  flex-grow: 1;
  padding-left: 0;
  padding-right: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNavLink = styled(Nav.Link)`
  color: #5a3825;
  margin: 0 100px;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    color: #7c5948;
    transform: scale(1.3, 1.3);
  }
`;
