import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="max-w-screen-md mx-auto text-center my-[10%] px-4">
      <img src="https://i.ibb.co/x7tqnXz/error.png" alt="" className=""/>
      <Link to={'/'} className="btn md:btn-md normal-case btn-sm md:px-5 rounded text-white mt-5 bg-[#FF3811] hover:bg-[#FF3811]"><FaArrowLeft className='text-lg'/> Home</Link>
    </div>
  );
};

export default ErrorPage;
