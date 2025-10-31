import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { MobileOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const MobilePhoneInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'mobile-1', text: 'Kırılma ve hasar koruması' },
    { id: 'mobile-2', text: 'Çalıntı ve kayıp teminatı' },
    { id: 'mobile-3', text: 'Ekran tamiri dahil' },
    { id: 'mobile-4', text: 'Hızlı değişim hizmeti' },
    { id: 'mobile-5', text: 'Tüm marka ve model' },
    { id: 'mobile-6', text: 'Ekonomik primler' },
  ];

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <MobileOutlined />
                </div>
                <Title level={1}>Cep Telefonu Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Cep telefonunuz için kapsamlı güvenlik ve koruma
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<MobileOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Hemen Teklif Al
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <MobileOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Cep Telefonu Sigortası Avantajları
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

export default MobilePhoneInsurance;

