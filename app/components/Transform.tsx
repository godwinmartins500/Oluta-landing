"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './Transform.css';

const Transform = () => {
  return (
    <section className="transform-section">
      <motion.div
        className="transform-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="transform-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Transform African Commerce?
        </motion.h2>
        <motion.p
          className="transform-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join the banks and merchants building the future of commerce and finance in Africa. The window is open. Let's move fast.
        </motion.p>
        
        <motion.div
          className="transform-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="transform-btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Demo
            <span className="transform-btn-arrow">▶</span>
          </motion.button>
          <motion.button
            className="transform-btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
            <span className="transform-btn-arrow">↗</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Transform;
