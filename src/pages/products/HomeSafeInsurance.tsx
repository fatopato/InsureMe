import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { HomeOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const HomeSafeInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'safe-1', text: 'Kapsamlı ev güvenliği' },
    { id: 'safe-2', text: 'Eşya ve değerli kapsamı' },
    { id: 'safe-3', text: 'Sorumluluk sigortası dahil' },
    { id: 'safe-4', text: '7/24 acil yardım hattı' },
    { id: 'safe-5', text: 'Geniş teminat kapsamı' },
    { id: 'safe-6', text: 'Uygun fiyat seçenekleri' },
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
                <Title level={1}>Evim Güvende Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Eviniz ve eşyalarınız için kapsamlı koruma
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<HomeOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
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
            Evim Güvende Avantajları
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

export default HomeSafeInsurance;

