import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { papers, directions } from '@/data/papers';
import { PaperCard } from './PaperCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  RotateCcw, 
  BookOpen,
  Filter,
  X
} from 'lucide-react';

export function PaperSection() {
  const { t, language } = useLanguage();
  const [selectedDirection, setSelectedDirection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPapers = useMemo(() => {
    let result = [...papers];

    // Filter by direction
    if (selectedDirection !== 'all') {
      result = result.filter(paper => paper.direction === selectedDirection);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(paper =>
        paper.title.toLowerCase().includes(query) ||
        paper.authors.some(author => author.toLowerCase().includes(query)) ||
        paper.abstract.toLowerCase().includes(query) ||
        paper.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedDirection, searchQuery]);

  const handleReset = () => {
    setSelectedDirection('all');
    setSearchQuery('');
  };

  const getDirectionName = (direction: typeof directions[0]) => {
    return language === 'zh' ? direction.nameZh : direction.name;
  };

  return (
    <section id="papers" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-700 dark:text-blue-300">
              {t.paperOverview}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.papers}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.paperOverviewDesc}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder={t.searchPapers}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              size="sm"
              className="sm:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-1" />
              {t.search}
            </Button>

            {/* Direction Select (Desktop) */}
            <div className="hidden sm:block">
              <Select value={selectedDirection} onValueChange={setSelectedDirection}>
                <SelectTrigger className="w-[200px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <SelectValue placeholder={t.allDirections} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.allDirections}</SelectItem>
                  {directions.map((direction) => (
                    <SelectItem key={direction.id} value={direction.id}>
                      {getDirectionName(direction)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reset Button */}
            {(selectedDirection !== 'all' || searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-slate-500 dark:text-slate-400"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                {t.reset}
              </Button>
            )}
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="sm:hidden mt-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <Select value={selectedDirection} onValueChange={setSelectedDirection}>
                <SelectTrigger className="w-full bg-white dark:bg-slate-800">
                  <SelectValue placeholder={t.allDirections} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.allDirections}</SelectItem>
                  {directions.map((direction) => (
                    <SelectItem key={direction.id} value={direction.id}>
                      {getDirectionName(direction)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Direction Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge
              variant={selectedDirection === 'all' ? 'default' : 'outline'}
              className={`cursor-pointer transition-colors ${
                selectedDirection === 'all'
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              onClick={() => setSelectedDirection('all')}
            >
              {t.allDirections}
            </Badge>
            {directions.map((direction) => (
              <Badge
                key={direction.id}
                variant={selectedDirection === direction.id ? 'default' : 'outline'}
                className="cursor-pointer transition-colors"
                style={
                  selectedDirection === direction.id
                    ? {
                        backgroundColor: direction.color,
                        color: 'white',
                        borderColor: direction.color,
                      }
                    : {
                        backgroundColor: 'transparent',
                        color: direction.color,
                        borderColor: `${direction.color}60`,
                      }
                }
                onClick={() => setSelectedDirection(direction.id)}
              >
                {getDirectionName(direction)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          {filteredPapers.length} {t.totalPapers.toLowerCase()}
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper) => {
              const direction = directions.find(d => d.id === paper.direction)!;
              return (
                <PaperCard
                  key={paper.id}
                  paper={paper}
                  direction={direction}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
              {t.noPapersFound}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {t.noPapersDesc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
