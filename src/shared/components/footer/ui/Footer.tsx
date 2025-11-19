import { Link } from 'react-router-dom';
import css from './index.module.scss';
import { footerNavContent } from '../model';
import clsx from 'clsx';


export const Footer = () => {
  
  return (
    <footer className={css.footer_content_wrapper}>
      <div className={css.footer_content}>
        <ul className={css.footer_slogan_content}>
          <li className={css.footer_slogan}>
            <img src="./logo-black.svg" alt="logo 2rism" className={css.footer_logo} />
            <p>We always make our customers happy by providing as many choises as possible</p>
          </li>
          <ul className={css.social_links}>
            <Link to={'https://www.facebook.com/?locale=ru_RU'}>
              <img src="./social/facebook.svg" alt="our social contact facebool" />
            </Link>
            <Link to={'https://x.com/?lang=ru'}>
              <img src="./social/twitter.svg" alt="our social contact twitter" />
            </Link>
            <Link to={'https://www.instagram.com/'}>
              <img src="./social/instagram.svg" alt="our social contact instagram" />
            </Link>
          </ul>
        </ul>

        <FooterNav/>
      </div>

    </footer>
  )
}

const FooterNav = () => {
  return (
    <nav className={css.footer_nav}>
      {footerNavContent.map((items) => (
        <ul className={css.footer_nav_content} key={items.id}>
          <h3 className={clsx(css.footer_nav_content_title,css.title)}>
            {items.title}
          </h3>
          <ul className={css.footer_nav_content_links_wrapper}>
            {items.links.map((link) => (
              <li className={css.footer_nav_content_link} key={link.to}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </nav>
  )
}
