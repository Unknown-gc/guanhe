import { Page, PortfolioItem, ServicePackage, NavItem } from './types';

// ==========================================
// 🔴 新手指南 (BEGINNER GUIDE)
// ==========================================
// 1. 若要修改图片，请替换 imageUrl 后的链接。
//    (To change images, replace the link after imageUrl)
// 2. 若要修改文字，请修改 title (标题) 或 content (内容) 后的文字。
//    (To change text, modify the text after title or content)
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

// 首页轮播图或展示图 (Hero Images)
export const HERO_IMAGES = [
  "https://picsum.photos/seed/myth1/1920/1080", // 替换这里为你的大图链接
  "https://picsum.photos/seed/portrait1/1920/1080",
  "https://picsum.photos/seed/hanfu1/1920/1080"
];

// 作品集数据 (Portfolio Data)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: '飞升 (Fei Sheng)', category: 'mythology', imageUrl: 'https://picsum.photos/seed/feisheng/600/800', description: '红绿撞色 / 极具张力' },
  { id: '2', title: '精卫 (Jing Wei)', category: 'mythology', imageUrl: 'https://picsum.photos/seed/jingwei/600/900', description: '神话重现 / 唯美意境' },
  { id: '3', title: '春之神 (Spring God)', category: 'portrait', imageUrl: 'https://picsum.photos/seed/spring/600/700', description: '唯美情绪 / 自然光影' },
  { id: '4', title: '罗刹女 (Luo Cha Nu)', category: 'mythology', imageUrl: 'https://picsum.photos/seed/luocha/600/800', description: '暗黑风格 / 情绪人像' },
  { id: '5', title: '青铜废墟 (Bronze Ruins)', category: 'restoration', imageUrl: 'https://picsum.photos/seed/bronze/600/800', description: '复原造型 / 历史厚重感' },
  { id: '6', title: '汉宫秋 (Han Palace)', category: 'restoration', imageUrl: 'https://picsum.photos/seed/han/600/600', description: '传统复原 / 汉服摄影' },
  { id: '7', title: '雪中客 (Snow Walker)', category: 'portrait', imageUrl: 'https://picsum.photos/seed/snow/600/900', description: '外景人像 / 氛围感' },
];

// 服务价格表 (Service Rates based on your image)
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