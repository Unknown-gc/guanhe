import { PortfolioItem, PricingItem, ServiceNote } from './types';

// ==========================================
// 🔴 用户编辑区 (USER EDIT AREA)
// 请在此处修改文字和图片链接
// Please edit text and image URLs here
// ==========================================

export const BRAND = {
  name: "关河未冷",
  englishName: "Guanhe Weileng",
  tagline: "合肥独立女摄，尝试不同题材风格",
  englishTagline: "Hefei Independent Female Photographer",
  location: "中国 · 安徽 · 合肥",
  copyright: "© 2025 关河未冷 Photography"
};

// 🔴 联系方式 (Contact Info)
export const CONTACT_INFO = {
  wechat: "_dyddd",
  xiaohongshu: "关河未冷",
  douyin: "关河未冷",
  email: "1430779435@qq.com"
};

// 🔴 首页背景图 (Home Hero Image)
// 建议尺寸: 1920x1080
export const HERO_IMAGE = "https://picsum.photos/1920/1080?grayscale"; 

// 🔴 关于我 (About Me)
export const ABOUT_CONTENT = {
  intro: "我是一名位于安徽合肥的独立女摄影师。专注于汉服摄影、情绪人像以及神话脑洞题材创作。",
  description: "摄影对我而言，不仅是记录，更是一种创造。我喜欢在传统文化与现代审美之间寻找平衡，用镜头讲述跨越时空的故事。无论是唯美的古风复原，还是充满想象力的神话重构，我都希望能为你定格最独特的瞬间。",
  image: "https://picsum.photos/800/1000?random=99" // 个人照片
};

// 🔴 约拍价格表 (Pricing/Services)
// 这里的文字是根据您提供的图片整理的
export const PRICING_LIST: PricingItem[] = [
  {
    title: "1. 写真 (Portrait)",
    price: "室内 799 / 室外 899",
    details: [
      "包含摄影及一个协同人员因摄影产生的门票等费用（室外除基础价格外）。",
      "包部分手头现有服装。",
      "现代简单妆容妆娘价格 +150。",
      "汉服妆造价格 200-400 不等，具体依难易程度由妆娘确定。",
      "精修九张，底片 100+（无任何改动）。",
      "拍摄时间 1-1.5 个小时。",
      "超时按照每小时 200 计算额外费用。"
    ]
  },
  {
    title: "2. 双人写真 (Duo)",
    price: "室内 1599 / 室外 1699",
    details: [
      "精修 15 张。",
      "附赠一条小视频（粗剪）。",
      "妆造价格如上，按人头计算。"
    ]
  },
  {
    title: "3. 升级版写真套餐 (Upgrade)",
    price: "基础价 + 200/300",
    details: [
      "选项A (+200)：含部分服化道。",
      "选项B (+300)：原套餐基础上 + 三张精修 + 一条视频（粗剪，20-30s）。"
    ]
  },
  {
    title: "4. 单人创作约拍 (Creative)",
    price: "1399",
    details: [
      "含部分服化道。",
      "十二张精修 + 一条视频。",
      "如有购买道具服装超出经费预算，由客妹支付一半费用，并会附清单告知。"
    ]
  }
];

// 🔴 拍前须知 (Notes)
export const SERVICE_NOTES: ServiceNote[] = [
  {
    title: "1. 费用说明",
    content: "客户须支付外拍产生的交通费及门票费。"
  },
  {
    title: "2. 修图周期",
    content: "一般 40 个工作日返精修。额外精修一张 30 元。"
  },
  {
    title: "3. 定金政策",
    content: "摄影定金 200，不接受非预约档期定金，有效期为一年。除不可抗力因素、外拍天气因素以外，不接受改期。约定日期更改需提前两周。定金不退！"
  },
  {
    title: "4. 准备工作",
    content: "需要妆造，当天记得洗头，前两天需要做好补水护肤。效果会更好。"
  },
  {
    title: "5. 默认条款",
    content: "默认花絮和成片可以发布社交平台。"
  }
];

// 🔴 作品集 (Portfolio)
// 类别 (category) 必须是以下之一: 'mythology', 'atmospheric', 'restoration'
// ID 必须唯一
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: '飞升 (Fei Sheng)',
    category: 'mythology',
    imageUrl: 'https://picsum.photos/600/900?random=1',
    color: 'Red/Green'
  },
  {
    id: 'p2',
    title: '精卫 (Jing Wei)',
    category: 'mythology',
    imageUrl: 'https://picsum.photos/600/800?random=2',
    color: 'Red/White'
  },
  {
    id: 'p3',
    title: '春之神 (Spring God)',
    category: 'atmospheric',
    imageUrl: 'https://picsum.photos/600/700?random=3',
    color: 'Green/White'
  },
  {
    id: 'p4',
    title: '罗刹女 (Luo Cha Nu)',
    category: 'mythology',
    imageUrl: 'https://picsum.photos/600/950?random=4',
    color: 'Dark Red'
  },
  {
    id: 'p5',
    title: '青铜废墟 (Bronze)',
    category: 'restoration',
    imageUrl: 'https://picsum.photos/600/600?random=5',
    color: 'Dark/Green'
  },
  {
    id: 'p6',
    title: '洛神赋 (Luo Shen)',
    category: 'restoration',
    imageUrl: 'https://picsum.photos/600/850?random=6',
    color: 'Gold/Blue'
  },
  {
    id: 'p7',
    title: '山鬼 (Mountain Ghost)',
    category: 'atmospheric',
    imageUrl: 'https://picsum.photos/600/750?random=7',
    color: 'Green/Fog'
  },
  {
    id: 'p8',
    title: '敦煌 (Dunhuang)',
    category: 'restoration',
    imageUrl: 'https://picsum.photos/600/920?random=8',
    color: 'Orange/Earth'
  },
];
