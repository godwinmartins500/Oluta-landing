"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './Opportunity.css';

const Opportunity = () => {
  const stats = [
    {
      label: 'Market Opportunity',
      value: '50B+',
      description: 'Informal commerce in Nigeria'
    },
    {
      label: 'Deployment Speed',
      value: '90 Days',
      description: 'Informal commerce is Nigeria'
    },
    {
      label: 'Revenue Growth',
      value: '25-40%',
      description: 'Merchant revenue increase (Month 1)'
    },
    {
      label: 'Loan Repayment',
      value: '85%+',
      description: 'Repayment rate on working capital loans'
    }
  ];

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="opportunity-section">
      <div className="opportunity-container">
        <motion.div
          className="opportunity-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="opportunity-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Market Opportunity & Impact
          </motion.h2>
          <motion.p
            className="opportunity-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nigeria's embedded finance market is exploding. The window is open, but it won't stay open forever.
          </motion.p>

          <motion.div
            className="stats-grid"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={statVariants}
                whileHover={{ y: -5 }}
              >
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-description">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="expected-outcomes"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="outcomes-title">Expected Outcomes (18 months)</h3>
            <motion.div
              className="outcomes-grid"
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
              viewport={{ once: true }}
            >
              <motion.div
                className="outcome-item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="outcome-label">Bank Partnership</p>
                <p className="outcome-description">5-10 Nigerian banks onboarded with 50,000+ merchants processing $1.5 billion in annual transaction volume</p>
              </motion.div>
              <motion.div
                className="outcome-item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="outcome-label">Revenue Impact</p>
                <p className="outcome-description">Banks generate $1.5 million in new annual revenue. Merchants access $50 million in working capital loans</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="opportunity-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/image 42.png"
            alt="Market Opportunity and Financial Impact"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;
