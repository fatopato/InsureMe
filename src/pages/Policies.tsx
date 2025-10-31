import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Card,
  Tabs,
  Row,
  Col,
  Collapse,
  Space
} from 'antd';
import {
  CarOutlined,
  HomeOutlined,
  HeartOutlined,
  FileTextOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import './Policies.css';

const { Title, Text } = Typography;
const { Panel } = Collapse;

type PolicyStatus = 'active' | 'expired';

type Policy = {
  id: string;
  branch: 'Trafik' | 'Kasko' | 'Dask' | 'Konut' | 'Sağlık';
  company: string;
  endDate: string;
  status: PolicyStatus;
};

type Asset = {
  id: string;
  type: 'car' | 'home' | 'health' | 'other';
  title: string; // e.g., marka/plaka veya adres kodu
  subtitle?: string;
  policies: Policy[];
};

const mockAssets: Asset[] = [
  {
    id: 'asset-1',
    type: 'car',
    title: 'ALFA ROMEO',
    subtitle: 'Plaka: 34 BGK 181',
    policies: [
      { id: 'p1', branch: 'Trafik', company: 'Zurich Sigorta', endDate: '30.09.2026', status: 'active' },
    ],
  },
  {
    id: 'asset-2',
    type: 'home',
    title: 'Adres Kodu: 1414355352',
    policies: [
      { id: 'p2', branch: 'Dask', company: 'Ray Sigorta', endDate: '10.07.2025', status: 'expired' },
    ],
  },
  {
    id: 'asset-3',
    type: 'home',
    title: 'Adres Kodu: 1414955334',
    policies: [
      { id: 'p3', branch: 'Dask', company: 'Türkiye Sigorta', endDate: '26.09.2025', status: 'expired' },
    ],
  },
];

const typeToLabel: Record<Asset['type'], string> = {
  car: 'Aracım',
  health: 'Sağlığım',
  home: 'Evim',
  other: 'Diğer',
};

const typeToIcon: Record<Asset['type'], React.ReactNode> = {
  car: <CarOutlined />,
  health: <HeartOutlined />,
  home: <HomeOutlined />,
  other: <FileTextOutlined />,
};

const Policies: React.FC = () => {
  const navigate = useNavigate();
  const [statusFilters, setStatusFilters] = useState<PolicyStatus[]>(['active', 'expired']);
  const [assetType, setAssetType] = useState<'all' | Asset['type']>('all');

  const counts = useMemo(() => {
    const all = mockAssets.length;
    const car = mockAssets.filter(a => a.type === 'car').length;
    const health = mockAssets.filter(a => a.type === 'health').length;
    const home = mockAssets.filter(a => a.type === 'home').length;
    const other = mockAssets.filter(a => a.type === 'other').length;
    return { all, car, health, home, other };
  }, []);

  const filteredAssets = useMemo(() => {
    const byType = assetType === 'all' ? mockAssets : mockAssets.filter(a => a.type === assetType);
    return byType
      .map(asset => ({
        ...asset,
        policies: asset.policies.filter(p => statusFilters.includes(p.status)),
      }))
      .filter(a => a.policies.length > 0);
  }, [assetType, statusFilters]);

  return (
    <div className="policies-page">
      <div className="policies-container">
        <div className="policies-header">
          <Title level={2} className="policies-title">Poliçelerim</Title>
          <Button type="default">Poliçe Ekle</Button>
        </div>

        <Card className="filters-card">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={16}>
              <Tabs
                className="asset-type-tabs"
                activeKey={assetType}
                onChange={(key) => setAssetType(key as any)}
                items={[
                  { key: 'all', label: `Tümü (${counts.all})` },
                  { key: 'car', label: `Aracım (${counts.car})` },
                  { key: 'health', label: `Sağlığım (${counts.health})` },
                  { key: 'home', label: `Evim (${counts.home})` },
                  { key: 'other', label: `Diğer (${counts.other})` },
                ]}
              />
            </Col>
            <Col xs={24} md={8}>
              <Space wrap>
                <Button
                  type={statusFilters.includes('active') ? 'primary' : 'default'}
                  onClick={() => setStatusFilters((prev) => prev.includes('active') ? prev.filter(s => s !== 'active') : [...prev, 'active'])}
                >
                  Aktif
                </Button>
                <Button
                  type={statusFilters.includes('expired') ? 'primary' : 'default'}
                  onClick={() => setStatusFilters((prev) => prev.includes('expired') ? prev.filter(s => s !== 'expired') : [...prev, 'expired'])}
                >
                  Vadesi Dolan
                </Button>
                <Button onClick={() => setStatusFilters(['active', 'expired'])}>Temizle</Button>
              </Space>
            </Col>
          </Row>
        </Card>

        <div className="asset-list">
          <Collapse accordion bordered={false} className="policy-collapse">
            {filteredAssets.map((asset) => (
              <Panel
                header={
                  <div className="asset-header">
                    <div className="asset-icon">{typeToIcon[asset.type]}</div>
                    <div>
                      <p className="asset-title">{typeToLabel[asset.type]}</p>
                      <p className="asset-subtitle">{asset.title}{asset.subtitle ? ` • ${asset.subtitle}` : ''}</p>
                    </div>
                  </div>
                }
                key={asset.id}
              >
                <Row gutter={[16, 16]}>
                  {asset.policies.map((policy) => (
                    <Col xs={24} md={12} lg={8} key={policy.id} className="policy-card-item">
                      <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Space>
                            <Text strong>{policy.branch}</Text>
                          </Space>
                          <span className={`policy-badge ${policy.status}`}>
                            {policy.status === 'active' ? 'Aktif Poliçe' : 'Vadesi Doldu'}
                          </span>
                        </div>
                        <div style={{ marginTop: 12 }}>
                          <p className="policy-meta"><span>Şirket</span> : <Text strong>{policy.company}</Text></p>
                          <p className="policy-meta"><span>Bitiş</span> : <Text strong>{policy.endDate}</Text></p>
                        </div>
                        <div className="policy-actions">
                          <Button type="link" size="small">Poliçe Detayları</Button>
                          {policy.status === 'expired' && (
                            <Button type="default" size="small" onClick={() => navigate('/teklif-karsilastir')}>
                              Teklifleri Gör
                            </Button>
                          )}
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Panel>
            ))}
          </Collapse>
        </div>

        <Card style={{ marginTop: 16 }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text strong>İpucu</Text>
            <Text>
              Süresi dolan poliçeler için hızlıca yeni teklif alabilir, aktif poliçelerinizin
              detaylarını görüntüleyebilirsiniz.
            </Text>
            <Button type="link" onClick={() => navigate('/teklif-karsilastir')}>
              Hemen Teklif Al <ArrowRightOutlined />
            </Button>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default Policies;


