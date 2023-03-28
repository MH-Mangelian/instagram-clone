import { useEffect, useState } from "react";

const GetApi = () => {
  const [data, setData] = useState([]);

  const api = () => {
    fetch("https://picsum.photos/v2/list?page=2&limit=30")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      <div className="flex space-x-6 p-2">
        {data.map((data) => (
          <div className="" key={data.id}>
            <img className="h-[50px] w-[50px] rounded-full p-[1.5px] border-red-500 border-2 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src={data.download_url} width="100px" height="100px" />
            <p className="text-xs text-center w-12 truncate">{data.author}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default GetApi;
