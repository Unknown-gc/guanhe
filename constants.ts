import { Page, PortfolioItem, ServicePackage, NavItem } from './types';

// ==========================================
// 🔴 新手指南 (BEGINNER GUIDE)
// ==========================================
// 1. 下面的 PORTFOLIO_ITEMS 是我根据您的图片为您整理好的列表。
// 2. 目前图片显示为黑色背景的“请替换图片”。
// 3. 请将 imageUrl: "..." 中的引号内容，替换为您真实的图片链接。
// ==========================================

export const BRAND = {
  name: "关河未冷",
  enName: "Guanhe Weileng",
  tagline: "合肥独立女摄，尝试不同题材风格",
  enTagline: "Independent Photographer based in Hefei"
};

export const CONTACT_INFO = {
  wechat: "_dyddd",
  xiaohongshu: "关河未冷",
  douyin: "关河未冷",
  email: "1430779435@qq.com",
  location: "中国·安徽·合肥 (Hefei, Anhui, CN)"
};

// 导航菜单 (Navigation)
export const NAV_ITEMS: NavItem[] = [
  { label: '首页', enLabel: 'Home', page: Page.HOME },
  { label: '作品集', enLabel: 'Portfolio', page: Page.PORTFOLIO },
  { label: '关于', enLabel: 'About', page: Page.ABOUT },
  { label: '约拍详情', enLabel: 'Services', page: Page.SERVICES },
  { label: '联系我', enLabel: 'Contact', page: Page.CONTACT },
];

// 🔴 首页大图 (Hero Images)
// 请在这里放入您最满意的横屏大图（建议使用精卫填海或双人复原的大场景图）
export const HERO_IMAGES = [
  "https://placehold.co/1920x1080/2b2b2b/FFFFFF?text=请替换为+首页大图1(精卫红月)", 
  "https://placehold.co/1920x1080/2b2b2b/FFFFFF?text=请替换为+首页大图2(双人复原)",
  "https://placehold.co/1920x1080/2b2b2b/FFFFFF?text=请替换为+首页大图3(绿衣撑伞)"
];

// 🔴 作品集数据 (Portfolio Data)
// 我已经根据您发的图，为您分好了类。请对应替换图片链接。
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // === 类别：神话与脑洞 (mythology) ===
  { 
    id: '1', 
    title: '精卫 (Jing Wei)', 
    category: 'mythology', 
    imageUrl: 'https://placehold.co/600x900/8B1E1E/FFFFFF?text=请替换为+精卫填海(红月海浪)', 
    description: '红月 / 锁链 / 海浪' 
  },
  { 
    id: '2', 
    title: '枯骨生花 (Life in Death)', 
    category: 'mythology', 
    imageUrl: 'https://placehold.co/600x800/1a1a1a/FFFFFF?text=请替换为+枯骨生花(绿衣骷髅)', 
    description: '暗黑脑洞 / 生死极意' 
  },
  { 
    id: '3', 
    title: '神陨 (The Fallen)', 
    category: 'mythology', 
    imageUrl: 'https://placehold.co/600x800/eeeeee/000000?text=请替换为+白发神女(流泪妆)', 
    description: '神性 / 悲悯 / 情绪' 
  },

  // === 类别：复原与传统 (restoration) ===
  { 
    id: '4', 
    title: '翠鸾 (Green Phoenix)', 
    category: 'restoration', 
    imageUrl: 'https://placehold.co/600x900/0f3d0f/FFFFFF?text=请替换为+绿色重工头饰(孔雀羽)', 
    description: '华丽头冠 / 传统复原' 
  },
  { 
    id: '5', 
    title: '司命 (Destiny)', 
    category: 'restoration', 
    imageUrl: 'https://placehold.co/600x900/8B1E1E/FFFFFF?text=请替换为+红衣持杖(提灯)', 
    description: '宗教感 / 传统服饰' 
  },
  { 
    id: '6', 
    title: '汉宫双姝 (Palace Duo)', 
    category: 'restoration', 
    imageUrl: 'https://placehold.co/600x800/333333/FFFFFF?text=请替换为+双人复原(屏风背景)', 
    description: '双人写真 / 故事感' 
  },
  { 
    id: '7', 
    title: '游园 (The Garden)', 
    category: 'restoration', 
    imageUrl: 'https://placehold.co/600x800/B08D55/FFFFFF?text=请替换为+双人坐姿(蓝衣)', 
    description: '园林实景 / 传统礼仪' 
  },

  // === 类别：唯美情绪 (portrait) ===
  { 
    id: '8', 
    title: '青蛇 (Green Snake)', 
    category: 'portrait', 
    imageUrl: 'https://placehold.co/600x900/2F4F4F/FFFFFF?text=请替换为+绿衣撑伞(桥边)', 
    description: '氛围感 / 电影画幅' 
  },
  { 
    id: '9', 
    title: '惊鸿 (Grace)', 
    category: 'portrait', 
    imageUrl: 'https://placehold.co/600x800/556B2F/FFFFFF?text=请替换为+绿衣舞蹈动态', 
    description: '动态捕捉 / 情绪表达' 
  }
];

// 服务价格表 (Service Rates)
export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    title: "单人写真 (Solo Portrait)",
    price: "室内 ¥799 / 室外 ¥899",
    features: [
      "包含摄影及一名协同人员门票费用 (室外除基础价格外)",
      "包部分手头现有服装",
      "精修 9 张",
      "底片 100+ (无任何改动)",
      "拍摄时间 1-1.5 小时",
      "现代简单妆容 +150 / 汉服妆造 200-400 不等"
    ],
    note: "超时按照每小时 ¥200 计算额外费用"
  },
  {
    title: "双人写真 (Couple/Duo)",
    price: "室内 ¥1599 / 室外 ¥1699",
    features: [
      "精修 15 张",
      "附赠一条小视频 (粗剪)",
      "妆造价格如单人，按人头计算",
      "包含摄影费用"
    ],
    highlight: true
  },
  {
    title: "升级版写真套餐 (Premium)",
    price: "原套餐 + ¥200",
    features: [
      "含部分服化道 (服装/道具)",
      "原套餐基础上 +3 张精修",
      "原套餐基础上 +1 条视频 (粗剪, 20-30s)"
    ]
  },
  {
    title: "单人创作约拍 (Creative Solo)",
    price: "¥1399",
    features: [
      "含部分分服化道",
      "精修 12 张",
      "视频一条",
      "如有购买道具服装超出经费预算，由客妹支付一半费用，并会附清单告知"
    ],
    highlight: true
  }
];

export const SERVICE_POLICIES = [
  "客户须支付外拍产生的交通费及门票费。",
  "修怎么算？一般 40 个工作日返精修。额外精修一张 ¥30。",
  "定金是多少？摄影定金 ¥200，不接受非预约档期定金，有效期为一年。",
  "除不可抗力因素、外拍天气因素以外，不接受改期。",
  "约定日期更改需提前两周。",
  "定金不退！需要妆造，当天记得洗头，前两天需要做好补水护肤。效果会更好。",
  "默认花絮和成片可以发布社交平台。"
];