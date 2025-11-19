import { Container } from '@shared/components/container';
import type { sectionLayoutProps } from '../model';
import css from './index.module.scss';
import { Link } from 'react-router-dom';

export const Sectionlayout: React.FC<sectionLayoutProps> = ({title, children, viewAllTo}) => {
  return (
    <section className={css.section_layout}>
      <Container>
        <div className={css.section_layout_content}>
          <div className={css.section_layout_top_content}>
            <h2 className={css.section_layout_top_content_title} aria-label={title}>{title}</h2>
            {viewAllTo && <Link to={viewAllTo} className={css.view_all_link}>View all <ArrowSvg/></Link>}
          </div>
          {children}
        </div>
      </Container>
    </section>
  )
}


export const ArrowSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clip-path="url(#clip0_20621_72)">
        <path d="M13.4767 9.16664L9.00671 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00671 15.3033L13.4767 10.8333H3.33337V9.16664H13.4767Z" fill="#7B61FF"/>
      </g>
      <defs>
        <clipPath id="clip0_20621_72">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}
 