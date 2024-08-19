import React, { useEffect, useState } from 'react';
import './Vendor.css';
import food from '../../assets/food.jpg';
import { useNavigate } from 'react-router-dom';
import Db from '../../Global/Db.json';

const Vendor = () => {
    const [vendors, setVendors] = useState([]);
    const Nav = useNavigate();
    const items = Object.values(Db);
  
    useEffect(() => {
        const vendorSet = new Set(); 
        const filteredVendors = items.reduce((acc, item) => {
            if (!vendorSet.has(item.vendor)) {
                vendorSet.add(item.vendor);
                acc.push(item);
            }
            return acc;
        }, []);
        setVendors(filteredVendors);
    }, []);
  
    return (
        <div className='Vendor'>
            <div className="VendorWrap">
                {vendors.map((vendorItem, index) => (
                    <div className="box" key={index} onClick={() => Nav(`/home/Menu/${vendorItem.vendor}`)}>
                        <div className="Info">
                            <h4>{vendorItem.vendor}</h4>
                            <span>{vendorItem.dish}</span>
                        </div>
                        <div className="imgHolder">
                            <img src={vendorItem.image} alt={vendorItem.dish} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vendor;
