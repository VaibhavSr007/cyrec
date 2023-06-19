import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 10px 40px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;

export function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/whois">WhoIsAPI</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/subdom">SubdomainLookUpAPI</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/geoloc">IpGeolocationAPI</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/emailver">EmailVerificationAPI</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/webcont">WebsiteContactsAPI</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

