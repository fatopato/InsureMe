import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import type { MenuProps } from 'antd';
import { 
  CarOutlined, 
  HeartOutlined, 
  HomeOutlined, 
  MenuOutlined,
  PhoneOutlined,
  InsuranceOutlined,
  GiftOutlined,
  TrophyOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  MobileOutlined,
  AppleOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onGetQuote?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetQuote }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  const productMenuItems: MenuProps['items'] = [
    {
      key: 'my-vehicle',
      label: 'Aracım',
      type: 'group',
      children: [
        { key: '/trafik/teklif', label: 'Trafik Sigortası', icon: <CarOutlined /> },
        { key: '/ikinci-el-trafik/teklif', label: '2. El Trafik Sigortası', icon: <CarOutlined /> },
        { key: '/yesil-kart/teklif', label: 'Yeşil Kart Sigortası', icon: <SafetyOutlined /> },
        { key: '/kasko/teklif', label: 'Kasko', icon: <InsuranceOutlined /> },
        { key: '/elektrikli-arac-kasko/teklif', label: 'Elektrikli Araç Kasko', icon: <ThunderboltOutlined /> },
        { key: '/kisa-sureli-trafik/teklif', label: 'Kısa Süreli Trafik', icon: <CarOutlined /> },
        { key: '/imm/teklif', label: 'İMM', icon: <ThunderboltOutlined /> },
      ],
    },
    {
      key: 'my-health',
      label: 'Sağlığım',
      type: 'group',
      children: [
        { key: '/tamamlayici-saglik/teklif', label: 'Tamamlayıcı Sağlık', icon: <HeartOutlined /> },
        { key: '/ozel-saglik/teklif', label: 'Özel Sağlık', icon: <HeartOutlined /> },
        { key: '/seyahat-saglik/teklif', label: 'Seyahat Sağlık', icon: <GlobalOutlined /> },
      ],
    },
    {
      key: 'my-home',
      label: 'Evim',
      type: 'group',
      children: [
        { key: '/dask/teklif', label: 'DASK', icon: <HomeOutlined /> },
        { key: '/konut-sigortasi/teklif', label: 'Konut Sigortası', icon: <HomeOutlined /> },
        { key: '/evim-guvende/teklif', label: 'Evim Güvende', icon: <HomeOutlined /> },
      ],
    },
    {
      key: 'other',
      label: 'Diğer',
      type: 'group',
      children: [
        { key: '/cep-telefonu/teklif', label: 'Cep Telefonu', icon: <MobileOutlined /> },
        { key: '/evcil-hayvan/teklif', label: 'Evcil Hayvan', icon: <AppleOutlined /> },
        { key: '/ferdi-kaza/teklif', label: 'Geniş Asistanslı Ferdi Kaza', icon: <SafetyOutlined /> },
      ],
    },
  ];

  const mainMenuItems: MenuProps['items'] = [
    {
      key: 'products',
      label: 'Ürünlerimiz',
      icon: <InsuranceOutlined />,
      children: [
        {
          label: 'Aracım',
          key: 'vehicle',
          type: 'group',
          children: [
            { key: '/trafik/teklif', label: 'Trafik Sigortası', icon: <CarOutlined /> },
            { key: '/ikinci-el-trafik/teklif', label: '2. El Trafik', icon: <CarOutlined /> },
            { key: '/yesil-kart/teklif', label: 'Yeşil Kart', icon: <SafetyOutlined /> },
            { key: '/kasko/teklif', label: 'Kasko', icon: <InsuranceOutlined /> },
            { key: '/elektrikli-arac-kasko/teklif', label: 'Elektrikli Araç Kasko', icon: <ThunderboltOutlined /> },
            { key: '/kisa-sureli-trafik/teklif', label: 'Kısa Süreli Trafik', icon: <CarOutlined /> },
            { key: '/imm/teklif', label: 'İMM', icon: <ThunderboltOutlined /> },
          ],
        },
        {
          label: 'Sağlığım',
          key: 'health',
          type: 'group',
          children: [
            { key: '/tamamlayici-saglik/teklif', label: 'Tamamlayıcı Sağlık', icon: <HeartOutlined /> },
            { key: '/ozel-saglik/teklif', label: 'Özel Sağlık', icon: <HeartOutlined /> },
            { key: '/seyahat-saglik/teklif', label: 'Seyahat Sağlık', icon: <GlobalOutlined /> },
          ],
        },
        {
          label: 'Evim',
          key: 'home',
          type: 'group',
          children: [
            { key: '/dask/teklif', label: 'DASK', icon: <HomeOutlined /> },
            { key: '/konut-sigortasi/teklif', label: 'Konut Sigortası', icon: <HomeOutlined /> },
            { key: '/evim-guvende/teklif', label: 'Evim Güvende', icon: <HomeOutlined /> },
          ],
        },
        {
          label: 'Diğer',
          key: 'other',
          type: 'group',
          children: [
            { key: '/cep-telefonu/teklif', label: 'Cep Telefonu', icon: <MobileOutlined /> },
            { key: '/evcil-hayvan/teklif', label: 'Evcil Hayvan', icon: <AppleOutlined /> },
            { key: '/ferdi-kaza/teklif', label: 'Geniş Asistanslı Ferdi Kaza', icon: <SafetyOutlined /> },
          ],
        },
      ],
    },
    {
      key: 'campaigns',
      label: 'Kampanyalar',
      icon: <GiftOutlined />,
    },
    {
      key: 'awards',
      label: 'Ödüllerimiz',
      icon: <TrophyOutlined />,
    },
    {
      key: 'about',
      label: 'Hakkımızda',
      icon: <GlobalOutlined />,
      children: [
        { key: '/hakkimizda', label: 'Hakkımızda' },
        { key: '/sss', label: 'SSS' },
        { key: '/iletisim', label: 'İletişim' },
      ],
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key.startsWith('/')) {
      navigate(key);
      setDrawerVisible(false);
    }
  };

  return (
    <>
      <AntHeader className="site-header">
        <div className="header-container">
          <div className="logo" onClick={() => navigate('/')}>
            <InsuranceOutlined className="logo-icon" />
            <span className="logo-text">InsureMe</span>
          </div>

          {/* Desktop Menu */}
          <Menu
            mode="horizontal"
            items={mainMenuItems}
            onClick={handleMenuClick}
            className="desktop-menu"
            selectedKeys={[]}
          />

          {/* Contact & CTA */}
          <Space size="middle" className="header-actions">
            <Button 
              type="link" 
              icon={<PhoneOutlined />}
              className="contact-phone"
            >
              444 24 00
            </Button>
            <Button 
              type="primary"
              size="large"
              icon={<UserOutlined />}
              onClick={() => navigate('/giris')}
              className="login-btn"
            >
              Giriş Yap
            </Button>
          </Space>

          {/* Mobile Menu Button */}
          <Button
            className="mobile-menu-btn"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title="InsureMe"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="mobile-drawer"
      >
        <Menu
          mode="vertical"
          items={productMenuItems}
          onClick={handleMenuClick}
        />
        <div className="drawer-footer">
          <Button type="primary" block size="large" onClick={() => navigate('/giris')} icon={<UserOutlined />}>
            Giriş Yap
          </Button>
          <div className="drawer-contact">
            <PhoneOutlined /> 444 24 00
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
