import clsx from 'clsx';
import css from './index.module.scss';
import type { containerProps } from '../model';


export const Container: React.FC<containerProps> = ({children}) => {
  return (
    <div className={clsx(css.container)}>
        {children}
    </div>
  )
}
