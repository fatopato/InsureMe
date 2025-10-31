import React from 'react';
import { Collapse, Typography, Row, Col, Card, Space } from 'antd';
import {
  QuestionCircleOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import './CommonPages.css';

const { Title, Paragraph, Text } = Typography;

const FAQ: React.FC = () => {
  const faqData = [
    {
      key: '1',
      label: 'Neden InsureMe\'yi diğer sigorta aracılarına tercih etmeliyim?',
      children: 'InsureMe, Türkiye\'nin ilk ve lider online sigorta platformudur. Bir broker olarak sigorta şirketlerini değil SİZİ temsil ederiz. 30+ sigorta şirketinden teklifleri tek ekranda görmenizi, teminat ve fiyatları objektif biçimde karşılaştırmanızı sağlayarak ihtiyacınıza en uygun ürünü kolayca online satın almanıza yardımcı oluruz.',
    },
    {
      key: '2',
      label: 'Poliçe satışı için müşterilerden ek ücret alıyor musunuz?',
      children: 'Hayır, herhangi bir ek ücret almıyoruz. Yalnızca sigorta şirketinin belirlediği poliçe bedeli tahsil edilir. Bu bedel üzerinden InsureMe indirimleri veya iş ortaklığı kampanyalarıyla en iyi fiyatı sunarız.',
    },
    {
      key: '3',
      label: 'Poliçe fiyatlarında indirim oluyor mu?',
      children: 'Evet, sigorta şirketinin belirlediği fiyat üzerinden InsureMe\'ye özel indirimler uygulanabilir. Satın alma anında şirketin belirlediği tutar kartınıza çekilir, indirim tutarı ise ödeme yaptığınız karta InsureMe tarafından 1 hafta içinde iade edilir.',
    },
    {
      key: '4',
      label: 'En iyi sigorta teklifini nasıl seçeceğim?',
      children: 'Çalıştığımız 30\'a yakın şirketten gelen teklifleri fiyat ve teminat açısından puanlayarak öneriler hazırlarız. Böylece en ucuz, en iyi fiyat/performans ve en kapsamlı teminatlı ürünü kolayca görebilirsiniz.',
    },
    {
      key: '5',
      label: 'Kişisel bilgilerim InsureMe\'de güvende mi?',
      children: 'Evet. Teklif oluştururken paylaşılan kişisel ve ödeme bilgileriniz dünya genelinde kabul görmüş SSL protokolüyle korunur. Ödeme bilgileriniz yalnızca ödeme anında kullanılır ve işlem sonrası kesinlikle saklanmaz.',
    },
    {
      key: '6',
      label: 'Teklif almak ne kadar sürer?',
      children: 'Kısa formu doldurarak 2 dakika içinde 30+ sigorta şirketinden anlık teklif alabilirsiniz. Teklifler gerçek zamanlı üretilir; hemen karşılaştırıp satın alabilirsiniz.',
    },
    {
      key: '7',
      label: 'Satın aldıktan sonra ne olur?',
      children: 'Satın alma işleminin ardından poliçeniz anında aktif olur ve detayları e-posta ile gönderilir. 7/24 destek ekibimiz her türlü soru ve hasar bildiriminizde yanınızdadır.',
    },
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="page-container">
          <Space direction="vertical" size="large" style={{ textAlign: 'center', width: '100%' }}>
            <QuestionCircleOutlined className="faq-icon" />
            <Title level={1}>Sıkça Sorulan Sorular</Title>
            <Paragraph className="faq-description">
              Sigorta ve hizmetlerimizle ilgili sık sorulan soruların yanıtlarını burada bulabilirsiniz
            </Paragraph>
          </Space>
        </div>
      </section>

      <section className="faq-section">
        <div className="page-container">
          <Row justify="center">
            <Col xs={24} lg={16}>
              <Collapse
                items={faqData}
                defaultActiveKey={['1']}
                expandIconPosition="end"
                className="faq-collapse"
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="faq-cta">
        <div className="page-container">
          <Card className="cta-card">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={16}>
                <Space direction="vertical" size="small">
                  <Title level={3}>Hâlâ sorularınız mı var?</Title>
                  <Paragraph>
                    Uzman ekibimiz 7/24 her türlü soru ve talebiniz için yanınızda
                  </Paragraph>
                </Space>
              </Col>
              <Col xs={24} md={8}>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Text strong><PhoneOutlined /> 444 00 00</Text>
                  <div>
                    <Text type="secondary">7/24 hizmet</Text>
                  </div>
                </Space>
              </Col>
            </Row>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

