import { Footer } from '@shared/components/footer';
import type { layoutPageProps } from '../model/layoutPageProps';
import css from './index.module.scss';

export const Layoutpage: React.FC<layoutPageProps> = ({children}) => {
  return (
    <div className={css.content}>
      <main className={css.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
