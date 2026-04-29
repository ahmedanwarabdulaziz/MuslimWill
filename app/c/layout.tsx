import React from 'react';

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide the global header and footer specifically for digital card routes */}
      <style>{`
        header, footer { display: none !important; }
        body { background-color: #f5f8f6; }
      `}</style>
      <div style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </>
  );
}
