/**
 * GC Platform - Global Competence Development Platform
 * Shared data layer and utilities
 */

// ========== GC 知识图谱数据 ==========
const GC_MODULES = [
  {
    id: "m1",
    code: "D1",
    title: "全球议题认知",
    description: "分析地方、全球与跨文化议题的能力",
    color: "#1a365d",
    topics: [
      { id: "m1-t1", title: "全球化与相互依存", level: "L1" },
      { id: "m1-t2", title: "联合国可持续发展目标(SDGs)", level: "L1" },
      { id: "m1-t3", title: "气候变化与能源转型", level: "L2" },
      { id: "m1-t4", title: "数字鸿沟与信息治理", level: "L2" },
      { id: "m1-t5", title: "全球公共卫生", level: "L3" }
    ]
  },
  {
    id: "m2",
    code: "D2",
    title: "跨文化理解",
    description: "理解并欣赏他人的观点与世界观",
    color: "#2c5282",
    topics: [
      { id: "m2-t1", title: "文化维度理论", level: "L1" },
      { id: "m2-t2", title: "高语境与低语境文化", level: "L1" },
      { id: "m2-t3", title: "文化刻板印象与偏见", level: "L2" },
      { id: "m2-t4", title: "宗教信仰与世俗化", level: "L2" },
      { id: "m2-t5", title: "东方与西方思维差异", level: "L3" }
    ]
  },
  {
    id: "m3",
    code: "D3",
    title: "跨文化沟通",
    description: "与不同文化背景者开放、得体、有效互动",
    color: "#2b6cb0",
    topics: [
      { id: "m3-t1", title: "跨文化倾听与共情", level: "L1" },
      { id: "m3-t2", title: "非语言沟通解码", level: "L1" },
      { id: "m3-t3", title: "冲突调解与谈判", level: "L2" },
      { id: "m3-t4", title: "多语言协作策略", level: "L2" },
      { id: "m3-t5", title: "虚拟团队跨时区管理", level: "L3" }
    ]
  },
  {
    id: "m4",
    code: "D4",
    title: "全球公民行动",
    description: "为集体福祉和可持续发展采取行动",
    color: "#3182ce",
    topics: [
      { id: "m4-t1", title: "伦理决策框架", level: "L1" },
      { id: "m4-t2", title: "社会企业与社会创新", level: "L1" },
      { id: "m4-t3", title: "国际志愿服务", level: "L2" },
      { id: "m4-t4", title: "全球供应链责任", level: "L2" },
      { id: "m4-t5", title: "倡导与政策影响", level: "L3" }
    ]
  },
  {
    id: "m5",
    code: "D5",
    title: "职业胜任力",
    description: "在全球化职场中展现竞争力与适应力",
    color: "#4299e1",
    topics: [
      { id: "m5-t1", title: "国际简历与求职策略", level: "L1" },
      { id: "m5-t2", title: "跨文化领导力", level: "L2" },
      { id: "m5-t3", title: "远程工作与自我管理", level: "L2" },
      { id: "m5-t4", title: "国际商务礼仪", level: "L2" },
      { id: "m5-t5", title: "AI时代职业转型", level: "L3" }
    ]
  }
];

// ========== 能力维度定义 ==========
const GC_DIMENSIONS = [
  { id: "g1", name: "全球议题分析", module: "m1" },
  { id: "g2", name: "可持续发展意识", module: "m1" },
  { id: "g3", name: "环境系统思维", module: "m1" },
  { id: "g4", name: "文化维度理解", module: "m2" },
  { id: "g5", name: "视角采择能力", module: "m2" },
  { id: "g6", name: "偏见觉察", module: "m2" },
  { id: "g7", name: "跨文化共情", module: "m3" },
  { id: "g8", name: "冲突调解", module: "m3" },
  { id: "g9", name: "多语言适应", module: "m3" },
  { id: "g10", name: "伦理推理", module: "m4" },
  { id: "g11", name: "社会创新", module: "m4" },
  { id: "g12", name: "公民参与", module: "m4" },
  { id: "g13", name: "国际职场适应", module: "m5" },
  { id: "g14", name: "跨文化领导力", module: "m5" },
  { id: "g15", name: "远程协作", module: "m5" },
  { id: "g16", name: "终身学习", module: "m5" }
];

