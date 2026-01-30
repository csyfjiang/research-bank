export interface MedicalDataset {
  id: string;
  name: string;
  year: number;
  dimension: string;
  modality: string;
  organ: string;
  numSamples: string;
  task: string;
  link: string;
}

export const medicalDatasets: MedicalDataset[] = [
  {
    id: "1",
    name: "Gastrointestinal Atlas",
    year: 2000,
    dimension: "Video",
    modality: "Endoscopy",
    organ: "Bowel, Stomach",
    numSamples: "-",
    task: "NA",
    link: "http://www.gastrointestinalatlas.com/english/english.html"
  },
  {
    id: "2",
    name: "JSRT",
    year: 2000,
    dimension: "2D",
    modality: "X-Ray",
    organ: "Lung",
    numSamples: "247",
    task: "Cls",
    link: "http://db.jsrt.or.jp/eng.php"
  },
  {
    id: "3",
    name: "LPBA40",
    year: 2001,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "40",
    task: "Seg",
    link: "https://continuousregistration.grand-challenge.org/data/"
  },
  {
    id: "4",
    name: "DRIVE",
    year: 2003,
    dimension: "2D",
    modality: "Fundus Photo",
    organ: "Retina",
    numSamples: "40",
    task: "Seg",
    link: "https://drive.grand-challenge.org/"
  },
  {
    id: "5",
    name: "ELCAP Public Lung Image Database",
    year: 2003,
    dimension: "3D",
    modality: "CT",
    organ: "Lung",
    numSamples: "50",
    task: "Det",
    link: "http://www.via.cornell.edu/lungdb.html"
  },
  {
    id: "6",
    name: "STARE",
    year: 2004,
    dimension: "2D",
    modality: "Fundus Photo",
    organ: "Retina",
    numSamples: "40",
    task: "Seg",
    link: "http://cecas.clemson.edu/~ahoover/stare/"
  },
  {
    id: "7",
    name: "OASIS-1",
    year: 2007,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "416",
    task: "Seg",
    link: "https://www.oasis-brains.org/"
  },
  {
    id: "8",
    name: "LIDC-IDRI",
    year: 2011,
    dimension: "3D",
    modality: "CT",
    organ: "Lung",
    numSamples: "1018",
    task: "Seg",
    link: "https://www.cancerimagingarchive.net/collection/lidc-idri/"
  },
  {
    id: "9",
    name: "BraTS 2012",
    year: 2012,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "50",
    task: "Seg",
    link: "https://www.smir.ch/BRATS/Start2012"
  },
  {
    id: "10",
    name: "BraTS 2013",
    year: 2013,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "60",
    task: "Seg",
    link: "https://www.smir.ch/BRATS/Start2013"
  },
  {
    id: "11",
    name: "BraTS 2014",
    year: 2014,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "238",
    task: "Seg",
    link: "https://www.smir.ch/BRATS/Start2014"
  },
  {
    id: "12",
    name: "U-Net (MICCAI)",
    year: 2015,
    dimension: "2D",
    modality: "Microscopy",
    organ: "Cell",
    numSamples: "30",
    task: "Seg",
    link: "https://www.nature.com/articles/s41592-018-0261-2"
  },
  {
    id: "13",
    name: "BraTS 2015",
    year: 2015,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "253",
    task: "Seg",
    link: "https://www.smir.ch/BRATS/Start2015"
  },
  {
    id: "14",
    name: "ISLES 2015",
    year: 2015,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "114",
    task: "Seg",
    link: "https://www.isles-challenge.org/ISLES2015/"
  },
  {
    id: "15",
    name: "BraTS 2016",
    year: 2016,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "391",
    task: "Seg",
    link: "https://www.smir.ch/BRATS/Start2016"
  },
  {
    id: "16",
    name: "ISLES 2016",
    year: 2016,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "75",
    task: "Seg",
    link: "http://www.isles-challenge.org/ISLES2016/"
  },
  {
    id: "17",
    name: "LUNA16",
    year: 2016,
    dimension: "3D",
    modality: "CT",
    organ: "Lung",
    numSamples: "888",
    task: "Cls",
    link: "https://luna16.grand-challenge.org/"
  },
  {
    id: "18",
    name: "NIH Chest X-ray 14",
    year: 2017,
    dimension: "2D",
    modality: "X-Ray",
    organ: "Lung",
    numSamples: "112.1k",
    task: "Cls",
    link: "https://www.kaggle.com/nih-chest-xrays/data"
  },
  {
    id: "19",
    name: "BraTS 2017",
    year: 2017,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "477",
    task: "Seg",
    link: "https://www.med.upenn.edu/sbia/brats2017/data.html"
  },
  {
    id: "20",
    name: "ISLES 2017",
    year: 2017,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "75",
    task: "Seg",
    link: "https://www.isles-challenge.org/ISLES2017/"
  },
  {
    id: "21",
    name: "ADNI",
    year: 2017,
    dimension: "3D",
    modality: "MR/ PET",
    organ: "Brain",
    numSamples: "2500",
    task: "Cls",
    link: "https://adni.loni.usc.edu/"
  },
  {
    id: "22",
    name: "CheXpert",
    year: 2021,
    dimension: "2D",
    modality: "X-Ray",
    organ: "Lung",
    numSamples: "224.3k",
    task: "Cls",
    link: "https://stanfordmlgroup.github.io/competitions/chexpert/"
  },
  {
    id: "23",
    name: "BraTS 2018",
    year: 2018,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "542",
    task: "Seg",
    link: "https://www.med.upenn.edu/sbia/brats2018/data.html"
  },
  {
    id: "24",
    name: "ISLES 2018",
    year: 2018,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "103",
    task: "Seg",
    link: "http://www.isles-challenge.org/ISLES2018/"
  },
  {
    id: "25",
    name: "BraTS 2019",
    year: 2019,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "626",
    task: "Seg",
    link: "https://www.med.upenn.edu/cbica/brats2019/data.html"
  },
  {
    id: "26",
    name: "ISLES 2019",
    year: 2019,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "75",
    task: "Seg",
    link: "https://www.isles-challenge.org/ISLES2019/"
  },
  {
    id: "27",
    name: "BraTS 2020",
    year: 2020,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "660",
    task: "Seg",
    link: "https://www.med.upenn.edu/cbica/brats2020/data.html"
  },
  {
    id: "28",
    name: "COVID-19 CT scans",
    year: 2020,
    dimension: "3D",
    modality: "CT",
    organ: "Lung",
    numSamples: "20",
    task: "Seg",
    link: "https://tianchi.aliyun.com/dataset/dataDetail?dataId=90014"
  },
  {
    id: "29",
    name: "BraTS 2021",
    year: 2021,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "2040",
    task: "Seg",
    link: "https://www.med.upenn.edu/cbica/brats2021/"
  },
  {
    id: "30",
    name: "FLARE21",
    year: 2021,
    dimension: "3D",
    modality: "CT",
    organ: "Abdomen",
    numSamples: "511",
    task: "Seg",
    link: "https://flare.grand-challenge.org/FLARE21/"
  },
  {
    id: "31",
    name: "BraTS 2022",
    year: 2022,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "1470",
    task: "Seg",
    link: "https://www.synapse.org/#!Synapse:syn27046444/wiki/616571"
  },
  {
    id: "32",
    name: "AMOS22",
    year: 2022,
    dimension: "3D",
    modality: "CT/MR",
    organ: "Abdomen",
    numSamples: "600",
    task: "Seg",
    link: "https://amos22.grand-challenge.org/"
  },
  {
    id: "33",
    name: "BraTS 2023",
    year: 2023,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "5880",
    task: "Seg",
    link: "https://www.synapse.org/#!Synapse:syn51156910/wiki/622351"
  },
  {
    id: "34",
    name: "FLARE23",
    year: 2023,
    dimension: "3D",
    modality: "CT",
    organ: "Abdomen",
    numSamples: "4500",
    task: "Seg",
    link: "https://codalab.lisn.upsaclay.fr/competitions/12239"
  },
  {
    id: "35",
    name: "TotalSegmentator",
    year: 2022,
    dimension: "3D",
    modality: "CT",
    organ: "Full Body",
    numSamples: "1204",
    task: "Seg",
    link: "https://totalsegmentator.com/"
  },
  {
    id: "36",
    name: "KiTS23",
    year: 2023,
    dimension: "3D",
    modality: "CT",
    organ: "Kidneys",
    numSamples: "599",
    task: "Seg",
    link: "https://kits-challenge.org/kits23/"
  },
  {
    id: "37",
    name: "LiTS",
    year: 2017,
    dimension: "3D",
    modality: "CT",
    organ: "Liver",
    numSamples: "201",
    task: "Seg",
    link: "https://competitions.codalab.org/competitions/17094"
  },
  {
    id: "38",
    name: "MSD (Medical Segmentation Decathlon)",
    year: 2018,
    dimension: "3D",
    modality: "CT/MR",
    organ: "Multi-organ",
    numSamples: "2.6k",
    task: "Seg",
    link: "http://medicaldecathlon.com/"
  },
  {
    id: "39",
    name: "OASIS-3",
    year: 2019,
    dimension: "3D",
    modality: "CT/MR/ PET",
    organ: "Brain",
    numSamples: "5699",
    task: "Seg",
    link: "https://www.oasis-brains.org/"
  },
  {
    id: "40",
    name: "HCP (Human Connectome Project)",
    year: 2017,
    dimension: "3D",
    modality: "MR",
    organ: "Brain",
    numSamples: "1206",
    task: "Cls",
    link: "https://www.humanconnectome.org/"
  }
];
