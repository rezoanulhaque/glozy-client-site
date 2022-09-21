import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AdminHeader from '../AdminHeader';
import './../../App.scss';
import AddFeature from './AddFeature';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const admin = JSON.parse(sessionStorage.getItem('admin'));
    const history = useHistory();
    const [featuresList, setFeaturesList] = useState([]);
    console.log(featuresList);
    if (admin.admin === false) {
        history.push('/customerdetails')
        alert('Are you a admin? if Yes ! Then please log in with your admin email')
    }
    let user = {
        email: '',
        name: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    
    const onSubmit = (data, e) => {
        const formData = new FormData();
        // featuresList.forEach((item, index) => {
        //     formData.append('features', ('index', item[index]));
        //    });
        formData.append('file', data.img[0]);
        formData.append('name', data.name);
        formData.append('sellername', data.sellername);
        formData.append('price', data.price);
        formData.append('stock', data.stock);
        formData.append('key', data.key);
        formData.append('category', data.category);
        formData.append('speciality', data.speciality);
        formData.append('description', data.description);
        formData.append('features', JSON.stringify(featuresList));
        console.log([...formData])
        fetch('https://murmuring-sands-42782.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Successfully added services')
                    e.target.reset();
                }
            })
    }
    // const onSubmit = (data, e) => {
    //     // const formData = new FormData();
    //     // formData.append('file', data.img[0])
    //     // formData.append('name', data.name)
        
    //     // console.log(formData);
    //     const ajairaData = {...data};
    //     fetch('https://murmuring-sands-42782.herokuapp.com/addProduct', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(ajairaData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 alert('Add Product Successful')
    //                 e.target.reset();
    //             }
    //         })
    //   }
    // const getFields = (input, field) => {
    //     const output = [];
    //     for (let i=0; i < input.length ; ++i)
    //         output.push(input[i][field]);
    //     return output;
    // }
    const categoryName = ["IP CCTV CAMERA", "NVR", "HD CVI CCTV CAMERA", "DVR", "WIFI CAMERA", "CAMERA PACKAGE", "ACCESSORIES", "VIDEO DOOR PHONE", "Access control & Time Attendance", "IP Phone", "TRIPOD TRUNSTILE", "CAR BARIER", "PA SYSTEM", "MONITOR", "HDD", "SMART DOOR LOCK", "OTHERS"]
    const stockArray = ["Available", "Unavailable"]
    const specialityArray = ["Normal", "Trending", "Hot Sale", "Recent", "Packages", "Call Now"]
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="add-product-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <tr>
                    <td><label>Enter Your Image Url : </label></td>
                    <td><input type="file" {...register('img', { required: true })}  /></td>
                    {errors.img && errors.img.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Product Name</label></td>
                    <td><input type="text" {...register('name', { required: true })} placeholder="Product Name" /></td>
                    {errors.name && errors.name.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Seller Name</label></td>
                    <td><input defaultValue={finalUser.displayName} {...register('sellername', { required: true })} placeholder="Enter Your Seller Name" /></td>
                    {errors.sellername && errors.sellername.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Price</label></td>
                    <td><input type="number" {...register('price', { required: true })} placeholder="Enter Your Price" /></td>
                    {errors.price && errors.price.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Stock</label></td>
                    <select {...register('stock', { required: true })}>
                    {
                        stockArray.map(c=><option value={c}>{c}</option>)
                    }
                    </select>
                    {errors.stock && errors.stock.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Product Key</label></td>
                    <td><input {...register('key', { required: true })} placeholder="Enter Your Stock" /></td>
                    {errors.key && errors.key.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Catrgory</label></td>
                    <select {...register('category', { required: true })}>
                    {
                        categoryName.map(c=><option value={c}>{c}</option>)
                    }
                    </select>
                    {errors.category && errors.category.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Product Speciality</label></td>
                    <select {...register('speciality', { required: true })}>
                    {
                        specialityArray.map(c=><option value={c}>{c}</option>)
                    }
                    </select>
                    {errors.speciality && errors.speciality.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <tr>
                    <td><label>Enter Your Description</label></td>
                    <td><input type="text" {...register('description', { required: true })} placeholder="Enter Your Stock" /></td>
                    {errors.description && errors.description.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                    <input type="submit" />
                </form>
                <AddFeature featuresList={featuresList} setFeaturesList={setFeaturesList}></AddFeature>
            </div>
        </div>
    );
};

export default AddProduct;

                        
                        
                     