// ========== 测评题库 ==========
const BASELINE_QUESTIONS = [
  // 全球议题认知 (g1-g3)
  {
    id: "q1",
    dimension: "g1",
    section: "全球议题分析",
    stem: "以下哪项最能体现「全球议题」的特征？",
    options: ["A. 仅影响单一国家的政策", "B. 跨越国界、需要多国协作解决的挑战", "C. 仅限于经济领域的议题", "D. 只在发达国家出现的议题"],
    answer: 1,
    scores: [10, 40, 20, 10]
  },
  {
    id: "q2",
    dimension: "g2",
    section: "可持续发展意识",
    stem: "联合国可持续发展目标(SDGs)共有多少个？",
    options: ["A. 10个", "B. 15个", "C. 17个", "D. 20个"],
    answer: 2,
    scores: [10, 15, 40, 10]
  },
  {
    id: "q3",
    dimension: "g3",
    section: "环境系统思维",
    stem: "碳足迹主要衡量的是什么？",
    options: ["A. 个人行走的步数", "B. 产品或活动的温室气体排放量", "C. 森林覆盖率", "D. 水资源消耗量"],
    answer: 1,
    scores: [5, 40, 25, 15]
  },
  // 跨文化理解 (g4-g6)
  {
    id: "q4",
    dimension: "g4",
    section: "文化维度理解",
    stem: "霍夫斯泰德文化维度理论中，「个人主义」的对立面是？",
    options: ["A. 集体主义", "B. 权威主义", "C. 自由主义", "D. 保守主义"],
    answer: 0,
    scores: [40, 10, 15, 10]
  },
  {
    id: "q5",
    dimension: "g5",
    section: "视角采择能力",
    stem: "在与不同文化背景者交流时，「视角采择」指的是？",
    options: ["A. 选择最好的观点", "B. 从对方的文化和价值观角度理解其行为", "C. 避免争议性话题", "D. 学习对方的语言"],
    answer: 1,
    scores: [10, 40, 15, 20]
  },
  {
    id: "q6",
    dimension: "g6",
    section: "偏见觉察",
    stem: "「刻板印象威胁」是指？",
    options: ["A. 对外国人的恐惧", "B. 担心自己的表现会证实对本群体的负面刻板印象", "C. 媒体对特定群体的过度报道", "D. 文化冲击导致的心理压力"],
    answer: 1,
    scores: [10, 40, 20, 15]
  },
  // 跨文化沟通 (g7-g9)
  {
    id: "q7",
    dimension: "g7",
    section: "跨文化共情",
    stem: "高语境文化中，沟通主要依赖？",
    options: ["A. 明确的语言表述", "B. 非语言线索和情境暗示", "C. 书面合同", "D. 正式会议记录"],
    answer: 1,
    scores: [10, 40, 20, 15]
  },
  {
    id: "q8",
    dimension: "g8",
    section: "冲突调解",
    stem: "跨文化冲突调解的第一步通常是什么？",
    options: ["A. 立即做出裁决", "B. 识别并承认各方的文化差异和感受", "C. 邀请第三方介入", "D. 制定明确的规则"],
    answer: 1,
    scores: [5, 40, 20, 20]
  },
  {
    id: "q9",
    dimension: "g9",
    section: "多语言适应",
    stem: "「语码转换」(Code-switching)在跨文化沟通中指的是？",
    options: ["A. 学习编程语言", "B. 在不同语言或方言之间切换", "C. 改变职业", "D. 转换沟通工具"],
    answer: 1,
    scores: [5, 40, 30, 10]
  },
  // 全球公民行动 (g10-g12)
  {
    id: "q10",
    dimension: "g10",
    section: "伦理推理",
    stem: "在国际合作中，「文化相对主义」的合理应用是指？",
    options: ["A. 接受所有文化习俗", "B. 在尊重文化差异的同时坚守基本人权底线", "C. 只遵循本国标准", "D. 避免评判任何文化行为"],
    answer: 1,
    scores: [10, 40, 20, 15]
  },
  {
    id: "q11",
    dimension: "g11",
    section: "社会创新",
    stem: "社会企业与传统企业的核心区别在于？",
    options: ["A. 规模更小", "B. 以解决社会问题为首要目标", "C. 只雇佣志愿者", "D. 不接受投资"],
    answer: 1,
    scores: [10, 40, 15, 20]
  },
  {
    id: "q12",
    dimension: "g12",
    section: "公民参与",
    stem: "有效的全球公民行动最需要？",
    options: ["A. 大量资金支持", "B. 本地社区的深度参与和赋权", "C. 国际媒体曝光", "D. 政府直接管理"],
    answer: 1,
    scores: [10, 40, 20, 15]
  },
  // 职业胜任力 (g13-g16)
  {
    id: "q13",
    dimension: "g13",
    section: "国际职场适应",
    stem: "在跨国公司工作时，「文化智能」(CQ)包含哪些维度？",
    options: ["A. 仅语言能力", "B. 元认知、认知、动机和行为", "C. 仅技术技能", "D. 仅情商"],
    answer: 1,
    scores: [5, 40, 20, 15]
  },
  {
    id: "q14",
    dimension: "g14",
    section: "跨文化领导力",
    stem: "「包容性领导力」的核心特质是？",
    options: ["A. 让所有人都同意领导者", "B. 欣赏差异、创造让所有人参与的环境", "C. 避免团队中的冲突", "D. 统一团队文化"],
    answer: 1,
    scores: [10, 40, 15, 20]
  },
  {
    id: "q15",
    dimension: "g15",
    section: "远程协作",
    stem: "跨时区远程团队最有效的协作策略是？",
    options: ["A. 所有人都按北京时间工作", "B. 建立异步沟通规范+定期同步会议", "C. 只使用邮件沟通", "D. 取消所有会议"],
    answer: 1,
    scores: [5, 40, 20, 20]
  },
  {
    id: "q16",
    dimension: "g16",
    section: "终身学习",
    stem: "在AI快速发展的时代，培养全球胜任力的最佳方式是？",
    options: ["A. 只学习技术技能", "B. 保持好奇心、跨学科学习和持续反思", "C. 专注于单一领域", "D. 依赖AI工具完成所有任务"],
    answer: 1,
    scores: [10, 40, 15, 20]
  }
];

