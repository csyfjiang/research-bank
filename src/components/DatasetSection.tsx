import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { loadGeneralDatasets, loadMedicalDatasets, type GeneralDataset, type MedicalDataset } from '@/lib/csvLoader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Database,
  Download,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Microscope,
  FolderOpen,
  Search,
  X,
  Filter,
  Loader2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ITEMS_PER_PAGE = 10;

export function DatasetSection() {
  const { t, language } = useLanguage();
  
  // Data states
  const [generalDatasets, setGeneralDatasets] = useState<GeneralDataset[]>([]);
  const [medicalDatasets, setMedicalDatasets] = useState<MedicalDataset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // General datasets state
  const [generalPage, setGeneralPage] = useState(1);
  const [generalSearch, setGeneralSearch] = useState('');
  const [generalModality, setGeneralModality] = useState('all');
  const [generalTask, setGeneralTask] = useState('all');
  
  // Medical datasets state
  const [medicalPage, setMedicalPage] = useState(1);
  const [medicalSearch, setMedicalSearch] = useState('');
  const [medicalModality, setMedicalModality] = useState('all');
  const [medicalOrgan, setMedicalOrgan] = useState('all');
  const [medicalTask, setMedicalTask] = useState('all');

  // Load data from CSV
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [general, medical] = await Promise.all([
          loadGeneralDatasets(),
          loadMedicalDatasets()
        ]);
        setGeneralDatasets(general);
        setMedicalDatasets(medical);
      } catch (err) {
        setError(language === 'zh' ? '加载数据失败' : 'Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [language]);

  // Get unique values for filters
  const generalModalities = useMemo(() => {
    const mods = new Set(generalDatasets.map(d => d.modality).filter(Boolean));
    return Array.from(mods).sort();
  }, [generalDatasets]);

  const generalTasks = useMemo(() => {
    const tasks = new Set(generalDatasets.map(d => d.task).filter(Boolean));
    return Array.from(tasks).sort();
  }, [generalDatasets]);

  const medicalModalities = useMemo(() => {
    const mods = new Set(medicalDatasets.map(d => d.modality).filter(Boolean));
    return Array.from(mods).sort();
  }, [medicalDatasets]);

  const medicalOrgans = useMemo(() => {
    const organs = new Set(medicalDatasets.map(d => d.organ).filter(Boolean));
    return Array.from(organs).sort();
  }, [medicalDatasets]);

  const medicalTasks = useMemo(() => {
    const tasks = new Set(medicalDatasets.map(d => d.task).filter(Boolean));
    return Array.from(tasks).sort();
  }, [medicalDatasets]);

  // Filter general datasets
  const filteredGeneralDatasets = useMemo(() => {
    return generalDatasets.filter(dataset => {
      const matchesSearch = generalSearch === '' || 
        dataset.name.toLowerCase().includes(generalSearch.toLowerCase()) ||
        dataset.description.toLowerCase().includes(generalSearch.toLowerCase()) ||
        dataset.modality.toLowerCase().includes(generalSearch.toLowerCase()) ||
        dataset.task.toLowerCase().includes(generalSearch.toLowerCase());
      
      const matchesModality = generalModality === 'all' || dataset.modality === generalModality;
      const matchesTask = generalTask === 'all' || dataset.task === generalTask;
      
      return matchesSearch && matchesModality && matchesTask;
    });
  }, [generalDatasets, generalSearch, generalModality, generalTask]);

  // Filter medical datasets
  const filteredMedicalDatasets = useMemo(() => {
    return medicalDatasets.filter(dataset => {
      const matchesSearch = medicalSearch === '' || 
        dataset.name.toLowerCase().includes(medicalSearch.toLowerCase()) ||
        dataset.modality.toLowerCase().includes(medicalSearch.toLowerCase()) ||
        dataset.organ.toLowerCase().includes(medicalSearch.toLowerCase()) ||
        dataset.task.toLowerCase().includes(medicalSearch.toLowerCase());
      
      const matchesModality = medicalModality === 'all' || dataset.modality === medicalModality;
      const matchesOrgan = medicalOrgan === 'all' || dataset.organ === medicalOrgan;
      const matchesTask = medicalTask === 'all' || dataset.task === medicalTask;
      
      return matchesSearch && matchesModality && matchesOrgan && matchesTask;
    });
  }, [medicalDatasets, medicalSearch, medicalModality, medicalOrgan, medicalTask]);

  // Paginate
  const totalGeneralPages = Math.ceil(filteredGeneralDatasets.length / ITEMS_PER_PAGE);
  const totalMedicalPages = Math.ceil(filteredMedicalDatasets.length / ITEMS_PER_PAGE);

  const paginatedGeneralDatasets = useMemo(() => {
    const start = (generalPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredGeneralDatasets.slice(start, end);
  }, [filteredGeneralDatasets, generalPage]);

  const paginatedMedicalDatasets = useMemo(() => {
    const start = (medicalPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredMedicalDatasets.slice(start, end);
  }, [filteredMedicalDatasets, medicalPage]);

  const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  const resetGeneralFilters = () => {
    setGeneralSearch('');
    setGeneralModality('all');
    setGeneralTask('all');
    setGeneralPage(1);
  };

  const resetMedicalFilters = () => {
    setMedicalSearch('');
    setMedicalModality('all');
    setMedicalOrgan('all');
    setMedicalTask('all');
    setMedicalPage(1);
  };

  const generalTabLabel = language === 'zh' ? '通用数据集' : 'General Datasets';
  const medicalTabLabel = language === 'zh' ? '医学数据集' : 'Medical Datasets';
  const allLabel = language === 'zh' ? '全部' : 'All';

  if (loading) {
    return (
      <section id="datasets" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {language === 'zh' ? '加载数据中...' : 'Loading data...'}
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="datasets" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="datasets" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 mb-6">
            <Database className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-purple-700 dark:text-purple-300">
              {t.datasetOverview}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.datasets}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.datasetOverviewDesc}
          </p>
        </div>

        {/* Dataset Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              {generalTabLabel}
            </TabsTrigger>
            <TabsTrigger value="medical" className="flex items-center gap-2">
              <Microscope className="h-4 w-4" />
              {medicalTabLabel}
            </TabsTrigger>
          </TabsList>

          {/* General Datasets Tab */}
          <TabsContent value="general">
            {/* General Filters */}
            <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
                {/* Search */}
                <div className="relative flex-1 w-full">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '搜索' : 'Search'}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder={language === 'zh' ? '搜索数据集名称、描述、模态或任务...' : 'Search by name, description, modality or task...'}
                      value={generalSearch}
                      onChange={(e) => {
                        setGeneralSearch(e.target.value);
                        setGeneralPage(1);
                      }}
                      className="pl-10 pr-10 bg-white dark:bg-slate-800"
                    />
                    {generalSearch && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                        onClick={() => setGeneralSearch('')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Modality Filter */}
                <div className="w-full lg:w-[160px]">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '模态' : 'Modality'}
                  </label>
                  <Select value={generalModality} onValueChange={(v) => { setGeneralModality(v); setGeneralPage(1); }}>
                    <SelectTrigger className="w-full bg-white dark:bg-slate-800">
                      <Filter className="h-4 w-4 mr-2 text-slate-400" />
                      <SelectValue placeholder={allLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{allLabel}</SelectItem>
                      {generalModalities.map((mod) => (
                        <SelectItem key={mod} value={mod}>{mod}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Task Filter */}
                <div className="w-full lg:w-[180px]">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '任务' : 'Task'}
                  </label>
                  <Select value={generalTask} onValueChange={(v) => { setGeneralTask(v); setGeneralPage(1); }}>
                    <SelectTrigger className="w-full bg-white dark:bg-slate-800">
                      <Filter className="h-4 w-4 mr-2 text-slate-400" />
                      <SelectValue placeholder={allLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{allLabel}</SelectItem>
                      {generalTasks.map((task) => (
                        <SelectItem key={task} value={task}>{task}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Reset */}
                {(generalSearch || generalModality !== 'all' || generalTask !== 'all') && (
                  <Button variant="ghost" size="sm" onClick={resetGeneralFilters} className="mb-0.5">
                    <X className="h-4 w-4 mr-1" />
                    {language === 'zh' ? '重置' : 'Reset'}
                  </Button>
                )}
              </div>

              {/* Results count */}
              <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {language === 'zh' 
                  ? `共 ${filteredGeneralDatasets.length} 个数据集`
                  : `${filteredGeneralDatasets.length} datasets found`
                }
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.datasetName}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.modality}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.numOfSamples}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.datasetSize}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.task}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.annotation}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {t.license}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold text-right">
                        {t.download}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedGeneralDatasets.length > 0 ? (
                      paginatedGeneralDatasets.map((dataset) => (
                        <TableRow 
                          key={dataset.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          <TableCell className="font-medium text-slate-900 dark:text-white">
                            <div>
                              <div className="font-semibold">{dataset.name}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
                                {dataset.description}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.modality}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.numSamples}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.size}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.task}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.annotation}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700">
                              {dataset.license}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            {dataset.downloadUrl ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                              >
                                <a
                                  href={dataset.downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Download className="h-4 w-4 mr-1" />
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            ) : (
                              <span className="text-slate-400 text-sm">-</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-12 text-slate-500 dark:text-slate-400">
                          {language === 'zh' ? '未找到匹配的数据集' : 'No datasets found'}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* General Pagination */}
            {totalGeneralPages > 1 && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {t.page} {generalPage} {t.of} {totalGeneralPages} {t.page}
                </div>
                
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setGeneralPage(p => Math.max(1, p - 1))}
                        className={generalPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {getPageNumbers(generalPage, totalGeneralPages).map((page, index) => (
                      <PaginationItem key={index}>
                        {page === '...' ? (
                          <PaginationEllipsis />
                        ) : (
                          <PaginationLink
                            onClick={() => setGeneralPage(page as number)}
                            isActive={generalPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        )}
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setGeneralPage(p => Math.min(totalGeneralPages, p + 1))}
                        className={generalPage === totalGeneralPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>

                {/* Mobile Pagination */}
                <div className="flex items-center gap-2 sm:hidden">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGeneralPage(p => Math.max(1, p - 1))}
                    disabled={generalPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {generalPage} / {totalGeneralPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGeneralPage(p => Math.min(totalGeneralPages, p + 1))}
                    disabled={generalPage === totalGeneralPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Medical Datasets Tab */}
          <TabsContent value="medical">
            {/* Medical Filters */}
            <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
                {/* Search */}
                <div className="relative flex-1 w-full">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '搜索' : 'Search'}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder={language === 'zh' ? '搜索数据集名称、模态、器官或任务...' : 'Search by name, modality, organ or task...'}
                      value={medicalSearch}
                      onChange={(e) => {
                        setMedicalSearch(e.target.value);
                        setMedicalPage(1);
                      }}
                      className="pl-10 pr-10 bg-white dark:bg-slate-800"
                    />
                    {medicalSearch && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                        onClick={() => setMedicalSearch('')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Modality Filter */}
                <div className="w-full lg:w-[150px]">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '模态' : 'Modality'}
                  </label>
                  <Select value={medicalModality} onValueChange={(v) => { setMedicalModality(v); setMedicalPage(1); }}>
                    <SelectTrigger className="w-full bg-white dark:bg-slate-800">
                      <Filter className="h-4 w-4 mr-2 text-slate-400" />
                      <SelectValue placeholder={allLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{allLabel}</SelectItem>
                      {medicalModalities.map((mod) => (
                        <SelectItem key={mod} value={mod}>{mod}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Organ Filter */}
                <div className="w-full lg:w-[160px]">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '器官' : 'Organ'}
                  </label>
                  <Select value={medicalOrgan} onValueChange={(v) => { setMedicalOrgan(v); setMedicalPage(1); }}>
                    <SelectTrigger className="w-full bg-white dark:bg-slate-800">
                      <Filter className="h-4 w-4 mr-2 text-slate-400" />
                      <SelectValue placeholder={allLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{allLabel}</SelectItem>
                      {medicalOrgans.map((organ) => (
                        <SelectItem key={organ} value={organ}>{organ}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Task Filter */}
                <div className="w-full lg:w-[120px]">
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {language === 'zh' ? '任务' : 'Task'}
                  </label>
                  <Select value={medicalTask} onValueChange={(v) => { setMedicalTask(v); setMedicalPage(1); }}>
                    <SelectTrigger className="w-full bg-white dark:bg-slate-800">
                      <Filter className="h-4 w-4 mr-2 text-slate-400" />
                      <SelectValue placeholder={allLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{allLabel}</SelectItem>
                      {medicalTasks.map((task) => (
                        <SelectItem key={task} value={task}>{task}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Reset */}
                {(medicalSearch || medicalModality !== 'all' || medicalOrgan !== 'all' || medicalTask !== 'all') && (
                  <Button variant="ghost" size="sm" onClick={resetMedicalFilters} className="mb-0.5">
                    <X className="h-4 w-4 mr-1" />
                    {language === 'zh' ? '重置' : 'Reset'}
                  </Button>
                )}
              </div>

              {/* Results count */}
              <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {language === 'zh' 
                  ? `共 ${filteredMedicalDatasets.length} 个数据集`
                  : `${filteredMedicalDatasets.length} datasets found`
                }
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '数据集名称' : 'Dataset Name'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '年份' : 'Year'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '维度' : 'Dimension'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '模态' : 'Modality'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '器官/结构' : 'Organ/Structure'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '图像数量' : 'Samples'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold">
                        {language === 'zh' ? '任务类型' : 'Task'}
                      </TableHead>
                      <TableHead className="text-slate-700 dark:text-slate-300 font-semibold text-right">
                        {t.download}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedMedicalDatasets.length > 0 ? (
                      paginatedMedicalDatasets.map((dataset) => (
                        <TableRow 
                          key={dataset.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          <TableCell className="font-medium text-slate-900 dark:text-white">
                            {dataset.name}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.year}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.dimension}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.modality}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.organ}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            {dataset.numSamples}
                          </TableCell>
                          <TableCell className="text-slate-600 dark:text-slate-400">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                              {dataset.task}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            {dataset.link ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                              >
                                <a
                                  href={dataset.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Download className="h-4 w-4 mr-1" />
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            ) : (
                              <span className="text-slate-400 text-sm">-</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-12 text-slate-500 dark:text-slate-400">
                          {language === 'zh' ? '未找到匹配的数据集' : 'No datasets found'}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Medical Pagination */}
            {totalMedicalPages > 1 && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {t.page} {medicalPage} {t.of} {totalMedicalPages} {t.page}
                </div>
                
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setMedicalPage(p => Math.max(1, p - 1))}
                        className={medicalPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {getPageNumbers(medicalPage, totalMedicalPages).map((page, index) => (
                      <PaginationItem key={index}>
                        {page === '...' ? (
                          <PaginationEllipsis />
                        ) : (
                          <PaginationLink
                            onClick={() => setMedicalPage(page as number)}
                            isActive={medicalPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        )}
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setMedicalPage(p => Math.min(totalMedicalPages, p + 1))}
                        className={medicalPage === totalMedicalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>

                {/* Mobile Pagination */}
                <div className="flex items-center gap-2 sm:hidden">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMedicalPage(p => Math.max(1, p - 1))}
                    disabled={medicalPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {medicalPage} / {totalMedicalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMedicalPage(p => Math.min(totalMedicalPages, p + 1))}
                    disabled={medicalPage === totalMedicalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
