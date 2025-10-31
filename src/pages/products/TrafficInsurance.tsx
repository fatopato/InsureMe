import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Space,
  Alert,
  Divider
} from 'antd';
import {
  CarOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import '../products/ProductPages.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const TrafficInsurance: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const benefits = [
    { id: 'benefit-1', text: 'Mandatory coverage for all vehicles' },
    { id: 'benefit-2', text: 'Instant claim processing' },
    { id: 'benefit-3', text: '24/7 roadside assistance' },
    { id: 'benefit-4', text: 'Direct connection with insurance companies' },
    { id: 'benefit-5', text: 'Best price guarantee' },
    { id: 'benefit-6', text: 'Easy policy management' },
  ];

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    navigate('/teklif-karsilastir');
  };

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <CarOutlined />
                </div>
                <Title level={1}>Traffic Insurance</Title>
                <Paragraph className="product-subtitle">
                  Get instant quotes from 30+ insurance companies in just 2 minutes
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<SafetyOutlined />}
                  onClick={() => navigate('/trafik/teklif')}
                >
                  Trafik Teklifi Al
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="product-hero-image">
                <CarOutlined className="hero-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Why Choose Our Traffic Insurance?
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

      {/* Quote Form Section */}
      <section className="product-quote-form" id="quote-form">
        <div className="page-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={14}>
              <Card className="quote-form-card">
                <Title level={3}>Get Your Free Quote</Title>
                <Paragraph>
                  Fill in the details below and get instant quotes from multiple insurance companies
                </Paragraph>
                <Divider />
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  size="large"
                >
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input placeholder="Enter your full name" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please enter your phone' }]}
                      >
                        <Input placeholder="Enter your phone number" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' }
                        ]}
                      >
                        <Input placeholder="Enter your email" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="vehicleType"
                        label="Vehicle Type"
                        rules={[{ required: true, message: 'Please select vehicle type' }]}
                      >
                        <Select placeholder="Select vehicle type">
                          <Select.Option value="car">Car</Select.Option>
                          <Select.Option value="motorcycle">Motorcycle</Select.Option>
                          <Select.Option value="truck">Truck</Select.Option>
                          <Select.Option value="van">Van</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="brand"
                        label="Brand"
                        rules={[{ required: true, message: 'Please enter vehicle brand' }]}
                      >
                        <Input placeholder="e.g., Toyota, Ford, BMW" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="model"
                        label="Model"
                        rules={[{ required: true, message: 'Please enter vehicle model' }]}
                      >
                        <Input placeholder="Enter model" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="year"
                        label="Year"
                        rules={[{ required: true, message: 'Please enter year' }]}
                      >
                        <Input placeholder="e.g., 2020" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="licensePlate"
                        label="License Plate"
                        rules={[{ required: true, message: 'Please enter license plate' }]}
                      >
                        <Input placeholder="e.g., 34 ABC 123" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="notes"
                    label="Additional Notes (Optional)"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Any additional information you'd like to share"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      icon={<SafetyOutlined />}
                    >
                      Get Instant Quotes
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            <Col xs={24} lg={10}>
              <Card className="info-card">
                <Title level={4}>Important Information</Title>
                <Alert
                  message="Best Price Guarantee"
                  description="We guarantee to find you the best price from 30+ insurance companies"
                  type="success"
                  showIcon
                  style={{ marginBottom: 24 }}
                />
                <Alert
                  message="No Extra Fees"
                  description="We don't charge any extra fees. You only pay the insurance premium."
                  type="info"
                  showIcon
                  style={{ marginBottom: 24 }}
                />
                <Alert
                  message="Instant Processing"
                  description="Get your quotes in real-time and purchase online in 2 minutes"
                  type="warning"
                  showIcon
                />
              </Card>

              <Card className="support-card" style={{ marginTop: 24 }}>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Title level={5}>Need Help?</Title>
                  <Paragraph>
                    Our expert team is available 24/7 to assist you with any questions
                  </Paragraph>
                  <Button type="primary" block icon={<ArrowRightOutlined />}>
                    Contact Support
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default TrafficInsurance;

