import React, { useState, useEffect, useRef } from "react";
import { LeftArrow, RightArrow } from "../assets";

function GalleryWidget() {
  const defaultImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ed1b354b38a4bf52cc5a4beab8265449982351f87c824931294a60fc01ccc65?placeholderIfAbsent=true&apiKey=fdc97f1298d9417ba73f632a312daddd", alt: "Gallery image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ed1b354b38a4bf52cc5a4beab8265449982351f87c824931294a60fc01ccc65?placeholderIfAbsent=true&apiKey=fdc97f1298d9417ba73f632a312daddd", alt: "Gallery image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ed1b354b38a4bf52cc5a4beab8265449982351f87c824931294a60fc01ccc65?placeholderIfAbsent=true&apiKey=fdc97f1298d9417ba73f632a312daddd", alt: "Gallery image 3" },
    ];

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryRef = useRef(null);

  // Load images from local storage or default images
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("galleryImages"));
    if (storedImages) {
      setImages(storedImages);
    } else {
      setImages(defaultImages);
    }
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = { src: reader.result, alt: `Uploaded image ${images.length + 1}` };
        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        localStorage.setItem("galleryImages", JSON.stringify(updatedImages));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle slide navigation
  const handleSlide = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === "right" && currentIndex < images.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="relative h-[46%] flex md:gap-3 lg:gap-5 pt-px pr-6 lg:pr-9 pb-6 pl-3 rounded-2xl bg-[#363C43] shadow-[6px_6px_4px_rgba(0,0,0,0.4)] max-md:pr-5">
      <div className="absolute -bottom-7 w-[95%] h-1 bg-gradient-to-b from-[#282828] to-[#363C43] bg-white/5 shadow-[0px_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[4.91866px] rounded-[2.45933px]"></div>

      <div className="flex flex-col self-start mt-5 md:min-w-5 lg:min-w-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6e2a7bdd7cae2f6ee72c376a30e13a584b7613bee749d26c011f7d746bbf4e?placeholderIfAbsent=true&apiKey=fdc97f1298d9417ba73f632a312daddd"
          className="object-contain self-center w-6 aspect-square cursor-pointer"
          alt="Info"
        />
        <div className="grid grid-cols-2 gap-px items-start mt-[5vw] w-fit rounded-sm max-md:mt-10 cursor-pointer">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`flex rounded-sm bg-neutral-600 h-[9px] w-[9px]`} />
          ))}
        </div>
      </div>
      <div className="flex flex-col grow shrink-0 py-1   lg:pr-5 basis-0 w-fit max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex w-full gap-2 max-md:flex-col lg:py-2 justify-between">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <h2 className="self-stretch px-4 lg:px-7 py-3 lg:py-3 my-auto w-full md:text-xs lg:text-lg font-medium text-white whitespace-nowrap rounded-2xl bg-neutral-900 max-md:px-5 max-md:mt-10">
                Gallery
              </h2>
            </div>
            <div className="flex lg:w-[55%] md:gap-3 lg:gap-3 items-center justify-between py-4 lg:py-0">
              <label className="add-button p-2 lg:p-3 px-4 lg:px-6 flex items-center text-center justify-center cursor-pointer transition-all duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <span className="my-auto text-[8px] lg:text-xs leading-none">+ ADD IMAGE</span>
              </label>
              <div className="flex gap-1 lg:gap-3">
                <button
                  onClick={() => handleSlide("left")}
                  className={`left-arrow w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shadow-black shadow-lg bg-gradient-to-tr from-[#303439] to-[#161718] text-white p-2 rounded-full ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={currentIndex === 0}
                >
                  <img src={LeftArrow} alt="Left Arrow" />
                </button>
                <button
                  onClick={() => handleSlide("right")}
                  className={`right-arrow w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shadow-black shadow-lg bg-gradient-to-tr from-[#303439] to-[#161718] text-white p-2 rounded-full ${currentIndex >= images.length - 3 ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={currentIndex >= images.length - 3}
                >
                  <img src={RightArrow} alt="Right Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-7 lg:mt-3 mr-5 max-md:mr-2.5 max-md:max-w-full overflow-hidden w-full">
          {/* Set width to fit exactly 3 images */}
          <div
            className="flex transition-transform duration-300 ease-in-out gap-2 h-full z-30"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
              width: `${images.length * (100 / 3)}%`,
            }}
            ref={galleryRef}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full "
              >
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className="object-fit grow shrink-0 max-w-full rounded-3xl aspect-[1.06] max-h-full w-[180px] lg:w-[180px] max-md:mt-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryWidget;
