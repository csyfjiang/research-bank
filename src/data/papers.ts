export interface Paper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  abstract: string;
  summary: string;
  gaps: string;
  objectives: string;
  code?: string;
  direction: string;
  tags: string[];
}

export interface Direction {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  color: string;
}

export const directions: Direction[] = [
  {
    id: 'cv',
    name: 'Computer Vision',
    nameZh: '计算机视觉',
    description: 'Image classification, object detection, segmentation',
    descriptionZh: '图像分类、目标检测、分割',
    color: '#3b82f6'
  },
  {
    id: 'large-models',
    name: 'Large Models',
    nameZh: '大模型',
    description: 'Foundation models, pre-training, scaling',
    descriptionZh: '基础模型、预训练、规模化',
    color: '#8b5cf6'
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    nameZh: '机器学习',
    description: 'Deep learning, optimization, theory',
    descriptionZh: '深度学习、优化、理论',
    color: '#10b981'
  },
  {
    id: 'plug-play',
    name: 'Plug & Play',
    nameZh: '即插即用',
    description: 'Modular components, adapters, transfer learning',
    descriptionZh: '模块化组件、适配器、迁移学习',
    color: '#f59e0b'
  },
  {
    id: 'survey',
    name: 'Survey Papers',
    nameZh: '综述论文',
    description: 'Literature review, taxonomy, analysis',
    descriptionZh: '文献综述、分类法、分析',
    color: '#ef4444'
  },
  {
    id: 'multimodal',
    name: 'Multi-modality',
    nameZh: '多模态',
    description: 'Vision-language, audio-visual, cross-modal',
    descriptionZh: '视觉-语言、音频-视觉、跨模态',
    color: '#ec4899'
  },
  {
    id: 'interdisciplinary',
    name: 'Interdisciplinary',
    nameZh: '跨学科',
    description: 'Medical imaging, robotics, scientific computing',
    descriptionZh: '医学影像、机器人、科学计算',
    color: '#06b6d4'
  },
  {
    id: 'benchmark',
    name: 'Benchmark',
    nameZh: 'Benchmark',
    description: 'Evaluation benchmarks, leaderboards, performance metrics',
    descriptionZh: '评估基准、排行榜、性能指标',
    color: '#6366f1'
  },
  {
    id: 'datasets',
    name: 'Datasets',
    nameZh: 'Datasets',
    description: 'Dataset construction, annotation, data curation',
    descriptionZh: '数据集构建、标注、数据整理',
    color: '#14b8a6'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    nameZh: '架构',
    description: 'Network architectures, model design, backbone structures',
    descriptionZh: '网络架构、模型设计、主干结构',
    color: '#f97316'
  }
];

