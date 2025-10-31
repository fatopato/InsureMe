import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Steps,
  Card,
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Space,
  Radio,
  InputNumber
} from 'antd';
import {
  HomeOutlined,
  EnvironmentOutlined,
  SettingOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const productTitles: Record<string, string> = {
  'dask': 'DASK (Zorunlu Deprem Sigortası)',
  'konut-sigortasi': 'Konut Sigortası',
  'evim-guvende': 'Evim Güvende',
};

const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Kocaeli'];
const districts = ['Merkez', 'Kadıköy', 'Çankaya', 'Karşıyaka', 'Osmangazi'];

const HomeQuoteWizard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const productKey = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[0] || 'konut-sigortasi';
  }, [location.pathname]);

  const title = productTitles[productKey] || 'Konut Sigortası Teklifi';

  const [current, setCurrent] = useState(0);
  const [formAddress] = Form.useForm();
  const [formProperty] = Form.useForm();
  const [formCoverage] = Form.useForm();

  const steps = [
    { title: 'Adres Bilgileri', icon: <EnvironmentOutlined /> },
    { title: 'Konut Bilgileri', icon: <HomeOutlined /> },
    { title: 'Teminat Tercihleri', icon: <SettingOutlined /> },
  ];

  const goNext = async () => {
    try {
      if (current === 0) await formAddress.validateFields();
      if (current === 1) await formProperty.validateFields();
      if (current === 2) await formCoverage.validateFields();
      setCurrent((p) => Math.min(p + 1, steps.length - 1));
    } catch {}
  };

  const goPrev = () => setCurrent((p) => Math.max(p - 1, 0));

  const handleSubmit = async () => {
    try {
      await Promise.all([
        formAddress.validateFields(),
        formProperty.validateFields(),
        formCoverage.validateFields(),
      ]);
      const payload = {
        product: productKey,
        address: formAddress.getFieldsValue(true),
        property: formProperty.getFieldsValue(true),
        coverage: formCoverage.getFieldsValue(true),
      };
      navigate('/teklif-karsilastir', { state: { from: 'home', payload } });
    } catch {}
  };

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Row justify="center">
        <Col xs={24} lg={18} xl={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={2} style={{ marginBottom: 8 }}>{title}</Title>
              <Paragraph>Adres, konut ve teminat tercihlerinizle konut sigortası tekliflerini karşılaştırın.</Paragraph>
            </div>

            <Steps current={current} items={steps} />

            {current === 0 && (
              <Card title="Adres Bilgileri">
                <Form form={formAddress} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="city" label="İl" rules={[{ required: true }]}><Select showSearch options={cities.map(c=>({value:c,label:c}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="district" label="İlçe" rules={[{ required: true }]}><Select showSearch options={districts.map(d=>({value:d,label:d}))} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="addressCode" label="Adres Kodu" rules={[{ required: productKey!=='dask'? false : false }]}><Input placeholder="1414955334" /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="postalCode" label="Posta Kodu"><Input placeholder="34000" /></Form.Item></Col>
                  </Row>
                </Form>
              </Card>
            )}

            {current === 1 && (
              <Card title="Konut Bilgileri">
                <Form form={formProperty} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="buildingAge" label="Bina Yaşı" rules={[{ required: true }]}><InputNumber min={0} max={100} style={{ width: '100%' }} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="floor" label="Bulunduğu Kat" rules={[{ required: true }]}><InputNumber min={0} max={50} style={{ width: '100%' }} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="area" label="Metrekare (m²)" rules={[{ required: true }]}><InputNumber min={20} max={1000} style={{ width: '100%' }} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="usage" label="Kullanım Şekli" rules={[{ required: true }]}><Select options={[{value:'Mesken',label:'Mesken'},{value:'İşyeri',label:'İşyeri'}]} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="buildingType" label="Yapı Tarzı" rules={[{ required: true }]}><Select options={[{value:'Betonarme',label:'Betonarme'},{value:'Yığma',label:'Yığma'}]} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="hasSecurity" label="Güvenlik Önlemleri" rules={[{ required: true }]}><Select mode="multiple" options={[{value:'Alarm',label:'Alarm'},{value:'Çelik Kapı',label:'Çelik Kapı'},{value:'Kamera',label:'Kamera'}]} /></Form.Item></Col>
                  </Row>
                </Form>
              </Card>
            )}

            {current === 2 && (
              <Card title="Teminat Tercihleri">
                <Form form={formCoverage} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="contentValue" label="Eşya Bedeli (₺)" rules={[{ required: true }]}><InputNumber min={10000} step={1000} style={{ width: '100%' }} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="liability" label="Sorumluluk (₺)" rules={[{ required: true }]}><InputNumber min={50000} step={5000} style={{ width: '100%' }} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="earthquake" label="Deprem/DASK" rules={[{ required: true }]}><Radio.Group options={[{label:'Var',value:'Var'},{label:'Yok',value:'Yok'}]} optionType="button" /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="flood" label="Sel/Su Baskını" rules={[{ required: true }]}><Radio.Group options={[{label:'Var',value:'Var'},{label:'Yok',value:'Yok'}]} optionType="button" /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="theft" label="Hırsızlık" rules={[{ required: true }]}><Radio.Group options={[{label:'Var',value:'Var'},{label:'Yok',value:'Yok'}]} optionType="button" /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="glass" label="Cam Kırılması"><Radio.Group options={[{label:'Var',value:'Var'},{label:'Yok',value:'Yok'}]} optionType="button" /></Form.Item></Col>
                  </Row>
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

export default HomeQuoteWizard;


