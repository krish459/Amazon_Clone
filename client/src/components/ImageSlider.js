import { Box, Image, Input, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";
function ImageSlider() {
  const [value, setValue] = React.useState("3");
  return (
    <>
      <div
        style={{
          "margin-top": "9vh",
          "margin-bottom": "2vh",
          height: "115vh",
          width: "100%",
          padding: "25px",
        }}
      >
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.ytimg.com/vi/DvSpWWMsd7A/maxresdefault.jpg"
                class="d-block w-100 cimg"
                height="100px"
                width="700px"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>h5 header </h5>
                <p>type here</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.Rrb4Rz6ewpOEJgCdbQ35SAAAAA&pid=Api&P=0"
                padding="20px"
                height="100px"
                width="700px"
                class="d-block w-100 cimg"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>h5 header</h5>
                <p>type here</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ytimg.com/vi/DvSpWWMsd7A/maxresdefault.jpg"
                height="100px"
                width="700px"
                class="d-block w-100 cimg"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>h5 header</h5>
                <p>Type here</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
