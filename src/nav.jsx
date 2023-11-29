import { Navbar , Link , Flex} from "./ui/ui";
import classes from './styles.module.css'

export default function Nav({Links}) {
  return (
    <>
      <Navbar>
       <Flex Display={'flex'} AlignItems={'center'}>
       <div className={`${classes.logoContainer} burger`}>
        <img src="./assets/burger.svg" alt="" />
        </div>
       <div className={`${classes.logoContainer} icon`}>
          <img src="./assets/logo.png" alt="" />
        </div>
       </Flex>
        <Flex Display={'flex'} >
          {Links.map((link, i) => (
              <li key={i}>
                <Link>{link}</Link>
            </li>
          ))}
        </Flex>
      </Navbar>
    </>
  );
}