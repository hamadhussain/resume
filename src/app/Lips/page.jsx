'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect ,useState } from 'react';
import Port from "../Components/FrontPage/page";
const Page = () => {
    useEffect(() => {
        AOS.init({
          once: true
        });
        AOS.refresh();
      }, []);
    const [Div, setDiv] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setDiv(true);
      }, 1000);
    });
  return (
    <div className=' bg-black'>
      {Div &&(<Port/>)}
    </div>
  )
}

export default Page
