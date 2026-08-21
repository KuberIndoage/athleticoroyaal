import React, { useState } from 'react';
import { PageRoute, ProductItem, QuoteDeskItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { ProductSection } from './components/ProductSection';
import { TrustClients } from './components/TrustClients';
import { QuickB2BBanner } from './components/QuickB2BBanner';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteInquiryModal } from './components/QuoteInquiryModal';
import { CatalogView } from './components/CatalogView';
import { AboutView } from './components/AboutView';
import { BlogView } from './components/BlogView';
import { ContactView } from './components/ContactView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quotePrefillNote, setQuotePrefillNote] = useState<string>('');
  const [quoteItems, setQuoteItems] = useState<QuoteDeskItem[]>([]);
  const [catalogInitialCategory, setCatalogInitialCategory] = useState<string>('all');

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    setCatalogInitialCategory(categoryId);
    setCurrentRoute('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (notePrefill?: string) => {
    if (notePrefill) {
      setQuotePrefillNote(notePrefill);
    }
    setIsQuoteModalOpen(true);
  };

  const handleAddToQuoteDesk = (
    product: ProductItem,
    size: string,
    quantity: number
  ) => {
    const newItem: QuoteDeskItem = {
      id: `${product.id}-${size}-${Date.now()}`,
      product,
      size,
      quantity,
    };
    setQuoteItems((prev) => [...prev, newItem]);
  };

  const handleRemoveQuoteItem = (id: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuoteQuantity = (id: string, newQty: number) => {
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleClearQuoteDesk = () => {
    setQuoteItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#111827]">
      {/* Sticky Global Navigation Header in White, Grey, and Black */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        quoteItemCount={quoteItems.length}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <>
            {/* 1. Hero Section with Real Athletico Royaal Product Showcase */}
            <Hero
              onNavigate={handleNavigate}
              onOpenQuoteModal={handleOpenQuoteModal}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />

            {/* 2. Manufacturing Heritage & Live Stats Strip (Crisp White & Grey) */}
            <StatsSection />

            {/* 3. Core Categories & Featured Performance Gear */}
            <ProductSection
              onSelectCategory={handleSelectCategory}
              onSelectProduct={(product) => setSelectedProduct(product)}
              onNavigate={handleNavigate}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* 4. Institutional Trust & Testimonials */}
            <TrustClients />

            {/* 6. Quick B2B Direct RFQ & Contact Action */}
            <QuickB2BBanner
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentRoute === 'products' && (
          <CatalogView
            onSelectProduct={(product) => setSelectedProduct(product)}
            onOpenQuoteModal={handleOpenQuoteModal}
            initialCategory={catalogInitialCategory}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentRoute === 'blog' && (
          <BlogView
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Rich Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuoteModal={handleOpenQuoteModal}
          onAddToQuoteDesk={handleAddToQuoteDesk}
        />
      )}

      {/* Quote / RFP Modal Drawer */}
      <QuoteInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        quoteItems={quoteItems}
        onRemoveItem={handleRemoveQuoteItem}
        onUpdateQuantity={handleUpdateQuoteQuantity}
        onClearQuoteDesk={handleClearQuoteDesk}
        prefillNote={quotePrefillNote}
      />
    </div>
  );
}
