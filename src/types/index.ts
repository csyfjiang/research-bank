export interface Paper {
  id: string;
  name: string;
  date: string;
  venue: string;
  paperType: string[];
  taskCategory?: string;
  summary: string;
  researchQuestion: string;
  researchAim: string;
  researchContribution: string[];
  theoriesMethods: string[];
  researchOutcomes: string;
  strengths: string[];
  weaknesses: string[];
  insights: string[];
  keyFindings: string[];
  futureResearch: string[];
  helpnessForResearch: string;
  promisingReferences: string[];
  paperLink: string;
  websiteLink: string;
  codeLink?: string;
  datasets: string[];
  tags: string[];
}

export interface Direction {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  papers: Paper[];
}

export interface Dataset {
  id: string;
  name: string;
  year: number | null;
  dimension: string;
  modality: string;
  organ: string;
  imageCount: string;
  taskType: string;
  link: string;
}

export interface DatasetFilters {
  years: number[];
  dimensions: string[];
  modalities: string[];
  taskTypes: string[];
}
