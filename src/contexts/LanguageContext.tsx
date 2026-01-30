import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'zh' | 'en';

interface Translations {
  // Navigation
  home: string;
  papers: string;
  datasets: string;
  admin: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  totalPapers: string;
  totalDatasets: string;
  researchDirections: string;
  yearsOfStudy: string;
  
  // Paper Section
  paperOverview: string;
  paperOverviewDesc: string;
  allDirections: string;
  searchPapers: string;
  search: string;
  reset: string;
  noPapersFound: string;
  noPapersDesc: string;
  expand: string;
  collapse: string;
  viewDetails: string;
  author: string;
  authors: string;
  year: string;
  venue: string;
  code: string;
  project: string;
  abstract: string;
  
  // Dataset Section
  datasetOverview: string;
  datasetOverviewDesc: string;
  datasetName: string;
  modality: string;
  numOfSamples: string;
  datasetSize: string;
  task: string;
  annotation: string;
  license: string;
  download: string;
  previous: string;
  next: string;
  page: string;
  of: string;
  
  // Footer
  footerDesc: string;
  quickLinks: string;
  contact: string;
  copyright: string;
  
  // Theme
  lightMode: string;
  darkMode: string;
  autoMode: string;
  
  // Language
  chinese: string;
  english: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    papers: 'Papers',
    datasets: 'Datasets',
    admin: 'Admin',
    
    // Hero
    heroTitle: 'ResearchBank',
    heroSubtitle: 'Exploring the frontiers of Computer Vision, Large Models, and Multi-modal Learning in Medicine',
    totalPapers: 'Total Papers',
    totalDatasets: 'Datasets',
    researchDirections: 'Research Directions',
    yearsOfStudy: 'Years of Study',
    
    // Paper Section
    paperOverview: 'Paper Overview',
    paperOverviewDesc: 'A collection of papers organized by research direction',
    allDirections: 'All Directions',
    searchPapers: 'Search papers...',
    search: 'Search',
    reset: 'Reset',
    noPapersFound: 'No papers found',
    noPapersDesc: 'Try adjusting your search or filter criteria',
    expand: 'Expand',
    collapse: 'Collapse',
    viewDetails: 'View Details',
    author: 'Author',
    authors: 'Authors',
    year: 'Year',
    venue: 'Venue',
    code: 'Code',
    project: 'Project',
    abstract: 'Abstract',
    
    // Dataset Section
    datasetOverview: 'Dataset Overview',
    datasetOverviewDesc: 'Comprehensive datasets for research and experimentation',
    datasetName: 'Dataset Name',
    modality: 'Modality',
    numOfSamples: 'Samples',
    datasetSize: 'Size',
    task: 'Task',
    annotation: 'Annotation',
    license: 'License',
    download: 'Download',
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    of: 'of',
    
    // Footer
    footerDesc: 'Documenting my research journey in computer vision and machine learning.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    copyright: 'All rights reserved.',
    
    // Theme
    lightMode: 'Light',
    darkMode: 'Dark',
    autoMode: 'Auto',
    
    // Language
    chinese: '中文',
    english: 'English',
  },
  zh: {
    // Navigation
    home: '首页',
    papers: '论文',
    datasets: '数据集',
    admin: '管理',
    
    // Hero
    heroTitle: 'ResearchBank',
    heroSubtitle: '探索医学领域的计算机视觉、大模型和多模态学习前沿',
    totalPapers: '论文总数',
    totalDatasets: '数据集',
    researchDirections: '研究方向',
    yearsOfStudy: '研究年限',
    
    // Paper Section
    paperOverview: '论文概览',
    paperOverviewDesc: '按研究方向组织的论文集合',
    allDirections: '所有方向',
    searchPapers: '搜索论文...',
    search: '搜索',
    reset: '重置',
    noPapersFound: '未找到论文',
    noPapersDesc: '请尝试调整搜索或筛选条件',
    expand: '展开',
    collapse: '收起',
    viewDetails: '查看详情',
    author: '作者',
    authors: '作者',
    year: '年份',
    venue: '会议/期刊',
    code: '代码',
    project: '项目',
    abstract: '摘要',
    
    // Dataset Section
    datasetOverview: '数据集概览',
    datasetOverviewDesc: '用于研究和实验的综合数据集',
    datasetName: '数据集名称',
    modality: '模态',
    numOfSamples: '样本数',
    datasetSize: '大小',
    task: '任务',
    annotation: '标注',
    license: '许可证',
    download: '下载',
    previous: '上一页',
    next: '下一页',
    page: '第',
    of: '页，共',
    
    // Footer
    footerDesc: '记录我在计算机视觉和机器学习领域的研究之旅。',
    quickLinks: '快速链接',
    contact: '联系方式',
    copyright: '保留所有权利。',
    
    // Theme
    lightMode: '浅色',
    darkMode: '深色',
    autoMode: '自动',
    
    // Language
    chinese: '中文',
    english: 'English',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'zh';
    }
    return 'zh';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
