import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { SafetyOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const PersonalAccidentInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'accident-1', text: 'Kaza sonrası maddi destek' },
    { id: 'accident-2', text: 'Maluliyet teminatı' },
    { id: 'accident-3', text: 'Geniş asistanlık hizmetleri' },
    { id: 'accident-4', text: 'Aile paketleri' },
    { id: 'accident-5', text: 'Yurt içi ve yurt dışı' },
    { id: 'accident-6', text: '7/24 destek hattı' },
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
                <Title level={1}>Geniş Asistanslı Ferdi Kaza Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Kaza durumunda geniş kapsamlı güvenlik ağı
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
            Ferdi Kaza Sigortası Avantajları
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

export default PersonalAccidentInsurance;

