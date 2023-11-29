import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: ${({ Width }) => (Width ? Width : "auto")};
  display: ${({ Display }) => (Display ? Display : "block")};
  align-items: ${({ AlignItems }) => (AlignItems ? AlignItems : "start")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  background: ${({ Background }) => (Background ? Background : "transparent")};
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: ${({ Padding }) => (Padding ? Padding : "0px")};
  margin: ${({ Margin }) => (Margin ? Margin : "0px")};
  width: ${({ Width }) => (Width ? Width : "auto")};
  height: ${({ Height }) => (Height ? Height : "auto")};

  @media (max-width: 768px) {
    margin: 1rem 0.7rem 0 0.7rem;
  }
`;

export const Navbar = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   background-color: red;
  width: 100%;
  padding: 1rem;
  z-index: 1;


  @media (max-width: 768px) {
    padding: 4rem 0 0 3rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0 0 2rem;
  }
`;

export const Link = styled.a`
  color: #f7f2ea;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Flex = styled.div`
  display: ${({ Display }) => (Display ? Display : "block")};
  align-items: ${({ AlignItems }) => (AlignItems ? AlignItems : "start")};
  width: ${({ Width }) => (Width ? Width : "auto")};
  gap: ${({ Gap }) => (Gap ? Gap : "1rem")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  background: ${({ Background }) => (Background ? Background : "transparent")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
`;

export const Button = styled.button`
  background: #9c6f4a;
  border: none;
  outline: none;
  padding: 0.7rem;
  color: #f7f2ea;
  cursor: pointer;
`;

export const Header = styled.div`
  font-size: ${({ Fz }) => (Fz ? Fz : "1rem")};
  letter-spacing: ${({ Ls }) => (Ls ? Ls : "0")};
  color: ${({ Color }) => (Color ? Color : "white")};
  // text-transform: ${({ textTransform }) => textTransform ? textTransform : "lowercase"};

    @media (max-width: 1300px) {
      font-size:1.5rem
    }
    @media (max-width: 768px) {
      font-size:5rem
    }
    @media (max-width: 576px) {
      font-size:2.7rem
    }
    @media (max-width: 320px) {
      font-size:2rem
    }
`;

export const SubHeader = styled.div`
  font-size: ${({ Fz }) => (Fz ? Fz : "1rem")};
  letter-spacing: ${({ Ls }) => (Ls ? Ls : "0")};
  color: ${({ Color }) => (Color ? Color : "white")};

  @media (max-width: 768px) {
    font-size:3rem
  }
  @media (max-width: 576px) {
    font-size:1.7rem
  }
`;

export const Paragraph = styled.div`
  font-size: ${({ Fz }) => (Fz ? Fz : "1rem")};
  letter-spacing: ${({ Ls }) => (Ls ? Ls : "0")};
  color: ${({ Color }) => (Color ? Color : "white")};

  @media (max-width: 768px) {
    font-size:2rem
  }
  @media (max-width: 576px) {
    font-size:1.5rem
  }
`;

export const Overlays = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #f7f2ea;
  border-top-left-radius: 140px;
  border-top-right-radius: 140px;
  text-align: center;
  opacity: ${({ opacity }) => (opacity ? opacity : "0")};
  transition: ${({ transition }) => (transition ? transition : "none")};
  padding: 3rem 1rem 1rem 1rem;

  @media (max-width: 1300px) {
    width: 90%;
    padding: 4rem 3rem 2rem 3rem;
    border-top-left-radius: 210px;
    border-top-right-radius: 210px;
  }
  @media (max-width: 1024px) {
    // width: 80%;
    padding: 4rem 1rem 2rem 1rem;
    border-top-left-radius: 170px;
    border-top-right-radius: 170px;
  }
`;
