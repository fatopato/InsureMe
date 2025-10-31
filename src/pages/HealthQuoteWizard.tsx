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
  Checkbox
} from 'antd';
import {
  HeartOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  SettingOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title, Paragraph } = Typography;

const productTitles: Record<string, string> = {
  'tamamlayici-saglik': 'Tamamlayıcı Sağlık Sigortası',
  'ozel-saglik': 'Özel Sağlık Sigortası',
  'seyahat-saglik': 'Seyahat Sağlık Sigortası',
};

const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Kocaeli'];
const yesNo = [
  { value: 'Evet', label: 'Evet' },
  { value: 'Hayır', label: 'Hayır' },
];

const HealthQuoteWizard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const productKey = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[0] || 'tamamlayici-saglik';
  }, [location.pathname]);

  const title = productTitles[productKey] || 'Sağlık Sigortası Teklifi';

  const [current, setCurrent] = useState(0);
  const [formPerson] = Form.useForm();
  const [formMedical] = Form.useForm();
  const [formPlan] = Form.useForm();

  const steps = [
    { title: 'Kişisel Bilgiler', icon: <UserOutlined /> },
    { title: 'Sağlık Geçmişi', icon: <MedicineBoxOutlined /> },
    { title: 'Plan Tercihi', icon: <SettingOutlined /> },
  ];

  const goNext = async () => {
    try {
      if (current === 0) await formPerson.validateFields();
      if (current === 1) await formMedical.validateFields();
      if (current === 2) await formPlan.validateFields();
      setCurrent((p) => Math.min(p + 1, steps.length - 1));
    } catch {}
  };

  const goPrev = () => setCurrent((p) => Math.max(p - 1, 0));

  const handleSubmit = async () => {
    try {
      await Promise.all([
        formPerson.validateFields(),
        formMedical.validateFields(),
        formPlan.validateFields(),
      ]);
      const payload = {
        product: productKey,
        person: formPerson.getFieldsValue(true),
        medical: formMedical.getFieldsValue(true),
        plan: formPlan.getFieldsValue(true),
      };
      navigate('/teklif-karsilastir', { state: { from: 'health', payload } });
    } catch {}
  };

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Row justify="center">
        <Col xs={24} lg={18} xl={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={2} style={{ marginBottom: 8 }}>{title}</Title>
              <Paragraph>Temel kişisel bilgiler, sağlık geçmişi ve plan tercihlerinle teklifleri karşılaştır.</Paragraph>
            </div>

            <Steps current={current} items={steps} />

            {current === 0 && (
              <Card title="Kişisel Bilgiler">
                <Form form={formPerson} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="firstName" label="Ad" rules={[{ required: true }]}><Input placeholder="Ad" /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="lastName" label="Soyad" rules={[{ required: true }]}><Input placeholder="Soyad" /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="birthDate" label="Doğum Tarihi" rules={[{ required: true }]}><DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={(d)=> d && d.isAfter(dayjs())} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="gender" label="Cinsiyet" rules={[{ required: true }]}><Select options={[{value:'Erkek',label:'Erkek'},{value:'Kadın',label:'Kadın'}]} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="city" label="İl" rules={[{ required: true }]}><Select showSearch options={cities.map(c=>({value:c,label:c}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="marital" label="Medeni Hali" rules={[{ required: true }]}><Select options={[{value:'Bekar',label:'Bekar'},{value:'Evli',label:'Evli'}]} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="children" label="Çocuk Sayısı" rules={[{ required: true }]}><Select options={[0,1,2,3,4].map(n=>({value:n,label:String(n)}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="startDate" label="Başlangıç Tarihi" rules={[{ required: true }]}><DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" disabledDate={(d)=> d && d.isBefore(dayjs().startOf('day'))} /></Form.Item></Col>
                  </Row>
                </Form>
              </Card>
            )}

            {current === 1 && (
              <Card title="Sağlık Geçmişi">
                <Form form={formMedical} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="height" label="Boy (cm)" rules={[{ required: true }]}><Input placeholder="175" inputMode="numeric" /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="weight" label="Kilo (kg)" rules={[{ required: true }]}><Input placeholder="70" inputMode="numeric" /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="smoker" label="Sigara Kullanımı" rules={[{ required: true }]}><Select options={yesNo} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="chronic" label="Kronik Hastalık" rules={[{ required: true }]}><Select options={[{value:'Yok',label:'Yok'},{value:'Var',label:'Var'}]} /></Form.Item></Col>
                  </Row>
                  <Form.Item name="diseases" label="Var ise hastalıklar">
                    <Input placeholder="Örn: Diyabet, Hipertansiyon" />
                  </Form.Item>
                  <Form.Item name="previousOps" label="Son 5 yılda ameliyat/gece yatış var mı?" rules={[{ required: true }]}>
                    <Radio.Group options={yesNo} optionType="button" />
                  </Form.Item>
                </Form>
              </Card>
            )}

            {current === 2 && (
              <Card title="Plan Tercihi">
                <Form form={formPlan} layout="vertical" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="network" label="Hastane Ağı" rules={[{ required: true }]}><Select options={[{value:'Geniş Ağ',label:'Geniş Ağ'},{value:'Dar Ağ',label:'Dar Ağ'}]} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="room" label="Oda Tipi" rules={[{ required: true }]}><Select options={[{value:'Tek Kişilik',label:'Tek Kişilik'},{value:'İki Kişilik',label:'İki Kişilik'}]} /></Form.Item></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} md={12}><Form.Item name="deductible" label="Muafiyet" rules={[{ required: true }]}><Select options={[0,1000,2500,5000].map(v=>({value:v,label:v===0?'Yok':`₺${v}`}))} /></Form.Item></Col>
                    <Col xs={24} md={12}><Form.Item name="dentalEye" label="Diş/Göz Paketleri"><Checkbox.Group options={[{label:'Diş',value:'dis'},{label:'Göz',value:'goz'}]} /></Form.Item></Col>
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

export default HealthQuoteWizard;


