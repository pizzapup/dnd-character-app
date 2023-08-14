import styled from "@emotion/styled";
import {NavLink, Outlet} from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const Navlink = styled(NavLink)`
  background: #fafafa;
  padding: 10px;
  border-radius: 3px;
  text-decoration: underline transparent;
  text-underline-offset: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #eee;
    text-underline-offset: 3px;
    text-decoration-color: blue;
    color: hotpink;
  }
  &.active {
    transition: all 0.3s ease-in-out;
    text-underline-offset: 3px;
    text-decoration-color: hotpink;
    color: hotpink;
    &:hover {
      text-decoration-color: blue;
    }
  }
`;

export default function Layout({pages}) {
  return (
    <>
      <Nav>
        {pages.map((item, i) => (
          <NavLink key={`${item}-${i}`} to={`/${item.path}`}>
            {item.title}
          </NavLink>
        ))}
      </Nav>
      <Outlet />
    </>
  );
}
