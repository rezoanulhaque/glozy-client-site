import React from 'react';
import { useForm } from 'react-hook-form';

const ProductListFeature = (props) => {
    const feature = props.feature;
    const featuresList = props.featuresList;
    const setFeaturesList = props.setFeaturesList;
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const addFeatures = (data, e) => {
        console.log("data")
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
        console.log(idKey)
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
                    <td><input type="text" name="featuresKey" {...register('featuresKey', { required: true })} placeholder="Enter Your Features" /></td>
                    <td><input type="text" name="featuresValue" {...register('featuresValue', { required: true })} placeholder="Enter Your Features" /></td>
                    <td><input type="submit" value="add features" /></td>
                </tr>
            </form>
            
        </div>
    );
};

export default ProductListFeature;