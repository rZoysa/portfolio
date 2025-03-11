import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCard({ title, description, link, images }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg">
      {/* Image Slider */}
      <div className="w-full md:w-64 h-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: false }}
          className="rounded-bl-lg rounded-tl-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover cursor-grab active:cursor-grabbing"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Details */}
      <div className="flex-1 text-center md:text-left md:ml-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

// ✅ Define PropTypes
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Accepts an array of image URLs
};
