export interface Dataset {
  id: string;
  name: string;
  modality: string;
  numSamples: string;
  size: string;
  task: string;
  annotation: string;
  license: string;
  downloadUrl?: string;
  description: string;
}

export const datasets: Dataset[] = [
  {
    id: '1',
    name: 'ImageNet-1K',
    modality: 'RGB Image',
    numSamples: '1.28M',
    size: '150GB',
    task: 'Classification',
    annotation: 'Category Labels',
    license: 'Research',
    downloadUrl: 'https://www.image-net.org/',
    description: 'Large-scale visual recognition dataset with 1000 categories'
  },
  {
    id: '2',
    name: 'COCO',
    modality: 'RGB Image',
    numSamples: '330K',
    size: '25GB',
    task: 'Detection/Segmentation',
    annotation: 'BBox, Mask, Caption',
    license: 'CC BY 4.0',
    downloadUrl: 'https://cocodataset.org/',
    description: 'Common Objects in Context - object detection, segmentation, and captioning'
  },
  {
    id: '3',
    name: 'CIFAR-10',
    modality: 'RGB Image',
    numSamples: '60K',
    size: '170MB',
    task: 'Classification',
    annotation: 'Category Labels',
    license: 'MIT',
    downloadUrl: 'https://www.cs.toronto.edu/~kriz/cifar.html',
    description: 'Small image classification dataset with 10 classes'
  },
  {
    id: '4',
    name: 'CIFAR-100',
    modality: 'RGB Image',
    numSamples: '60K',
    size: '170MB',
    task: 'Classification',
    annotation: 'Fine/Coarse Labels',
    license: 'MIT',
    downloadUrl: 'https://www.cs.toronto.edu/~kriz/cifar.html',
    description: 'Small image classification dataset with 100 fine-grained classes'
  },
  {
    id: '5',
    name: 'MNIST',
    modality: 'Grayscale',
    numSamples: '70K',
    size: '12MB',
    task: 'Classification',
    annotation: 'Digit Labels',
    license: 'Public Domain',
    downloadUrl: 'http://yann.lecun.com/exdb/mnist/',
    description: 'Handwritten digit recognition dataset'
  },
  {
    id: '6',
    name: 'Fashion-MNIST',
    modality: 'Grayscale',
    numSamples: '70K',
    size: '30MB',
    task: 'Classification',
    annotation: 'Category Labels',
    license: 'MIT',
    downloadUrl: 'https://github.com/zalandoresearch/fashion-mnist',
    description: 'Fashion article classification dataset as MNIST replacement'
  },
  {
    id: '7',
    name: 'Pascal VOC',
    modality: 'RGB Image',
    numSamples: '20K',
    size: '2GB',
    task: 'Detection/Segmentation',
    annotation: 'BBox, Mask',
    license: 'Research',
    downloadUrl: 'http://host.robots.ox.ac.uk/pascal/VOC/',
    description: 'Visual Object Classes challenge dataset'
  },
  {
    id: '8',
    name: 'ADE20K',
    modality: 'RGB Image',
    numSamples: '25K',
    size: '3GB',
    task: 'Semantic Segmentation',
    annotation: 'Pixel-wise Mask',
    license: 'Research',
    downloadUrl: 'https://groups.csail.mit.edu/vision/datasets/ADE20K/',
    description: 'Scene parsing dataset with 150 semantic categories'
  },
  {
    id: '9',
    name: 'Cityscapes',
    modality: 'RGB Image',
    numSamples: '25K',
    size: '11GB',
    task: 'Semantic Segmentation',
    annotation: 'Pixel-wise Mask',
    license: 'Research',
    downloadUrl: 'https://www.cityscapes-dataset.com/',
    description: 'Urban street scene understanding dataset'
  },
  {
    id: '10',
    name: 'LAION-5B',
    modality: 'RGB Image + Text',
    numSamples: '5.85B',
    size: '240TB',
    task: 'Vision-Language',
    annotation: 'Text Captions',
    license: 'Various',
    downloadUrl: 'https://laion.ai/blog/laion-5b/',
    description: 'Large-scale image-text pair dataset for vision-language pre-training'
  },
  {
    id: '11',
    name: 'FFHQ',
    modality: 'RGB Image',
    numSamples: '70K',
    size: '13GB',
    task: 'Generation',
    annotation: 'Face Landmarks',
    license: 'Public Domain',
    downloadUrl: 'https://github.com/NVlabs/ffhq-dataset',
    description: 'Flickr-Faces-HQ dataset for face generation'
  },
  {
    id: '12',
    name: 'MRI Brain Tumor',
    modality: 'MRI Scan',
    numSamples: '7K',
    size: '2GB',
    task: 'Segmentation',
    annotation: 'Tumor Mask',
    license: 'CC BY 4.0',
    downloadUrl: 'https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation',
    description: 'Brain MRI segmentation dataset for tumor detection'
  },
  {
    id: '13',
    name: 'Kinetics-400',
    modality: 'Video',
    numSamples: '306K',
    size: '450GB',
    task: 'Action Recognition',
    annotation: 'Action Labels',
    license: 'Research',
    downloadUrl: 'https://deepmind.google/research/open-source/kinetics/',
    description: 'Large-scale video dataset for human action recognition'
  },
  {
    id: '14',
    name: 'LibriSpeech',
    modality: 'Audio',
    numSamples: '1K hours',
    size: '60GB',
    task: 'Speech Recognition',
    annotation: 'Transcriptions',
    license: 'CC BY 4.0',
    downloadUrl: 'https://www.openslr.org/12',
    description: 'Large-scale corpus of read English speech'
  },
  {
    id: '15',
    name: 'SQuAD',
    modality: 'Text',
    numSamples: '100K',
    size: '50MB',
    task: 'QA',
    annotation: 'Answer Spans',
    license: 'CC BY 4.0',
    downloadUrl: 'https://rajpurkar.github.io/SQuAD-explorer/',
    description: 'Stanford Question Answering Dataset'
  },
  {
    id: '16',
    name: 'GLUE',
    modality: 'Text',
    numSamples: '1.1M',
    size: '300MB',
    task: 'NLP Benchmark',
    annotation: 'Various',
    license: 'Various',
    downloadUrl: 'https://gluebenchmark.com/',
    description: 'General Language Understanding Evaluation benchmark'
  },
  {
    id: '17',
    name: 'Open Images',
    modality: 'RGB Image',
    numSamples: '9M',
    size: '600GB',
    task: 'Detection/Classification',
    annotation: 'BBox, Labels',
    license: 'CC BY 2.0',
    downloadUrl: 'https://storage.googleapis.com/openimages/web/index.html',
    description: 'Large-scale dataset from Google with 600 object categories'
  },
  {
    id: '18',
    name: 'Places365',
    modality: 'RGB Image',
    numSamples: '10M',
    size: '1.2TB',
    task: 'Scene Recognition',
    annotation: 'Scene Labels',
    license: 'Research',
    downloadUrl: 'http://places2.csail.mit.edu/download.html',
    description: 'Large-scale scene recognition dataset'
  },
  {
    id: '19',
    name: 'VGGFace2',
    modality: 'RGB Image',
    numSamples: '3.3M',
    size: '37GB',
    task: 'Face Recognition',
    annotation: 'Identity Labels',
    license: 'Research',
    downloadUrl: 'https://github.com/ox-vgg/vgg_face2',
    description: 'Large-scale face recognition dataset'
  },
  {
    id: '20',
    name: 'LFW',
    modality: 'RGB Image',
    numSamples: '13K',
    size: '170MB',
    task: 'Face Verification',
    annotation: 'Identity Pairs',
    license: 'Public Domain',
    downloadUrl: 'http://vis-www.cs.umass.edu/lfw/',
    description: 'Labeled Faces in the Wild for face verification'
  },
  {
    id: '21',
    name: 'CelebA',
    modality: 'RGB Image',
    numSamples: '200K',
    size: '1.4GB',
    task: 'Face Attributes',
    annotation: '40 Attributes',
    license: 'Research',
    downloadUrl: 'https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html',
    description: 'Large-scale face attributes dataset'
  },
  {
    id: '22',
    name: 'DeepFashion',
    modality: 'RGB Image',
    numSamples: '800K',
    size: '50GB',
    task: 'Fashion Analysis',
    annotation: 'BBox, Landmarks',
    license: 'Research',
    downloadUrl: 'https://mmlab.ie.cuhk.edu.hk/projects/DeepFashion.html',
    description: 'Large-scale fashion dataset with rich annotations'
  },
  {
    id: '23',
    name: 'MPII Human Pose',
    modality: 'RGB Image',
    numSamples: '25K',
    size: '12GB',
    task: 'Pose Estimation',
    annotation: 'Keypoints',
    license: 'Research',
    downloadUrl: 'http://human-pose.mpi-inf.mpg.de/',
    description: '2D human pose estimation dataset'
  },
  {
    id: '24',
    name: 'COCO Keypoints',
    modality: 'RGB Image',
    numSamples: '200K',
    size: '25GB',
    task: 'Pose Estimation',
    annotation: '17 Keypoints',
    license: 'CC BY 4.0',
    downloadUrl: 'https://cocodataset.org/',
    description: 'Keypoint detection dataset from COCO'
  }
];
