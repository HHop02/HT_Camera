import React from "react";
import { Carousel, Image } from "react-bootstrap";

// Banner data with external links
const banners = [
    { id: 1, image: "/images/banner1.jpg"},
    { id: 2, image: "/images/banner2.jpg"},
    { id: 3, image: "/images/banner3.jpg"},
];

const ProductCarousel = () => {
    return (
        <Carousel pause="hover" className="bg-primary mb-4">
            {banners.map((banner) => (
                <Carousel.Item key={banner.id}>
                    {/* External link using target="_blank" to open in new tab */}
                    <a href={banner.link} target="_blank" rel="noopener noreferrer">
                        <Image src={banner.image} alt={`Banner ${banner.id}`} fluid />
                    </a>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
