import { generateId } from '@shared/utils';
import css from './index.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header_content}>
      <div className={css.logo_wrapper}><img src="./logo.svg" alt="logo 2rism"/></div>
      <Navigation/>
      <div>
        <a href="tel:79120040000">+7 912 004 00 00</a>
      </div>
    </header>
  )
}


const Navigation = () => {
  const navItemsText: string[] = ['home', 'hotels', 'restaurants', 'tours', 'destinations', 'activities', 'contact',]
  
  return (
    <nav className={css.header_nav}>
      <ul className={css.header_nav_items_list}>
        {navItemsText.map((item) => (
          <li key={generateId()} className={css.nav_item}>
            <Link to={`/${item}`} className={css.nav_item_link}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}