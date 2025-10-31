import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import { HomeOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const DASK: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'dask-1', text: 'Deprem zorunlu sigortası' },
    { id: 'dask-2', text: 'Doğal afet koruması' },
    { id: 'dask-3', text: 'Zorunlu tüm konutlar için' },
    { id: 'dask-4', text: 'Bütçenize uygun prim' },
    { id: 'dask-5', text: 'Online hızlı başvuru' },
    { id: 'dask-6', text: 'Anında poliçe teslimi' },
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
                <Title level={1}>DASK Sigortası</Title>
                <Paragraph className="product-subtitle">
                  Konutunuz için zorunlu deprem sigortası
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
            DASK Sigortası Faydaları
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

export default DASK;

