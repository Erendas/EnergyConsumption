import {Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <nav className="nav">
        <Link to="/" className="site-title">
          Eren Daş
        </Link>
        <ul>
          <CustomLink to="/home">Anasayfa</CustomLink>
          <CustomLink to="/prediction">Tahmin</CustomLink>
          <CustomLink to="/">Çıkış</CustomLink>
        </ul>
      </nav>
    </Wrapper>
  );
}

function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid #000067;
  box-sizing: border-box;

  .nav{
    background-color: #333;
    color: white;
    display:flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;
  }

  .site-title{
    font-size: 2rem;
  }

  .nav ul{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .nav a{
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
  }

  .nav li.active{
    backgroumd-color: #555;
  }

  .nav li:hover{
    background-color: #777;
  }

  .custom-navbar {
    background-color: #00b4ff;
  }
  .brand {
    font-size: 1.4em;
    color: #000000;
  }

  .logout{
    justify-content: end;
  }
`;

export default Header;
