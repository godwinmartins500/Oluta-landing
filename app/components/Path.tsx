"use client";

import React from 'react';
import { Building2, Store, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import './Path.css';

const Path = () => {
  const paths = [
    {
      icon: Building2,
      title: 'Bank Infrastructure',
      description: 'Banks white-label Oluta\'s merchant platform and deploy it to their SME customer base.',
      features: [
        'Branded mobile app',
        'Instant deployment',
        'Revenue share model'
      ]
    },
    {
      icon: Store,
      title: 'Merchant Operating System',
      description: 'Merchants use Oluta to manage inventory, capture orders, and access working capital.',
      features: [
        'Order automation',
        'Inventory tracking',
        'Instant loans'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Consumer Marketplace',
      description: 'Consumers discover verified merchants and shop with confidence through the bank\'s marketplace.',
      features: [
        'Trusted Merchants',
        'Easy Browsing',
        'Delivery Tracking'
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="path-section">
      <div className="path-container">
        <motion.div
          className="path-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="path-title">How It Works</h2>
          <p className="path-subtitle">
            A simple three-layer architecture that powers commerce, lending, and payments across Africa.
          </p>
          
          <motion.div
            className="path-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
              <span className="btn-arrow">↗</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="path-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {paths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <motion.div
                key={index}
                className={`path-card ${index === 0 ? 'path-card-highlighted' : ''}`}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className="path-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent size={32} />
                </motion.div>
                <h3 className="path-card-title">{path.title}</h3>
                <p className="path-card-description">{path.description}</p>
                
                <ul className="path-features">
                  {path.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="path-feature-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="feature-check">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.a
                  href="#"
                  className="path-learn-more"
                  whileHover={{ x: 10 }}
                >
                  Learn More →
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Path;
