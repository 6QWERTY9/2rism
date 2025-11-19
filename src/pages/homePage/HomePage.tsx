import { HeroSection } from "@shared/components/ heroSection"
import { Layoutpage } from "@shared/components/layoutPage"
import css from "./index.module.scss";
import { Sectionlayout } from "@shared/components/sectionLayout";
import { blogCardsArray, hotelsCardArray, popularDestinationsCardArray } from "./model";
import { Populardestinationcardlayout } from "@widgets/popularDestinationCardLayout";
import { Hotelscardlayout } from "@widgets/hotelsCardLayout";
import { Blogcardlayout } from "@widgets/blogCardLayout";
import { Container } from "@shared/components/container";
import { ArrowSvg } from "@shared/components/sectionLayout/ui/Sectionlayout";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <Layoutpage>
            <HeroSection/>
            <PopularDestinationsSection/>
            <HotelsSection/>
            <BlogSection/>
            <AboutUsSection/>   
        </Layoutpage>
    )
}

const PopularDestinationsSection = () => {
    return (
        <Sectionlayout title="Popular Destinations">
            <div className={css.popular_destinations_cards}>
                {popularDestinationsCardArray.map((card, ind) => (
                    <Populardestinationcardlayout img={card.img} title={card.title} location={card.location} key={`${card.title}${ind}`}/>
                ))}
            </div>
        </Sectionlayout>
    )
}


const HotelsSection = () => {
    return (
        <Sectionlayout title="Hotels and Restaurants" viewAllTo="/hotels">
            <div className={css.hotels_cards}>
                {hotelsCardArray.map((items, ind) => (
                    <Hotelscardlayout img={items.img} title={items.title} location={items.location} key={`${items.title}${ind}`}/>
                ))}
            </div>
        </Sectionlayout>
    )
}

const BlogSection = () => {
    return (
        <Sectionlayout title="Travel Tips and Advice" viewAllTo="/blogs">
            <div className={css.blog_cards}>
                {blogCardsArray.map((item, ind) => (
                    <Blogcardlayout
                        key={`${item.title}${ind}`}
                        img={item.img} 
                        title={item.title}
                        author={item.author}
                        date={item.date}
                        desc={item.desc}
                        comments={item.comments}
                    />
                ))}
            </div>
        </Sectionlayout>
    )
}

const AboutUsSection = () => {
    return (
        <section className={css.about_us_wrapper}>
            <Container>
                <div className={css.about_us_content}>
                    <div className={css.about_us_text_content}>
                        <div className={css.about_us_text}>
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <Link to={'/about-us'} className={css.read_more_link}>Read more<ArrowSvg/></Link>
                        </div>
                    </div>
                    <img src={`${import.meta.env.BASE_URL}/cards_img/about.png`} alt="about us preview image" />
                </div>
            </Container>
        </section>
    )
}