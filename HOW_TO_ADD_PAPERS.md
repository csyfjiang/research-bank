# 如何添加论文到 VLA Survey 网站

## 快速开始

你只需要编辑 `src/data/papers.json` 文件即可添加、修改或删除论文信息。

## JSON 结构说明

### 1. 元数据 (metadata)

```json
{
  "metadata": {
    "title": "论文标题",
    "authors": [
      {"name": "作者名", "affiliations": ["a", "b"]}
    ],
    "affiliations": {
      "a": "机构A",
      "b": "机构B"
    },
    "links": {
      "github": "GitHub链接",
      "arxiv": "arXiv链接",
      "paper": "PDF链接"
    },
    "updatedDate": "2026-01-27",
    "bibtex": "BibTeX引用",
    "contactEmail": "联系邮箱"
  }
}
```

### 2. 挑战分类 (challenges & subChallenges)

```json
{
  "challenges": [
    "Multi-Modal Fusion and Physical World Representation",
    "From Complex Instructions to Robust and Real-Time Execution"
  ],
  "subChallenges": [
    "From 2D Images to Spatial Temporal Representations",
    "Hierarchical Planning and Task Decomposition"
  ]
}
```

### 3. 时间线 (timeline)

```json
{
  "timeline": [
    {
      "year": "2022",
      "title": "Early VLA Models",
      "description": "描述文字"
    }
  ]
}
```

### 4. 论文数据 (latestPapers & allPapers)

**论文对象结构：**

```json
{
  "id": "唯一标识符",
  "name": "论文名称",
  "date": "2026-01-22",
  "challenge": "所属挑战",
  "subChallenge": "所属子挑战",
  "howToSolve": "解决方法描述",
  "trainingType": "训练类型 (如: RL and BC)",
  "dataset": "使用的数据集",
  "evaluation": "评估基准",
  "paperLink": "论文链接",
  "websiteLink": "项目网站链接",
  "starred": false
}
```

## 添加论文示例

在 `latestPapers` 和 `allPapers` 数组中添加新论文：

```json
{
  "id": "my-new-paper",
  "name": "MyNewVLA",
  "date": "2026-01-25",
  "challenge": "Multi-Modal Fusion and Physical World Representation",
  "subChallenge": "From 2D Images to Spatial Temporal Representations",
  "howToSolve": "Our method uses a novel attention mechanism to...",
  "trainingType": "BC and RL",
  "dataset": "Bridge-V2, OXE",
  "evaluation": "LIBERO, SimplerEnv",
  "paperLink": "https://arxiv.org/abs/xxxx.xxxxx",
  "websiteLink": "https://myproject.github.io",
  "starred": false
}
```

## 注意事项

1. **id** 必须是唯一的，建议使用小写字母和连字符
2. **date** 格式为 `YYYY-MM-DD`
3. **challenge** 和 **subChallenge** 应该与上面定义的列表一致
4. 如果某个字段没有值，使用 `"-"` 或空字符串 `""`
5. 添加论文后需要重新构建和部署网站

## 重新部署

修改 `papers.json` 后，运行以下命令：

```bash
# 构建
npm run build

# 部署 (dist 文件夹)
```

## 文件位置

- 数据文件: `src/data/papers.json`
- 类型定义: `src/types/index.ts`
