const coaches = [
  {
    id: 'c001',
    name: '陈屿',
    gender: '男',
    initials: 'CY',
    level: '国家职业资格五级',
    years: 8,
    rating: 4.9,
    reviewCount: 126,
    price: 680,
    resort: '崇礼云顶',
    city: '张家口',
    specialties: ['零基础入门', '平行式', '亲子教学'],
    available: true,
    verified: true,
    intro: '耐心拆解动作，用轻松、安全的节奏帮助学员建立雪感。擅长零基础成人与亲子课程。',
    schedule: ['周一', '周三', '周五', '周日']
  },
  {
    id: 'c002',
    name: '林雪',
    gender: '女',
    initials: 'LX',
    level: 'CSIA Level 2',
    years: 6,
    rating: 4.8,
    reviewCount: 89,
    price: 760,
    resort: '万龙滑雪场',
    city: '张家口',
    specialties: ['女生友好', '刻滑进阶', '视频纠错'],
    available: true,
    verified: true,
    intro: '注重动作细节和学员感受，课程包含视频拍摄与课后动作复盘。',
    schedule: ['周二', '周四', '周六', '周日']
  },
  {
    id: 'c003',
    name: '周野',
    gender: '男',
    initials: 'ZY',
    level: 'NZSIA Level 2',
    years: 10,
    rating: 4.9,
    reviewCount: 204,
    price: 980,
    resort: '北大湖',
    city: '吉林',
    specialties: ['高级道', '粉雪', '地形适应'],
    available: false,
    verified: true,
    intro: '十年雪上教学经验，适合希望突破平台期、提升复杂雪况控制能力的进阶学员。',
    schedule: ['周五', '周六', '周日']
  },
  {
    id: 'c004',
    name: '苏晴',
    gender: '女',
    initials: 'SQ',
    level: '国家职业资格四级',
    years: 5,
    rating: 4.7,
    reviewCount: 67,
    price: 620,
    resort: '松花湖',
    city: '吉林',
    specialties: ['儿童教学', '零基础入门', '安全陪滑'],
    available: true,
    verified: true,
    intro: '儿童滑雪专项教练，善于用游戏化方式让孩子理解规则、建立信心。',
    schedule: ['周一', '周二', '周六', '周日']
  }
]

const getCoachById = id => coaches.find(item => item.id === id)

module.exports = { coaches, getCoachById }
