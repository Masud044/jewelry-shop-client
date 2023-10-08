import { useQuery } from "@tanstack/react-query";
import {  Circles } from "react-loader-spinner";

const AllJewelry = () => {

   const {isLoading,data: Alljewelry=[]} = useQuery({
        queryKey:['alljewelry'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/alljewelry')
            return res.json();
       }
   })

   if(isLoading){
    return <Circles
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
 }

   
  return (
    <div className="mb-20">
      <div>
        <div
          className="hero h-96 "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/KVgnqy3/freestocks-zii-Uk-V9-Lpd-U-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">  ALL Jewelry</h1>
             
            </div>
          </div>
        </div>
       

         

      </div>
    </div>
  );
};

export default AllJewelry;
