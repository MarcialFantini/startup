import { Button } from "../Button";
import styled from "./styled.module.css";

export const Navbar = () => {
  return (
    <header className={styled.containerNav}>
      <h1 className={styled.title}>Promote</h1>
      <nav className={styled.navbar}>
        <ul className={styled.listLink}>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Pages</li>
          <Button dark>Get Started</Button>
        </ul>
      </nav>
    </header>
  );
};
