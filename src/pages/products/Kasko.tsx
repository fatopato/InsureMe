import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Space
} from 'antd';
import {
  SafetyOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const Kasko: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'kasko-1', text: 'Comprehensive coverage for your vehicle' },
    { id: 'kasko-2', text: 'Coverage for accidents and damages' },
    { id: 'kasko-3', text: 'Theft and fire protection' },
    { id: 'kasko-4', text: 'Natural disaster coverage' },
    { id: 'kasko-5', text: 'Best price guarantee' },
    { id: 'kasko-6', text: 'Flexible payment options' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <SafetyOutlined />
                </div>
                <Title level={1}>Kasko (Comprehensive Insurance)</Title>
                <Paragraph className="product-subtitle">
                  Protect your vehicle with comprehensive coverage from leading insurance companies
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<SafetyOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Get Quote Now
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <SafetyOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Comprehensive Protection
          </Title>
          <Row gutter={[24, 24]}>
            {benefits.map((benefit) => (
              <Col xs={24} sm={12} md={8} key={benefit.id}>
                <Card className="benefit-card">
                  <CheckCircleOutlined className="benefit-icon" />
                  <Text className="benefit-text">{benefit.text}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Kasko;

