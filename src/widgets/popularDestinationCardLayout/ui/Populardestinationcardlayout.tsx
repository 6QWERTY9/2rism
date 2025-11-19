import type { CardProps } from '@shared/cardProps';

import css from './index.module.scss';

export const Populardestinationcardlayout: React.FC<CardProps> = ({img, title, location}) => {
  return (
    <div className={css.popular_desctination_card}>
      <img src={img} alt={`place of location ${location} image`} className={css.image_location} width={'200px'} height={'180px'}/>

      <div className={css.popular_desctination_card_text_wrapper}>
        <h3 className={css.popular_desctination_card_text_title}>{title}</h3>
        <span className={css.popular_desctination_card_text_location}>{location}</span>
      </div>
    </div>
  )
}