// ========== 工作坊数据 ==========
const WORKSHOPS = [
  {
    id: "w1",
    title: "模拟联合国大会",
    type: "国际会议模拟",
    description: "扮演不同国家代表，围绕全球议题展开辩论与谈判",
    duration: "2小时",
    participants: 24,
    status: "进行中"
  },
  {
    id: "w2",
    title: "跨文化产品设计",
    type: "跨文化项目协作",
    description: "为不同文化背景用户设计产品方案，体验文化差异对设计的影响",
    duration: "3小时",
    participants: 16,
    status: "报名中"
  },
  {
    id: "w3",
    title: "文化沉浸式体验",
    type: "文化沉浸任务",
    description: "体验不同国家的商务礼仪、饮食习惯和社交规范",
    duration: "1.5小时",
    participants: 30,
    status: "即将开始"
  },
  {
    id: "w4",
    title: "国际危机应对演练",
    type: "危机应对演练",
    description: "模拟国际危机事件，练习跨文化沟通和决策能力",
    duration: "2.5小时",
    participants: 20,
    status: "报名中"
  }
];

// ========== 企业项目数据 ==========
const PROJECTS = [
  {
    id: "p1",
    title: "非洲乡村教育科技项目",
    company: "华为",
    type: "社会责任",
    credits: 3,
    deadline: "2026-12-15",
    status: "招募中",
    requirements: "跨文化沟通、项目管理"
  },
  {
    id: "p2",
    title: "东南亚跨境电商运营",
    company: "SHEIN",
    type: "商业实战",
    credits: 4,
    deadline: "2026-11-30",
    status: "招募中",
    requirements: "市场分析、多语言运营"
  },
  {
    id: "p3",
    title: "欧洲绿色能源调研",
    company: "比亚迪",
    type: "行业研究",
    credits: 2,
    deadline: "2026-10-20",
    status: "即将截止",
    requirements: "数据分析、英文报告"
  },
  {
    id: "p4",
    title: "中东文化适应性研究",
    company: "字节跳动",
    type: "市场进入",
    credits: 3,
    deadline: "2026-12-01",
    status: "招募中",
    requirements: "文化分析、用户研究"
  }
];

// ========== 导师数据 ==========
const MENTORS = [
  {
    id: "mt1",
    name: "李明远",
    title: "国际业务总监",
    company: "阿里巴巴",
    expertise: ["跨境电商", "跨文化管理"],
    available: "周二、周四 14:00-16:00"
  },
  {
    id: "mt2",
    name: "Sarah Chen",
    title: "全球人才发展经理",
    company: "微软",
    expertise: ["国际招聘", "领导力发展"],
    available: "周一、周三 10:00-12:00"
  },
  {
    id: "mt3",
    name: "王建国",
    title: "海外事业部总经理",
    company: "海尔",
    expertise: ["海外市场拓展", "本地化策略"],
    available: "周五 14:00-17:00"
  }
];

