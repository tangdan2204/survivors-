# 🧟 宇宙幸存者

一款 **类 Vampire Survivors** 的 Roguelike 游戏，使用 TypeScript 和 Vite 构建。对抗无尽的敌潮、收集经验、升级并进化你的武器！

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)

**[🕹️ 在线游玩](https://sv.tangdan.cc)**

## 🎮 特性

- **14 种独特职业** — 每种拥有不同的初始武器和属性加成
- **14 种武器** — 各具独特机制，6 级时可进化
- **16+ 种增益** — 增强你的属性和能力
- **8 种敌人类型** — 从基础蛇形怪到强力 Boss
- **经验水晶** — 击败敌人掉落不同大小和数值的水晶
- **移动端支持** — 触控操作，支持虚拟摇杆（Android）

> 📖 **开发者须知**：详见 [GAME_MECHANICS.md](GAME_MECHANICS.md) 了解武器系统、公式和游戏行为修改的详细文档。

## 🛠️ 技术栈

| 技术             | 用途                                     |
| ---------------- | ---------------------------------------- |
| **TypeScript**   | 核心游戏逻辑，强类型                     |
| **Vite**         | 快速开发服务器和打包工具                 |
| **Canvas API**   | 游戏渲染（无框架，纯 Canvas）            |
| **Capacitor**    | Android APK 构建                         |
| **GitHub Actions** | CI/CD 自动化 Android 构建              |

## 📁 项目结构

```
survivors/
├── src/
│   ├── game/
│   │   ├── core/           # 工具类、输入处理、渲染
│   │   ├── data/           # 游戏数据（职业、武器、敌人、增益）
│   │   ├── entities/       # 玩家、敌人、经验水晶实体
│   │   ├── weapons/        # 武器实现和类型
│   │   ├── ui/             # 游戏内 UI（移动端摇杆）
│   │   ├── Entity.ts       # 基础实体类
│   │   ├── Weapon.ts       # 基础武器类
│   │   └── GameManager.ts  # 主游戏循环和状态管理
│   ├── style.css           # 游戏样式
│   └── main.ts             # 入口文件
├── android/                # Capacitor Android 项目
├── .github/workflows/      # GitHub Actions CI/CD
└── dist/                   # 生产构建输出
```

## 🚀 快速开始

### 前置要求
- Node.js 18+
- npm 或 yarn

### 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

### Android 构建

```bash
# 同步 Web 资源到 Android
npx cap sync android

# 在 Android Studio 中打开
npx cap open android
```

或推送到 GitHub — CI/CD 流水线会自动构建并发布 APK。

## ⚔️ 武器配置

所有武器数据集中在 `src/game/data/GameData.ts` 的 `WEAPON_STATS` 对象中，方便平衡调整：

```typescript
export const WEAPON_STATS: Record<string, WeaponConfig> = {
    void_ray: { damage: 25, cooldown: 2.0, ... },
    nanobot_swarm: { damage: 0.8, ... },
    // ... 共 14 种武器
};
```

### 配置参数

| 参数              | 说明                                     |
| ----------------- | ---------------------------------------- |
| `damage`          | 基础伤害                                 |
| `damageScaling`   | 升级时的伤害倍率（如 1.2 = +20%）        |
| `cooldown`        | 基础冷却时间（秒）                       |
| `area`            | 基础大小/半径                            |
| `areaScaling`     | 升级时的大小倍率                         |
| `speed`           | 弹道速度                                 |
| `duration`        | 效果持续时间                             |
| `pierce`          | 穿透/弹射次数                            |
| `count`           | 基础弹道数量                             |
| `countScaling`    | 每级增加的数量                           |

### 武器列表

| ID                | 武器              | 职业              | 说明                                |
| ----------------- | ----------------- | ----------------- | ----------------------------------- |
| `void_ray`        | 🔫 虚空射线       | 虚空行者          | 发射强力蓄能光束                    |
| `phantom_slash`   | ⚔️ 幻影斩         | 赛博武士          | 瞬间斩击随机敌人                    |
| `plasma_cannon`   | 🔋 等离子炮       | 重炮手            | 爆炸性等离子弹                      |
| `nanobot_swarm`   | 🦠 纳米虫群       | 科技法师          | 吞噬敌人的纳米机器人群              |
| `spore_cloud`     | 🍄 孢子云         | 太空生物学家      | 留下持续伤害区域                    |
| `singularity_orb` | ⚫ 奇点球         | 量子物理学家      | 缓慢移动的毁灭之球                  |
| `orbital_strike`  | 🛰️ 轨道打击       | 外骨骼陆战队      | 召唤随机爆炸                        |
| `mind_blast`      | 🧠 精神冲击       | 灵能师            | 在敌人位置产生灵能爆炸              |
| `chrono_disc`     | 💿 时空圆盘       | 时间守护者        | 在敌人间弹射的圆盘                  |
| `acid_pool`       | 🧪 酸液池         | 异形共生体        | 投掷酸液瓶创建酸液地带              |
| `lightning_chain` | ⚡ 闪电链         | 风暴法师          | 在敌人间跳跃的闪电                  |
| `spinning_ember`  | 🔥 旋转火焰       | 狂战士            | 环绕玩家旋转的火球                  |
| `frost_nova`      | ❄️ 冰霜新星       | 冰霜法师          | 减速敌人的冰冻手雷                  |
| `fan_of_knives`   | 🗡️ 刀刃扇形       | 暗影刺客          | 发射扇形飞刀                        |

## 🎯 游戏操控

### 桌面端
- **WASD / 方向键** — 移动
- **鼠标** — 瞄准方向（可选）

### 移动端
- **虚拟摇杆** — 触摸拖动移动

## 📜 许可协议

本项目基于 **MIT 许可协议** — 你可以自由使用、修改和分发！只需保留版权声明。详见 [LICENSE](LICENSE)。

---

*使用 💜 和 TypeScript 制作*
