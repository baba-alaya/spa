import { Flex, Header, Paragraph, SubHeader, Wrapper } from "./ui/ui";
import classes from "./styles.module.css";

export default function Card({ info, onClick }) {
  let url = "./assets/turtle.jpg";
  return (
    <>
      <Wrapper Width={"90%"} Height={"50vh"} className="cwraper">
        <div
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
          onClick={onClick}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Header Fz={"1.5rem"} Ls={"0.2rem"} Color={"white"}>
              {info.name}
            </Header>
            <Flex
              Display={"flex"}
              AlignItems={"center"}
              justifyContent={"center"}
              Width={"100%"}
            >
              <SubHeader>{info.price}</SubHeader>
              <div className={classes.lineContainer}>
                <img src="./assets/Line.svg" alt="" />
              </div>
              <SubHeader Ls={'.1rem'}>{info.time}</SubHeader>
            </Flex>
            <Paragraph Ls={'.1rem'}>{info.time}</Paragraph>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
