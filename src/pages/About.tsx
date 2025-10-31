import React from 'react';
import { Typography, Row, Col, Card, Space, Statistic, Timeline } from 'antd';
import {
  TrophyOutlined,
  SafetyOutlined,
  TeamOutlined,
  RocketOutlined
} from '@ant-design/icons';
import './CommonPages.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const milestones = [
    {
      color: 'blue',
      children: 'Company founded with a vision to democratize insurance',
    },
    {
      color: 'green',
      children: 'Launched online insurance comparison platform',
    },
    {
      color: 'red',
      children: 'Reached 5 million happy customers',
    },
    {
      color: 'gray',
      children: 'Won Best Insurance Website award at Stevie Awards',
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="page-container">
          <Space direction="vertical" size="large" style={{ textAlign: 'center', width: '100%' }}>
            <Title level={1}>InsureMe Hakkında</Title>
            <Paragraph className="hero-description">
              Türkiye'nin İlk ve Lider Online Sigorta Platformu
            </Paragraph>
          </Space>
        </div>
      </section>

      <section className="about-story">
        <div className="page-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Card className="story-card">
                <Title level={3}>Misyonumuz</Title>
                <Paragraph>
                  Sigortayı herkes için erişilebilir, şeffaf ve uygun maliyetli hale getirmek. Doğru
                  sigortayı bulmanın basit, hızlı ve zahmetsiz olması gerektiğine inanıyoruz.
                </Paragraph>
                <Title level={3}>Vizyonumuz</Title>
                <Paragraph>
                  Türkiye'nin en güvenilen ve en kullanıcı dostu sigorta platformu olmak; milyonlarca
                  insanın onlar için en değerli olanı korumasına yardımcı olmak.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="story-card">
                <Title level={3}>Neden Bizi Tercih Etmelisiniz?</Title>
                <Paragraph>
                  Bağımsız bir aracı olarak sigorta şirketlerini değil SİZİ temsil ederiz. 30+ sigorta
                  şirketinden teminatları, fiyatları ve özellikleri objektif şekilde karşılaştırarak en
                  iyi teklifleri bulmak için durmaksızın çalışırız.
                </Paragraph>
                <Paragraph>
                  Sektörde 25 yıllık deneyimimizle uzmanlığımızı ileri teknolojiyle birleştirir, sigorta
                  satın alma sürecini zahmetsiz hale getiririz.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section className="about-stats">
        <div className="page-container">
          <Row gutter={[32, 32]}>
            <Col xs={12} md={6}>
              <Statistic
                title="Mutlu Müşteri"
                value={10}
                suffix="Milyon+"
                prefix={<TeamOutlined />}
                valueStyle={{ color: '#0066cc' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Sigorta Şirketi"
                value={30}
                suffix="+"
                prefix={<SafetyOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Yıllık Deneyim"
                value={25}
                suffix="Yıl"
                prefix={<TrophyOutlined />}
                valueStyle={{ color: '#faad14' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Satılan Poliçe"
                value={50}
                suffix="Milyon+"
                prefix={<RocketOutlined />}
                valueStyle={{ color: '#0052a5' }}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="about-timeline">
        <div className="page-container">
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            Yolculuğumuz
          </Title>
          <Row justify="center">
            <Col xs={24} md={16}>
              <Timeline items={milestones.map(m => ({...m, children: (
                m.children === 'Company founded with a vision to democratize insurance' ? 'Sigortayı demokratikleştirme vizyonuyla kuruldu' :
                m.children === 'Launched online insurance comparison platform' ? 'Online sigorta karşılaştırma platformu yayına alındı' :
                m.children === 'Reached 5 million happy customers' ? '5 milyon mutlu müşteriye ulaşıldı' :
                m.children === 'Won Best Insurance Website award at Stevie Awards' ? 'Stevie Awards’ta En İyi Sigorta Web Sitesi ödülü' : m.children
              )}))} />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default About;

