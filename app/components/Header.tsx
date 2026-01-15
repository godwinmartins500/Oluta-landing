"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/OLUTA LOGO@3x 1.png"
            alt="Oluta logo"
            width={100}
            height={40}
            priority
          />
        </motion.div>
        
        <motion.nav 
          className="nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button 
            onClick={scrollToTop} 
            className="nav-link"
            whileHover={{ color: "#1d4ed8", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.button>
          <div className="nav-dropdown">
            <motion.button 
              className="nav-link dropdown-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Featured
              <span className="dropdown-icon">▼</span>
            </motion.button>
          </div>
          <div className="nav-dropdown">
            <motion.button 
              className="nav-link dropdown-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How it works
              <span className="dropdown-icon">▼</span>
            </motion.button>
          </div>
        </motion.nav>

        <motion.button 
          className="cta-button"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(29, 78, 216, 0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Request a demo
          <span className="arrow">▶</span>
        </motion.button>

        {/* Hamburger Menu */}
        <motion.button 
          className="hamburger-menu"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isSidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              className="sidebar-overlay" 
              onClick={closeSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.aside 
              className="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="sidebar-nav">
                <motion.button 
                  onClick={() => { scrollToTop(); closeSidebar(); }} 
                  className="sidebar-nav-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 10, color: "#1d4ed8" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.button>
                <motion.div 
                  className="sidebar-nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <motion.button 
                    className="sidebar-nav-link"
                    whileHover={{ x: 10, color: "#1d4ed8" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Featured
                    <span className="sidebar-dropdown-icon">▼</span>
                  </motion.button>
                </motion.div>
                <motion.div 
                  className="sidebar-nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.button 
                    className="sidebar-nav-link"
                    whileHover={{ x: 10, color: "#1d4ed8" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    How it works
                    <span className="sidebar-dropdown-icon">▼</span>
                  </motion.button>
                </motion.div>
                <motion.button 
                  className="sidebar-cta-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a demo
                  <span className="arrow">▶</span>
                </motion.button>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}