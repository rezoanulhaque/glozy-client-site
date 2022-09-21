import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import AddFeature from '../AddProduct/AddFeature';
import AdminHeader from '../AdminHeader';

const ProductEdit = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let firstProduct = {
        image: '',
        name: '',
        price: '',
        stock: '',
        category: '',
        description: '',
        key: '',
        sellername: '',
        features: ''
    }
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [productsFeature, setProductsFeature] = useState([]);

    useEffect(() => {
        fetch(`https://murmuring-sands-42782.herokuapp.com/singleProductEdit/${id}`)
            .then(res => res.json())
            .then(data => {setProducts(data);
                setProductsFeature(data[0].features)})
    }, [id])
    const product = products[0];
    const dataProduct = {...firstProduct, ...product};
    const { name, sellername, price, stock, key, category, description, speciality } = dataProduct;
   
    console.log(productsFeature);
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('sellername', data.sellername);
        formData.append('price', data.price);
        formData.append('stock', data.stock);
        formData.append('key', data.key);
        formData.append('category', data.category);
        formData.append('speciality', data.speciality);
        formData.append('description', data.description);
        formData.append('features', JSON.stringify(productsFeature));
        console.log([...formData])
        fetch(`https://murmuring-sands-42782.herokuapp.com/updateProduct?id=${id}`, {
            method: "PATCH",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Add Product Successful')
                }
            })
            history.push('/productList');
      }
    const categoryName = ["IP CCTV CAMERA", "NVR", "HD CVI CCTV CAMERA", "DVR", "WIFI CAMERA", "CAMERA PACKAGE", "ACCESSORIES", "VIDEO DOOR PHONE", "Access control & Time Attendance", "IP Phone", "TRIPOD TRUNSTILE", "CAR BARIER", "PA SYSTEM", "MONITOR", "HDD", "SMART DOOR LOCK", "OTHERS"]
     const stockArray = ["Available", "Unavailable"]
    const specialityArray = ["Normal", "Trending", "Hot Sale", "Recent", "Packages", "Call Now"]
     
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="update-product-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <tr>
                <td><label>Update Your Product Name</label></td>
                <td><input type="text" defaultValue={name} {...register('name', { required: true })} placeholder="Product Name" /></td>
                <td>{errors.name && errors.name.type === "required" && <span style={{ color: "red" }}>This is required</span>}<br /></td>
                </tr>
                <tr>
                <td><label>Update Your Seller Name</label></td>
                <td><input name="sellername" defaultValue={sellername} {...register('sellername', { required: true })} placeholder="Enter Your Seller Name" /></td>
                {errors.sellername && errors.sellername.type === "required" && <span style={{ color: "red" }}>This is required</span>}<br />
                </tr>
                <tr>
                <td><label>Update Your Price</label></td>
                <td><input type="number" name="price" defaultValue={price} {...register('price', { required: true })} placeholder="Enter Your Price" /></td>
                {errors.price && errors.price.type === "required" && <span style={{ color: "red" }}>This is required</span>}<br />
                </tr>
                <tr>
                <td><label>Update Your Stock</label></td>
                <select {...register('stock', { required: true })}>
                <option value={stock}>{stock}</option>
                    {
                        stockArray.map(c=><option value={c}>{c}</option>)
                    }
                </select>
                {errors.stock && errors.stock.type === "required" && <span style={{ color: "red" }}>This is required</span>}<br />
                </tr>
                <tr>
                <td><label>Update Your Product Key</label></td>
                <td><input name="key" defaultValue={key} {...register('key', { required: true })} placeholder="Enter Your Stock" /></td>
                {errors.key && errors.key.type === "required" && <span style={{ color: "red" }}>This is required</span>}<br />
                </tr>
                <tr>
                <td><label>Update Your Catrgory</label></td>
                    <select {...register('category', { required: true })}>
                     <option value={category}>{category}</option>
                    {
                        categoryName.map(c=><option value={c}>{c}</option>)
                    }
                    </select>
                    {errors.category && errors.category.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                </tr>
                <tr>
                    <td><label>Update Your Product Speciality</label></td>
                    <select {...register('speciality', { required: true })}>
                    <option value={speciality}>{speciality}</option>
                    {
                        specialityArray.map(c=><option value={c}>{c}</option>)
                    }
                    </select>
                    {errors.speciality && errors.speciality.type === "required" && <span style={{color: "red"}}>This is required</span>}<br />
                    </tr>
                <tr>
                <td><label>Update Your Description</label></td>
                <td><input name="description" defaultValue={description} {...register('description', { required: true })} placeholder="Enter Your Stock" /></td>
                {errors.description && errors.description.type === "required" && <span style={{ color: "red" }}>This is required</span>}<br />
                </tr>
                <tr>
                <input type="submit"  />
                </tr>
                
            </form>
            <AddFeature featuresList={productsFeature} setFeaturesList={setProductsFeature}></AddFeature>
            {/* <ProductListFeature feature={feature} featuresList={featuresList} setFeaturesList={setFeaturesList}></ProductListFeature> */}
        </div>
        </div>
        
    );
};

export default ProductEdit;