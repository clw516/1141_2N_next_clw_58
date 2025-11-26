import styled from 'styled-components';

const Wrapper = styled.div`
  /*
=============== 
Global Styles
===============
*/
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  img:not(.nav-logo) {
    width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.25rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  /*  global classes */

  .quiz1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background: #fff;
    color: hsl(209, 61%, 16%);
    line-height: 1.5;
    font-size: 0.875rem;
  }

  .btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: #fff;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.25rem;
    display: inline-block;
    /* font-weight: 700; */
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  .btn:hover {
    color: hsl(184, 91%, 17%);
    background: var(--clr-primary-8);
  }
  /* section */
  .section {
    padding: 5rem 0;
    scroll-margin-top: 4rem;
  }
  .section-title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .section-title h2 {
    text-transform: uppercase;
  }
  .section-title span {
    color: hsl(185, 62%, 45%);
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }

  /*
=============== 
Hero
===============
*/

  .hero {
    min-height: 100vh;
    background: hsl(185, 62%, 45%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-banner {
    text-align: center;
    color: #fff;
    padding: 0 3rem;
  }
  .hero-banner h1 {
    text-transform: uppercase;
  }
  .hero-banner p {
    max-width: 35rem;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    letter-spacing: 0.25rem;
  }
  .hero-btn {
    padding: 0.9rem 1.6rem;
    font-size: 1.25rem;
    background: #fff;
    color: hsl(185, 62%, 45%);
  }
  .hero-btn:hover {
    background: transparent;
    color: #fff;
    border-color: #fff;
  }
  @media screen and (min-width: 768px) {
    .hero {
      background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
        url('/images/quiz1/main.jpeg') center/cover no-repeat;
    }
    .hero-banner {
      padding: 0;
    }
    .hero-banner p {
      max-width: 45rem;
    }
  }
  /*
=============== 
About
===============
*/
  /* section added to globals */
  /* title added to globals */
  /* section center added to globals */
  .about-img,
  .about-info {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .about-img,
    .about-info {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1170px) {
    .about-img::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.5rem solid hsl(185, 62%, 45%);
      box-sizing: border-box;
      top: -1.5rem;
      left: -1.5rem;
    }

    .about-img {
      position: relative;
    }
    .about-photo {
      position: relative;
    }
  }
  /*
=============== 
Services
===============
*/
  .services {
    background: hsl(210, 36%, 96%);
  }
  .service {
    text-align: center;
    margin-bottom: 3rem;
  }
  .service-icon {
    background: hsl(185, 62%, 45%);
    color: hsl(184, 91%, 17%);
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service-text {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 576px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .service {
      margin-bottom: 0rem;
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1170px) {
    .service {
      display: flex;
      text-align: left;
    }
    .service-icon {
      align-self: start;
    }
    .service-info {
      padding-left: 1rem;
    }
    .service-title {
      margin-bottom: 0.5rem;
    }
  }

  /*
=============== 
Featured Tours
===============
*/

  .tour-card {
    transition: all 0.3s linear;
    background: hsl(210, 36%, 96%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }
  .tour-card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
  .tour-img-container {
    position: relative;
  }
  .tour-img {
    height: 15rem;
    object-fit: cover;
  }
  .tour-date {
    position: absolute;
    right: 0;
    bottom: 0;
    background: hsl(184, 80%, 74%);
    color: hsl(184, 91%, 17%);
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0;
  }
  .tour-info {
    padding: 1.25rem 1.5rem;
  }
  /* additional css for different layout*/
  .tour-title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .tour-title p,
  .tour-title h4 {
    margin-bottom: 0.75rem;
    line-height: 1.25;
  }
  .tour-title p {
    color: hsl(211, 27%, 70%);
  }
  /* end of additional css for different layout*/
  .tour-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .tour-footer p {
    line-height: 0;
    margin-bottom: 0;
    text-transform: capitalize;
    color: hsl(185, 62%, 45%);
  }
  .tour-footer p span {
    margin-right: 0.25rem;
  }
  .tour-btn {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    .featured-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .featured-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*
=============== 
Footer
===============
*/
  .footer {
    background: hsl(209, 61%, 16%);
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .footer-links,
  .footer-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .footer-link {
    color: #fff;
    text-transform: capitalize;
    font-size: 1rem;
    margin-right: 1rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s linear;
  }
  .footer-link:hover {
    color: hsl(185, 62%, 45%);
  }
  .footer-icon {
    font-size: 2rem;
    margin-right: 1rem;
    color: #fff;
    transition: all 0.3s linear;
  }
  .footer-icon:hover {
    color: hsl(185, 62%, 45%);
  }
  .copyright {
    text-transform: capitalize;
    letter-spacing: 0.25rem;
    color: #fff;
  }
  .copyright span {
    margin-left: 0.5rem;
  }
  /*
=============== 
Navbar
===============
*/
  /* add :not(.nav-logo) to img */

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 2;
    height: 4rem;
    display: flex;
    align-items: center;
  }
  .nav-icons {
    display: none;
  }
  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-toggle {
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
    color: hsl(185, 62%, 45%);
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .nav-toggle:hover {
    transform: scale(1.2);
  }
  .nav-link {
    display: block;
    padding: 1rem 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    transition: all 0.3s linear;
    color: hsl(209, 61%, 16%);
    cursor: pointer;
    font-size: 1rem;
  }
  .nav-link:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
    padding-left: 2.25rem;
  }
  /* nav toggle functionality */
  .nav-links {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-links {
    height: 280px;
  }
  /* nav at bigger screen size */
  @media screen and (min-width: 992px) {
    /* hide nav toggle button */
    .nav-toggle {
      display: none;
    }
    /* show links */
    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* optional */
      flex-wrap: wrap;
    }
    .nav-header {
      padding: 0 0;
    }
    .nav-link {
      padding: 0 0;
    }
    .nav-link:hover {
      padding: 0;
      color: hsl(185, 62%, 45%);
      background: transparent;
    }
    .nav-icons {
      display: flex;
    }

    .nav-link {
      margin-right: 0.7rem;
    }
    .nav-icon {
      margin-right: 0.7rem;
      color: hsl(185, 62%, 45%);
      font-size: 1.2rem;
      transition: all 0.3s linear;
    }
    .nav-icon:hover {
      color: hsl(184, 80%, 74%);
    }
  }
`;

export default Wrapper;
