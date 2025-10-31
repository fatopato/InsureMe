import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const { Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleGetQuote = () => {
    // This will open a quote form or redirect to quote page
    console.log('Get quote clicked');
  };

  return (
    <AntLayout className="site-layout">
      <Header onGetQuote={handleGetQuote} />
      <Content className="site-content">
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;

