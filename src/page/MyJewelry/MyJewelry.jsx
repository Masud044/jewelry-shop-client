import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Circles } from "react-loader-spinner";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyJewelry = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, refetch, data: Myjewelry = [] } = useQuery({
    queryKey: ["myjewelry", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myjewelry?email=${user?.email}`
      );
      return res.json();
    },
  });

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/myjewelry/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })

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
    <div className="w-full bg-gray-100">
   

  
    <div className="overflow-x-auto mt-20">
        <table className="table">
            {/* head */}
            <thead>
                <tr className="font-bold text-black">
                    <th>
                        #
                    </th>
                    <th >Image</th>
                    <th>Name</th>

                    <th>shopName</th>
                    <th>Delete</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    Myjewelry.map((item, index) => <tr key={item._id} >
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td >
                            {item.jewelryName}
                        </td>
                       
                        <td>{item.shopName}</td>
                        <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-400  text-black"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                      

                       
                       
                    </tr>)
                }



            </tbody>


        </table>
    </div>
</div>
  );
};

export default MyJewelry;
