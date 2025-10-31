import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { ThunderboltOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const IMM: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'imm-1', text: 'Anında hasar desteği' },
    { id: 'imm-2', text: '3 saniyede hızlı hizmet' },
    { id: 'imm-3', text: 'Çekici hizmeti' },
    { id: 'imm-4', text: 'Oto tamiri desteği' },
    { id: 'imm-5', text: 'Otomatik hasar işlemleri' },
    { id: 'imm-6', text: '7/24 acil yardım hattı' },
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
                <Title level={1}>İMM Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Anında hasar desteği ve hızlı çözüm
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
            İMM Sigortası Avantajları
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

export default IMM;

