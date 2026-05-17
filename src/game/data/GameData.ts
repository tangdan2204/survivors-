import {
    VoidRayWeapon, PhantomSlashWeapon, PlasmaCannonWeapon, NanobotSwarmWeapon,
    SporeCloudWeapon, SingularityOrbWeapon, OrbitalStrikeWeapon, MindBlastWeapon,
    ChronoDiscWeapon, AcidPoolWeapon, LightningChainWeapon, SpinningEmberWeapon,
    FrostNovaWeapon, PlasmaGrenadeWeapon
} from '../weapons/implementations';

export const CLASSES = [
    { name: "虚空行者", emoji: "🌑", bonus: "速度 +10%", weaponId: 'void_ray', hp: 90, stats: { moveSpeed: 1.1 } },
    { name: "赛博武士", emoji: "🤖", bonus: "暴击 +10%", weaponId: 'phantom_slash', hp: 85, stats: { critChance: 0.15 } },
    { name: "重型炮手", emoji: "🦍", bonus: "威力 +20%, 速度 -10%", weaponId: 'plasma_cannon', hp: 110, stats: { might: 1.2, moveSpeed: 0.9 } },
    { name: "科技法师", emoji: "🧙‍♂️", bonus: "持续 +20%", weaponId: 'nanobot_swarm', hp: 100, stats: { duration: 1.2 } },
    { name: "星际生物学家", emoji: "👨‍🔬", bonus: "回复 +1", weaponId: 'spore_cloud', hp: 95, stats: { regen: 1 } },
    { name: "量子物理学家", emoji: "⚛️", bonus: "冷却 -10%", weaponId: 'singularity_orb', hp: 80, stats: { cooldown: 0.9 } },
    { name: "外骨骼陆战队", emoji: "👮", bonus: "护甲 +2", weaponId: 'orbital_strike', hp: 130, stats: { armor: 2 } },
    { name: "灵能者", emoji: "🧠", bonus: "范围 +20%", weaponId: 'mind_blast', hp: 75, stats: { area: 1.2 } },
    { name: "时间守望者", emoji: "⏳", bonus: "弹速 +20%", weaponId: 'chrono_disc', hp: 100, stats: { speed: 1.2 } },
    { name: "异星共生体", emoji: "👽", bonus: "成长 +20%", weaponId: 'acid_pool', hp: 95, stats: { growth: 1.2 } },
    { name: "风暴法师", emoji: "⚡", bonus: "威力 +15%", weaponId: 'lightning_chain', hp: 70, stats: { might: 1.15 } },
    { name: "狂战士", emoji: "🔥", bonus: "生命 +50%, 护甲 -2, 威力 +10%", weaponId: 'spinning_ember', hp: 150, stats: { armor: -2, might: 1.1 } },
    { name: "冰霜法师", emoji: "🧊", bonus: "范围 +15%, 冷却 -10%", weaponId: 'frost_nova', hp: 85, stats: { area: 1.15, cooldown: 0.9 } },
    { name: "爆破专家", emoji: "💣", bonus: "范围 +20%, 威力 +10%", weaponId: 'plasma_grenade', hp: 100, stats: { area: 1.2, might: 1.1 } },
];

