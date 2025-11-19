
import css from './index.module.scss';
import { Link } from 'react-router-dom';
import { navItemsText } from '../model';

export const Header = () => {
  return (
    <header className={css.header_content}>
      <div className={css.logo_wrapper}><img src="/logo.svg" alt="logo 2rism" width={'87px'} height={'35px'}/></div>
      <Navigation/>
      <div>
        <a href="tel:79120040000" aria-label='contact us'>+7 912 004 00 00</a>
      </div>
    </header>
  )
}


const Navigation = () => {
  
  
  return (
    <nav className={css.header_nav}>
      <ul className={css.header_nav_items_list}>
        {navItemsText.map((item, ind) => (
          <li key={ind} className={css.nav_item}>
            <Link to={`/${item}`} className={css.nav_item_link} aria-label={`link to page ${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}