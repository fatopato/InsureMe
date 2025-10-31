import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Button,
  Tag,
  Space,
  List
} from 'antd';
import {
  CarOutlined,
  HomeOutlined,
  StarOutlined,
  UserOutlined,
  FileTextOutlined,
  GiftOutlined,
  TagOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  BellOutlined,
  CopyOutlined,
  RightOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import './Dashboard.css';
import Policies from './Policies';

const { Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Demo user data
  const userInfo = {
    name: 'Fatih',
    initials: 'FK',
    lastLogin: '24/10/2025, 23:50'
  };

  const policies = [
    {
      id: 'policy-1',
      type: 'car',
      icon: <CarOutlined />,
      title: 'Plaka: 34 BGK 181',
      subtitle: '1 aktif poliçe',
      status: 'active'
    },
    {
      id: 'policy-2',
      type: 'home',
      icon: <HomeOutlined />,
      title: 'Adres Kodu: 1414355352',
      subtitle: '1 vadesi dolan',
      status: 'expired'
    },
    {
      id: 'policy-3',
      type: 'home',
      icon: <HomeOutlined />,
      title: 'Adres Kodu: 1414955334',
      subtitle: '1 vadesi dolan',
      status: 'expired'
    }
  ];

  const notifications = [
    {
      id: 'notif-1',
      type: 'expired',
      message: '1414955334 adres kodlu konutun için Dask poliçenin vadesi doldu. Hemen yenile, avantajlı fiyatları kaçırma!',
      buttonText: 'Teklifleri Gör'
    },
    {
      id: 'notif-2',
      type: 'expired',
      message: '1414355352 adres kodlu konutun için Dask poliçenin vadesi doldu. Hemen yenile, avantajlı fiyatları kaçırma!',
      buttonText: 'Teklifleri Gör'
    }
  ];

  const campaigns = [
    {
      id: 'camp-1',
      title: 'Kasko Yeni Aracınla Hoşgeldin 250 TL İndirimi',
      expireDate: '02.11.2025',
      code: 'S91PQLUNT',
      tag: 'Kasko'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-page">
      <Layout style={{ minHeight: '100vh' }}>
        {/* Left Sidebar */}
        <Sider
          width={260}
          className="dashboard-sidebar"
          style={{
            background: '#fff',
            boxShadow: '2px 0 8px rgba(0,0,0,0.05)'
          }}
        >
          <div className="sidebar-content">
            {/* User Info */}
            <div className="user-section">
              <Avatar size={64} style={{ backgroundColor: '#0066cc', marginBottom: 16 }}>
                {userInfo.initials}
              </Avatar>
              <Title level={4} className="welcome-text">
                Hoş Geldin {userInfo.name}
              </Title>
              <Text type="secondary" className="last-login">
                Son Giriş Tarihi: {userInfo.lastLogin}
              </Text>
            </div>

            {/* Navigation */}
            <div className="sidebar-nav">
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    icon: <StarOutlined />,
                    title: 'Bana Özel',
                    arrow: true,
                    selected: true
                  },
                  {
                    icon: <UserOutlined />,
                    title: 'Hesap Bilgilerim'
                  },
                  {
                    icon: <FileTextOutlined />,
                    title: 'Poliçelerim',
                    onClick: () => navigate('/dashboard/policelerim')
                  },
                  {
                    icon: <GiftOutlined />,
                    title: 'Paylaş Kazan',
                    badge: 'Yeni'
                  },
                  {
                    icon: <TagOutlined />,
                    title: 'İndirimler ve Kampanyalar'
                  },
                  {
                    icon: <QuestionCircleOutlined />,
                    title: 'Yardım ve Destek'
                  },
                  {
                    icon: <LogoutOutlined />,
                    title: 'Çıkış Yap',
                    danger: true,
                    onClick: handleLogout
                  }
                ]}
                renderItem={(item) => (
                  <List.Item
                    className={`nav-item ${item.selected ? 'nav-item-selected' : ''} ${item.danger ? 'nav-item-danger' : ''}`}
                    onClick={item.onClick}
                  >
                    <List.Item.Meta
                      avatar={item.icon}
                      title={
                        <Space>
                          {item.title}
                          {item.badge && (
                            <Tag color="red" className="nav-badge">
                              {item.badge}
                            </Tag>
                          )}
                        </Space>
                      }
                    />
                    {item.arrow && <RightOutlined className="nav-arrow" />}
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Sider>

        {/* Main Content */}
        <Layout>
          <Content className="dashboard-content">
            <div className="dashboard-container">
              <Routes>
                <Route
                  index
                  element={
                    <Row gutter={[24, 24]}>
                {/* Policies Section */}
                <Col xs={24} lg={16}>
                  <Card className="dashboard-card">
                    <div className="card-header">
                      <Title level={4} className="card-title">
                        Poliçelerim
                      </Title>
                      <Button type="link" className="card-action" onClick={() => navigate('/dashboard/policelerim')}>
                        Tüm Poliçelerimi Gör
                      </Button>
                    </div>
                    <Row gutter={[16, 16]}>
                      {policies.map((policy) => (
                        <Col xs={24} sm={12} key={policy.id}>
                          <Card
                            className={`policy-card ${policy.status}`}
                            hoverable
                          >
                            <div className="policy-icon">{policy.icon}</div>
                            <div className="policy-info">
                              <Text strong className="policy-title">
                                {policy.title}
                              </Text>
                              <br />
                              <Text type="secondary" className="policy-subtitle">
                                {policy.subtitle}
                              </Text>
                            </div>
                            <div className="policy-arrow">
                              <RightOutlined />
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card>

                  {/* Campaigns Section */}
                  <Card className="dashboard-card">
                    <div className="card-header">
                      <Title level={4} className="card-title">
                        İndirim & Kampanyalar
                      </Title>
                      <Button type="link" className="card-action">
                        Tüm İndirimleri Gör
                      </Button>
                    </div>
                    <List
                      itemLayout="vertical"
                      dataSource={campaigns}
                      renderItem={(campaign) => (
                        <List.Item className="campaign-item">
                          <div className="campaign-content">
                            <Text strong className="campaign-title">
                              {campaign.title}
                            </Text>
                            <br />
                            <Text type="secondary" className="campaign-date">
                              Son geçerlilik tarihi: {campaign.expireDate}
                            </Text>
                            <br />
                            <Space>
                              <Text>Kod: {campaign.code}</Text>
                              <Button
                                type="link"
                                size="small"
                                icon={<CopyOutlined />}
                                onClick={() => navigator.clipboard.writeText(campaign.code)}
                              />
                            </Space>
                          </div>
                          <Tag color="blue" className="campaign-tag">
                            {campaign.tag}
                          </Tag>
                        </List.Item>
                      )}
                    />
                  </Card>

                  {/* Help Section */}
                  <Card className="dashboard-card">
                    <div className="card-header">
                      <Title level={4} className="card-title">
                        Yardım & Destek
                      </Title>
                      <Button type="link" className="card-action">
                        Talep Gönder
                      </Button>
                    </div>
                    <div className="help-content">
                      <PhoneOutlined className="help-icon" />
                      <Paragraph className="help-text">
                        Her türlü soru için 7/24 canlı destek hattımıza ulaşabilirsin.
                        Yardımcı olmaya hazırız.
                      </Paragraph>
                    </div>
                  </Card>
                </Col>

                      {/* Right Sidebar */}
                      <Col xs={24} lg={8}>
                  {/* Get Quote Button */}
                  <Card className="dashboard-card quote-card">
                    <Title level={4} className="quote-title">
                      Sana özel fırsatlardan yararlan!
                    </Title>
                    <Button
                      type="primary"
                      size="large"
                      block
                      icon={<PlusCircleOutlined />}
                      className="quote-button"
                      onClick={() => navigate('/teklif-karsilastir')}
                    >
                      Yeni Teklif Al
                    </Button>
                  </Card>

                  {/* Referral Program */}
                  <Card className="dashboard-card referral-card">
                    <Title level={4} className="referral-title">
                      Arkadaşlarını Davet Et, 60.000 TL'ye varan hediye çeki kazan!
                    </Title>
                    <Paragraph className="referral-text">
                      Sigortam.net'e davet ettiğin ve poliçe alan her arkadaşın için 300 TL
                      Migros Sanal Market hediye çeki kazan; arkadaşın da poliçesini indirimli
                      alsın.
                    </Paragraph>
                    <Button type="link" className="referral-button">
                      Arkadaşını Davet Et <RightOutlined />
                    </Button>
                  </Card>

                  {/* Notifications */}
                  <Card className="dashboard-card">
                    <div className="card-header">
                      <Title level={4} className="card-title">
                        <BellOutlined /> Bildirimler ({notifications.length})
                      </Title>
                    </div>
                    <List
                      itemLayout="vertical"
                      dataSource={notifications}
                      renderItem={(notification) => (
                        <List.Item className="notification-item">
                          <Tag color="orange" className="notification-tag">
                            Vadesi Doldu
                          </Tag>
                          <Paragraph className="notification-text">
                            {notification.message}
                          </Paragraph>
                          <Button type="primary" size="small">
                            {notification.buttonText}
                          </Button>
                        </List.Item>
                      )}
                    />
                  </Card>
                      </Col>
                    </Row>
                  }
                />
                <Route path="policelerim" element={<Policies />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;

