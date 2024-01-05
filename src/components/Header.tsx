import Link from "next/link";
import { ArrowRight } from "react-feather";

const Header: React.FC = () => {
  return (
    <header className="py-2 mb-3 sticky-top">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link
          href="/"
          className="d-flex align-items-center text-light text-decoration-none fs-4"
        >
          <span>Olena</span><span className="text-primary fs-1 lh-1">.</span><span>Dev</span>
        </Link>

        <ul className="nav col-12 col-lg-auto mx-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#experience" className="nav-link px-3 link-primary">
              01.Experience
            </a>
          </li>
          <li>
            <a href="#work" className="nav-link px-3 link-success">
              02.Work
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-3">
              03.Contact
            </a>
          </li>
        </ul>
        <a
          href="/OlenaDmytrenko.pdf"
          target="_blank"
          rel="noopener"
        >
          Résumé <ArrowRight />
        </a>
      </div>
    </header>
  );
};

export default Header;
