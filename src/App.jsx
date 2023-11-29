import Overview from "./overview";
import Nav from "./nav";
import { Container, Flex } from "./ui/ui";
import Packages from "./packages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function App() {
  let spaPackage = [
    {
      name: "Selfcare Haven",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img: "assets/slide1.jpg",
      text: "Elevate your self-care routine with a full day of pampering. This package includes a Swedish massage, a revitalizing body polish, a custom facial, a manicure, and a pedicure. Experience the ultimate indulgence in self-care.",
    },
    {
      name: "Tranquil Bliss",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img: "assets/slide2.jpg",
      text: "Indulge in serenity with a full day of pampering. Swedish massage, body polish, custom facial, manicure, and pedicure unite for the ultimate self-care escape. Surrender to tranquility and rediscover bliss.",
    },
    {
      name: "Radiant Retreat",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img: "assets/slide3.jpg",
      text: "Embark on a day of rejuvenation. Swedish massage, body polish, custom facial, manicure, and pedicure create a blissful journey. Unwind, recharge, and let your radiance shine with this holistic self-care retreat.",
    },
    {
      name: "Glow Oasis",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img: "assets/slide4.jpg",
      text: "Illuminate your well-being with a comprehensive package. Swedish massage, body polish, custom facial, manicure, and pedicure create a glowing oasis. Immerse yourself in luxury and radiate from within on this rejuvenating self-care journey",
    },
  ];

  const links = ["about", "services", "packages", "contact"];

  const [selectPackage, setSelectPackage] = useState(null);

  function displayOverview(selectPackage) {
    setSelectPackage(selectPackage);
    console.log(selectPackage);
  }

  return (
    <>
      <Container>
        <Nav Links={links} />
        <Flex Display={"flex"} Gap={"0px"}>
          <Overview selectPackage={selectPackage} />
          <Packages spaPackage={spaPackage} displayOverview={displayOverview} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