// ========== 岗位推荐 ==========
const JOBS = [
  {
    id: "j1",
    title: "国际业务拓展专员",
    company: "华为",
    location: "深圳/海外",
    salary: "15-25K",
    match: 92,
    type: "全职",
    tags: ["跨文化沟通", "商务谈判", "英语流利"]
  },
  {
    id: "j2",
    title: "全球化运营实习生",
    company: "字节跳动",
    location: "北京",
    salary: "8-12K",
    match: 88,
    type: "实习",
    tags: ["内容运营", "数据分析", "多语言能力"]
  },
  {
    id: "j3",
    title: "ESG分析师",
    company: "普华永道",
    location: "上海",
    salary: "18-28K",
    match: 85,
    type: "全职",
    tags: ["可持续发展", "数据分析", "英文报告"]
  }
];

// ========== 证书体系 ==========
const CERTIFICATES = [
  {
    id: "c1",
    name: "GC基础认证",
    level: "基础",
    description: "完成入学基线测评+2个基础模块课程",
    icon: "🏅"
  },
  {
    id: "c2",
    name: "GC进阶认证",
    level: "进阶",
    description: "完成4个模块课程+1次实践工作坊",
    icon: "🥈"
  },
  {
    id: "c3",
    name: "GC精英认证",
    level: "精英",
    description: "完成全部模块+企业项目实战+综合测评80分以上",
    icon: "🥇"
  },
  {
    id: "c4",
    name: "跨文化沟通专项徽章",
    level: "专项",
    description: "跨文化沟通维度得分85分以上",
    icon: "🎖️"
  }
];

// ========== 本地存储工具 ==========
const GCStorage = {
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(`gc_${key}`);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  set(key, value) {
    localStorage.setItem(`gc_${key}`, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(`gc_${key}`);
  }
};

// ========== 用户认证 ==========
const Auth = {
  getCurrentUser() {
    return GCStorage.get("currentUser", null);
  },
  setCurrentUser(user) {
    GCStorage.set("currentUser", user);
  },
  logout() {
    GCStorage.remove("currentUser");
  },
  isLoggedIn() {
    return !!this.getCurrentUser();
  },
  register(username, password, role, profile) {
    const users = GCStorage.get("users", []);
    if (users.find(u => u.username === username)) {
      return { success: false, message: "用户名已存在" };
    }
    const user = {
      id: "user_" + Date.now(),
      username,
      password,
      role,
      profile,
      createdAt: new Date().toISOString(),
      capabilityProfile: {
        g1: 50, g2: 50, g3: 50, g4: 50, g5: 50, g6: 50,
        g7: 50, g8: 50, g9: 50, g10: 50, g11: 50, g12: 50,
        g13: 50, g14: 50, g15: 50, g16: 50
      },
      gcIndex: 50,
      baselineCompleted: false,
      courseProgress: {},
      assessmentRecords: [],
      certificates: [],
      workshopRecords: [],
      projectApplications: [],
      studyStats: {
        totalMinutes: 0,
        completedTopics: 0,
        completedCourses: 0,
        weeklyData: []
      }
    };
    users.push(user);
    GCStorage.set("users", users);
    this.setCurrentUser(user);
    return { success: true, user };
  },
  login(username, password) {
    const users = GCStorage.get("users", []);
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: "用户名或密码错误" };
  },
  updateUser(updates) {
    const user = this.getCurrentUser();
    if (!user) return false;
    const updated = { ...user, ...updates };
    this.setCurrentUser(updated);
    // Update in users array
    const users = GCStorage.get("users", []);
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      users[idx] = updated;
      GCStorage.set("users", users);
    }
    return true;
  }
};

// ========== 数据更新 ==========
function updateCapabilityProfile(answers) {
  const user = Auth.getCurrentUser();
  if (!user) return;
  
  const scores = {};
  for (let i = 1; i <= 16; i++) {
    scores[`g${i}`] = user.capabilityProfile[`g${i}`] || 50;
  }
  
  answers.forEach(ans => {
    const q = BASELINE_QUESTIONS.find(q => q.id === ans.questionId);
    if (q) {
      const score = q.scores[ans.answer];
      scores[q.dimension] = Math.round((scores[q.dimension] * 0.7 + score * 0.3));
    }
  });
  
  const gcIndex = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 16);
  
  Auth.updateUser({
    capabilityProfile: scores,
    gcIndex,
    baselineCompleted: true
  });
  
  return { scores, gcIndex };
}

