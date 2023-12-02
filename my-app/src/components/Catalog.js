import MyCard from './MyCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Catalog(){

    const [products, setProducts] = useState(['']);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://6558ec84e93ca47020a9e4e1.mockapi.io/products')
            setProducts(res.data);
        }
        fetchData();
    }, []);
    return(
        <div>
                {products.map((products, id) => {
                    return(
                    <MyCard {...products}/>
                    )
                })}
        </div>
    );
}

export default Catalog;