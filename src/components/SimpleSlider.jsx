// import React from "react";
// import Slider from "react-slick";

// export default function SimpleSlider({ image }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {/* Display image passed as prop */}
//       <div>
//         <img
//           src={image}
//           alt="Slider Image"
//           style={{ width: "100%", height: "auto", objectFit: "cover" }}
//         />
//       </div>
//     </Slider>
//   );
// }
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ image }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {/* Display image passed as prop */}
      <div>
        <img
          src={image}
          alt="Slider Image"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </Slider>
  );
}
