/* eslint-disable react/prop-types */
const Table = ({ orders, idx, handleDelete, handleStatus }) => {
  const { img, _id, status,serviceName, location, paidPrice, ordeRtime } = orders;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle tooltip btn-outline"
          data-tip="Delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 mx-auto w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <h1 className="text-xl font-bold">{idx + 1}</h1>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-36 h-36">
              {img ? (
                <img src={img} alt="Avatar Tailwind CSS Component" />
              ) : (
                <img
                  src="https://i.ibb.co/R6Z2nFM/55.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>
        <h1 className="text-xl font-bold">{serviceName}</h1>
      </td>
      <td>
        <h1 className="text-xl font-bold">${paidPrice}</h1>
      </td>
      <td>
        <h1 className="text-xl font-bold">{location}</h1>
      </td>
      <td>
        <h1 className="text-xl font-bold">{ordeRtime}</h1>
      </td>
      <td>
        {status ? (
          <button className="btn btn-success">Approved</button>
        ) : (
          <button
            onClick={() => handleStatus(_id)}
            className="text-white bg-[#FF3811] btn md:btn-md normal-case btn-sm md:px-5 rounded hover:bg-[#FF3811]"
          >
            Pending
          </button>
        )}
      </td>
    </tr>
  );
};

export default Table;
