import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { ThunderboltOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const ElectricVehicleKasko: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'electric-1', text: 'Elektrikli araçlar için özel poliçe' },
    { id: 'electric-2', text: 'Batarya koruması dahil' },
    { id: 'electric-3', text: 'Şarj istasyonu güvencesi' },
    { id: 'electric-4', text: 'Teknoloji destekli kasko' },
    { id: 'electric-5', text: 'Çevre dostu bonus fırsatlar' },
    { id: 'electric-6', text: '7/24 özel destek hattı' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <ThunderboltOutlined />
                </div>
                <Title level={1}>Elektrikli Araç Kasko</Title>
                <Paragraph className="product-subtitle">
                  Elektrikli araçlarınız için özel tasarlanmış kasko sigortası
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<ThunderboltOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <ThunderboltOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Elektrikli Araç Kasko Avantajları
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

export default ElectricVehicleKasko;

