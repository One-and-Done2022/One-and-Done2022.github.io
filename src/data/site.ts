export const site = {
  name: "Chenyang Liu",
  cnName: "刘晨阳",
  title: "机器人与 AI 工程实践",
  description:
    "关注机器人运动规划、机械臂避障、AI 工程系统与可复现的技术实践。",
  university: "University of Electronic Science and Technology of China",
  location: "Chengdu, China",
  github: "https://github.com/One-and-Done2022",
  githubHandle: "One-and-Done2022",
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "博客", href: "/blog/" },
  { label: "项目", href: "/projects/" },
  { label: "关于", href: "/about/" },
];

export const focusAreas = [
  "Motion Planning",
  "Manipulator Obstacle Avoidance",
  "AI Engineering",
  "Python Robotics",
];

export const projects = [
  {
    name: "DmpManipulatorObstacleAvoidance",
    description: "基于 DMP 和 canal_surface 势场的机械臂避障项目。",
    href: "https://github.com/One-and-Done2022/DmpManipulatorObstacleAvoidance",
    tags: ["Python", "DMP", "Manipulator", "Obstacle Avoidance"],
    featured: true,
  },
  {
    name: "tare_planner",
    description: "TARE Exploration Planner for Ground Vehicles 的学习与实践仓库。",
    href: "https://github.com/One-and-Done2022/tare_planner",
    tags: ["Robotics", "Planning", "ROS"],
    featured: true,
  },
  {
    name: "movement_primitives",
    description: "DMP、ProMP 等运动基元方法的学习材料与实验参考。",
    href: "https://github.com/One-and-Done2022/movement_primitives",
    tags: ["DMP", "Imitation Learning", "Robotics"],
    featured: true,
  },
  {
    name: "robotics-toolbox-python",
    description: "Robotics Toolbox for Python 相关学习与工具使用参考。",
    href: "https://github.com/One-and-Done2022/robotics-toolbox-python",
    tags: ["Python", "Robotics", "Kinematics"],
    featured: false,
  },
];

export const timeline = [
  {
    time: "Now",
    title: "机器人运动规划与 AI 工程",
    detail: "围绕机械臂避障、轨迹生成、工程工具链和技术写作持续沉淀。",
  },
  {
    time: "UESTC",
    title: "电子科技大学",
    detail: "聚焦工程系统、算法实践和机器人方向的学习与项目积累。",
  },
];