export const POWERUPS = [
    { name: "纳米修复", description: "回复 +0.5/秒", type: "regen", value: 0.5, emoji: "❤️" },
    { name: "瞄准系统", description: "暴击 +5%", type: "critChance", value: 0.05, emoji: "🎯" },
    { name: "等离子核心", description: "威力 +5%", type: "might", value: 0.05, emoji: "💪" },
    { name: "冷却系统", description: "冷却 -5%", type: "cooldown", value: -0.05, emoji: "❄️" },
    { name: "引力阱", description: "吸引范围 +20%", type: "magnet", value: 20, emoji: "🧲" },
    { name: "连锁反应", description: "范围 +10%", type: "area", value: 0.1, emoji: "💣" },
    { name: "吸血链接", description: "成长 +10%", type: "growth", value: 0.1, emoji: "🧛" },
    { name: "时间波动", description: "持续 +15%", type: "duration", value: 0.15, emoji: "⏰" },
    { name: "狂暴之怒", description: "暴伤 +25%", type: "critDamage", value: 0.25, emoji: "😡" },
    { name: "屏障力场", description: "最大生命 +10", type: "maxHp", value: 10, emoji: "🔮" },
    { name: "超频加速", description: "弹速 +10%", type: "speed", value: 0.1, emoji: "⏩" },
    { name: "相位转移", description: "移速 +10%", type: "moveSpeed", value: 0.1, emoji: "👻" },
    { name: "快速脉冲", description: "区域伤害间隔 -0.1秒", type: "tick", value: 0.1, emoji: "⏱️" },
    { name: "虚空护盾", description: "护甲 +1", type: "armor", value: 1, emoji: "🌌" },
];

export const WEAPONS = [
    {
        id: 'void_ray',
        name: "虚空射线",
        emoji: "🔫",
        description: "向敌人发射光束",
        class: VoidRayWeapon,
        evolution: {
            name: "虚空加农",
            emoji: "💜",
            description: "巨型虚空光束附带范围爆炸"
        }
    },
    {
        id: 'phantom_slash',
        name: "幻影斩",
        emoji: "⚔️",
        description: "瞬间斩击随机敌人",
        class: PhantomSlashWeapon,
        evolution: {
            name: "次元之刃",
            emoji: "🗡️",
            description: "穿越次元，贯穿一切"
        }
    },
    {
        id: 'plasma_cannon',
        name: "等离子炮",
        emoji: "🔋",
        description: "发射大型爆炸等离子弹",
        class: PlasmaCannonWeapon,
        evolution: {
            name: "聚变核心",
            emoji: "⚛️",
            description: "等离子弹击中后产生黑洞"
        }
    },
    {
        id: 'nanobot_swarm',
        name: "纳米蜂群",
        emoji: "🦠",
        description: "玩家周围的伤害光环",
        class: NanobotSwarmWeapon,
        evolution: {
            name: "纳米瘟疫",
            emoji: "☣️",
            description: "在敌人间传播，覆盖巨大范围"
        }
    },
    {
        id: 'spore_cloud',
        name: "孢子云",
        emoji: "🍄",
        description: "留下伤害区域",
        class: SporeCloudWeapon,
        evolution: {
            name: "菌类末日",
            emoji: "🍄‍🟫",
            description: "巨大毒区永久存在"
        }
    },
    {
        id: 'singularity_orb',
        name: "奇点球",
        emoji: "⚫",
        description: "缓慢移动的毁灭之球",
        class: SingularityOrbWeapon,
        evolution: {
            name: "黑洞",
            emoji: "🕳️",
            description: "吸入并碾碎所有敌人"
        }
    },
    {
        id: 'orbital_strike',
        name: "轨道打击",
        emoji: "🛰️",
        description: "召唤随机位置爆炸",
        class: OrbitalStrikeWeapon,
        evolution: {
            name: "原子弹",
            emoji: "☢️",
            description: "巨型核爆与蘑菇云"
        }
    },
    {
        id: 'mind_blast',
        name: "精神冲击",
        emoji: "🧠",
        description: "在敌人位置引发爆炸",
        class: MindBlastWeapon,
        evolution: {
            name: "灵能风暴",
            emoji: "🌀",
            description: "多重爆炸，眩晕敌人"
        }
    },
    {
        id: 'chrono_disc',
        name: "时光飞碟",
        emoji: "💿",
        description: "回旋飞碟",
        class: ChronoDiscWeapon,
        evolution: {
            name: "时间碎裂",
            emoji: "⏰",
            description: "飞碟分裂为时间回声"
        }
    },
    {
        id: 'acid_pool',
        name: "酸液池",
        emoji: "🧪",
        description: "投掷酸液瓶",
        class: AcidPoolWeapon,
        evolution: {
            name: "毒液洪流",
            emoji: "☢️",
            description: "击中后产生酸液水洼，持续伤害"
        }
    },
    {
        id: 'lightning_chain',
        name: "链式闪电",
        emoji: "⚡",
        description: "在敌人间连锁弹射",
        class: LightningChainWeapon,
        evolution: {
            name: "雷暴",
            emoji: "🌩️",
            description: "无限连锁闪电"
        }
    },
    {
        id: 'spinning_ember',
        name: "旋转火焰",
        emoji: "🔥",
        description: "环绕你的火球",
        class: SpinningEmberWeapon,
        evolution: {
            name: "炼狱之鞭",
            emoji: "🌋",
            description: "留下燃烧轨迹"
        }
    },
    {
        id: 'frost_nova',
        name: "冰霜新星",
        emoji: "❄️",
        description: "减速敌人的冰冻光环",
        class: FrostNovaWeapon,
        evolution: {
            name: "绝对零度",
            emoji: "🧊",
            description: "将敌人冻结为冰块，巨额伤害"
        }
    },
    {
        id: 'plasma_grenade',
        name: "等离子手雷",
        emoji: "💣",
        description: "投掷等离子手雷，触碰爆炸",
        class: PlasmaGrenadeWeapon,
        evolution: {
            name: "超新星爆发",
            emoji: "💥",
            description: "连锁爆炸造成巨大范围伤害"
        }
    },
];



