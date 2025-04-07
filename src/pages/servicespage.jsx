import { Services, OurWork } from "../components/index.js";
import { Navbar } from "../components/index.js"

const ServicePage =  () => {
    return(
        <>
        <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Services />
        </div>
           <OurWork />
      </div>
        </>
    );
}

export {ServicePage}