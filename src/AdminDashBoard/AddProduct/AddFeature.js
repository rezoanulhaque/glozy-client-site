import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddFeature = ({featuresList, setFeaturesList}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const addFeatures = (e) => {
    //     console.log(e)
    //     let newFeature = {
    //         featureId: featuresList.length + 1,
    //         // featuresKey: featuresKey,
    //         // featuresValue: featuresValue
    //     }
    //     setFeaturesList([...featuresList, newFeature])
    //     e.preventDefault();
        
    // }
    const addFeatures = (data, e) => {
        let newFeature = {
            featureId: featuresList.length + 1,
            featuresKey: data.featuresKey,
            featuresValue: data.featuresValue
        }
        setFeaturesList([...featuresList, newFeature])
        e.preventDefault();
        e.target.reset();
    }
    const featureDelete = (idKey) => {
        const newCartProduct = featuresList.filter(pd => pd.featuresKey !== idKey);
        setFeaturesList(newCartProduct);
    }
    const ts = {
        border: "1px solid black"
    }
    
    return (
        <div>{
            featuresList.length===0 ? <span>Plz add feature</span>:
            <div>
                {
                    featuresList.map((feature)=>
                    <tr>
                        <td style={ts}>{feature.featuresKey}</td>
                        <td style={ts}>{feature.featuresValue}</td>
                        <td>
                            <button onClick={()=>featureDelete(feature.featuresKey)}>delete</button>
                        </td>
                    </tr>)
                }
            </div>
        }
            <form onSubmit={handleSubmit(addFeatures)}>
                <tr>
                    <td><label>Enter Your Features</label></td>
                    <td><input type="text" name="featuresKey" placeholder="Enter Your Features" {...register('featuresKey', { required: true })}/></td>
                    <td><input type="text" name="featuresValue" placeholder="Enter Your Features" {...register('featuresValue', { required: true })}/></td>
                    <td><input type="submit" value="add feature" /></td>
                </tr>
                </form>
        </div>
    );
};

export default AddFeature;