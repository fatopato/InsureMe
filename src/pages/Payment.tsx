import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Space,
  Alert
} from 'antd';

const { Title, Text } = Typography;

const Payment: React.FC = () => {
  const location = useLocation() as any;
  const navigate = useNavigate();
  const total: number = location.state?.total ?? 0;
  const quote = location.state?.quote;
  const config = location.state?.config;
  const [form] = Form.useForm();

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replaceAll(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 3) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    form.setFieldsValue({ expiry: value });
  };

  const handlePay = async () => {
    try {
      await form.validateFields();
      // Demo: simulate payment success and generate policy number
      const order = {
        quote,
        config,
        total,
        policyNumber: 'PL-' + Math.random().toString(36).slice(2, 10).toUpperCase()
      };
      navigate('/odeme/basarili', { state: { order } });
    } catch {
      // errors shown by antd
    }
  };

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Title level={2} style={{ marginBottom: 0 }}>Ödeme Bilgileri</Title>
              <Alert type="info" showIcon message="Demo Ödeme" description="Gerçek ödeme yapılmayacak, bilgiler doğrulanınca başarıyla tamamlanacak." />
              <Form form={form} layout="vertical" requiredMark={false}>
                <Form.Item name="cardName" label="Kart Üzerindeki İsim" rules={[{ required: true, message: 'Zorunlu alan' }]}>
                  <Input placeholder="Ad Soyad" />
                </Form.Item>
                <Row gutter={16}>
                  <Col xs={24} md={14}>
                    <Form.Item name="cardNumber" label="Kart Numarası" rules={[{ required: true, message: 'Zorunlu alan' }, { pattern: /^\d{16}$/, message: '16 haneli sayı' }]}>
                      <Input placeholder="1111222233334444" maxLength={16} />
                    </Form.Item>
                  </Col>
                  <Col xs={12} md={5}>
                    <Form.Item name="expiry" label="SKT (AA/YY)" rules={[{ required: true, message: 'Zorunlu' }, { pattern: /^(0[1-9]|1[0-2])\/(\d{2})$/, message: 'AA/YY' }]}>
                      <Input
                        placeholder="12/27"
                        maxLength={5}
                        value={form.getFieldValue('expiry') || ''}
                        onChange={handleExpiryChange}
                        inputMode="numeric"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={12} md={5}>
                    <Form.Item name="cvv" label="CVV" rules={[{ required: true, message: 'Zorunlu' }, { pattern: /^\d{3}$/, message: '3 haneli' }]}>
                      <Input placeholder="123" maxLength={3} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="installment" label="Taksit" initialValue={1}>
                  <Select options={[1,2,3,6,9,12].map(v => ({ value: v, label: `${v} Taksit` }))} />
                </Form.Item>
                <Form.Item name="kvkk" valuePropName="checked" rules={[{ validator:(_,v)=> v? Promise.resolve(): Promise.reject(new Error('KVKK onayı gereklidir')) }]}> 
                  <Checkbox>KVKK ve Mesafeli Satış sözleşmesini kabul ediyorum</Checkbox>
                </Form.Item>
              </Form>
              <Button type="primary" size="large" onClick={handlePay}>
                Ödemeyi Tamamla
              </Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card>
            <Title level={4}>Sipariş Özeti</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text>Şirket: <strong>{quote?.company || '-'}</strong></Text>
              <Text>Kapsam: <strong>{config?.coverage || quote?.coverage}</strong></Text>
              <Text>Toplam Tutar: <strong style={{ color: '#52c41a' }}>₺{Number(total).toLocaleString()}</strong></Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Payment;


