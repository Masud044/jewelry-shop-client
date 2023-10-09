import { useQuery } from "@tanstack/react-query";

import { Slide } from "react-awesome-reveal";


const Blog = () => {
  const { isLoading, data: Alljewelry = [] } = useQuery({
    queryKey: ["alljewelry"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alljewelry");
      return res.json();
    },
  });
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
              <h1 className="mb-5 text-5xl font-bold">Blog</h1>
            </div>
          </div>
        </div>
         <div className="grid md:grid-cols-3 justify-center gap-4">
          {Alljewelry.map((item) => {
             return <Slide key={item._id}>
                      <div
              
              className=" card card-compact w-96 bg-teal-100 shadow-xl"
            >
              <figure>
                <img src={item.image} alt="jewelry" />
              </figure>
              <div className="card-body">
                 <p className="text-center">October 9, 2023 By Admin</p>
                <h2 className="card-title justify-center">{item.jewelryName}</h2>

                <div>
                  
                  <p className="text-center  font-medium">{item.description}</p>
                </div>

              
              </div>
            </div>
             </Slide>
          }

           
           
           
            )}
        </div>
      
      </div>
    </div>
  );
};

export default Blog;
