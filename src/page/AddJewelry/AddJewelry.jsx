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
              <h1 className="mb-5 text-5xl font-bold">Add Jewelry</h1>
            </div>
          </div>
        </div>
        <form className="mt-20 mb-10 bg-gray-400 p-4 rounded-lg" onSubmit={handleSubmit(onSubmit)}>


            <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Jewelry name</span>

                    </label>
                    <input type="text" {...register("jewelryName", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Image</span>

                    </label>
                    <input type="text" {...register("image", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Shop Name</span>

                    </label>
                    <input type='text' {...register("shopName", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">MakeElementName</span>

                    </label>
                    <input type='text' {...register("makeElementName", { required: true })} placeholder="Type here"  className="input input-bordered max-w-5xl "  />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Taka</span>

                    </label>
                    <input type="number" {...register("taka", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
              
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Rating</span>

                    </label>
                    <input type="number"{...register("rating", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Description</span>

                    </label>
                    <textarea name="textarea"  {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details description"></textarea>

                </div>
            </div>




            <input className="bg-amber-400 mt-6 text-white rounded-lg p-3" type="submit" value="Jewelry Add" />
        </form >
      </div>
    </div>
  );
};

export default AddJewelry;
