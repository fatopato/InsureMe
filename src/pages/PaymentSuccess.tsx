import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Result, Button, Typography, Card, Row, Col, Space } from 'antd';

const { Text } = Typography;

const PaymentSuccess: React.FC = () => {
  const location = useLocation() as any;
  const navigate = useNavigate();
  const order = location.state?.order;

  const policyNumber: string = order?.policyNumber || 'PL-' + Math.random().toString(36).slice(2, 10).toUpperCase();
  const company: string = order?.quote?.company || '-';
  const coverage: string = order?.config?.coverage || order?.quote?.coverage || '-';
  const total: number = order?.total ?? 0;

  return (
    <div className="page-container" style={{ padding: 24 }}>
      <Result
        status="success"
        title="Ödeme Başarılı!"
        subTitle={`Poliçeniz başarıyla oluşturuldu. Poliçe No: ${policyNumber}`}
        extra={[
          <Button type="primary" key="policies" onClick={() => navigate('/dashboard/policelerim')}>Poliçelerimi Gör</Button>,
          <Button key="home" onClick={() => navigate('/')}>Ana Sayfa</Button>
        ]}
      />
      <Row justify="center">
        <Col xs={24} md={16} lg={12}>
          <Card title="Satın Alım Özeti">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Row justify="space-between"><Text>Poliçe No</Text><Text strong>{policyNumber}</Text></Row>
              <Row justify="space-between"><Text>Şirket</Text><Text strong>{company}</Text></Row>
              <Row justify="space-between"><Text>Kapsam</Text><Text strong>{coverage}</Text></Row>
              <Row justify="space-between"><Text>Ödenen Tutar</Text><Text strong style={{ color: '#52c41a' }}>₺{Number(total).toLocaleString()}</Text></Row>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentSuccess;


