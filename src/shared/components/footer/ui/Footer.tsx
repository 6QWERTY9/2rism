import { Link } from 'react-router-dom';
import css from './index.module.scss';
import { footerNavContent } from '../model';
import clsx from 'clsx';

//${import.meta.env.BASE_URL}
export const Footer = () => {
  
  return (
    <footer className={css.footer_content_wrapper}>
      <div className={css.footer_content}>
        <ul className={css.footer_slogan_content}>
          <li className={css.footer_slogan}>
            <img src={`${import.meta.env.BASE_URL}/logo-black.svg`} alt="our logo 2rism" className={css.footer_logo} width={'87px'} height={'35px'} />
            <p>We always make our customers happy by providing as many choises as possible</p>
          </li>
          <ul className={css.social_links}>
            <a href={'https://www.facebook.com/?locale=ru_RU'} target='_blank' rel='noopener noreferrer' aria-label='our facebook'>
              <img src={`${import.meta.env.BASE_URL}/social/facebook.svg`} alt="our social contact facebool" width={'32px'} height={'32px'} />
            </a>
            <a href={'https://x.com/?lang=ru'} target='_blank' rel='noopener noreferrer' aria-label='our twitter'>
              <img src={`${import.meta.env.BASE_URL}/social/twitter.svg`} alt="our social contact twitter" width={'32px'} height={'32px'} />
            </a>
            <a href={'https://www.instagram.com/'} target='_blank' rel='noopener noreferrer' aria-label='our instagram'>
              <img src={`${import.meta.env.BASE_URL}/social/instagram.svg`} alt="our social contact instagram" width={'32px'} height={'32px'} />
            </a>
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
                <Link to={link.to} aria-label={`link to page with information - ${link.title}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </nav>
  )
}
