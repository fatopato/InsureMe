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
import './ProductPages.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const SecondHandTrafficInsurance: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const benefits = [
    { id: 'second-1', text: 'İkinci el araçlar için özel teklif' },
    { id: 'second-2', text: 'Anında poliçe alımı' },
    { id: 'second-3', text: 'Kasko devir işlemleri' },
    { id: 'second-4', text: 'Uygun fiyat garantisi' },
    { id: 'second-5', text: 'Detaylı bilgilendirme' },
    { id: 'second-6', text: '7/24 müşteri desteği' },
  ];

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    navigate('/teklif-karsilastir');
  };

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="page-container">
          <Row align="middle">
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <div className="product-icon">
                  <CarOutlined />
                </div>
                <Title level={1}>2. El Trafik Sigortası</Title>
                <Paragraph className="product-subtitle">
                  İkinci el aracınız için en uygun trafik sigortası tekliflerini alın
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<SafetyOutlined />}
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hemen Teklif Al
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

      <section className="product-benefits">
        <div className="page-container">
          <Title level={2} className="section-title">
            Neden 2. El Trafik Sigortası?
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

      <section className="product-quote-form" id="quote-form">
        <div className="page-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={14}>
              <Card className="quote-form-card">
                <Title level={3}>Ücretsiz Teklif Alın</Title>
                <Paragraph>
                  Aşağıdaki bilgileri doldurun ve 30+ sigorta şirketinden anında teklif alın
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
                        label="Ad Soyad"
                        rules={[{ required: true, message: 'Lütfen adınızı giriniz' }]}
                      >
                        <Input placeholder="Ad ve soyadınız" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="phone"
                        label="Telefon Numarası"
                        rules={[{ required: true, message: 'Lütfen telefon numaranızı giriniz' }]}
                      >
                        <Input placeholder="05XX XXX XX XX" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="email"
                        label="E-posta Adresi"
                        rules={[
                          { required: true, message: 'Lütfen e-posta adresinizi giriniz' },
                          { type: 'email', message: 'Geçerli bir e-posta adresi giriniz' }
                        ]}
                      >
                        <Input placeholder="ornek@email.com" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="vehicleType"
                        label="Araç Türü"
                        rules={[{ required: true, message: 'Lütfen araç türünü seçiniz' }]}
                      >
                        <Select placeholder="Araç türünü seçiniz">
                          <Select.Option value="car">Otomobil</Select.Option>
                          <Select.Option value="motorcycle">Motosiklet</Select.Option>
                          <Select.Option value="truck">Kamyon</Select.Option>
                          <Select.Option value="van">Minibüs</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="brand"
                        label="Marka"
                        rules={[{ required: true, message: 'Lütfen araç markasını giriniz' }]}
                      >
                        <Input placeholder="örn: Toyota, Ford, BMW" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="model"
                        label="Model"
                        rules={[{ required: true, message: 'Lütfen araç modelini giriniz' }]}
                      >
                        <Input placeholder="Model" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="year"
                        label="Yıl"
                        rules={[{ required: true, message: 'Lütfen yıl bilgisini giriniz' }]}
                      >
                        <Input placeholder="örn: 2020" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="licensePlate"
                        label="Plaka"
                        rules={[{ required: true, message: 'Lütfen plaka numarasını giriniz' }]}
                      >
                        <Input placeholder="örn: 34 ABC 123" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="notes"
                    label="Ek Notlar (Opsiyonel)"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Eklemek istediğiniz başka bilgi varsa yazabilirsiniz"
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
                      Anında Teklif Al
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            <Col xs={24} lg={10}>
              <Card className="info-card">
                <Title level={4}>Önemli Bilgiler</Title>
                <Alert
                  message="En İyi Fiyat Garantisi"
                  description="30+ sigorta şirketinden en iyi fiyatı bulmayı garanti ediyoruz"
                  type="success"
                  showIcon
                  style={{ marginBottom: 24 }}
                />
                <Alert
                  message="Ekstra Ücret Yok"
                  description="Ekstra ücret almıyoruz. Yalnızca sigorta primini ödersiniz."
                  type="info"
                  showIcon
                  style={{ marginBottom: 24 }}
                />
                <Alert
                  message="Anında İşlem"
                  description="2 dakikada teklifleri alın ve online olarak satın alın"
                  type="warning"
                  showIcon
                />
              </Card>

              <Card className="support-card" style={{ marginTop: 24 }}>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Title level={5}>Yardıma mı ihtiyacınız var?</Title>
                  <Paragraph>
                    Uzman ekibimiz 7/24 size yardımcı olmak için hazır
                  </Paragraph>
                  <Button type="primary" block icon={<ArrowRightOutlined />}>
                    Destek ile İletişime Geç
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

export default SecondHandTrafficInsurance;

