import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { SafetyOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const GreenCard: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'green-1', text: 'Yurt dışında geçerli zorunlu sigorta' },
    { id: 'green-2', text: 'Avrupa\'da seyahat güvencesi' },
    { id: 'green-3', text: 'Hızlı ve kolay başvuru' },
    { id: 'green-4', text: 'Online poliçe alımı' },
    { id: 'green-5', text: 'Uygun fiyat seçenekleri' },
    { id: 'green-6', text: '7/24 destek hizmeti' },
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
                <Title level={1}>Yeşil Kart Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Yurt dışında seyahat için zorunlu yeşil kart sigortası
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<SafetyOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
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
            Yeşil Kart Sigortası Avantajları
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

export default GreenCard;

