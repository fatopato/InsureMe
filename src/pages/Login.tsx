import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Form,
  Input,
  Button,
  Space,
  Alert,
  Steps,
  Row,
  Col
} from 'antd';
import {
  SafetyOutlined,
  UserOutlined,
  PhoneOutlined,
  LockOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import './Login.css';

const { Title, Paragraph } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState<{ tcno: string; phone: string } | null>(null);
  const [smsCodeSent, setSmsCodeSent] = useState(false);
  const [smsVerified, setSmsVerified] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const handleStep1 = async (values: any) => {
    const { tcno, phone } = values;
    setUserInfo({ tcno, phone });
    
    // Simulate API call to check if user exists
    // In demo, randomly determine if user is new or existing
    const userExists = Math.random() > 0.5;
    setIsNewUser(!userExists);
    
    // Simulate SMS sending
    setSmsCodeSent(true);
    setCurrentStep(1);
  };

  const handleStep2 = (values: any) => {
    const { smsCode } = values;
    
    // Demo: Accept code 1234
    if (smsCode === '1234') {
      setSmsVerified(true);
      setCurrentStep(2);
      
      // Redirect after short delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      form.setFields([
        {
          name: 'smsCode',
          errors: ['Geçersiz kod. Lütfen kontrol edip tekrar deneyin.'],
        },
      ]);
    }
  };

  const handleResendCode = () => {
    // In demo, just show message
    setSmsCodeSent(false);
    setTimeout(() => {
      setSmsCodeSent(true);
    }, 1000);
  };

  const steps = [
    {
      title: 'Bilgiler',
      description: 'Kimlik ve telefon bilgisi',
    },
    {
      title: 'Doğrulama',
      description: 'SMS kodu girişi',
    },
    {
      title: 'Giriş',
      description: 'Hoş geldiniz',
    },
  ];

  return (
    <div className="login-page">
      <section className="login-hero">
        <div className="page-container">
          <Row justify="center">
            <Col xs={24} md={16} lg={10}>
              <Space direction="vertical" size="large" style={{ textAlign: 'center', width: '100%' }}>
                <SafetyOutlined className="login-icon" />
                <Title level={1}>InsureMe'ye Hoş Geldin!</Title>
                <Paragraph className="login-description">
                  Giriş yapmak veya üye olmak için aşağıdaki alanları doldurabilirsin.
                </Paragraph>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      <section className="login-section">
        <div className="page-container">
          <Row justify="center">
            <Col xs={24} md={16} lg={12}>
              <Card className="login-card">
                <Steps
                  current={currentStep}
                  items={steps}
                  className="login-steps"
                />

                {currentStep === 0 && (
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleStep1}
                    size="large"
                    className="login-form"
                  >
                    <Form.Item
                      name="tcno"
                      label="TC Kimlik No veya Vergi No"
                      rules={[
                        { required: true, message: 'Lütfen TC Kimlik No veya Vergi No giriniz' },
                        { pattern: /^\d{10,11}$/, message: '10-11 haneli numara giriniz' }
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined />}
                        placeholder="TC Kimlik No veya Vergi No"
                        maxLength={11}
                      />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Cep Telefonu"
                      rules={[
                        { required: true, message: 'Lütfen cep telefonu numaranızı giriniz' },
                        { pattern: /^0\d{10}$/, message: 'Geçerli bir telefon numarası giriniz (örn: 05551234567)' }
                      ]}
                    >
                      <Input
                        prefix={<PhoneOutlined />}
                        placeholder="05XX XXX XX XX"
                        maxLength={11}
                      />
                    </Form.Item>

                    <Alert
                      message="Demo Modu"
                      description="SMS kodu olarak 1234 numarasını kullanın."
                      type="info"
                      showIcon
                      style={{ marginBottom: 24 }}
                    />

                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      icon={<PhoneOutlined />}
                    >
                      SMS Kodu Gönder
                    </Button>
                  </Form>
                )}

                {currentStep === 1 && smsCodeSent && (
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleStep2}
                    size="large"
                    className="login-form"
                  >
                    <Alert
                      message={
                        isNewUser
                          ? 'Yeni kullanıcı olarak kayıt oluyorsunuz'
                          : 'Giriş yapıyorsunuz'
                      }
                      description={
                        <div>
                          <Paragraph>
                            {userInfo?.phone} numarasına SMS gönderildi.
                          </Paragraph>
                          <Paragraph strong style={{ fontSize: '14px' }}>
                            Demo kod: 1234
                          </Paragraph>
                        </div>
                      }
                      type={isNewUser ? 'info' : 'success'}
                      showIcon
                      style={{ marginBottom: 24 }}
                    />

                    <Form.Item
                      name="smsCode"
                      label="SMS Kodu"
                      rules={[
                        { required: true, message: 'Lütfen SMS kodunu giriniz' },
                        { pattern: /^\d{4}$/, message: '4 haneli kod giriniz' }
                      ]}
                    >
                      <Input
                        prefix={<LockOutlined />}
                        placeholder="1234"
                        maxLength={4}
                      />
                    </Form.Item>

                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        icon={<CheckCircleOutlined />}
                      >
                        Kodu Doğrula
                      </Button>
                      <Button
                        type="link"
                        onClick={handleResendCode}
                        block
                      >
                        Kodu Tekrar Gönder
                      </Button>
                      <Button
                        type="link"
                        onClick={() => {
                          setCurrentStep(0);
                          setSmsCodeSent(false);
                          setSmsVerified(false);
                        }}
                        block
                      >
                        Geri Dön
                      </Button>
                    </Space>
                  </Form>
                )}

                {currentStep === 2 && smsVerified && (
                  <div className="success-section">
                    <CheckCircleOutlined className="success-icon" />
                    <Title level={3}>Giriş Başarılı!</Title>
                    <Paragraph>
                      {isNewUser 
                        ? 'Üyeliğiniz başarıyla oluşturuldu. Hoş geldiniz!'
                        : 'Hoş geldiniz! Giriş yapılıyor...'
                      }
                    </Paragraph>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Login;

