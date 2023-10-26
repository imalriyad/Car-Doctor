/* eslint-disable react/prop-types */

const Facilitys = ({facilitys}) => {

  
    return (
        <div>
            <div
                className="bg-base-200 p-8 rounded-md border-t-2 border-[#FF3811]"
              >
                <h1 className="font-bold text-xl mb-3">{facilitys.name}</h1>
                <p className="font-light text-[#737373]">{facilitys.details}</p>
              </div>
        </div>
    );
};

export default Facilitys;