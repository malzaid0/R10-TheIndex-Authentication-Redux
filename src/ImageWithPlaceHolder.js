import React from "react";

import hipster1 from "./assets/hipster1.jpg";
import hipster2 from "./assets/hipster2.jpg";
import hipster3 from "./assets/hipster3.jpg";

const placeholders = [hipster1, hipster2, hipster3];

const ImageWithPlaceHolder = (props) => {
  return (
    <img
      onError={(e) =>
        (e.target.src =
          placeholders[Math.floor(Math.random() * placeholders.length)])
      }
      {...props}
    />
  );
};

export default ImageWithPlaceHolder;
