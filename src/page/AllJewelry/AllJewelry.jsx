import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Circles } from "react-loader-spinner";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const AllJewelry = () => {

  const {user} = useContext(AuthContext);
  const { isLoading, data: Alljewelry = [] } = useQuery({
    queryKey: ["alljewelry"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alljewelry");
      return res.json();
    },
  });


  const handlemyjewelry=(item)=>{
    
    if(user && user?.email){
       const jewelry = {jewelryName:item.jewelryName,classId:item._id,image:item.image,rating:item.rating,email:user?.email,shopName:item.shopName
       }
      //  console.log(jewelry)
      fetch('http://localhost:5000/myjewelry',{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(jewelry)
        
     })
     .then(res=>res.json())
     .then(data=>{
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'successfuly jewelry add',
            showConfirmButton: false,
            timer: 1500
          })
        }
     })
    }
      
     
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
                <div className="flex justify-between">
                  <div>
                  <Rating style={{ maxWidth: 80 }} value={item.rating} readOnly />
                  </div>
                  <div>
                  <p className="font-bold text-amber-600">${item.taka}</p>
                  </div>
              
                
                </div>
                <h2 className="card-title">{item.jewelryName}</h2>
                
               
                  <div>
                   <p className="font-medium opacity-80 font-serif">{item.shopName}</p>
                  <p className="font-medium opacity-80 font-serif">{item.makeElementName}</p>
                  </div>
                 
               
               
                <div className="card-actions ">
                 <button onClick={()=>handlemyjewelry(item)} className="btn bg-amber-600 w-full">Add Jewelry</button>
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
