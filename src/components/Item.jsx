import React, { useEffect } from 'react';
import './Item.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Item(props) {

    useEffect(() => {
        AOS.refresh(); // Refresh AOS when this component mounts
    }, []);


    return (
        <>
        <a href={props.link}>
            <div className="item" data-aos='fade-up' >
                <div className="logo">
                    <img src={props.image} alt="" />
                </div>
                <div className="details">
                    <h2>{props.title}</h2>
                    <br />
                    <p>{props.description}</p>
                </div>
            </div>

        </a>
        </>
    );
}
