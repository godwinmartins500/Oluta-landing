"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-icon">🏦</span>
            <span className="badge-text">Banking Infrastructure for Africa</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Unlock Commerce. Enable Growth.
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Oluta is the embedded commerce and financial infrastructure that transforms African banks into merchant powerhouses, 
            enabling lending, payments, and commerce at scale.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner with us
              <span className="btn-arrow">▶</span>
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Demo
              <span className="btn-external">↗</span>
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/Group 1000002012.png"
            alt="Banking and commerce in Africa"
            width={870}
            height={260}
            priority
            className="collage-image"
          />
        </motion.div>
      </div>
    </section>
  );
}