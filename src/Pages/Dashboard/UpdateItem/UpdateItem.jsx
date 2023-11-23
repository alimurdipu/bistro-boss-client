import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = "ff73e1fde90e68b0dc7ceaf1d0027119";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    console.log(name, category, recipe, price)
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imgbb and the get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-Type' : 'multipart/form-data'
      }
    });
    if(res.data.success){
      // now send the menu item data to the server with the the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      // 
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data)
      console.log('with image url',res.data)
      if(menuRes.data.modifiedCount > 0){
        // show syccess popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
    }}
  };
  return (
    <div>
        <SectionTitle heading={'Update Item'} subHeading={'Refresh Info'}></SectionTitle>
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            defaultValue={name}
            {...register("name", {required: true})}
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex gap-6">
          {/* category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category", {required: true})}
              className="select select-bordered w-full"
            >
              <option disabled value={"default"}>
                Select a Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          {/* price */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              defaultValue={price}
              {...register("price", {required: true})}
              className="input input-bordered w-full"
            />
          </div>
          
        </div>
        {/* recipe details */}
        <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe"
              defaultValue={recipe}
              {...register('recipe', {required: true})}
            ></textarea>
            
          </div>
          <div className="form-control w-full my-6">
          <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
          </div>
        <button className="btn bg-orange-500 text-white">Update Menu Item</button>
      </form>
    </div>
    </div>
  )
}

export default UpdateItem