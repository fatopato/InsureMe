import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { GlobalOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const TravelHealthInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'travel-1', text: 'Yurt dışında sağlık güvencesi' },
    { id: 'travel-2', text: 'Schengen vizesi için geçerli' },
    { id: 'travel-3', text: 'Acil sağlık hizmetleri' },
    { id: 'travel-4', text: 'Günde 1€ başlayan fiyatlar' },
    { id: 'travel-5', text: 'Online anında poliçe' },
    { id: 'travel-6', text: '7/24 acil destek' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <GlobalOutlined />
                </div>
                <Title level={1}>Seyahat Sağlık Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Yurt dışında seyahat için zorunlu sağlık sigortası
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<GlobalOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <GlobalOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Seyahat Sağlık Sigortası Avantajları
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

export default TravelHealthInsurance;

