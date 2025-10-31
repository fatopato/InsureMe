import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Steps,
  Card,
  Form,
  Input,
  DatePicker,
  Select,
  Row,
  Col,
  Button,
  Space,
  Radio,
  InputNumber
} from 'antd';
import {
  MobileOutlined,
  SmileOutlined,
  SafetyOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title, Paragraph } = Typography;

const productTitles: Record<string, string> = {
  'cep-telefonu': 'Cep Telefonu Sigortası',
  'evcil-hayvan': 'Evcil Hayvan Sigortası',
  'ferdi-kaza': 'Geniş Asistanslı Ferdi Kaza',
};

const phoneBrands = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Oppo', 'Realme'];
const species = ['Köpek', 'Kedi'];
const occupations = ['Ofis', 'Saha', 'Serbest', 'Sporcu'];

const OtherQuoteWizard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const productKey = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[0] || 'cep-telefonu';
  }, [location.pathname]);

  const title = productTitles[productKey] || 'Sigorta Teklifi';

  const [current, setCurrent] = useState(0);
  const [formA] = Form.useForm();
  const [formB] = Form.useForm();

  const steps = useMemo(() => {
    if (productKey === 'cep-telefonu') {
      return [
        { title: 'Cihaz Bilgileri', icon: <MobileOutlined /> },
        { title: 'Kapsam Tercihi', icon: <SafetyOutlined /> },
      ];
    }
    if (productKey === 'evcil-hayvan') {
      return [
        { title: 'Pet Bilgileri', icon: <SmileOutlined /> },
        { title: 'Kapsam Tercihi', icon: <SafetyOutlined /> },
      ];
    }
    return [
      { title: 'Kişisel Bilgiler', icon: <SmileOutlined /> },
      { title: 'Kapsam Tercihi', icon: <SafetyOutlined /> },
    ];
  }, [productKey]);

  const goNext = async () => {
    try {
      if (current === 0) await formA.validateFields();
      if (current === 1) await formB.validateFields();
      setCurrent((p) => Math.min(p + 1, steps.length - 1));
    } catch {}
  };

  const goPrev = () => setCurrent((p) => Math.max(p - 1, 0));

  const handleSubmit = async () => {
    try {
      await Promise.all([formA.validateFields(), formB.validateFields()]);
      const payload = {
        product: productKey,
        stepA: formA.getFieldsValue(true),
        stepB: formB.getFieldsValue(true),
      };
      navigate('/teklif-karsilastir', { state: { from: 'other', payload } });
    } catch {}
  };

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Row justify="center">
        <Col xs={24} lg={18} xl={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={2} style={{ marginBottom: 8 }}>{title}</Title>
              <Paragraph>İlgili ürün için bilgilerinizi girerek en uygun teklifleri görün.</Paragraph>
            </div>

            <Steps current={current} items={steps} />

            {current === 0 && productKey === 'cep-telefonu' && (
              <Card title="Cihaz Bilgileri">
                <Form form={formA} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="brand" label="Marka" rules={[{ required: true }]}><Select showSearch options={phoneBrands.map(b=>({value:b,label:b}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="model" label="Model" rules={[{ required: true }]}><Input placeholder="iPhone 14 Pro" /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="purchaseDate" label="Satın Alma Tarihi" rules={[{ required: true }]}><DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={(d)=> d && d.isAfter(dayjs())} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="value" label="Cihaz Bedeli (₺)" rules={[{ required: true }]}><InputNumber min={1000} step={100} style={{ width: '100%' }} /></Form.Item></Col>
                  </Row>
                  <Form.Item name="imei" label="IMEI (opsiyonel)"><Input maxLength={15} /></Form.Item>
                </Form>
              </Card>
            )}

            {current === 0 && productKey === 'evcil-hayvan' && (
              <Card title="Pet Bilgileri">
                <Form form={formA} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="species" label="Tür" rules={[{ required: true }]}><Select options={species.map(s=>({value:s,label:s}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="breed" label="Cins" rules={[{ required: true }]}><Input placeholder="Golden Retriever" /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="age" label="Yaş" rules={[{ required: true }]}><InputNumber min={0} max={25} style={{ width: '100%' }} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="microchip" label="Mikroçip" rules={[{ required: true }]}><Radio.Group options={[{label:'Var',value:'Var'},{label:'Yok',value:'Yok'}]} optionType="button" /></Form.Item></Col>
                  </Row>
                  <Form.Item name="vaccinations" label="Aşılar"><Input placeholder="Kuduz, Karma..." /></Form.Item>
                </Form>
              </Card>
            )}

            {current === 0 && productKey === 'ferdi-kaza' && (
              <Card title="Kişisel Bilgiler">
                <Form form={formA} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="occupation" label="Meslek" rules={[{ required: true }]}><Select options={occupations.map(o=>({value:o,label:o}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="sport" label="Riskli Spor" rules={[{ required: true }]}><Radio.Group options={[{label:'Yok',value:'Yok'},{label:'Var',value:'Var'}]} optionType="button" /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="coverage" label="Teminat (₺)" rules={[{ required: true }]}><InputNumber min={50000} step={5000} style={{ width: '100%' }} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="dailyComp" label="Günlük Tazminat (₺)"><InputNumber min={0} step={50} style={{ width: '100%' }} /></Form.Item></Col>
                  </Row>
                </Form>
              </Card>
            )}

            {current === 1 && (
              <Card title="Kapsam Tercihi">
                <Form form={formB} layout="vertical" requiredMark={false}>
                  {productKey === 'cep-telefonu' && (
                    <>
                      <Form.Item name="plan" label="Plan" rules={[{ required: true }]}>
                        <Radio.Group>
                          <Radio value="Ekran + Sıvı">Ekran + Sıvı</Radio>
                          <Radio value="Tam Kapsam">Tam Kapsam</Radio>
                          <Radio value="Hırsızlık + Hasar">Hırsızlık + Hasar</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </>
                  )}
                  {productKey === 'evcil-hayvan' && (
                    <>
                      <Form.Item name="plan" label="Plan" rules={[{ required: true }]}>
                        <Radio.Group>
                          <Radio value="Temel">Temel</Radio>
                          <Radio value="Standart">Standart</Radio>
                          <Radio value="Geniş">Geniş</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </>
                  )}
                  {productKey === 'ferdi-kaza' && (
                    <>
                      <Form.Item name="plan" label="Plan" rules={[{ required: true }]}>
                        <Radio.Group>
                          <Radio value="Temel">Temel</Radio>
                          <Radio value="Kapsamlı">Kapsamlı</Radio>
                          <Radio value="Plus">Plus</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </>
                  )}
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

export default OtherQuoteWizard;


