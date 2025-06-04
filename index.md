---
layout: home
---

<div class="hero">
  <h1 class="hero-title">Timenugget</h1>
  <p class="hero-description">高效时间管理，专注核心任务</p>

  <div class="hero-buttons">
    <a href="./docs/" class="action-button primary">文档中心</a>
    <a href="./others/" class="action-button secondary">其他资源</a>
  </div>
</div>

<div class="feature-summary">
  <h2>什么是Timenugget？</h2>
  <p>Timenugget 是一个创新的时间管理工具，帮助您将大任务分解为可管理的时间块（"时间金块"）。通过专注的工作-休息周期，提高工作效率同时避免倦怠。</p>

  <div class="features">
    <div class="feature-card">
      <h3>⏱️ 时间分块</h3>
      <p>将复杂任务分解为25分钟专注块</p>
    </div>
    <div class="feature-card">
      <h3>📊 进度跟踪</h3>
      <p>可视化您的任务完成情况和时间分配</p>
    </div>
    <div class="feature-card">
      <h3>🔔 智能提醒</h3>
      <p>定时提醒确保工作节奏和休息时间</p>
    </div>
  </div>
</div>

<style>
:root {
  --primary-color: #42b883;
  --secondary-color: #35495e;
  --light-bg: #f8f8f8;
  --text-color: #2c3e50;
  --text-light: #ffffff;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-light);
  border-radius: 10px;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.primary {
  background-color: var(--text-light);
  color: var(--primary-color);
  border: 2px solid var(--text-light);
}

.primary:hover {
  background-color: transparent;
  color: var(--text-light);
}

.secondary {
  background-color: transparent;
  color: var(--text-light);
  border: 2px solid var(--text-light);
}

.secondary:hover {
  background-color: var(--text-light);
  color: var(--secondary-color);
}

.feature-summary {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.feature-summary h2 {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

.feature-summary p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature-card {
  flex: 1;
  min-width: 250px;
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: var(--primary-color);
  margin-top: 0;
}
</style>
