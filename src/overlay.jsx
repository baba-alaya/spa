import { Button, Flex ,Header,Overlays, SubHeader} from "./ui/ui";


export function Overlay({Opacity,selectPackage}) {
    let  OpacityVal = Opacity
  return (
    <>
      <Overlays opacity={OpacityVal} transition={'1s opacity'}>
        <Flex Display={'flex'} flexDirection={'column'} AlignItems={'center'} >
         <Header Ls={'.2rem'} Fz={'1.8rem'} Color={'#9C6F4A'}> {selectPackage?.name? selectPackage?.name : 'Tranquil Bliss'}</Header>
          <SubHeader Ls={'.2rem'} Fz={'.8rem'} Color={'#9C6F4A'}>
          {selectPackage?.text ?  selectPackage?.text :'Elevate your self-care routine with a full day of pampering. This package includes a Swedish massage, a revitalizing body polish, acustom facial, a manicure, and a pedicure. Experience the ultimateindulgence in self-care'}
          </SubHeader>
          <Button>Book a session</Button>
        </Flex>
      </Overlays>
    </>
  );
}
 