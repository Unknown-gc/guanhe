import { PortfolioItem } from './types';

// =================================================================
// 🔴 用户配置区域 (User Configuration Area) - 请仔细阅读
// =================================================================
// 1. 修改文字：直接修改引号 '' 里的内容。
// 2. 修改图片：找到 imageUrl, 将 'https://...' 替换为您的图片链接。
// 3. 部署：此文件修改保存后，重新部署即可生效。
// =================================================================

export const APP_NAME = "关河未冷";
export const APP_TAGLINE = "合肥独立女摄，尝试不同题材风格";

// 🔴 联系方式 (Contact Information)
export const CONTACT_INFO = {
  wechat: "_dyddd",           // 微信
  xiaohongshu: "关河未冷",     // 小红书
  douyin: "关河未冷",          // 抖音
  email: "1430779435@qq.com", // 邮箱
  location: "Hefei, Anhui, China", // 地址
};

// 🔴 关于页面内容 (About Page Content)
export const ABOUT_INFO = {
  titleCN: "关于摄影师",
  titleEN: "About The Photographer",
  // 个人简介段落
  intro1: "合肥独立女摄，专注于汉服与创意人像。不仅仅是记录，更是一场关于美的共同创作。",
  intro2: "致力于打破传统摄影的界限。无论是神话传说的宏大叙事，还是细腻入微的情绪流露，都希望通过镜头，捕捉到你最独特的一面。",
  intro3: "“尝试不同题材风格。” 每一位客人都拥有独特的气质，期待与你一起，去探索、去创造那个只存在于想象中的自己。",
  // 数据统计
  expNumber: "5年+",
  expLabel: "摄影经验 Experience",
  conceptNumber: "300+",
  conceptLabel: "原创构思 Concepts",
  // 替换关于页图片
  imageUrl: "https://picsum.photos/seed/photographer/600/800" 
};

// 🔴 约拍套餐 (Service Packages)
export const SERVICE_PLANS = [
  {
    name: '个人写真',
    enName: 'Solo Portrait',
    price: '室内 ¥799 / 室外 ¥899', // 价格
    desc: '含室内或室外拍摄，基础服装自理或包部分现有服装。',
    features: [
      '精修 9 张 (Retouched Photos)',
      '底片 100+ 全送 (Original Files)',
      '拍摄时长 1-1.5 小时 (Shooting Time)',
      '妆造另算：日常+150 / 汉服+200~400',
      '超时费：按照 ¥200/小时 计算'
    ],
    highlight: false
  },
  {
    name: '双人写真',
    enName: 'Pair/Couple',
    price: '室内 ¥1599 / 室外 ¥1699',
    desc: '适合情侣、闺蜜。含精修与短视频赠送。',
    features: [
      '精修 15 张 (Retouched Photos)',
      '赠送粗剪小视频一条 (Bonus Short Video)',
      '妆造价格如上，按人头计算',
      '底片全送 (All Original Files)'
    ],
    highlight: true // 推荐套餐
  },
  {
    name: '单人创作约拍',
    enName: 'Creative Solo',
    price: '¥1399',
    desc: '含部分服化道，深度创作。',
    features: [
      '精修 12 张 (Retouched Photos)',
      '赠送视频一条 (Short Video)',
      '含部分服化道 (Includes some props/outfits)',
      '如购买道具服装超出预算，由客妹支付一半费用'
    ],
    highlight: false
  }
];

// 🔴 增值服务 (Add-ons)
export const SERVICE_ADDONS = [
  {
    name: '升级版套餐',
    enName: 'Upgrade Bundle',
    price: '+¥200',
    detail: '在原套餐基础上：加3张精修 + 1条20-30s粗剪视频'
  },
  {
    name: '额外精修',
    enName: 'Extra Retouch',
    price: '¥30 / 张',
    detail: '修图按张收费'
  }
];

// 🔴 拍前须知 (Important Notes)
export const SERVICE_NOTES = [
  "费用说明：室外产生的门票、交通费由客户承担。",
  "定金须知：摄影定金200不退，不接受非预约档期定金。有效期一年。",
  "改期规则：除不可抗力/天气因素，不接受改期。约定日期更改需提前两周。",
  "修图周期：一般40个工作日返精修。额外精修一张30元。",
  "准备工作：需要妆造，当天记得洗头，前两天需要做好补水护肤。",
  "图片版权：默认花絮和成片可以发布社交平台。",
];

// 🔴 作品集数据 (Portfolio Items)
// 替换图片：修改 imageUrl 后的链接
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: '飞升 (Fei Sheng)',
    category: 'Mythology',
    imageUrl: 'https://picsum.photos/seed/feisheng/800/1200', // 🔴 替换图片 URL
    description: '红与绿的极致碰撞 (Dramatic red and green contrast).',
  },
  {
    id: '2',
    title: '精卫 (Jing Wei)',
    category: 'Mythology',
    imageUrl: 'https://picsum.photos/seed/jingwei/800/1000',
    description: '上古神话重构 (Ancient myth reimagined with red splashes).',
  },
  {
    id: '3',
    title: '春之神 (Spring God)',
    category: 'Portrait',
    imageUrl: 'https://picsum.photos/seed/spring/800/1400',
    description: '唯美绿意 (Ethereal green and white aesthetics).',
  },
  {
    id: '4',
    title: '罗刹女 (Luo Cha Nu)',
    category: 'Mythology',
    imageUrl: 'https://picsum.photos/seed/luocha/800/900',
    description: '暗黑风格 (Dark red intensity).',
  },
  {
    id: '5',
    title: '青铜废墟 (Bronze Ruins)',
    category: 'Restoration',
    imageUrl: 'https://picsum.photos/seed/bronze/800/1100',
    description: '历史的厚重 (Historical weight and texture).',
  },
  {
    id: '6',
    title: '敦煌梦 (Dunhuang Dream)',
    category: 'Restoration',
    imageUrl: 'https://picsum.photos/seed/dunhuang/800/1300',
    description: '飞天壁画 (Flying Apsaras style).',
  },
  {
    id: '7',
    title: '山鬼 (Mountain Spirit)',
    category: 'Portrait',
    imageUrl: 'https://picsum.photos/seed/mountain/800/1000',
    description: '林间情绪 (Atmospheric forest shoot).',
  },
  {
    id: '8',
    title: '游园惊梦 (Garden Dream)',
    category: 'Restoration',
    imageUrl: 'https://picsum.photos/seed/garden/800/1200',
    description: '戏曲元素 (Traditional opera influence).',
  },
];