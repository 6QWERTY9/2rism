import type { CardProps } from '@shared/cardProps';
import css from './index.module.scss';

export const Hotelscardlayout: React.FC<CardProps> = ({img, title, location}) => {
  return (
    <div className={css.hotel_card_layout}>
      <img src={img} alt={`hotel: ${title} photo`} width={'316px'} height={'380px'} />
      <div className={css.hotel_card_text}>
        <h3 className={css.hotel_card_text_title}>{title}</h3>
        <div className={css.location}>
          <span>
            <img src={`${import.meta.env.BASE_URL}/location.svg`} alt="location icon" width={'16px'} height={'16px'} />
            {location}
          </span>
          <img src={`${import.meta.env.BASE_URL}/rate.svg`} alt="rating hotel" width={'88px'}  height={'16px'}/>
        </div>
      </div>
    </div>
  )
}
