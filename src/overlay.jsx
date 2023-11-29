import { Button, Flex ,Header,Overlays, SubHeader} from "./ui/ui";


export function Overlay(props) {
    let  Opacity = props.Opacity
  return (
    <>
      <Overlays opacity={Opacity} transition={'1s opacity'}>
        <Flex Display={'flex'} flexDirection={'column'} AlignItems={'center'} >
         <Header Ls={'.2rem'} Fz={'1.4rem'} Color={'#9C6F4A'}> Selfcare haven</Header>
          <SubHeader Ls={'.2rem'} Fz={'1.4rem'} Color={'#9C6F4A'}>    Elevate your self-care routine with a full day of pampering. This
            package includes a Swedish massage, a revitalizing body polish, a
            custom facial, a manicure, and a pedicure. Experience the ultimate
            indulgence in self-care.</SubHeader>
          <Button>Book a session</Button>
        </Flex>
      </Overlays>
    </>
  );
}
 