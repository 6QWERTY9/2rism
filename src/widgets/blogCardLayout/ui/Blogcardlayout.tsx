import type { blogCardProps } from '../model'
import css from './index.module.scss';
// commit

export const Blogcardlayout: React.FC<blogCardProps> = ({img, title, date, desc, author, comments}) => {
  return (
    <div className={css.blog_card}>
      <img src={img} alt={`post image`}  width={'316px'} height={'380px'}/>
      <div className={css.blog_card_text}>
        <h3 className={css.blog_card_title}>{title}</h3>
        <p className={css.blog_card_post_desc}>
          {desc}
        </p>
        <div className={css.blog_card_text_about_post}>
          <span className={css.date}>
            <img src={`${import.meta.env.BASE_URL}/date.svg`} alt=" date icon" width={'16px'} height={'16px'}/>
            {date}
          </span>
          <span className={css.author}>
            <img src={`${import.meta.env.BASE_URL}/user.svg`} alt="user vetor icon" width={'16px'} height={'16px'}/>
            {author}
          </span>
          <span className={css.comments}>
            <img src={`${import.meta.env.BASE_URL}/comments.svg`}alt="comments icon" width={'16px'} height={'16px'}/>
            {comments}
          </span>
        </div>
      </div>
    </div>
  )
}
