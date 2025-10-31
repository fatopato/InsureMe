import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { 
  InsuranceOutlined, 
  PhoneOutlined,
  GlobalOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <Row gutter={[32, 32]} className="footer-content">
          {/* Company Info */}
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="large">
              <div className="footer-logo">
                <InsuranceOutlined className="logo-icon" />
                <span className="logo-text">InsureMe</span>
              </div>
              <Text className="footer-description">
                Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
              </Text>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FacebookOutlined />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <TwitterOutlined />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <InstagramOutlined />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <LinkedinOutlined />
                </a>
              </div>
            </Space>
          </Col>

          {/* Products */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title">Products</Title>
            <ul className="footer-links">
              <li><Link to="/traffic-insurance">Traffic Insurance</Link></li>
              <li><Link to="/kasko">Kasko</Link></li>
              <li><Link to="/health-insurance">Health Insurance</Link></li>
              <li><Link to="/home-insurance">Home Insurance</Link></li>
            </ul>
          </Col>

          {/* Company */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title">Company</Title>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title">Support</Title>
            <div className="footer-contact">
              <Space direction="vertical" size="small">
                <div className="contact-item">
                  <PhoneOutlined className="contact-icon" />
                  <Text strong>444 00 00</Text>
                </div>
                <div className="contact-item">
                  <GlobalOutlined className="contact-icon" />
                  <Text>7/24 Support</Text>
                </div>
              </Space>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <Text className="footer-copyright">
                © {new Date().getFullYear()} InsureMe. All rights reserved.
              </Text>
            </Col>
            <Col xs={24} md={12}>
              <div className="footer-legal">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookies">Cookie Policy</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;

