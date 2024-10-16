import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import cover1 from '../../assets/cover1.png'
import cover2 from '../../assets/cover2.png'
import film from '../../assets/film.jpg'
import './style.css'
import useIsMobile from '@/hooks/useIsMobile';
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import axios from '@/api/axios';
import { IMAGE_BASE_URL } from '@/constants/constants';

const Home = () => {
  const { isMobile } = useIsMobile();
  const [trendingMovies, setTrendingMovies] = useState([])

  const getTrendingMovies = () => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day`)
      .then((res) => {
        console.log(res.data.results);
        setTrendingMovies(res.data.results);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getTrendingMovies();
  }, [])


  return (
    <div className='bg-[#44406F] pt-20'>

      {/* start swiper */}
      <div>
        <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="w-[90%] md:h-[400px] rounded-md">
          {isMobile ? <>
            <SwiperSlide>
              <img src={cover2} alt="cover image" className='md:object-cover' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cover1} alt="cover image" className='md:object-cover' />
            </SwiperSlide>
          </> : <>
            <SwiperSlide className='relative'>
              <img src={cover2} alt="cover image" className='md:object-cover' />
              <div className='absolute text-white w-1/4 start-20'>
                <h3 className='font-bold text-[30px] mb-7'>The Batman</h3>
                <h6 className='text-[15px] mb-6'>When a sadistic serial killer begins murdering key political figures in Gotham, The Batman is forced to investigate the city's hidden corruption and question his family's involvement.</h6>
                <h6 className='text-[15px] mt-3 mb-3'>Action Crime Drama Mystery Thriller</h6>
                <div className='flex flex-row gap-3 items-center justify-center'>
                  <div className='flex flex-row gap-3 items-center'>
                    <i className="fa-brands fa-imdb bg-[#FFD600] text-black"></i>
                    <span>7.8/<span>10</span></span>
                  </div>
                  <div className='flex flex-row gap-3 items-center'>
                    <i className="fa-solid fa-clock text-[#FFD600]"></i>
                    <span>2h 56m</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
              <img src={cover1} alt="cover image" className='md:object-cover' />
              <div className='absolute text-white w-1/4 start-20'>
                <h3 className='font-bold text-[30px] mb-7'>Peaky Blinders</h3>
                <h6 className='text-[15px] mb-6'>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</h6>
                <h6 className='text-[15px] mt-3 mb-3'>Action Crime Drama</h6>
                <div className='flex flex-row gap-3 items-center justify-center'>
                  <div className='flex flex-row gap-3 items-center'>
                    <i className="fa-brands fa-imdb bg-[#FFD600] text-black"></i>
                    <span>8.8/<span>10</span></span>
                  </div>
                  <div className='flex flex-row gap-3 items-center'>
                    <i className="fa-solid fa-clock text-[#FFD600]"></i>
                    <span>TV Series - 1h</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>}
        </Swiper>
      </div>
      {/* end swiper */}

      {/* start Trending */}
      <div className="container">
        <div className='mt-20'>
          <h2 className='text-white font-thin text-[40px] mb-5'>Trending Movies</h2>
          <div className="flex flex-wrap justify-between pb-20 mt-5 gap-2">
            {trendingMovies.map((movie, idx) => (
              <div className="group w-full md:w-1/6 mb-8" key={idx}>
                <div className='relative'>
                  <img
                    // src={film}
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt="Film"
                    className="w-full rounded-md"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-circle-play text-white text-[50px] cursor-pointer"></i>
                  </div>
                </div>
                <h6 className='text-white text-[18px] font-semibold mt-1 mb-1'>{movie.title}</h6>
                <div className='flex flex-row justify-between items-center'>
                  <span className='text-white'>{movie.release_date.split("-")[0]} {movie.vote_average == 0 ? null :
                    <>
                    - {movie.vote_average.toFixed(1)}
                      <i className="fa-solid fa-star text-[#FFD600] ms-1"></i>
                    </>
                  }
                  </span>
                  <span className='text-white border-2 px-1 rounded-sm'>{movie.media_type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end Trending */}
    </div>
  )
}

export default Home
