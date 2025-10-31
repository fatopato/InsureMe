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
  HomeOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const HomeInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'home-1', text: 'Home structure protection' },
    { id: 'home-2', text: 'Personal property coverage' },
    { id: 'home-3', text: 'Natural disaster protection' },
    { id: 'home-4', text: 'Liability coverage' },
    { id: 'home-5', text: 'Theft and vandalism' },
    { id: 'home-6', text: 'Best price guarantee' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <HomeOutlined />
                </div>
                <Title level={1}>Home Insurance</Title>
                <Paragraph className="product-subtitle">
                  Protect your home and belongings with comprehensive coverage
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<HomeOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Get Quote Now
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <HomeOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Complete Home Protection
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

export default HomeInsurance;

