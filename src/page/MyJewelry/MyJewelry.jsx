import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Circles } from "react-loader-spinner";


const MyJewelry = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, data: Myjewelry = [] } = useQuery({
    queryKey: ["myjewelry", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myjewelry?email=${user?.email}`
      );
      return res.json();
    },
  });

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
    <div>
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
              <h1 className="mb-5 text-5xl font-bold">My Jewelry</h1>
            </div>
          </div>
        </div>
        {Myjewelry?.map((item) => (
          <div key={item._id} className="card card-side bg-base-100  md:w-4/6 opacity-90 mb-4 p-2 shadow">
            <figure className="w-96">
              <img
                src={item.image}
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">{item.shopName}</h2>
              <p className="font-bold">{item.jewelryName}</p>
              <Rating style={{ maxWidth: 80 }} value={item.rating} readOnly />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJewelry;
