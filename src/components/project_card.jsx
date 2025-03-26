import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCard({
  title,
  description,
  link,
  images,
  technologies,
}) {
  const swiperRef = useRef(null);

  // Function to navigate Swiper
  const handleSlide = (direction) => {
    if (swiperRef.current) {
      if (direction === "left") {
        swiperRef.current.slidePrev(); // Move to previous slide
      } else {
        swiperRef.current.slideNext(); // Move to next slide
      }
    }
  };

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="rounded-bl-lg rounded-tl-lg w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-fill"
              />

              {images.length > 1 ? (
                <div>
                  <div
                    className="absolute top-0 left-0 h-full w-1/2 cursor-custom-left"
                    onClick={() => handleSlide("left")}
                  ></div>
                  <div
                    className="absolute top-0 right-0 h-full w-1/2 cursor-custom-right"
                    onClick={() => handleSlide("right")}
                  ></div>
                </div>
              ) : null}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Details */}
      <div className="flex-1 text-center md:text-left md:ml-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">
          {description.split("here.").map((part, index, array) => (
            <span key={index}>
              {part}
              {index !== array.length - 1 && (
                <a
                  href="https://tomato-game-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  here.
                </a>
              )}
            </span>
          ))}
        </p>
        <div>
          {technologies && (
            <div className="flex flex-wrap justify-center md:justify-start mt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-700 text-sm text-white rounded-full mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        {link !== "" ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mb-2"
          >
            View Project
          </a>
        ) : null}
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
