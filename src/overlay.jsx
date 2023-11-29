import { Button, Flex ,Overlays} from "./ui/ui";


export function Overlay(props) {
    let  Opacity = props.Opacity
  return (
    <>
      <Overlays opacity={Opacity} transition={'1s opacity'}>
        <Flex Display={'flex'} flexDirection={'column'} AlignItems={'center'} >
          <h3
            style={{
              fontSize: "1.4rem",
              color: "#9C6F4A",
              letterSpacing: ".2rem",
            }}
          >
            Selfcare haven
          </h3>
          <h4   style={{
              fontSize: ".9rem",
              color: "#9C6F4A",
              letterSpacing: ".2rem",
            }}>
            Elevate your self-care routine with a full day of pampering. This
            package includes a Swedish massage, a revitalizing body polish, a
            custom facial, a manicure, and a pedicure. Experience the ultimate
            indulgence in self-care.
          </h4>
          <Button>Book a session</Button>
        </Flex>
      </Overlays>
    </>
  );
}
 