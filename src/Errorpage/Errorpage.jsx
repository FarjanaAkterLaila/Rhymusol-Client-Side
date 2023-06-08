
import { Link} from 'react-router-dom';

const Errorpage = () => {
  
       
        return (
            <section className='flex flex-col items-center justify-center min-h-screen py-16 bg-[url("https://i.ibb.co/T0P6PcR/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element.jpg")] bg-cover bg-center'>
            <div className='container max-w-md text-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='w-40 h-40 text-gray-600 mx-auto mb-8'
              >
             
              </svg>
              <h2 className='mb-8 text-9xl font-extrabold text-gray-600'>
              
              </h2>
    
            
              <Link
                to='/'
                className='px-8 py-3 text-gray-900 font-semibold rounded bg-cyan-200'
              >
                Back to homepage
              </Link>
            </div>
          </section>
    );
};

export default Errorpage;