// ⚙️ Конфигурация врагов — измени эти значения для балансировки
export const ENEMY_CONFIG = {
    baseHp: 10,           // Базовое HP первого врага
    hpMultiplier: 2,      // Множитель HP для каждого следующего (x2)
    baseDamage: 5,        // Базовый урон первого врага
    damageMultiplier: 1.5, // Множитель урона для каждого следующего (x1.5)
    baseXp: 1,            // Базовый XP первого врага
    xpMultiplier: 1.5,    // Множитель XP для каждого следующего (x1.5)
    baseSpeed: 100,       // Базовая скорость
};

// Шаблоны врагов — только имя, эмоджи и модификатор скорости
const ENEMY_TEMPLATES = [
    { name: "虚空蝙蝠", emoji: "🦇", speedMod: 1.0 },
    { name: "侦察无人机", emoji: "🛸", speedMod: 0.8 },
    { name: "异形蜘蛛", emoji: "🕷️", speedMod: 0.7 },
    { name: "外星步兵", emoji: "👾", speedMod: 0.9 },
    { name: "机甲士兵", emoji: "🤖", speedMod: 0.6 },
    { name: "陨石巨人", emoji: "🪨", speedMod: 0.4 },
    { name: "虚空幽灵", emoji: "🌀", speedMod: 1.1 },
    { name: "死亡行者", emoji: "💀", speedMod: 1.2 },
    { name: "触手恐惧", emoji: "🐙", speedMod: 0.5 },
    { name: "等离子元素", emoji: "�", speedMod: 0.9 },
    { name: "末日先驱", emoji: "☠️", speedMod: 1.0 },
];

// Генерация массива врагов с динамическими статами
export const ENEMIES = ENEMY_TEMPLATES.map((template, index) => ({
    name: template.name,
    hp: Math.floor(ENEMY_CONFIG.baseHp * Math.pow(ENEMY_CONFIG.hpMultiplier, index)),
    speed: Math.floor(ENEMY_CONFIG.baseSpeed * template.speedMod),
    damage: Math.floor(ENEMY_CONFIG.baseDamage * Math.pow(ENEMY_CONFIG.damageMultiplier, index)),
    xpValue: Math.floor(ENEMY_CONFIG.baseXp * Math.pow(ENEMY_CONFIG.xpMultiplier, index)),
    emoji: template.emoji,
}));
