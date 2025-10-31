import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Space,
  Tag,
  Form,
  Radio,
  Checkbox,
  Divider,
  Button
} from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

type Quote = {
  company: string;
  coverage?: string; // vehicle
  price: number;
  features: string[];
  rating?: number;
  // health
  plan?: string;
  network?: string;
  room?: string;
  deductible?: number;
};

const vehicleAddons = [
  { key: 'roadside', label: '7/24 Yol Yardım', price: 150 },
  { key: 'replacement', label: 'İkame Araç', price: 220 },
  { key: 'glass', label: 'Cam Onarım', price: 90 },
  { key: 'noClaim', label: 'Hasarsızlık Koruma', price: 180 },
];

const healthAddons = [
  { key: 'dental', label: 'Diş Paketi', price: 450 },
  { key: 'eye', label: 'Göz Paketi', price: 350 },
  { key: 'checkup', label: 'Yıllık Check-up', price: 300 },
  { key: 'networkUp', label: 'Hastane Ağı Genişletme', price: 600 },
];

const otherAddons = [
  { key: 'accessory', label: 'Aksesuar Koruma', price: 150 },
  { key: 'express', label: 'Hızlı Onarım Hizmeti', price: 120 },
  { key: 'pet-dental', label: 'Pet Diş Paketi', price: 200 },
  { key: 'sport', label: 'Riskli Sporlar Teminatı', price: 250 },
];

const PolicyCustomize: React.FC = () => {
  const location = useLocation() as any;
  const navigate = useNavigate();
  const quote: Quote | undefined = location.state?.quote;
  const kind: 'vehicle' | 'health' | 'other' = location.state?.kind === 'health' ? 'health' : (location.state?.kind === 'other' ? 'other' : 'vehicle');

  const [form] = Form.useForm();

  const basePrice = quote?.price ?? 0;
  const selectedAddons = Form.useWatch('addons', form) as string[] | undefined;
  const totalAddons = useMemo(() => {
    const set = new Set(selectedAddons || []);
    const list = kind === 'health' ? healthAddons : (kind === 'other' ? otherAddons : vehicleAddons);
    return list.filter(a => set.has(a.key)).reduce((sum, a) => sum + a.price, 0);
  }, [selectedAddons, kind]);
  const total = basePrice + totalAddons;

  const handleProceedPayment = () => {
    const config = form.getFieldsValue(true);
    navigate('/odeme', { state: { quote, config, total } });
  };

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={2} style={{ marginBottom: 0 }}>Poliçe Detayı ve Özelleştirme</Title>
                <Paragraph type="secondary">Seçtiğiniz teklifi kapsam ve ek teminatlarla özelleştirin.</Paragraph>
              </div>

              <Card>
                <Row justify="space-between" align="middle">
                  <Space size="large">
                    <div>
                      <Title level={4} style={{ marginBottom: 0 }}>{quote?.company || 'Seçili Şirket'}</Title>
                      <Tag color="blue" style={{ marginTop: 8 }}>{kind === 'health' ? (quote?.plan || 'Plan') : (quote?.coverage || 'Kapsam')}</Tag>
                    </div>
                  </Space>
                  <Space>
                    <Text strong style={{ fontSize: 22, color: '#52c41a' }}>₺{basePrice.toLocaleString()}</Text>
                  </Space>
                </Row>
                <Divider />
                <Row>
                  <Col span={24}>
                    <Space direction="vertical">
                      {(quote?.features || []).map((f) => (
                        <Space key={f}>
                          <CheckCircleOutlined style={{ color: '#52c41a' }} />
                          <span>{f}</span>
                        </Space>
                      ))}
                      {kind === 'health' && (
                        <>
                          <span>Hastane Ağı: <strong>{quote?.network || '-'}</strong></span>
                          <span>Oda Tipi: <strong>{quote?.room || '-'}</strong></span>
                          <span>Muafiyet: <strong>{typeof quote?.deductible === 'number' ? (quote?.deductible === 0 ? 'Yok' : `₺${quote?.deductible.toLocaleString()}`) : '-'}</strong></span>
                        </>
                      )}
                    </Space>
                  </Col>
                </Row>
              </Card>

              <Form form={form} layout="vertical" initialValues={{ coverage: (kind === 'health' ? (quote?.plan || 'Standart') : (quote?.coverage || 'Standart')), addons: [] }}>
                <Card title={kind === 'health' ? 'Plan Seçimi' : 'Kapsam Seçimi'}>
                  <Form.Item name={kind === 'health' ? 'plan' : 'coverage'} style={{ marginBottom: 0 }}>
                    {kind === 'health' ? (
                      <Radio.Group>
                        <Radio value="Temel">Temel</Radio>
                        <Radio value="Standart">Standart</Radio>
                        <Radio value="Geniş Ağ">Geniş Ağ</Radio>
                      </Radio.Group>
                    ) : (
                      <Radio.Group>
                        <Radio value="Temel">Temel</Radio>
                        <Radio value="Standart">Standart</Radio>
                        <Radio value="Kapsamlı">Kapsamlı</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Card>

                <Card title="Ek Teminatlar" style={{ marginTop: 16 }}>
                  <Form.Item name="addons" valuePropName="checkedKeys" style={{ marginBottom: 0 }}>
                    <Checkbox.Group style={{ width: '100%' }}>
                      <Row gutter={[0, 8]}>
                        {(kind === 'health' ? healthAddons : (kind === 'other' ? otherAddons : vehicleAddons)).map(a => (
                          <Col span={24} key={a.key}>
                            <Checkbox value={a.key}>{a.label} (+₺{a.price})</Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </Card>
              </Form>
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Özet">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Row justify="space-between">
                <Text>Temel Prim</Text>
                <Text>₺{basePrice.toLocaleString()}</Text>
              </Row>
              <Row justify="space-between">
                <Text>Ek Teminatlar</Text>
                <Text>₺{totalAddons.toLocaleString()}</Text>
              </Row>
              <Divider style={{ margin: '8px 0' }} />
              <Row justify="space-between">
                <Text strong>Toplam</Text>
                <Text strong style={{ color: '#52c41a' }}>₺{total.toLocaleString()}</Text>
              </Row>
              <Button type="primary" block onClick={handleProceedPayment}>Ödemeye Geç</Button>
              <Button block onClick={() => navigate(-1)}>Geri Dön</Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PolicyCustomize;


