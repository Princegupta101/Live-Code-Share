import { useEffect, useState } from "react";

import FormComponent from "../components/forms/FormComponent";
import illustration from "../assets/illustration.svg";

export function HomePage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.onload = () => setIsImageLoaded(true);
      img.src = illustration;
    };
    loadImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 gap-16">
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row w-full">
        <div className="flex justify-center w-full sm:w-1/2">
          {isImageLoaded && (
            <img
              src={illustration}
              alt="CodeCollab"
              className="mx-auto w-[250px] sm:w-[400px]"
            />
          )}
        </div>
        <div className="flex flex-col justify-center w-full sm:w-1/2">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}
