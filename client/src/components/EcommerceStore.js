import React, { useRef, useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaHeart, FaStar, FaBars, FaTimes } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import ChatWidget from './ChatWidget';

// Interactive 3D Luxury Bag Component


const EcommerceStore = () => {


  return (
    <div className="font-light bg-white text-gray-900 overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@200;300;400;500&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .text-large { font-size: clamp(3rem, 8vw, 8rem); }
        .text-xlarge { font-size: clamp(4rem, 10vw, 12rem); }
        .letter-spacing-wide { letter-spacing: 0.2em; }
        .letter-spacing-wider { letter-spacing: 0.4em; }
      `}</style>

      {/* Minimal Navbar */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-inter text-sm font-light tracking-wider uppercase"
              >
                ABOUT
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-inter text-sm font-light tracking-wider uppercase"
              >
                CATALOG
              </motion.span>
            </div>

            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute left-1/2 transform -translate-x-1/2 font-playfair text-2xl tracking-wider"
            >
                 LuxéCarry
            </motion.h1>

            <div className="flex items-center gap-12">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-inter text-sm font-light tracking-wider uppercase"
              >
                STORE
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-inter text-sm font-light tracking-wider uppercase"
              >
                CONTACT
              </motion.span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-12 gap-14 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="col-span-6 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-[7rem] font-playfair font-light leading-none tracking-wide">
                  ELEGANCE
                  <br />
                  <span className="font-playfair italic text-6xl">&</span>
                  <span className="text-large"> QUALITY</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-sm"
              >
                <p className="font-inter text-sm font-light leading-relaxed mb-8">
                  Sophisticated handbags crafted
                  from the finest materials, designed
                  for the modern woman who
                  appreciates timeless beauty.
                </p>
                
                <motion.button
                  whileHover={{ x: 10 }}
                  className="font-inter text-sm tracking-wider uppercase border-b border-black pb-1 hover:border-gray-400 transition-all"
                >
                  EXPLORE COLLECTION
                </motion.button>
              </motion.div>
            </div>

            {/* Right Images */}
            <div className="col-span-6 relative h-full">
              <div className="grid grid-cols-2 gap-6 h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="space-y-6"
                >
                  <img
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"
                    alt="Luxury handbag"
                    className="w-full h-72 object-cover"
                  />
                  <div className="bg-gray-100 h-32"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-6 mt-16"
                >
                  <div className="bg-gray-100 h-20"></div>
                  <img
                    src="https://images.unsplash.com/photo-1680775079038-1e780cb7ea0b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Luxury handbag detail"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            
            {/* Product Images */}
            <div className="col-span-6">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1575202332411-b01fe9ace7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGx1eHVyeSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D"
                  alt="Featured handbag"
                  className="w-full h-[900px] object-cover"
                /> 
              </div>
            </div>

            
            <div className="col-span-6 space-y-10">
              <div> 
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-[5rem] font-playfair font-light leading-none mb-6"
                >
                  TIMELESS SOPHISTICATED
                  <br />
                  SILHOUETTE HANDBAG RENDERED
                  <br />
                  IN EXCEPTIONAL ITALIAN LEATHER. 
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="max-w-xs">
                  <h3 className="font-inter text-sm tracking-wider uppercase mb-4">ABOUT THE BRAND</h3>
                  <p className="font-inter text-sm font-light leading-relaxed">
                    Each piece in our collection reflects
                    our commitment to exceptional craftsmanship
                    and timeless design. Made from the
                    finest materials, our handbags are
                    built to last and designed to inspire.
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ x: 10 }}
                  className="font-inter text-sm tracking-wider uppercase border-b border-black pb-1 hover:border-gray-400 transition-all"
                >
                  DISCOVER
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-16">
            
            {/* Section Title */}
            <div className="col-span-6 ">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <h2 className="text-[5rem] font-playfair font-light leading-none">
                  OUR
                  <br />
                  COLLECTION
                </h2>
                
                <div className="text-right">
                  <span className="font-playfair text-6xl font-light">(2024)</span>
                </div>
              </motion.div>
            </div>

            {/* Collection Grid */}
            <div className="col-span-6">
              <div className="grid grid-cols-3 gap-8 text-sm font-inter font-light">
                <div>
                  <h3 className="tracking-wider uppercase mb-4">Tote Bag Styles</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Structured Leather</li>
                    <li>Soft Canvas</li>
                    <li>Vintage Collection</li>
                    <li>Limited Edition</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="tracking-wider uppercase mb-4">Crossbody Collection</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Mini Crossbody</li>
                    <li>Chain Details</li>
                    <li>Convertible Styles</li>
                    <li>Evening Collection</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="tracking-wider uppercase mb-4">Clutch Series</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Envelope Style</li>
                    <li>Structured Frame</li>
                    <li>Soft Pouch</li>
                    <li>Occasion Wear</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="font-inter text-sm font-light leading-relaxed max-w-md">
                  Discover Bags that transcend the
                  Season. Meticulously handcrafted
                  from Premium Materials, each
                  piece embodies our dedication
                  to timeless style.
                </p>
                
                <motion.button
                  whileHover={{ x: 10 }}
                  className="font-inter text-sm tracking-wider uppercase border-b border-black pb-1 hover:border-gray-400 transition-all mt-6"
                >
                  SHOP ALL
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Collection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            
            <div className="col-span-6">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=700&fit=crop"
                alt="Resort collection"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="col-span-6 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-6xl font-playfair font-light leading-none mb-8">
                  RESORT 24
                </h2>
                
                <div className="max-w-md">
                  <p className="font-inter text-sm font-light leading-relaxed mb-6">
                    Resort 24 Collection brings fresh
                    elegant ideas inspired by summer
                    travels and sophisticated leisure.
                    Featuring lightweight materials and
                    contemporary silhouettes designed
                    for the modern lifestyle.
                  </p>
                  
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="font-inter text-sm tracking-wider uppercase border-b border-black pb-1 hover:border-gray-400 transition-all"
                  >
                    EXPLORE COLLECTION
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Made to Order Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-16">
            
            <div className="col-span-6 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-6xl font-playfair font-light leading-none mb-8">
                  MADE TO ORDER
                </h2>
                
                <div className="max-w-md">
                  <p className="font-inter text-sm font-light leading-relaxed mb-8">
                    Your Vision, Perfectly Engineered.
                    Choose from premium leather
                    selections and personalized
                    details to create a piece that's
                    uniquely yours.
                  </p>
                  
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="font-inter text-sm tracking-wider uppercase border-b border-black pb-1 hover:border-gray-400 transition-all"
                  >
                    CREATE YOUR DESIGN
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <div className="col-span-6">
              <div className="grid grid-cols-2 gap-6">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=300&h=400&fit=crop"
                  alt="Custom bag"
                  className="w-full h-64 object-cover"
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=300&h=400&fit=crop"
                  alt="Custom bag detail"
                  className="w-full h-64 object-cover mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-16">
            
            <div className="col-span-6 space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl font-playfair font-light leading-none"
              >
                FIND YOUR
                <br />
                TRUE BEAUTY
              </motion.h2>
            </div>

            <div className="col-span-6">
              <div className="grid grid-cols-3 gap-8 text-sm font-inter font-light">
                <div>
                  <h3 className="tracking-wider uppercase mb-6 text-white">COLLECTIONS</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="hover:text-white cursor-pointer transition-colors">Handbags</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Crossbody</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Clutches</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Totes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="tracking-wider uppercase mb-6 text-white">OTHER</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="hover:text-white cursor-pointer transition-colors">About</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Journal</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Care Guide</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="tracking-wider uppercase mb-6 text-white">CUSTOMER SERVICE</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Size Guide</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-light text-gray-400">
                    ©  LuxéCarry 2025. ALL RIGHT RESERVED.
                  </p>
                  <div className="flex gap-6">
                    <span className="w-6 h-6 border border-gray-600 rounded cursor-pointer hover:border-white transition-colors"></span>
                    <span className="w-6 h-6 border border-gray-600 rounded cursor-pointer hover:border-white transition-colors"></span>
                    <span className="w-6 h-6 border border-gray-600 rounded cursor-pointer hover:border-white transition-colors"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default EcommerceStore;