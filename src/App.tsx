import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { TimelineDetail } from './components/TimelineDetail';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { projects } from './data/projects';
import { timelineData, TimelineItem } from './data/timeline';

type View = 'home' | 'project' | 'timeline';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<TimelineItem | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    window.scrollTo(0, 0);
  };

  const handleTimelineClick = (item: TimelineItem) => {
    setSelectedTimelineItem(item);
    setCurrentView('timeline');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
    setSelectedTimelineItem(null);
    window.scrollTo(0, 0);
  };

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div className="min-h-screen">
      <Navbar 
        onNavigateHome={handleBackToHome} 
        isProjectPage={currentView !== 'home'} 
      />
      
      {currentView === 'home' ? (
        <>
          <Hero />
          <About />
          <Timeline onItemClick={handleTimelineClick} />
          <Projects onProjectClick={handleProjectClick} />
          <Skills />
          <Contact />
          <Footer />
        </>
      ) : currentView === 'project' && selectedProject ? (
        <>
          <ProjectDetail project={selectedProject} onBack={handleBackToHome} />
          <Footer />
        </>
      ) : currentView === 'timeline' && selectedTimelineItem ? (
        <>
          <TimelineDetail item={selectedTimelineItem} onBack={handleBackToHome} />
          <Footer />
        </>
      ) : null}
    </div>
  );
}
