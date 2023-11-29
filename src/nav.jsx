import { Navbar , Link , Flex} from "./ui/ui";
import classes from './styles.module.css'

export default function Nav({Links}) {
  return (
    <>
      <Navbar>
        <div className={classes.logoContainer}>
          <img src="./assets/logo.png" alt="" />
        </div>
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