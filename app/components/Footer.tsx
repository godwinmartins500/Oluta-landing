"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Send, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="footer-container">
        <motion.div
          className="footer-content"
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
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <motion.div className="footer-left" variants={itemVariants}>
            <motion.div
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/OLUTA LOGO@3x 1.png"
                alt="Oluta logo"
                width={100}
                height={40}
              />
            </motion.div>

            <motion.div className="reach-us" variants={itemVariants}>
              <p className="reach-title">Reach us via</p>
              
              <motion.div
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} className="contact-icon" />
                <a href="mailto:support@oluta.com" className="contact-link">
                  Support@oluta.com
                </a>
              </motion.div>

              <motion.div
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} className="contact-icon" />
                <a href="tel:+234800000000" className="contact-link">
                  234 80000000000
                </a>
              </motion.div>

              <motion.div
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <MapPin size={20} className="contact-icon" />
                <div>
                  <p>6, Olatunde Sanni Cresent, Mende Maryland</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Section */}
          <motion.div className="footer-center" variants={itemVariants}>
            <p className="footer-year">2025 Oluta. Oluta is a brand fully owned by Temlio Communications.</p>
            <p className="footer-disclaimer">
              All logos and mockups used belong to Oluta. Their usage indicates association or claim by Temlio Communications.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div className="footer-right" variants={itemVariants}>
            <div className="social-icons">
              <motion.a
                href="https://facebook.com/oluta"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com/oluta"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Send size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="footer-copyright">
            © 2026 OLUTA. ALL RIGHTS RESERVED. BANKING INFRASTRUCTURE FOR AFRICAN COMMERCE.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
