# 提示词工程（Prompt Engineering）

**标签**：AI&nbsp;|&nbsp;提示词工程&nbsp;|&nbsp;最佳实践

> 提示词工程是指为了让大语言模型（LLM）生成满足预期的文本或行为，通过设计、优化输入提示的全过程和方法论。

---

## 1. 什么是提示词工程

- 定义：通过精心构造输入提示（Prompt），引导模型输出高质量、可控的结果。  
- 目标：提升模型的准确度、一致性和可解释性。  
- 应用场景：内容生成、代码辅助、对话系统、数据分析等。

## 2. 设计原则

1. **明确目标**：先定义预期输出的格式、风格、粒度。  
2. **分步提示**：复杂任务可拆分为多轮或多阶段 Prompt。  
3. **示例引导**：提供正负例或模版帮助模型“学习”。  
4. **迭代优化**：根据反馈不断调整提示措辞与结构。

## 3. 常用技巧

- 使用系统指令（System Prompt）区分角色与权限。  
- 增加上下文（Context）以减少歧义。  
- 适当控制温度（Temperature）与最大长度（Max Tokens）。  
- 利用 few-shot 学习示例提高准确率。  
- 使用“元提示”（Meta Prompt）让模型自我检查或补充回答。

## 4. 典型模板示例

```text
System: 你是一位资深技术专家。  
User: 请将以下需求转化为接口文档，要求包含接口名称、方法、URL、请求参数、响应示例。
需求：{"功能": "用户登录", "参数": ["用户名", "密码"]}
```

## 5. 实践案例

- **文档撰写**：通过 Prompt 模板自动生成产品说明。  
- **代码生成**：结合 ChatGPT 或 Copilot，一键补全常用模块。  
- **数据分析**：使用 Prompt 调用模型生成分析报告与可视化建议。

## 6. 工具与资源

- OpenAI Playground / ChatGPT  
- LangChain、Promptify 等开源库  
- Awesome Prompt Engineering（GitHub 汇总）  
- PromptBench、PEZ：Benchmark 数据集

## 7. 常见问题

- Q：如何避免模型“胡编”？  
  A：增加约束性描述，并使用示例校验。  
- Q：提示过长会影响效率吗？  
  A：可简化上下文，或分段调用 API。

## 8. 参考文献

1. Reynolds, L. & McDonell, K. (2021). *Prompt Engineering Guide*. GitHub.  
2. OpenAI. (2023). *Best Practices for Prompting*.  
3. Zhao, W. et al. (2022). *RoBERTa: A Robustly Optimized BERT Pretraining Approach*.

---

> 以上内容可根据项目需求增删或深度定制，持续迭代提示词以获得最优效果。