function getModuleProgress(moduleId) {
  const user = Auth.getCurrentUser();
  if (!user) return { completed: 0, total: 5, percentage: 0 };
  const progress = user.courseProgress || {};
  const module = GC_MODULES.find(m => m.id === moduleId);
  if (!module) return { completed: 0, total: 0, percentage: 0 };
  const completed = module.topics.filter(t => progress[t.id]).length;
  return {
    completed,
    total: module.topics.length,
    percentage: Math.round((completed / module.topics.length) * 100)
  };
}

function getOverallProgress() {
  const user = Auth.getCurrentUser();
  if (!user) return 0;
  const progress = user.courseProgress || {};
  const totalTopics = GC_MODULES.reduce((sum, m) => sum + m.topics.length, 0);
  const completed = Object.values(progress).filter(Boolean).length;
  return Math.round((completed / totalTopics) * 100);
}

// ========== 通用工具 ==========
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getToday() {
  return formatDate(new Date());
}

// ========== 导航栏渲染 ==========
function renderSidebar(activePage) {
  const user = Auth.getCurrentUser();
  const role = user?.role || 'student';
  
  const commonItems = [
    { id: 'dashboard', label: 'GC仪表盘', icon: '📊', url: 'dashboard.html' },
    { id: 'learn', label: '学习中心', icon: '📚', url: 'learn.html' },
    { id: 'assess', label: '能力测评', icon: '📋', url: 'assess.html' },
    { id: 'action', label: '实践中心', icon: '🎯', url: 'action.html' },
  ];
  
  const roleItems = role === 'mentor'
    ? [
        { id: 'career', label: '企业对接', icon: '🏢', url: 'career.html' },
        { id: 'portfolio', label: '学生档案', icon: '📁', url: 'portfolio.html' },
      ]
    : [
        { id: 'career', label: '企业对接', icon: '🏢', url: 'career.html' },
        { id: 'portfolio', label: '成长档案', icon: '📁', url: 'portfolio.html' },
      ];
  
  const bottomItems = [
    { id: 'settings', label: '设置', icon: '⚙️', url: 'settings.html' },
    { id: 'help', label: '帮助', icon: '❓', url: 'help.html' },
  ];
  
  const allItems = [...commonItems, ...roleItems];
  
  let html = `<aside class="sidebar">`;
  html += `<div class="sidebar-brand"><div class="sidebar-logo">🌍</div><div><div class="sidebar-title">全球胜任力</div><div class="sidebar-subtitle">GC PLATFORM</div></div></div>`;
  
  html += `<div class="sidebar-section">主菜单</div>`;
  allItems.forEach(item => {
    const active = item.id === activePage ? 'active' : '';
    html += `<a href="${item.url}" class="sidebar-item ${active}"><span class="sidebar-icon">${item.icon}</span><span>${item.label}</span></a>`;
  });
  
  html += `<div class="sidebar-divider"></div>`;
  html += `<div class="sidebar-section">系统</div>`;
  bottomItems.forEach(item => {
    const active = item.id === activePage ? 'active' : '';
    html += `<a href="${item.url}" class="sidebar-item ${active}"><span class="sidebar-icon">${item.icon}</span><span>${item.label}</span></a>`;
  });
  
  if (user) {
    html += `<div class="sidebar-divider"></div>`;
    html += `<div class="sidebar-user">`;
    html += `<div class="sidebar-user-avatar">${(user.profile?.fullName || user.username).charAt(0)}</div>`;
    html += `<div class="sidebar-user-info">`;
    html += `<div class="sidebar-user-name">${user.profile?.fullName || user.username}</div>`;
    html += `<div class="sidebar-user-role">${role === 'student' ? '学生' : '企业导师'}</div>`;
    html += `</div></div>`;
    html += `<a href="index.html" class="sidebar-item" onclick="Auth.logout(); return true;"><span class="sidebar-icon">🚪</span><span>退出登录</span></a>`;
  }
  
  html += `</aside>`;
  return html;
}

function initPage(activePage) {
  // Check auth
  if (!Auth.isLoggedIn() && activePage !== 'login') {
    window.location.href = 'index.html';
    return;
  }
  
  // Render sidebar
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.innerHTML = renderSidebar(activePage);
  }
  
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('open');
    });
  }
}