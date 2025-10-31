import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { CarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const ShortTermTrafficInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'short-1', text: 'Günlük, haftalık, aylık poliçe' },
    { id: 'short-2', text: 'Kısa süreli kullanım için ideal' },
    { id: 'short-3', text: 'Esnek süre seçenekleri' },
    { id: 'short-4', text: 'Hızlı ve kolay başvuru' },
    { id: 'short-5', text: 'Ekonomik fiyatlar' },
    { id: 'short-6', text: 'Online anında poliçe' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <CarOutlined />
                </div>
                <Title level={1}>Kısa Süreli Trafik Sigortası</Title>
                <Paragraph className="product-subtitle">
                  İhtiyacınız kadar süre için trafik sigortası
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<CarOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <CarOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Kısa Süreli Trafik Sigortası Avantajları
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

export default ShortTermTrafficInsurance;

