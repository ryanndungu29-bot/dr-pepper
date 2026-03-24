import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NewsletterPopup } from './components/NewsletterPopup';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { ProductDetailPage } from './pages/ProductDetail';
import { AboutPage } from './pages/About';
import { StoreLocatorPage } from './pages/StoreLocator';
import { PromotionsPage } from './pages/Promotions';
import { BlogPage } from './pages/Blog';
import { ContactPage } from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} setSelectedProduct={setSelectedProductId} />;
      case 'products':
        return <ProductsPage onProductClick={(id) => {
          setSelectedProductId(id);
          setCurrentPage('product-detail');
        }} />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage 
            productId={selectedProductId} 
            onBack={() => setCurrentPage('products')} 
            onNavigateToLocator={() => setCurrentPage('locator')}
          />
        ) : <ProductsPage onProductClick={(id) => {
          setSelectedProductId(id);
          setCurrentPage('product-detail');
        }} />;
      case 'about':
        return <AboutPage />;
      case 'locator':
        return <StoreLocatorPage />;
      case 'promotions':
        return <PromotionsPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} setSelectedProduct={setSelectedProductId} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <NewsletterPopup />
    </div>
  );
}
