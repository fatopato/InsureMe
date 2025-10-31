import React from 'react';
import { Typography, Row, Col, Card, Form, Input, Button, Space } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  SendOutlined
} from '@ant-design/icons';
import './CommonPages.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Contact form:', values);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="page-container">
          <Space direction="vertical" size="large" style={{ textAlign: 'center', width: '100%' }}>
            <Title level={1}>İletişim</Title>
            <Paragraph className="hero-description">
              Ekibimizle iletişime geçin – 7/24 yardımcı olmak için buradayız
            </Paragraph>
          </Space>
        </div>
      </section>

      <section className="contact-section">
        <div className="page-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card className="contact-info-card">
                  <PhoneOutlined className="contact-icon" />
                  <Title level={5}>Telefon</Title>
                  <Text>444 00 00</Text>
                  <Paragraph type="secondary">7/24 hizmet</Paragraph>
                </Card>
                <Card className="contact-info-card">
                  <MailOutlined className="contact-icon" />
                  <Title level={5}>E-posta</Title>
                  <Text>support@insureme.com</Text>
                  <Paragraph type="secondary">24 saat içinde dönüş yaparız</Paragraph>
                </Card>
                <Card className="contact-info-card">
                  <GlobalOutlined className="contact-icon" />
                  <Title level={5}>Ofis</Title>
                  <Text>İstanbul, Türkiye</Text>
                  <Paragraph type="secondary">Pazartesi - Cuma, 09:00 - 18:00</Paragraph>
                </Card>
              </Space>
            </Col>

            <Col xs={24} lg={16}>
              <Card className="contact-form-card">
                <Title level={3}>Bize mesaj gönderin</Title>
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  size="large"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="firstName"
                        label="Ad"
                        rules={[{ required: true, message: 'Lütfen adınızı giriniz' }]}
                      >
                        <Input placeholder="Adınız" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="lastName"
                        label="Soyad"
                        rules={[{ required: true, message: 'Lütfen soyadınızı giriniz' }]}
                      >
                        <Input placeholder="Soyadınız" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label="E-posta"
                    rules={[
                      { required: true, message: 'Lütfen e-posta adresinizi giriniz' },
                      { type: 'email', message: 'Geçerli bir e-posta adresi giriniz' }
                    ]}
                  >
                    <Input placeholder="ornek@eposta.com" />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    label="Konu"
                    rules={[{ required: true, message: 'Lütfen konu giriniz' }]}
                  >
                    <Input placeholder="Konu" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Mesaj"
                    rules={[{ required: true, message: 'Lütfen mesajınızı giriniz' }]}
                  >
                    <TextArea rows={6} placeholder="Size nasıl yardımcı olabiliriz?" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<SendOutlined />}
                    >
                      Mesaj Gönder
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Contact;

