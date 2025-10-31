import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Space
} from 'antd';
import {
  HeartOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;

const HealthInsurance: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { id: 'health-1', text: 'Complete health coverage' },
    { id: 'health-2', text: 'Hospitalization benefits' },
    { id: 'health-3', text: 'Outpatient treatment coverage' },
    { id: 'health-4', text: 'Dental and vision care' },
    { id: 'health-5', text: 'Emergency services' },
    { id: 'health-6', text: 'Best price guarantee' },
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
                <Title level={1}>Health Insurance</Title>
                <Paragraph className="product-subtitle">
                  Comprehensive health coverage for you and your family
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<HeartOutlined />}
                  onClick={() => navigate('/teklif-karsilastir')}
                >
                  Get Quote Now
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
            Complete Health Protection
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

export default HealthInsurance;

