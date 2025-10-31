import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Space,
  Tag,
  Table,
  Input,
  Select,
} from 'antd';
import {
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import './QuoteComparison.css';

const { Title, Paragraph } = Typography;

const QuoteComparison: React.FC = () => {
  const location = useLocation() as any;
  const mode: 'vehicle' | 'health' | 'home' | 'other' = location.state?.from === 'health' ? 'health' : (location.state?.from === 'home' ? 'home' : (location.state?.from === 'other' ? 'other' : 'vehicle'));
  // Mock veriler – Araç/ Sağlık ürünlerine göre ayrılmış
  const vehicleQuotes = useMemo(() => ([
    { key: '1', company: 'Anadolu Sigorta', coverage: 'Kapsamlı', price: 3520, rating: 4.8, features: ['Tam Kapsam', '7/24 Yol Yardım', 'Hasarsızlık Koruma'], savings: 180 },
    { key: '2', company: 'AXA Sigorta', coverage: 'Standart', price: 3290, rating: 4.6, features: ['Genişletilmiş Kapsam', 'Mini Onarım'], savings: 90 },
    { key: '3', company: 'Türkiye Sigorta', coverage: 'Temel', price: 3010, rating: 4.4, features: ['Zorunlu Teminatlar'], savings: 0 },
    { key: '4', company: 'Allianz Türkiye', coverage: 'Kapsamlı', price: 3610, rating: 4.7, features: ['Tam Kapsam', 'İkame Araç', '7/24 Yol Yardım'], savings: 120 },
    { key: '5', company: 'HDI Sigorta', coverage: 'Standart', price: 3150, rating: 4.3, features: ['Standart Kapsam', 'Anlaşmalı Servis'], savings: 40 },
  ]), []);

  const healthQuotes = useMemo(() => ([
    { key: 'h1', company: 'Allianz Türkiye', plan: 'Geniş Ağ', network: 'Geniş', room: 'Tek Kişilik', deductible: 0, price: 8850, rating: 4.7, features: ['Yatarak %100', 'Ayakta %80', 'Check-up'] },
    { key: 'h2', company: 'AXA Sigorta', plan: 'Standart', network: 'Standart', room: 'İki Kişilik', deductible: 1000, price: 7490, rating: 4.6, features: ['Yatarak %100', 'Ayakta %60'] },
    { key: 'h3', company: 'Anadolu Sigorta', plan: 'Temel', network: 'Dar', room: 'İki Kişilik', deductible: 2500, price: 6890, rating: 4.5, features: ['Yatarak %100'] },
    { key: 'h4', company: 'Türkiye Sigorta', plan: 'Geniş Ağ', network: 'Geniş', room: 'Tek Kişilik', deductible: 0, price: 8120, rating: 4.4, features: ['Yatarak %100', 'Ayakta %70'] },
    { key: 'h5', company: 'Mapfre Sigorta', plan: 'Standart', network: 'Standart', room: 'Tek Kişilik', deductible: 1000, price: 7720, rating: 4.3, features: ['Yatarak %100', 'Ayakta %60', 'Diş Paketi'] },
  ]), []);

  const homeQuotes = useMemo(() => ([
    { key: 'c1', company: 'Anadolu Sigorta', coverage: 'Kapsamlı', price: 2850, rating: 4.7, features: ['Eşya', 'Yangın', 'Hırsızlık', 'Deprem'], savings: 150 },
    { key: 'c2', company: 'Türkiye Sigorta', coverage: 'Standart', price: 2490, rating: 4.5, features: ['Eşya', 'Yangın', 'Deprem'], savings: 80 },
    { key: 'c3', company: 'Sompo Sigorta', coverage: 'Temel', price: 2190, rating: 4.3, features: ['Yangın', 'Deprem'], savings: 0 },
    { key: 'c4', company: 'Mapfre Sigorta', coverage: 'Kapsamlı', price: 2990, rating: 4.4, features: ['Eşya', 'Yangın', 'Hırsızlık', 'Sel'], savings: 120 },
    { key: 'c5', company: 'HDI Sigorta', coverage: 'Standart', price: 2390, rating: 4.2, features: ['Eşya', 'Yangın'], savings: 40 },
  ]), []);

  const otherQuotes = useMemo(() => ([
    // Cep Telefonu örnekleri
    { key: 'o1', company: 'AXA Sigorta', coverage: 'Tam Kapsam (Telefon)', price: 1299, rating: 4.6, features: ['Ekran', 'Sıvı Teması', 'Hırsızlık'], savings: 100 },
    { key: 'o2', company: 'Anadolu Sigorta', coverage: 'Ekran + Hasar', price: 990, rating: 4.5, features: ['Ekran', 'Kazaen Hasar'], savings: 50 },
    // Evcil Hayvan örnekleri
    { key: 'o3', company: 'Mapfre Sigorta', coverage: 'Geniş (Pet)', price: 1350, rating: 4.4, features: ['Tetkik/Tedavi', 'Aşı', '3. Şahıs Sorumluluk'], savings: 120 },
    // Ferdi Kaza örnekleri
    { key: 'o4', company: 'HDI Sigorta', coverage: 'Kapsamlı (Ferdi Kaza)', price: 760, rating: 4.2, features: ['Sürekli Sakatlık', 'Vefat', 'Gündelik Tazminat'], savings: 0 },
  ]), []);

  const [quotes] = useState(mode === 'health' ? healthQuotes : mode === 'home' ? homeQuotes : mode === 'other' ? otherQuotes : vehicleQuotes);

  const navigate = useNavigate();

  const columns = mode === 'health' ? [
    {
      title: 'Şirket',
      dataIndex: 'company',
      key: 'company',
      render: (_text: string, rec: any) => (
        <Space direction="vertical" size="small">
          <strong>{rec.company}</strong>
          <Tag color="blue">{rec.plan}</Tag>
        </Space>
      ),
    },
    {
      title: 'Ağ / Oda',
      key: 'network',
      render: (_: any, rec: any) => (
        <Space direction="vertical" size="small">
          <span>Hastane Ağı: <strong>{rec.network}</strong></span>
          <span>Oda Tipi: <strong>{rec.room}</strong></span>
        </Space>
      ),
    },
    {
      title: 'Muafiyet',
      dataIndex: 'deductible',
      key: 'deductible',
      render: (v: number) => v === 0 ? 'Yok' : `₺${v.toLocaleString()}`,
      sorter: (a: any, b: any) => a.deductible - b.deductible,
    },
    {
      title: 'Yıllık Fiyat',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => (
        <strong style={{ fontSize: '20px', color: '#52c41a' }}>₺{price.toLocaleString()}</strong>
      ),
      sorter: (a: any, b: any) => a.price - b.price,
    },
    {
      title: 'Puan',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating: number) => (
        <Space>
          <StarFilled style={{ color: '#faad14' }} />
          <span>{rating}</span>
        </Space>
      ),
      sorter: (a: any, b: any) => a.rating - b.rating,
    },
    {
      title: 'Özellikler',
      dataIndex: 'features',
      key: 'features',
      render: (features: string[]) => (
        <Space direction="vertical" size="small">
          {features.map((feature) => (
            <Space key={feature}>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
              <span>{feature}</span>
            </Space>
          ))}
        </Space>
      ),
    },
    {
      title: 'İşlem',
      key: 'action',
      render: (_text: any, record: any) => (
        <Button type="primary" onClick={() => handlePurchase({ ...record, kind: 'health' })}>Satın Al</Button>
      ),
    },
  ] : [
    {
      title: 'Şirket',
      dataIndex: 'company',
      key: 'company',
      render: (_text: string, rec: any) => (
        <Space direction="vertical" size="small">
          <strong>{rec.company}</strong>
          <Tag color="blue">{rec.coverage}</Tag>
        </Space>
      ),
    },
    {
      title: 'Yıllık Fiyat',
      dataIndex: 'price',
      key: 'price',
      render: (_: number, rec: any) => (
        <Space direction="vertical" size="small">
          <strong style={{ fontSize: '20px', color: '#52c41a' }}>
            ₺{rec.price.toLocaleString()}
          </strong>
          {rec.savings ? (
            <Tag color="green">₺{rec.savings} tasarruf</Tag>
          ) : null}
        </Space>
      ),
      sorter: (a: any, b: any) => a.price - b.price,
    },
    {
      title: 'Puan',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating: number) => (
        <Space>
          <StarFilled style={{ color: '#faad14' }} />
          <span>{rating}</span>
        </Space>
      ),
      sorter: (a: any, b: any) => a.rating - b.rating,
    },
    {
      title: 'Özellikler',
      dataIndex: 'features',
      key: 'features',
      render: (features: string[]) => (
        <Space direction="vertical" size="small">
          {features.map((feature) => (
            <Space key={feature}>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
              <span>{feature}</span>
            </Space>
          ))}
        </Space>
      ),
    },
    {
      title: 'İşlem',
      key: 'action',
      render: (_text: any, record: any) => (
        <Button
          type="primary"
          onClick={() => handlePurchase(record)}
        >
          Satın Al
        </Button>
      ),
    },
  ];

  const handlePurchase = (quote: any) => {
    navigate('/satin-al', { state: { quote, kind: quote.kind || (mode === 'health' ? 'health' : 'vehicle') } });
  };

  return (
    <div className="quote-comparison-page">
      <section className="comparison-hero">
        <div className="page-container">
          <Space direction="vertical" size="large" style={{ textAlign: 'center', width: '100%' }}>
            <Title level={1}>{
              mode === 'health' ? 'Sağlık Sigortası Tekliflerini Karşılaştır' :
              mode === 'home' ? 'Konut Sigortası Tekliflerini Karşılaştır' :
              mode === 'other' ? 'Diğer Ürün Tekliflerini Karşılaştır' :
              'Trafik Sigortası Tekliflerini Karşılaştır'
            }</Title>
            <Paragraph className="hero-description">
              30+ sigorta şirketinden en iyi teklifleri tek ekranda görün
            </Paragraph>
          </Space>
        </div>
      </section>

      <section className="comparison-section">
        <div className="page-container">
          <Card className="comparison-card">
            <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
              <Col xs={24} md={8}>
                <Input placeholder="Şirkete göre ara" allowClear />
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="Fiyata göre sırala"
                  style={{ width: '100%' }}
                  defaultValue="low"
                >
                  <Select.Option value="low">Düşükten Yükseğe</Select.Option>
                  <Select.Option value="high">Yüksekten Düşüğe</Select.Option>
                </Select>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="Kapsama göre filtrele"
                  style={{ width: '100%' }}
                  allowClear
                >
                  <Select.Option value="premium">Kapsamlı</Select.Option>
                  <Select.Option value="standard">Standart</Select.Option>
                  <Select.Option value="basic">Temel</Select.Option>
                </Select>
              </Col>
            </Row>

            <Table
              columns={columns as any}
              dataSource={quotes as any}
              pagination={false}
              className="comparison-table"
            />

            <div className="comparison-cta">
              <Space direction="vertical" size="middle">
                <Paragraph strong style={{ fontSize: '16px' }}>
                  Karar vermede yardıma mı ihtiyacınız var? Uzmanlarımız yanınızda!
                </Paragraph>
                <Button type="link" size="large">
                  Uzmanla Görüş
                </Button>
              </Space>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default QuoteComparison;

