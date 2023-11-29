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
      name: "Selfcare haven1",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img:'assets/turtle.jpg'
    },
    {
      name: "Selfcare haven2",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img:'assets/turtle.jpg'
    },
    {
      name: "Selfcare haven3",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
      img:'assets/bg-test.jpg'
    },
    {
      name: "Selfcare haven",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
    },
    {
      name: "Selfcare haven",
      price: "250",
      time: "3 Hours",
      quantity: " (per person)",
    },
  ];

  const links = ["about", "services", "packages", "contact"];

  const [selectPackage , setSelectPackage] = useState(null)

  function displayOverview(selectPackage) {
    setSelectPackage(selectPackage)
    console.log(selectPackage)
  }

  return (
    <>
      <Container>
        <Nav Links={links} />
        <Flex Display={'flex'} Gap={'0px'}>
          <Overview selectPackage={selectPackage} />
          <Packages spaPackage={spaPackage} displayOverview={displayOverview}/>
        </Flex>
      </Container>
    </>
  );
}

export default App;
