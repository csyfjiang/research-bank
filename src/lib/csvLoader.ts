export interface GeneralDataset {
  id: string;
  name: string;
  modality: string;
  numSamples: string;
  size: string;
  task: string;
  annotation: string;
  license: string;
  downloadUrl: string;
  description: string;
}

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

// Parse CSV with Chinese headers
function parseCSVWithChineseHeaders(csvText: string): any[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(h => h.trim());
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const row: any = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] || '';
    });
    row.id = String(i);
    data.push(row);
  }
  
  return data;
}

// 从CSV加载通用数据集
export async function loadGeneralDatasets(): Promise<GeneralDataset[]> {
  try {
    const response = await fetch('/research-bank/general_datasets.csv');
    const csvText = await response.text();
    const rawData = parseCSVWithChineseHeaders(csvText);
    
    return rawData.map((row: any, index: number) => ({
      id: String(index + 1),
      name: row['名称'] || '',
      modality: row['模态'] || '',
      numSamples: row['图像数量'] || '',
      size: '-',
      task: row['任务类型'] || '',
      annotation: '-',
      license: '-',
      downloadUrl: row['链接'] || '',
      description: `${row['器官/结构'] || ''} - ${row['维度'] || ''}`,
    })).filter(d => d.name);
  } catch (e) {
    console.error('Failed to load general datasets:', e);
    return [];
  }
}

// 从CSV加载医学数据集
export async function loadMedicalDatasets(): Promise<MedicalDataset[]> {
  try {
    const response = await fetch('/research-bank/medical_datasets.csv');
    const csvText = await response.text();
    const rawData = parseCSVWithChineseHeaders(csvText);
    
    return rawData.map((row: any, index: number) => ({
      id: String(index + 1),
      name: row['名称'] || '',
      year: parseInt(row['年份'] || '0') || 0,
      dimension: row['维度'] || '',
      modality: row['模态'] || '',
      organ: row['器官/结构'] || '',
      numSamples: row['图像数量'] || '',
      task: row['任务类型'] || '',
      link: row['链接'] || '',
    })).filter(d => d.name);
  } catch (e) {
    console.error('Failed to load medical datasets:', e);
    return [];
  }
}

// 将数据集保存为CSV格式（用于admin添加）
export function datasetToCSVRow(dataset: MedicalDataset | GeneralDataset): string {
  if ('year' in dataset) {
    // Medical dataset
    return `${dataset.name},${dataset.year},${dataset.dimension},${dataset.modality},${dataset.organ},${dataset.numSamples},${dataset.task},${dataset.link}`;
  } else {
    // General dataset
    return `${dataset.name},${dataset.modality},${dataset.numSamples},${dataset.size},${dataset.task},${dataset.annotation},${dataset.license},${dataset.downloadUrl},${dataset.description}`;
  }
}
