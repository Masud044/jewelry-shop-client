import { useQuery } from "@tanstack/react-query";
import { Circles } from "react-loader-spinner";
import { Link } from "react-router-dom";

const AllJewelry = () => {
  const { isLoading, data: Alljewelry = [] } = useQuery({
    queryKey: ["alljewelry"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alljewelry");
      return res.json();
    },
  });


  const handlemyjewelry=(data)=>{
      console.log(data)
  }

  if (isLoading) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  return (
    <div className="mb-20">
      <div>
        <div
          className="hero h-96 mb-20"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/KVgnqy3/freestocks-zii-Uk-V9-Lpd-U-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold"> ALL Jewelry</h1>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {Alljewelry.map((item) => (
            <div
              key={item._id}
              className=" card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={item.image} alt="jewelry" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.jewelryName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                 <button onClick={()=>handlemyjewelry(item._id)} className="btn btn-primary">Add Jewelry</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJewelry;
