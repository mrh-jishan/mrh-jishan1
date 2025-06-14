
import { portfolioData, ProjectItem } from '@/lib/data';
import { SectionWrapper } from '@/components/portfolio/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }: { project: ProjectItem }) {
  const Icon = project.icon;
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out transform hover:-translate-y-1">
      {Icon && (
        <div className="flex justify-center items-center h-40 md:h-48 p-6 bg-muted/30">
          <Icon className="h-20 w-20 md:h-24 md:w-24 text-accent opacity-80" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3">
          {/* Small icon next to title removed, main icon is now above */}
          <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-3 leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              className="text-xs bg-accent text-accent-foreground border-transparent px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t">
        <div className="flex gap-2 w-full">
          {project.liveLink && project.liveLink !== "#" && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                View Live
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Source
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper title="Projects Showcase" id="projects" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="group">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

    