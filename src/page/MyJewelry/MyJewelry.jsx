import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const MyJewelry = () => {
  const {user} = useContext(AuthContext);
  const { isLoading, data: Myjewelry = [] } = useQuery({
    queryKey: ["myjewelry", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myjewelry?email=${user?.email}`);
      return res.json();
    },
  });

  return (
    <div>
      <div>
        <div
          className="hero h-96"
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
        {
          Myjewelry?.map(item=>
            <div key={item._id} className="card card-side bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">{item.shopName}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>)
        }


      </div>
    </div>
  );
};

export default MyJewelry;
