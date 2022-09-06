import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Art1.png'
import IMG2 from '../../assets/Art2.png'
import IMG3 from '../../assets/Art3.png'
import IMG4 from '../../assets/Art4.png'
import IMG5 from '../../assets/Art5.png'
import IMG6 from '../../assets/Art6.png'
// Import Swiper React components
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/navigation'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Weather App',
  },
  {
    id: 2,
    image: IMG2,
    title: 'MyRume Social App',
  },
  {
    id: 3,
    image: IMG3,
    title: 'TechFlix streaming App',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chattable Social App',
  },
  {
    id: 5,
    image: IMG5,
    title: 'The Kat & KaPoodle App',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Pokedex App',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Digital Art Portfolio</h5>
    <h2>Recent Work</h2>

    <Swiper className="container portfolio_container"
     modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}>
      {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <SwiperSlide key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Portfolio