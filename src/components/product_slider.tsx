'use client'

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Product = {
    id: number;
    name: string;
    image: string;
    description: string;
};

type CarouselProps = {
    products: Product[];
};

const Carousel: React.FC<CarouselProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProduct = () => {
        const newIndex = currentIndex + 1 >= products.length ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const previousProduct = () => {
        const newIndex = currentIndex - 1 < 0 ? products.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const getVisibleProducts = () => {
        if (window.innerWidth >= 1024) {
            // Desktop: Display 4 products
            const endIndex =
                currentIndex + 4 >= products.length
                    ? products.length
                    : currentIndex + 4;
            return products.slice(currentIndex, endIndex);
        } else if (window.innerWidth >= 768) {
            // Tablet: Display 2 products
            const endIndex =
                currentIndex + 2 >= products.length
                    ? products.length
                    : currentIndex + 2;
            return products.slice(currentIndex, endIndex);
        } else {
            // Mobile: Display 1 product
            return [products[currentIndex]];
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setCurrentIndex(0); // Reset index on resize
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                {getVisibleProducts().map((product, index) => (
                    <div
                        key={product.id}
                        className={`${index === currentIndex ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-500 ease-in-out absolute inset-0`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto"
                        />
                        <div className="bg-white p-4">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-500">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
                <button
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    onClick={previousProduct}
                >
                    <FontAwesomeIcon icon={faChevronLeft} width={50} />
                </button>
                <button
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    onClick={nextProduct}
                >
                    <FontAwesomeIcon icon={faChevronRight} width={50} />                </button>
            </div>
        </div>
    );
};

export default Carousel;
