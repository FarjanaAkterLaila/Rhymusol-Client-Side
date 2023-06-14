
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';


const Updatecls = () => {
   const {user}=useContext(AuthContext);
  const Jobdetail = useLoaderData();
  console.log(Jobdetail)

     const {_id,Image,Name,InstructorName,AvailableSeats,Price,email,cardItemId} = Jobdetail;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
     
      fetch(`https://music-school-server-farjanaakterlaila.vercel.app/dashboard/update/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        });
      console.log(data);
    }
    return (
        <div className='w-full px-10 '>
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Update Class</h3>
        </div>
        <div className="flex justify-center items-center">
  <div className="w-5/12   text-black p-8 border bg-error bg-opacity-40">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full mb-4 '>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <label className="label"><span className="label-text text-xl font-semibold">Image</span></label>
      <input type="url"   {...register('Image')}  placeholder="image link" defaultValue={Image} className="file-input file-input-bordered w-full " />
     
      
      {/* <input
        className="p-2 m-3"
        // {...register('image')}
        placeholder="image link"
        type="url"
        // defaultValue={image}
      />  */}
      </div>
       <div className="form-control w-full mb-4">
                <label className="label ">
                    <span className="label-text text-xl font-semibold">Class Name</span>
                </label>
      <input
        className="input input-bordered w-full "
         {...register('Name')}
       // placeholder="Name"
         defaultValue={Name}
      />
      </div>
    
      <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text text-xl font-semibold">Instructor Name</span>
                </label>
      <input
       className="input input-bordered w-full "
         {...register('InstructorName')}
       value={user?.displayName}
      />
     
      </div>
    
      <div className="form-control w-full mb-4">
                <label className="label ">
                    <span className="label-text text-xl font-semibold">Instactor Email</span>
                </label>
      <input
       className="input input-bordered w-full "
         {...register('InstactorEmail')}
         value={user?.email}
      />
     
      </div>
      <div className="form-control w-full mb-4">
                    <label className="label ">
                        <span className="label-text text-xl font-semibold">Price</span>
                    </label>
      <input
       className="input input-bordered w-full "
         {...register('Price')}
        placeholder="Price"
        type="number"
        defaultValue={Price}
      />
      </div>
      <div className="form-control w-full mb-4">
                    <label className="label-text text-xl font-semibold">Available Seats</label>
      <input
       className="input input-bordered w-full "
         {...register('AvailableSeats', { required: true })}
        placeholder="Available Seats"
        type="number"
         defaultValue={AvailableSeats}
      /></div>
      
     
      <input className="btn btn-lg  mt-4 mx-48" type="submit" value="Add Class" />
      
    </form>
  </div>
</div>
    </div>
    );
};

export default Updatecls;