export const papers: Paper[] = [
  {
    id: '1',
    title: 'ResNet: Deep Residual Learning for Image Recognition',
    authors: ['Kaiming He', 'Xiangyu Zhang', 'Shaoqing Ren', 'Jian Sun'],
    year: 2016,
    venue: 'CVPR',
    abstract: 'We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.',
    summary: 'Introduces residual connections that enable training of very deep neural networks by learning residual mappings.',
    gaps: 'Training deep networks is difficult due to vanishing gradients and degradation problem.',
    objectives: 'Enable training of networks with 100+ layers while maintaining good performance.',
    code: 'https://github.com/KaimingHe/deep-residual-networks',
    direction: 'cv',
    tags: ['CNN', 'Image Classification', 'Deep Learning']
  },
  {
    id: '2',
    title: 'Attention Is All You Need',
    authors: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit', 'Llion Jones', 'Aidan N. Gomez', 'Łukasz Kaiser', 'Illia Polosukhin'],
    year: 2017,
    venue: 'NeurIPS',
    abstract: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms.',
    summary: 'Proposes the Transformer architecture that replaces RNNs with self-attention, achieving better performance and parallelization.',
    gaps: 'RNN-based models are slow to train and struggle with long-range dependencies.',
    objectives: 'Create a simpler, faster architecture that captures global dependencies effectively.',
    code: 'https://github.com/tensorflow/tensor2tensor',
    direction: 'cv',
    tags: ['Transformer', 'Attention', 'NLP']
  },
  {
    id: '3',
    title: 'Swin Transformer: Hierarchical Vision Transformer using Shifted Windows',
    authors: ['Ze Liu', 'Yutong Lin', 'Yue Cao', 'Han Hu', 'Yixuan Wei', 'Zheng Zhang', 'Stephen Lin', 'Baining Guo'],
    year: 2021,
    venue: 'ICCV',
    abstract: 'We present a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains.',
    summary: 'Introduces hierarchical vision transformer with shifted windows for efficient local and global modeling.',
    gaps: 'Vision transformers have quadratic complexity and lack hierarchical feature representation.',
    objectives: 'Design an efficient hierarchical vision transformer suitable for various vision tasks.',
    code: 'https://github.com/microsoft/Swin-Transformer',
    direction: 'cv',
    tags: ['Vision Transformer', 'Backbone', 'Hierarchical']
  },
  {
    id: '4',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers',
    authors: ['Jacob Devlin', 'Ming-Wei Chang', 'Kenton Lee', 'Kristina Toutanova'],
    year: 2019,
    venue: 'NAACL',
    abstract: 'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text.',
    summary: 'Introduces bidirectional pre-training for language understanding with masked language modeling.',
    gaps: 'Previous models only use left-to-right or shallow bidirectional context.',
    objectives: 'Learn deep bidirectional representations by conditioning on both left and right context.',
    code: 'https://github.com/google-research/bert',
    direction: 'large-models',
    tags: ['Pre-training', 'NLP', 'Bidirectional']
  },
  {
    id: '5',
    title: 'GPT-3: Language Models are Few-Shot Learners',
    authors: ['Tom B. Brown', 'Benjamin Mann', 'Nick Ryder', 'Melanie Subbiah', 'Jared Kaplan', 'Prafulla Dhariwal', 'Arvind Neelakantan', 'Pranav Shyam'],
    year: 2020,
    venue: 'NeurIPS',
    abstract: 'Recent work has demonstrated substantial gains on many NLP tasks by pre-training on a large corpus of text. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets.',
    summary: 'Demonstrates that scaling language models to 175B parameters enables few-shot learning without fine-tuning.',
    gaps: 'Fine-tuning requires large labeled datasets for each task, limiting applicability.',
    objectives: 'Show that large language models can perform tasks with just a few examples in context.',
    direction: 'large-models',
    tags: ['GPT', 'Few-shot', 'Language Model']
  },
  {
    id: '6',
    title: 'CLIP: Learning Transferable Visual Models From Natural Language Supervision',
    authors: ['Alec Radford', 'Jong Wook Kim', 'Chris Hallacy', 'Aditya Ramesh', 'Gabriel Goh', 'Sandhini Agarwal', 'Girish Sastry', 'Amanda Askell'],
    year: 2021,
    venue: 'ICML',
    abstract: 'State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This restricted form of supervision limits their generality and usability since additional labeled data is needed to specify any other visual concept.',
    summary: 'Learns visual representations from natural language supervision, enabling zero-shot transfer to new tasks.',
    gaps: 'Vision models are limited to predefined categories and require extensive labeled data.',
    objectives: 'Learn transferable visual representations using natural language as training signal.',
    code: 'https://github.com/OpenAI/CLIP',
    direction: 'large-models',
    tags: ['Vision-Language', 'Contrastive Learning', 'Zero-shot']
  },
  {
    id: '7',
    title: 'Adam: A Method for Stochastic Optimization',
    authors: ['Diederik P. Kingma', 'Jimmy Ba'],
    year: 2015,
    venue: 'ICLR',
    abstract: 'We introduce Adam, an algorithm for first-order gradient-based optimization of stochastic objective functions, based on adaptive estimates of lower-order moments.',
    summary: 'Proposes an adaptive optimization algorithm that combines momentum and RMSprop for faster convergence.',
    gaps: 'Existing optimization methods require careful tuning of learning rates and converge slowly.',
    objectives: 'Design an optimization algorithm that is computationally efficient and has low memory requirements.',
    code: 'https://github.com/pytorch/pytorch',
    direction: 'ml',
    tags: ['Optimization', 'Gradient Descent', 'Adaptive']
  },
  {
    id: '8',
    title: 'Batch Normalization: Accelerating Deep Network Training',
    authors: ['Sergey Ioffe', 'Christian Szegedy'],
    year: 2015,
    venue: 'ICML',
    abstract: 'Training Deep Neural Networks is complicated by the fact that the distribution of each layer\'s inputs changes during training, as the parameters of the previous layers change.',
    summary: 'Normalizes layer inputs to reduce internal covariate shift, enabling faster training and higher learning rates.',
    gaps: 'Internal covariate shift slows down training and requires careful initialization.',
    objectives: 'Stabilize the distribution of layer inputs to accelerate deep network training.',
    direction: 'ml',
    tags: ['Normalization', 'Training', 'Deep Learning']
  },
  {
    id: '9',
    title: 'Dropout: A Simple Way to Prevent Neural Networks from Overfitting',
    authors: ['Nitish Srivastava', 'Geoffrey Hinton', 'Alex Krizhevsky', 'Ilya Sutskever', 'Ruslan Salakhutdinov'],
    year: 2014,
    venue: 'JMLR',
    abstract: 'Deep neural networks with a large number of parameters are very powerful machine learning systems. However, overfitting is a serious problem in such networks.',
    summary: 'Randomly drops units during training to prevent co-adaptation and reduce overfitting.',
    gaps: 'Deep networks with many parameters tend to overfit the training data.',
    objectives: 'Prevent overfitting by randomly dropping neurons during training.',
    code: 'https://github.com/tensorflow/tensorflow',
    direction: 'ml',
    tags: ['Regularization', 'Overfitting', 'Neural Networks']
  },
  {
    id: '10',
    title: 'LoRA: Low-Rank Adaptation of Large Language Models',
    authors: ['Edward J. Hu', 'Yelong Shen', 'Phillip Wallis', 'Zeyuan Allen-Zhu', 'Yuanzhi Li', 'Shean Wang', 'Lu Wang', 'Weizhu Chen'],
    year: 2022,
    venue: 'ICLR',
    abstract: 'The dominant paradigm in natural language processing is pre-training on a large text corpus followed by fine-tuning on specific tasks. However, as models become larger, storing and fine-tuning all parameters becomes prohibitively expensive.',
    summary: 'Freezes pre-trained weights and injects trainable low-rank matrices for efficient fine-tuning.',
    gaps: 'Fine-tuning large models requires storing full model copies for each task.',
    objectives: 'Enable parameter-efficient fine-tuning by learning low-rank adaptations.',
    code: 'https://github.com/microsoft/LoRA',
    direction: 'plug-play',
    tags: ['Fine-tuning', 'Parameter-Efficient', 'Low-Rank']
  },
  {
    id: '11',
    title: 'Adapter: Parameter-Efficient Transfer Learning for NLP',
    authors: ['Neil Houlsby', 'Andrei Giurgiu', 'Stanislaw Jastrzebski', 'Bruna Morrone', 'Quentin de Laroussilhe', 'Andrea Gesmundo', 'Mona Attariyan', 'Sylvain Gelly'],
    year: 2019,
    venue: 'ICML',
    abstract: 'Fine-tuning large pretrained models is an effective transfer mechanism in NLP. However, in the presence of many downstream tasks, fine-tuning is parameter inefficient.',
    summary: 'Adds small adapter modules between layers for task-specific adaptation with minimal parameters.',
    gaps: 'Fine-tuning requires a full model copy for each task, making deployment expensive.',
    objectives: 'Enable efficient transfer learning by adding small trainable adapter modules.',
    code: 'https://github.com/google-research/adapter-bert',
    direction: 'plug-play',
    tags: ['Adapter', 'Transfer Learning', 'Parameter-Efficient']
  },
  {
    id: '12',
    title: 'A Survey on Vision Transformer',
    authors: ['Kai Han', 'Yunhe Wang', 'Hanting Chen', 'Xinghao Chen', 'Jianyuan Guo', 'Zhenhua Liu', 'Yehui Tang', 'An Xiao'],
    year: 2023,
    venue: 'TPAMI',
    abstract: 'Transformers, originally proposed for natural language processing tasks, have recently attracted a surge of interest from the computer vision community.',
    summary: 'Comprehensive review of Transformer architectures for computer vision applications.',
    gaps: 'Lack of systematic understanding of vision transformer designs and their trade-offs.',
    objectives: 'Provide a taxonomy and analysis of vision transformer architectures.',
    code: 'https://github.com/kennymckormick/pytorch-vision-transformers',
    direction: 'survey',
    tags: ['Survey', 'Vision Transformer', 'Review']
  },
  {
    id: '13',
    title: 'Self-Supervised Learning in Computer Vision: A Survey',
    authors: ['Xiaohang Zhan', 'Jiahao Xie', 'Ziwei Liu', 'Yew Soon Ong', 'Chen Change Loy'],
    year: 2022,
    venue: 'IJCV',
    abstract: 'Self-supervised learning has gained popularity because of its ability to avoid the cost of annotating large-scale datasets.',
    summary: 'Reviews self-supervised learning methods including pretext tasks and contrastive learning.',
    gaps: 'Need for systematic categorization of self-supervised learning approaches.',
    objectives: 'Survey and categorize self-supervised learning methods in computer vision.',
    direction: 'survey',
    tags: ['Self-Supervised', 'Survey', 'Representation Learning']
  },
  {
    id: '14',
    title: 'Vision-Language Pre-training: Basics, Recent Advances, and Future Trends',
    authors: ['Zhe Gan', 'Linjie Li', 'Chunyuan Li', 'Lijuan Wang', 'Zicheng Liu', 'Jianfeng Gao'],
    year: 2022,
    venue: 'Foundations and Trends in Computer Graphics and Vision',
    abstract: 'Vision-language pre-training (VLP) has emerged as a powerful approach for learning cross-modal representations from large-scale image-text data.',
    summary: 'Comprehensive survey of vision-language pre-training methods and applications.',
    gaps: 'Lack of unified understanding of VLP architectures and training objectives.',
    objectives: 'Provide a systematic review of VLP methods, architectures, and applications.',
    direction: 'multimodal',
    tags: ['Vision-Language', 'Pre-training', 'Survey']
  },
  {
    id: '15',
    title: 'BLIP: Bootstrapping Language-Image Pre-training',
    authors: ['Junnan Li', 'Dongxu Li', 'Caiming Xiong', 'Steven Hoi'],
    year: 2022,
    venue: 'ICML',
    abstract: 'Vision-language pre-training (VLP) has achieved impressive performance on various cross-modal downstream tasks. However, most existing methods either rely on large-scale noisy image-text pairs or use smaller but cleaner datasets.',
    summary: 'Uses caption filtering and bootstrapping to improve vision-language pre-training quality.',
    gaps: 'Noisy web data degrades VLP performance; clean datasets are too small.',
    objectives: 'Improve VLP by filtering noisy captions and bootstrapping synthetic captions.',
    code: 'https://github.com/salesforce/BLIP',
    direction: 'multimodal',
    tags: ['Vision-Language', 'Bootstrapping', 'Generation']
  },
  {
    id: '16',
    title: 'U-Net: Convolutional Networks for Biomedical Image Segmentation',
    authors: ['Olaf Ronneberger', 'Philipp Fischer', 'Thomas Brox'],
    year: 2015,
    venue: 'MICCAI',
    abstract: 'There is large consent that successful training of deep networks requires many thousand annotated training samples. In this paper, we present a network and training strategy that relies on the strong use of data augmentation.',
    summary: 'Introduces U-shaped architecture with skip connections for precise biomedical segmentation.',
    gaps: 'Medical image segmentation lacks sufficient annotated training data.',
    objectives: 'Enable accurate segmentation with limited training data using data augmentation.',
    code: 'https://github.com/milesial/Pytorch-UNet',
    direction: 'interdisciplinary',
    tags: ['Medical Imaging', 'Segmentation', 'U-Net']
  },
  {
    id: '17',
    title: 'AlphaFold: Highly Accurate Protein Structure Prediction',
    authors: ['John Jumper', 'Richard Evans', 'Alexander Pritzel', 'Tim Green', 'Michael Figurnov', 'Olaf Ronneberger', 'Kathryn Tunyasuvunakool', 'Russ Bates'],
    year: 2021,
    venue: 'Nature',
    abstract: 'Proteins are essential to life, and understanding their structure can facilitate a mechanistic understanding of their function. Through enormous experimental effort, the structures of around 100,000 unique proteins have been determined.',
    summary: 'Achieves near-experimental accuracy in protein structure prediction using deep learning.',
    gaps: 'Experimental protein structure determination is slow and expensive.',
    objectives: 'Predict protein structures computationally with high accuracy.',
    direction: 'interdisciplinary',
    tags: ['Protein Folding', 'Scientific Computing', 'AlphaFold']
  },
  {
    id: '18',
    title: 'Learning to Walk via Deep Reinforcement Learning',
    authors: ['Xue Bin Peng', 'Glen Berseth', 'KangKang Yin', 'Michiel van de Panne'],
    year: 2017,
    venue: 'SIGGRAPH',
    abstract: 'We propose a deep reinforcement learning framework for learning locomotion skills for a variety of legged robots. Our approach uses policy gradient methods to train neural network controllers.',
    summary: 'Uses deep RL to learn natural locomotion skills for simulated legged robots.',
    gaps: 'Hand-designing robot controllers is difficult and time-consuming.',
    objectives: 'Learn locomotion controllers automatically through deep reinforcement learning.',
    code: 'https://github.com/xbpeng/DeepMimic',
    direction: 'interdisciplinary',
    tags: ['Robotics', 'Reinforcement Learning', 'Locomotion']
  },
  {
    id: '19',
    title: 'ImageNet Large Scale Visual Recognition Challenge',
    authors: ['Olga Russakovsky', 'Jia Deng', 'Hao Su', 'Jonathan Krause', 'Sanjeev Satheesh', 'Sean Ma', 'Zhiheng Huang', 'Andrej Karpathy', 'Aditya Khosla', 'Michael Bernstein'],
    year: 2015,
    venue: 'IJCV',
    abstract: 'The ImageNet Large Scale Visual Recognition Challenge is a benchmark in object category classification and detection on hundreds of object categories and millions of images.',
    summary: 'Introduces a large-scale benchmark that has driven progress in computer vision.',
    gaps: 'Lack of standardized large-scale evaluation for object recognition.',
    objectives: 'Create a benchmark to measure and advance object recognition performance.',
    direction: 'benchmark',
    tags: ['Benchmark', 'ImageNet', 'Classification']
  },
  {
    id: '20',
    title: 'COCO: Common Objects in Context',
    authors: ['Tsung-Yi Lin', 'Michael Maire', 'Serge Belongie', 'James Hays', 'Pietro Perona', 'Deva Ramanan', 'Piotr Dollár', 'C. Lawrence Zitnick'],
    year: 2014,
    venue: 'ECCV',
    abstract: 'We present a new dataset with the goal of advancing the state-of-the-art in object recognition by placing the question of object recognition in the context of scene understanding.',
    summary: 'Provides object detection, segmentation, and captioning annotations for complex scenes.',
    gaps: 'Existing datasets lack contextual information and pixel-level annotations.',
    objectives: 'Create a dataset for object recognition in context with rich annotations.',
    direction: 'benchmark',
    tags: ['Benchmark', 'COCO', 'Detection']
  },
  {
    id: '21',
    title: 'The KITTI Vision Benchmark Suite',
    authors: ['Andreas Geiger', 'Philip Lenz', 'Raquel Urtasun'],
    year: 2012,
    venue: 'CVPR',
    abstract: 'We present a novel dataset captured from a VW station wagon for use in mobile robotics and autonomous driving research.',
    summary: 'Provides real-world autonomous driving data with accurate ground truth for benchmarking.',
    gaps: 'Lack of real-world benchmarks for autonomous driving perception tasks.',
    objectives: 'Create a benchmark suite for stereo, optical flow, and visual odometry.',
    direction: 'datasets',
    tags: ['Dataset', 'Autonomous Driving', 'Benchmark']
  },
  {
    id: '22',
    title: 'Cityscapes Dataset for Semantic Urban Scene Understanding',
    authors: ['Marius Cordts', 'Mohamed Omran', 'Sebastian Ramos', 'Timo Rehfeld', 'Markus Enzweiler', 'Rodrigo Benenson', 'Uwe Franke', 'Stefan Roth', 'Bernt Schiele'],
    year: 2016,
    venue: 'CVPR',
    abstract: 'The Cityscapes Dataset focuses on semantic understanding of urban street scenes. It has been designed to train and test approaches for pixel-level and instance-level semantic labeling.',
    summary: 'Offers fine-grained semantic annotations for urban street scenes from 50 cities.',
    gaps: 'Need for high-quality semantic annotations for autonomous driving scenarios.',
    objectives: 'Provide pixel-accurate annotations for urban scene understanding.',
    direction: 'datasets',
    tags: ['Dataset', 'Segmentation', 'Urban']
  },
  {
    id: '23',
    title: 'MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications',
    authors: ['Andrew G. Howard', 'Menglong Zhu', 'Bo Chen', 'Dmitry Kalenichenko', 'Weijun Wang', 'Tobias Weyand', 'Marco Andreetto', 'Hartwig Adam'],
    year: 2017,
    venue: 'arXiv',
    abstract: 'We present a class of efficient models called MobileNets for mobile and embedded vision applications. MobileNets are based on a streamlined architecture that uses depth-wise separable convolutions.',
    summary: 'Introduces depthwise separable convolutions for efficient mobile vision models.',
    gaps: 'Deep CNNs are too computationally expensive for mobile and embedded devices.',
    objectives: 'Design efficient neural networks suitable for resource-constrained devices.',
    code: 'https://github.com/tensorflow/models',
    direction: 'architecture',
    tags: ['Architecture', 'Mobile', 'Efficient']
  },
  {
    id: '24',
    title: 'EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks',
    authors: ['Mingxing Tan', 'Quoc Le'],
    year: 2019,
    venue: 'ICML',
    abstract: 'We systematically study model scaling and identify that carefully balancing network depth, width, and resolution can lead to better performance.',
    summary: 'Proposes compound scaling to uniformly scale depth, width, and resolution.',
    gaps: 'Arbitrary scaling of network dimensions leads to suboptimal performance.',
    objectives: 'Find the optimal balance between depth, width, and resolution scaling.',
    code: 'https://github.com/google/automl',
    direction: 'architecture',
    tags: ['Architecture', 'Scaling', 'Efficient']
  }
];

export function getPapersByDirection(directionId: string): Paper[] {
  return papers.filter(paper => paper.direction === directionId);
}

export function getDirectionById(directionId: string): Direction | undefined {
  return directions.find(dir => dir.id === directionId);
}

export function searchPapers(query: string): Paper[] {
  const lowercaseQuery = query.toLowerCase();
  return papers.filter(paper => 
    paper.title.toLowerCase().includes(lowercaseQuery) ||
    paper.authors.some(author => author.toLowerCase().includes(lowercaseQuery)) ||
    paper.abstract.toLowerCase().includes(lowercaseQuery) ||
    paper.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
