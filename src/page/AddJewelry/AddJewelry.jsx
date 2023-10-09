import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddJewelry = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = data => {



    const {jewelryName,image,makeElementName,shopName,rating,taka,description } = data;
    const newjewelry = { jewelryName ,image,makeElementName,shopName,taka:parseFloat(taka),rating:parseFloat( rating),description }
    console.log(newjewelry)


    fetch('http://localhost:5000/alljewelry', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newjewelry)
    })
        .then(res => res.json())
        .then(data => {
   
            if (data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
   
}
  return (
    <div>
      <div>
       
        <form className="mt-20 mb-10 bg-teal-300 p-4 rounded-lg" onSubmit={handleSubmit(onSubmit)}>


            <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold  ">Jewelry name</span>

                    </label>
                    <input type="text" {...register("jewelryName", { required: true })} placeholder="Type here" className="input input-bordered font-semibold  max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Image</span>

                    </label>
                    <input type="text" {...register("image", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Shop Name</span>

                    </label>
                    <input type='text' {...register("shopName", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">MakeElementName</span>

                    </label>
                    <input type='text' {...register("makeElementName", { required: true })} placeholder="Type here"  className="input input-bordered max-w-5xl  "  />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Taka</span>

                    </label>
                    <input type="number" {...register("taka", { required: true })} placeholder="Type here" className="input  input-bordered max-w-5xl " />

                </div>
              
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Rating</span>

                    </label>
                    <input type="number"{...register("rating", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
               
                <div className="form-control w-96">
                    <label className="label">
                        <span className="label-text font-semibold"> Description</span>

                    </label>
                    <textarea name="textarea"  {...register("description", { required: true })} className="textarea   textarea-bordered h-24 " placeholder="Details description"></textarea>

                </div>
            </div>




            <input className="bg-teal-900 mt-6 text-white rounded-lg p-3" type="submit" value="Jewelry Add" />
        </form >
      </div>
    </div>
  );
};

export default AddJewelry;
