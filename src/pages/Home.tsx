import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Row,
  Col,
  Card,
  Space,
  Statistic,
  Steps,
  Rate,
} from 'antd';
import {
  CarOutlined,
  HeartOutlined,
  HomeOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  MobileOutlined,
  SmileOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  DollarOutlined,
  StarFilled,
  ArrowRightOutlined
} from '@ant-design/icons';
import './Home.css';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const insuranceProducts = [
    {
      id: 'traffic',
      icon: <CarOutlined />,
      iconClass: 'pi-traffic',
      title: 'Trafik Sigortası',
      description: 'Araçlarınız için zorunlu sigorta',
      price: '₺500\'dan başlayan',
      link: '/trafik/teklif',
    },
    {
      id: 'second-hand-traffic',
      icon: <CarOutlined />,
      iconClass: 'pi-second',
      title: '2. El Trafik',
      description: 'Satış öncesi/sonrası güvence',
      price: '₺400' + "'" + 'den başlayan',
      link: '/ikinci-el-trafik/teklif',
    },
    {
      id: 'kasko',
      icon: <SafetyOutlined />,
      iconClass: 'pi-kasko',
      title: 'Kasko',
      description: 'Kapsamlı araç sigortası',
      price: '₺3.000\'dan başlayan',
      link: '/kasko/teklif',
    },
    {
      id: 'dask',
      icon: <HomeOutlined />,
      iconClass: 'pi-dask',
      title: 'DASK',
      description: 'Deprem zorunlu sigortası',
      price: '₺800\'den başlayan',
      link: '/dask/teklif',
    },
    {
      id: 'health',
      icon: <HeartOutlined />,
      iconClass: 'pi-health',
      title: 'Sağlık Sigortası',
      description: 'Tam sağlık güvencesi',
      price: '₺1.500\'dan başlayan',
      link: '/ozel-saglik/teklif',
    },
    {
      id: 'supp-health',
      icon: <HeartOutlined />,
      iconClass: 'pi-supp-health',
      title: 'Tamamlayıcı Sağlık',
      description: 'Sosyal güvenceye tamamlayıcı',
      price: '₺900\'den başlayan',
      link: '/tamamlayici-saglik/teklif',
    },
    {
      id: 'home-ins',
      icon: <HomeOutlined />,
      iconClass: 'pi-home',
      title: 'Konut Sigortası',
      description: 'Eviniz ve eşyalarınız güvende',
      price: '₺1.000\'den başlayan',
      link: '/konut-sigortasi/teklif',
    },
    {
      id: 'home-safe',
      icon: <HomeOutlined />,
      iconClass: 'pi-home-safe',
      title: 'Evim Güvende',
      description: 'Ev paket sigortası',
      price: '₺1.100' + "'" + 'den başlayan',
      link: '/evim-guvende/teklif',
    },
    {
      id: 'short-traffic',
      icon: <CarOutlined />,
      iconClass: 'pi-short',
      title: 'Kısa Süreli Trafik',
      description: 'Geçici süreli güvence',
      price: '₺300\'den başlayan',
      link: '/kisa-sureli-trafik/teklif',
    },
    {
      id: 'green-card',
      icon: <GlobalOutlined />,
      iconClass: 'pi-green',
      title: 'Yeşil Kart',
      description: 'Yurt dışı araç sigortası',
      price: '₺1.200' + "'" + 'den başlayan',
      link: '/yesil-kart/teklif',
    },
    {
      id: 'phone',
      icon: <MobileOutlined />,
      iconClass: 'pi-phone',
      title: 'Cep Telefonu',
      description: 'Hasar ve hırsızlık güvencesi',
      price: '₺750\'den başlayan',
      link: '/cep-telefonu/teklif',
    },
    {
      id: 'pet',
      icon: <SmileOutlined />,
      iconClass: 'pi-pet',
      title: 'Evcil Hayvan',
      description: 'Minik dostunu güvenceye al',
      price: '₺600' + "'" + 'den başlayan',
      link: '/evcil-hayvan/teklif',
    },
    {
      id: 'personal-accident',
      icon: <SafetyCertificateOutlined />,
      iconClass: 'pi-accident',
      title: 'Ferdi Kaza',
      description: 'Beklenmeyen kazalara karşı',
      price: '₺500' + "'" + 'den başlayan',
      link: '/ferdi-kaza/teklif',
    },
    {
      id: 'travel-health',
      icon: <GlobalOutlined />,
      iconClass: 'pi-travel',
      title: 'Seyahat Sağlık',
      description: 'Yurt içi / dışı seyahat sağlık',
      price: '₺200' + "'" + 'den başlayan',
      link: '/seyahat-saglik/teklif',
    },
    {
      id: 'imm',
      icon: <ThunderboltOutlined />,
      iconClass: 'pi-imm',
      title: 'İMM',
      description: 'İhtiyari mali mesuliyet',
      price: '₺250' + "'" + 'den başlayan',
      link: '/imm/teklif',
    },
  ];

  const keyFeatures = [
    {
      id: 'feature-1',
      icon: <SafetyOutlined className="feature-icon" />,
      title: 'Doğru Ürün',
      description: 'Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz.',
    },
    {
      id: 'feature-2',
      icon: <DollarOutlined className="feature-icon" />,
      title: 'İyi Fiyat',
      description: 'Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek en iyi fiyat garantisi sunuyoruz.',
    },
    {
      id: 'feature-3',
      icon: <ThunderboltOutlined className="feature-icon" />,
      title: '7/24 Hizmet',
      description: '25 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız.',
    },
  ];

  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Murat İ.',
      rating: 5,
      text: 'Sigortam.net sayesinde evden çıkmadan tek bir telefonla trafik sigortası ve kaskoyu yaptırdım. Hızlı, sorunsuz ve güvenilir.',
    },
    {
      id: 'testimonial-2',
      name: 'Kasım Ş.',
      text: 'İnternetten alınan bir poliçeden çok daha fazlası. Kaza anında çekicinin gelmesinden tutun sağlık durumunuza kadar her şeyle ilgileniyorlar.',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      name: 'Şaban K.',
      text: 'Piyasadan alabileceğim kasko poliçesini aynı kapsamda taksitle, daha ucuza ve profesyonel hizmetle Sigortam.net üzerinden satın aldım.',
      rating: 5,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="page-container">
          <Row align="middle" style={{ minHeight: '600px' }}>
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large">
                <Title level={1} className="hero-title">
                  Sigortada Güvenin Adresi
                </Title>
                <Paragraph className="hero-subtitle">
                  Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
                </Paragraph>
                <Paragraph className="hero-description">
                  30'a yakın sigorta şirketinden en iyi teklifleri 2 dakikada karşılaştırın ve alın
                </Paragraph>
                <Space size="middle">
                  <Button
                    type="primary"
                    size="large"
                    icon={<SafetyOutlined />}
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hero-cta"
                  >
                    Hemen Teklif Al
                  </Button>
                  <Button
                    size="large"
                    onClick={() => navigate('/hakkimizda')}
                    className="hero-secondary"
                  >
                    Daha Fazla Bilgi
                  </Button>
                </Space>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div className="hero-image-placeholder">
                <CarOutlined className="placeholder-icon" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="page-container">
          <div className="section-header">
            <Title level={2} className="section-title">
              Ürünlerimiz
            </Title>
            <Paragraph className="section-description">
              İhtiyaçlarınıza uygun sigorta ürünlerinden seçim yapın
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {(showAll ? insuranceProducts : insuranceProducts.slice(0, 4)).map((product) => (
              <Col xs={24} sm={12} md={6} key={product.id}>
                <Card
                  hoverable
                  className="product-card"
                  onClick={() => navigate(product.link)}
                >
                  <div className={`product-icon ${product.iconClass || ''}`}>
                    {React.cloneElement(product.icon as any, { style: { width: 36, height: 36, fontSize: 36, color: 'currentColor' } })}
                  </div>
                  <Title level={4} className="product-title">
                    {product.title}
                  </Title>
                  <Paragraph className="product-description">
                    {product.description}
                  </Paragraph>
                  <div className="product-price">{product.price}</div>
                  <Button type="link" className="product-link">
                    Teklif Al <ArrowRightOutlined />
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Button type="default" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Daha Az Göster' : 'Tümünü Gör'}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="page-container">
          <Title level={2} className="section-title">
            Poliçemi Neden InsureMe'den Almalıyım?
          </Title>
          <Row gutter={[32, 32]}>
            {keyFeatures.map((feature) => (
              <Col xs={24} md={8} key={feature.id}>
                <Card className="feature-card">
                  <div className="feature-content">
                    {feature.icon}
                    <Title level={4}>{feature.title}</Title>
                    <Paragraph>{feature.description}</Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="page-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8}>
              <Statistic
                title={<span className="stat-title">Mutlu Müşteri</span>}
                value={10}
                suffix={<span className="stat-suffix">Milyon+</span>}
                prefix={<StarFilled className="stat-icon" />}
                valueStyle={{ color: '#0066cc' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title={<span className="stat-title">Sigorta Şirketi</span>}
                value={30}
                suffix={<span className="stat-suffix">+</span>}
                prefix={<SafetyOutlined className="stat-icon" />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title={<span className="stat-title">Yıllık Deneyim</span>}
                value={25}
                suffix={<span className="stat-suffix">Yıl</span>}
                prefix={<ThunderboltOutlined className="stat-icon" />}
                valueStyle={{ color: '#0052a5' }}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="page-container">
          <Title level={2} className="section-title">
            Nasıl Çalışır?
          </Title>
          <Steps
            current={-1}
            items={[
              {
                title: 'Teklif Al',
                description: 'Bilgilerinizi doldurun, 30+ şirketten teklif alın',
              },
              {
                title: 'Karşılaştır',
                description: 'Teminatları ve fiyatları yan yana karşılaştırın',
              },
              {
                title: 'Satın Al',
                description: 'Sadece 2 dakikada online satın alın',
              },
              {
                title: 'Korunun',
                description: '7/24 destek ve anında hasar yardımı keyfini çıkarın',
              },
            ]}
            className="process-steps"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="page-container">
          <Title level={2} className="section-title">
            10 Milyon Mutlu Müşteri, 50+ Milyon Poliçe Teklifi
          </Title>
          <Row gutter={[24, 24]}>
            {testimonials.map((testimonial) => (
              <Col xs={24} md={8} key={testimonial.id}>
                <Card className="testimonial-card">
                  <Rate disabled defaultValue={testimonial.rating} className="testimonial-rating" />
                  <Paragraph className="testimonial-text">
                    "{testimonial.text}"
                  </Paragraph>
                  <Text strong className="testimonial-name">
                    {testimonial.name}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="page-container">
            <Row justify="center">
              <Col xs={24} md={16}>
                <Space direction="vertical" size="large" style={{ textAlign: 'center', width: '100%' }}>
                  <Title level={2} className="cta-title">
                    Başlamaya Hazır mısınız?
                  </Title>
                  <Paragraph className="cta-description">
                    Kişiselleştirilmiş sigorta tekliflerinizi şimdi alın ve en iyi fiyat garantimizle tasarruf edin
                  </Paragraph>
                  <Button
                    type="primary"
                    size="large"
                    icon={<SafetyOutlined />}
                    onClick={() => navigate('/teklif-karsilastir')}
                    className="cta-button"
                  >
                    Hemen Teklif Al
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

