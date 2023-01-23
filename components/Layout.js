import Nav from './Navbar';
import Foot from './Foot';

export default function Layout({ children }) {
   return (
      <>
         <Nav />
         {children}
         <Foot />
      </>
   );
}
