"use client";

import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'White-Label Bank Platform',
      description: 'Fully customizable merchant banking app that banks white-label as their own product. Deploy in 90 days instead of 2-3 years.',
      highlight: 'Distribution lock-in through brand equity'
    },
    {
      title: 'AI-Powered Order Capture',
      description: 'Automatically converts WhatsApp and chat messages into draft orders. Merchants report 25-40% revenue increases in the first month.',
      highlight: 'Never miss an order again'
    },
    {
      title: 'Real-Time Inventory Management',
      description: 'Automated stock tracking with turnover reports. Merchants make data-driven stocking decisions and improve profit margins by 10-20%.',
      highlight: 'Inventory as collateral for lending'
    },
    {
      title: 'Inventory-Backed Lending Engine',
      description: 'AI-powered credit scoring based on real-time sales data. Merchants qualify for loans in 30 days with 85%+ repayment rates.',
      highlight: 'Commerce-backed lending at scale'
    },
    {
      title: 'Integrated Payment Acceptance',
      description: 'Accept bank transfers, cards, and mobile money with automatic tracking. Repayments are auto-deducted from daily sales.',
      highlight: '100% payment collection automation'
    },
    {
      title: 'Consumer Marketplace',
      description: 'Bank-branded marketplace connecting verified merchants with consumers. Trusted shopping with real-time delivery tracking.',
      highlight: 'Network effect accelerator for growth'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="features-section">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="features-title">Core Features</h2>
          <p className="features-description">
            Oluta delivers ten core features grouped into three layers: Bank Infrastructure, Merchant Operating System, and Consumer Marketplace.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap size={32} />
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <p className="feature-highlight">{feature.highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
