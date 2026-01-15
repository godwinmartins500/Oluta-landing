"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './Solution.css';

const Solution = () => {
  return (
    <section className="solution-section">
      <motion.h2
        className="solution-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        The Oluta Solution
      </motion.h2>
      <motion.p
        className="solution-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Oluta is a turnkey, white-label merchant banking platform that banks deploy in 90 days—not 2-3 years. We solve both problems simultaneously.
      </motion.p>

      <motion.div
        className="solution-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src="/Frame 1000002113.png"
          alt="Oluta visual"
          className="solution-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div className="solution-text">
          <h3>For Banks</h3>
          <p>
            Fully customizable merchant banking app that banks white-label as their own product. Deploy in 90 days instead of 2-3 years.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="solution-container solution-container-reverse"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="solution-text">
          <h3>For Merchants</h3>
          <p>
            Free commerce tools and instant access to working capital through their trusted bank relationship.
          </p>
        </motion.div>
        <motion.img
          src="/Frame 1000002115.png"
          alt="Retail environment"
          className="solution-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default Solution;
