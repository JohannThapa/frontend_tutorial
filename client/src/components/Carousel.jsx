import image1 from "../assets/c1.jpeg";
import image2 from "../assets/c2.jpeg";
import image3 from "../assets/c3.jpeg";
import image4 from "../assets/c4.jpeg";
import image6 from "../assets/c6.jpeg";
import image7 from "../assets/c7.jpeg";
import { useEffect, useState } from "react";

function Carousel() {
  const desktopImages = [image1, image2, image3, image4, image6, image7];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((init) => init + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="rounded my-10 mx-10">
      <div className=" md:h-[35rem] bg-slate-300 ">
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageUrl, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-transform duration-[2000ms] ease-in-out"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
