import { Overlay } from "./overlay";
import classes from "./styles.module.css";
import { Container, Flex } from "./ui/ui";
import { useState } from "react";

export default function Overview({selectPackage}) {
  let url = selectPackage?.img ? selectPackage.img : "assets/bg-test.jpg";
  const [Opacity, setOpacity] = useState(0);
  const [Scale, setScale] = useState(1);
  let display = Opacity=== 1 ? 0 : 1
  console.log(selectPackage)

  function RemoveOpacity() {
    setOpacity(0);
  }

  function AddOpacity() {
    setOpacity(1);
    console.log(display)
  }
  function RemoveScale() {
    setScale(1);
  }

  function AddScale() {
    setScale(1.3);
  }
    
  return (
    <>
      <Container
      className="ocontain"
        Width={"40%"}
        style={{ position: "relative" }}
        onMouseEnter={AddOpacity}
        onMouseLeave={RemoveOpacity}
      >
        <div
          style={{ width: "100%" }}
          onMouseEnter={AddScale}
          onMouseLeave={RemoveScale}
        >
          <Overlay Opacity={Opacity} />
          <div
            style={{
              height: "100vh",
              backgroundImage: `url(${url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
              transform: `scale(${Scale})`,
              transition: "1s transform ",
            }}
          >
            <h3
              style={{
                  opacity: display,
                fontSize: "2.5rem",
                color: "white",
                letterSpacing: ".2rem",
            }}
            >
                {selectPackage?.name ?  selectPackage.name :'Selfcare haven'}
            </h3>
            <Flex
              Display={"flex"}
              AlignItems={"center"}
              justifyContent={"center"}
              Width={"100%"}
              style={{
                fontSize: "1.3rem",
                color: "white",
                letterSpacing: ".2rem",
                opacity: display,
              }}
            >
              <h4>$250</h4>
              <div className={classes.lineContainer}>
                <img src="./assets/Line.svg" alt="" />
              </div>
              <h4>3 Hours</h4>
            </Flex>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                letterSpacing: ".1rem",
                opacity: display,
              }}
            >
              (per person)
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
