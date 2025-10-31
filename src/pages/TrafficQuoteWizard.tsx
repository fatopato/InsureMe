import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Steps,
  Card,
  Form,
  Input,
  Radio,
  DatePicker,
  Select,
  Row,
  Col,
  Button,
  Space,
  Alert
} from 'antd';
import {
  CarOutlined,
  IdcardOutlined,
  SettingOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title, Paragraph, Text } = Typography;

type PlateMode = 'hasPlate' | 'noPlate';

const brands = ['ALFA ROMEO', 'BMW', 'Citroen', 'Dacia', 'Fiat', 'Ford', 'Mercedes-Benz', 'Toyota', 'Volkswagen'];
const fuels = ['Benzin', 'Dizel', 'LPG', 'Hybrid', 'Elektrik'];
const bodyUsages = ['Otomobil', 'Kamyonet', 'Motosiklet'];
const purposes = ['Hususi', 'Ticari'];

const TrafficQuoteWizard: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [plateMode, setPlateMode] = useState<PlateMode>('hasPlate');
  const [formPlate] = Form.useForm();
  const [formRegistry] = Form.useForm();
  const [formVehicle] = Form.useForm();

  const steps = useMemo(() => ([
    { title: 'Araçlarım', icon: <CarOutlined /> },
    { title: 'Ruhsat Bilgileri', icon: <IdcardOutlined /> },
    { title: 'Araç Özellikleri', icon: <SettingOutlined /> },
  ]), []);

  const goNext = async () => {
    try {
      if (current === 0) await formPlate.validateFields();
      if (current === 1) await formRegistry.validateFields();
      if (current === 2) await formVehicle.validateFields();
      setCurrent(prev => Math.min(prev + 1, steps.length - 1));
    } catch {
      // validation errors shown by antd
    }
  };

  const goPrev = () => setCurrent(prev => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    try {
      await Promise.all([
        formPlate.validateFields(),
        formRegistry.validateFields(),
        formVehicle.validateFields(),
      ]);
      const payload = {
        plate: formPlate.getFieldsValue(true),
        registry: formRegistry.getFieldsValue(true),
        vehicle: formVehicle.getFieldsValue(true),
      };
      navigate('/teklif-karsilastir', { state: { from: 'traffic', payload } });
    } catch {
      // ignore; antd displays errors
    }
  };

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Row justify="center">
        <Col xs={24} lg={18} xl={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={2} style={{ marginBottom: 8 }}>Trafik Sigortası</Title>
              <Paragraph>Plaka ve araç bilgilerinle 2 dakikada teklifleri karşılaştır.</Paragraph>
            </div>

            <Steps
              current={current}
              items={steps.map(s => ({ title: s.title, icon: s.icon }))}
            />

            {current === 0 && (
              <Card>
                <Title level={4} style={{ marginBottom: 16 }}>Plaka Bilgileri</Title>
                <Paragraph>Plakan yoksa "Plakam Henüz Çıkmadı" seçeneğiyle ilerleyebilirsin.</Paragraph>
                <Radio.Group
                  value={plateMode}
                  onChange={(e) => setPlateMode(e.target.value)}
                  style={{ marginBottom: 16 }}
                >
                  <Radio value="hasPlate">Plakam Var</Radio>
                  <Radio value="noPlate">Plakam Henüz Çıkmadı</Radio>
                </Radio.Group>

                <Form form={formPlate} layout="vertical" requiredMark={false}>
                  {plateMode === 'hasPlate' ? (
                    <>
                      <Text strong>Araç Plaka No</Text>
                      <Row gutter={12} style={{ marginTop: 8 }}>
                        <Col span={6}>
                          <Form.Item name={['plate', 'city']} rules={[{ required: true, message: 'İl kodu' }]}> 
                            <Input maxLength={2} placeholder="34" />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name={['plate', 'letters']} rules={[{ required: true, message: 'Harf' }]}> 
                            <Input maxLength={3} placeholder="BGK" />
                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item name={['plate', 'number']} rules={[{ required: true, message: 'Sayı' }]}> 
                            <Input maxLength={4} placeholder="181" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <Alert type="info" showIcon message="Plakasız başvuru" description="Şasi/motor numarası adımında sorulacaktır (demo: opsiyonel)." />
                  )}
                </Form>
              </Card>
            )}

            {current === 1 && (
              <Card>
                <Title level={4}>Ruhsat Bilgileri</Title>
                <Form form={formRegistry} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item name="documentSerial" label="Belge Seri" rules={[{ required: true, message: 'Belge Seri zorunlu' }]}>
                        <Input placeholder="GL086605" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name="registrationDate" label="Ruhsat Tescil Tarihi" rules={[{ required: true, message: 'Tarih zorunlu' }]}>
                        <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={(d) => d && d.isAfter(dayjs())} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Card>
            )}

            {current === 2 && (
              <Card>
                <Title level={4}>Araç Özellikleri</Title>
                <Form form={formVehicle} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item name="brand" label="Marka" rules={[{ required: true, message: 'Marka zorunlu' }]}>
                        <Select showSearch options={brands.map(b => ({ value: b, label: b }))} placeholder="ALFA ROMEO" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name="modelYear" label="Model Yılı" rules={[{ required: true, message: 'Model yılı zorunlu' }]}>
                        <Select options={Array.from({ length: 30 }, (_, i) => {
                          const year = dayjs().year() - i;
                          return { value: String(year), label: String(year) };
                        })} placeholder="2018" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item name="fuel" label="Yakıt Tipi" rules={[{ required: true, message: 'Yakıt tipi zorunlu' }]}>
                        <Select options={fuels.map(f => ({ value: f, label: f }))} placeholder="Dizel" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name="usage" label="Kullanım Tarzı" rules={[{ required: true, message: 'Kullanım tarzı zorunlu' }]}>
                        <Select options={bodyUsages.map(u => ({ value: u, label: u }))} placeholder="Otomobil" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item name="purpose" label="Kullanım Amacı" rules={[{ required: true, message: 'Kullanım amacı zorunlu' }]}>
                        <Select options={purposes.map(p => ({ value: p, label: p }))} placeholder="Hususi" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name="isHandicapped" label="Engelli aracı mı?" rules={[{ required: true, message: 'Seçim zorunlu' }]}>
                        <Select options={[{ value: 'Evet', label: 'Evet' }, { value: 'Hayır', label: 'Hayır' }]} placeholder="Hayır" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="hasAccessories" label="Sonradan monte edilen aksesuar var mı?" rules={[{ required: true, message: 'Seçim zorunlu' }]}>
                    <Radio.Group>
                      <Radio value="Evet">Evet</Radio>
                      <Radio value="Hayır">Hayır</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              </Card>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={current === 0} onClick={goPrev} icon={<ArrowLeftOutlined />}>Geri</Button>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={goNext} icon={<ArrowRightOutlined />}>Devam</Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={handleSubmit} icon={<ArrowRightOutlined />}>Tekliflerimi Hazırla</Button>
              )}
            </div>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default TrafficQuoteWizard;


