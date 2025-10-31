import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { HeartOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const SupplementaryHealthInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'sup-health-1', text: 'SGK üzerine tamamlayıcı sağlık' },
    { id: 'sup-health-2', text: 'Özel hastane güvencesi' },
    { id: 'sup-health-3', text: 'Muayene ücreti desteği' },
    { id: 'sup-health-4', text: 'Check-up dahil' },
    { id: 'sup-health-5', text: 'Aile paketleri' },
    { id: 'sup-health-6', text: 'Uygun fiyat seçenekleri' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <HeartOutlined />
                </div>
                <Title level={1}>Tamamlayıcı Sağlık Sigortası</Title>
                <Paragraph className="product-subtitle">
                  SGK üzerine özel sağlık güvencesi
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<HeartOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <HeartOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Tamamlayıcı Sağlık Avantajları
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

export default SupplementaryHealthInsurance;

