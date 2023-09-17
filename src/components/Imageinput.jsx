import React, { useState } from "react";
import Photoprofil from "../assets/photo.png";

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      setSelectedImage(URL.createObjectURL(imageFile));
    } else {
      setSelectedImage(null);
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      console.log("Selected image:", selectedImage);
    } else {
      console.log("No image selected.");
    }
  };

  return (
    <div>
      <div className="bg-[#161D3D] w-[73px] h-[73px] rounded-full flex justify-center items-center">
        {selectedImage && (
          <img src={selectedImage} id="photo" className="w-[73px] h-[73px] rounded-full" />
        )}

        <div
          onClick={handleImageUpload}
          className="absolute bg-[#A64646] w-[18px] h-[18px] ml-12 mt-12 rounded-full flex justify-center items-center"
        >
          <div className="absolute">
            <div className="flex flex-col items-center">
              <img src={Photoprofil} alt="" />
            </div>
          </div>

          <input
            type="file"
            className="h-full w-full opacity-0"
            onChange={handleImageChange}
            name=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageInput;