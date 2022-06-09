
import React from 'react'
import { useState, } from 'react';
import './SideFilter.css'

export default function SideFilter() {
    const SideFilterCollapsed = localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = useState(SideFilterCollapsed ? false : true)
    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('SideFilter-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('SideFilter-collapsed');
    }




    return (
        <>
            <div className={isExpanded ? 'SideFilter__parent-container' :'SideFilter__parent-container  Collapsed'}>
                <div className={isExpanded ? 'SideFilter__child-form' : 'SideFilter__child-form Collapsed'}>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>District</div>
                        <select className='SideFilter__input-select'>
                            <option>All of Auckland</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Suburb</div>
                        <select className='SideFilter__input-select'>
                            <option>All Suburbs</option>
                            <option>Grey Lynn</option>
                            <option>Eden Terrace</option>
                            <option>St Mary's Bay</option>
                            <option>Mount Albert</option>
                            <option>Westmere</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Property Type</div>
                        <select className='SideFilter__input-select'>
                            <option>All</option>
                            <option>House</option>
                            <option>Townhouse</option>
                            <option>Apartment</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Price From</div>
                        <select className='SideFilter__input-select'>
                            <option>Any</option>
                            <option>400</option>
                            <option>500</option>
                            <option>600</option>
                            <option>700</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Price To</div>
                        <select className='SideFilter__input-select'>
                            <option>Any</option>
                            <option>400</option>
                            <option>500</option>
                            <option>600</option>
                            <option>700</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Bedroom</div>
                        <select className='SideFilter__input-select'>
                            <option>Any</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Bathroom</div>
                        <select className='SideFilter__input-select'>
                            <option>Any</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Car Park</div>
                        <select className='SideFilter__input-select'>
                            <option>Any</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Period</div>
                        <select className='SideFilter__input-select'>
                            <option>Any</option>
                            <option>1 Year +</option>
                            <option>2 Years +</option>
                            <option>3 Years +</option>
                            <option>5 Years + 5% Discount</option>
                        </select>
                    </div>
                    <div className='SideFilter__input-container'>
                        <div className='SideFilter__input-header'>Keywords</div>
                        <input className='SideFilter__input-box'>

                        </input>
                    </div>
                    <div className='SideFilter__search-button'>
                        <span>Search</span>
                    </div>

                </div>
                <div className='SideFilter__side-arrow' onClick={handleToggler}><img src='ArrowVector.png' alt='img' className={isExpanded ? 'SideFilter__arrow-img' : 'SideFilter__arrow-img Collapsed'}
                 /></div>


            </div>
        </>
    )
}

