import React, { useRef } from "react";
import Slider from "react-slick";
import Card from "./card";
import { Container, Flex, Header, Wrapper } from "./ui/ui";

export default function Package({spaPackage , displayOverview}) {
  const sliderRef = useRef(null);


  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

 const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  draggable: false,
  speed: 1000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container className="pcontain" Width={"60%"} Background={"#9C6F4A"} Gap={"0px"} style={{overflow:"hidden"}}>
      <Wrapper Margin={"5rem 0 2rem 4rem"} className="pwrapper">
          <Header className="hheader" Fz={'3rem'}style={{textTransform:'uppercase'}}>spa packages</Header>
      </Wrapper>
      <Wrapper Margin={"0rem 0 0rem 4rem"} >
        <div>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {spaPackage.map((spaPackage, i) => {
              return <Card  info={spaPackage} key={i} onClick={()=> displayOverview(spaPackage)} />;
            })}
          </Slider>
        </div>
      </Wrapper>
      <Wrapper className="cbwrapper" Margin={"2rem 1rem 2rem 4rem"}>
        <Flex Display={"flex"} justifyContent={"space-between"}>
          <div onClick={handlePrev} style={{ cursor: "pointer" }}>
            <img src="./assets/left.svg" alt="" />
          </div>
          <div onClick={handleNext} style={{ cursor: "pointer" }}>
            <img src="./assets/right.svg" alt="" />
          </div>
        </Flex>
      </Wrapper>
    </Container>
  );
};


