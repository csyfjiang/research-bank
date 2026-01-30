import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Paper, Direction } from '@/data/papers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  ChevronDown,
  ChevronUp,
  Users,
  Calendar,
  Building2,
  FileText,
  Lightbulb,
  Target,
  Search,
  Github,
  ExternalLink
} from 'lucide-react';

interface PaperCardProps {
  paper: Paper;
  direction: Direction;
}

export function PaperCard({ paper, direction }: PaperCardProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Direction Badge */}
            <Badge
              className="mb-2 text-xs"
              style={{
                backgroundColor: `${direction.color}20`,
                color: direction.color,
                borderColor: `${direction.color}40`,
              }}
              variant="outline"
            >
              {direction.name}
            </Badge>

            {/* Title with Link */}
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold leading-tight">
                {paper.code ? (
                  <a 
                    href={paper.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    {paper.title}
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </a>
                ) : (
                  <span className="text-slate-900 dark:text-white">{paper.title}</span>
                )}
              </h3>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span className="truncate max-w-[200px] sm:max-w-[300px]">
              {paper.authors.slice(0, 2).join(', ')}
              {paper.authors.length > 2 && ` +${paper.authors.length - 2}`}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{paper.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" />
            <span>{paper.venue}</span>
          </div>
          {paper.code && (
            <a 
              href={paper.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Code</span>
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {paper.tags.slice(0, 3).map((tag, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </Badge>
          ))}
          {paper.tags.length > 3 && (
            <Badge
              variant="secondary"
              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              +{paper.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              {isOpen ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  {t.collapse}
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  {t.expand}
                </>
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4 space-y-4">
            {/* Abstract */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-blue-500" />
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                  Abstract
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {paper.abstract}
              </p>
            </div>

            {/* One Sentence Summary */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 border border-emerald-100 dark:border-emerald-800">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-emerald-500" />
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                  One Sentence Summary
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {paper.summary}
              </p>
            </div>

            {/* Gaps */}
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 border border-amber-100 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-4 w-4 text-amber-500" />
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                  Gaps
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {paper.gaps}
              </p>
            </div>

            {/* Objectives */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-100 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-purple-500" />
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                  Objectives
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {paper.objectives}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
