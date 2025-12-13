'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (savedTheme) {
      const theme = savedTheme.split('=')[1];
      setIsDark(theme === 'dark');
    }
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => window.location.reload(), 100);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.cookie = 'theme=dark; path=/; max-age=31536000';
    } else {
      document.documentElement.classList.remove('dark');
      document.cookie = 'theme=light; path=/; max-age=31536000';
    }
  }, [isDark]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  const skills = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Backend' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', category: 'Backend' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'DynamoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg', category: 'Cloud' },
    { name: 'Bedrock', logo: 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/refs/heads/main/dist/ArtificialIntelligence/Bedrock.png', category: 'AI' },
    { name: 'ECS', logo: 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/refs/heads/main/dist/Containers/ElasticContainerService.png', category: 'Cloud' },
    { name: 'Lambda', logo: 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/refs/heads/main/dist/Compute/Lambda.png', category: 'Cloud' },
    { name: 'Fargate', logo: 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/refs/heads/main/dist/Containers/Fargate.png', category: 'Cloud' },
    { name: 'CloudWatch', logo: 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/refs/heads/main/dist/ManagementGovernance/CloudWatch.png', category: 'Cloud' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tools' },
    { name: 'Gradle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg', category: 'Tools' },
    { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', category: 'Tools' },
    { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', category: 'Tools' },
    { name: 'Kiro', logo: 'https://kiro.dev/icon.svg?fe599162bb293ea0', category: 'AI' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-xl px-4 py-3">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          <li className="mr-2">
            <a href="#home" aria-label="Home">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[hsl(var(--primary))] relative">
                <Image src="/assets/images/kevster.jpg" alt="Ning Chen" fill className="object-cover" />
              </div>
            </a>
          </li>
          <li><a href="#home" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Home</a></li>
          <li><a href="#about" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">About</a></li>
          <li><a href="#skills" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Skills</a></li>
          <li><a href="#experience" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Experience</a></li>
          <li><a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Contact</a></li>
          <li>
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-md hover:bg-[hsl(var(--accent))] transition-colors" aria-label="Toggle theme">
              {isDark ? (
                <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <a href="#home" aria-label="Home">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[hsl(var(--primary))] relative">
              <Image src="/assets/images/kevster.jpg" alt="Ning Chen" fill className="object-cover" />
            </div>
          </a>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-md hover:bg-[hsl(var(--accent))] transition-colors" aria-label="Toggle theme">
              {isDark ? (
                <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-[hsl(var(--accent))] transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-xl p-4">
            <ul className="space-y-2">
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Home</a></li>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">About</a></li>
              <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Skills</a></li>
              <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Experience</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] transition-colors">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen landscape:min-h-[200vh] sm:landscape:min-h-screen flex items-center justify-center pt-28 pb-20 landscape:pb-40 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary))] relative">
        <div className="container mx-auto px-4 text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[hsl(var(--primary))]/50 shadow-2xl relative">
            <Image src="/assets/images/kevster.jpg" alt="Ning Chen" fill className="object-cover" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            I'm <span className="inline-block overflow-hidden align-bottom"><span className="text-[hsl(var(--primary))] typing-animation">Ning Chen</span></span>
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-4">
            Software Development Engineer II
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))]">@</span>
            <Image src="/assets/images/amazon_leo_logo.png" alt="Amazon" width={160} height={48} className="bg-[hsl(142,76%,96%)] px-4 py-2 rounded" />
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/nich227" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))] transition-all inline-flex items-center gap-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nich227" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))] transition-all inline-flex items-center gap-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="/assets/documents/resume.pdf" download className="px-8 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))] transition-all inline-flex items-center gap-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </a>
          </div>
        </div>
        <a href="#about" className="hidden landscape:block lg:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-label="Scroll to about section">
          <svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary))]">
            <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
          </svg>
        </a>
      </section>

      <section id="about" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[hsl(var(--primary))] text-center">About Me</h2>
          <div className="flex gap-6 justify-center mb-8 flex-wrap">
            <div className="w-48 h-64 relative rounded-lg overflow-hidden shadow-2xl border-2 border-[hsl(var(--primary))]/30">
              <Image src="/assets/images/gwen.jpg" alt="Gwen" fill className="object-cover" />
            </div>
            <div className="w-48 h-64 relative rounded-lg overflow-hidden shadow-2xl border-2 border-[hsl(var(--primary))]/30">
              <Image src="/assets/images/willow.jpg" alt="Willow" fill className="object-cover" />
            </div>
            <div className="w-48 h-64 relative rounded-lg overflow-hidden shadow-2xl border-2 border-[hsl(var(--primary))]/30">
              <Image src="/assets/images/ning-chen.jpg" alt="Ning Chen" fill className="object-cover" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-4">
              Hello! My name is Ning, but I go by Kevin. I'm a software engineer at Amazon with {Math.floor((new Date().getTime() - new Date('2021-08-21').getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years of experience, and I've spent the past year working on the Amazon Leo Commerce team. My work spans the full stack—building robust backend services in Java, creating responsive user interfaces with React, and leveraging AWS infrastructure to scale applications globally. I've developed particular expertise in CloudWatch for monitoring, DynamoDB for data persistence, ECS and Lambda for compute, Fargate for container orchestration, and more recently, Bedrock for generative AI capabilities.
            </p>
            <p>
              Outside the office, I'm usually planning my next trip, attempting new recipes (with varying degrees of success), exploring hiking trails, kayaking on the weekends, or playing casual badminton. I'm also a board game enthusiast and proud cat parent to Willow and Gwen—the two adorable troublemakers pictured above who occasionally walk across my keyboard during meetings.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[hsl(var(--primary))] text-center">Skills & Technologies</h2>
          
          <div className="flex gap-2 justify-center flex-wrap mb-8">
            {['All', 'Frontend', 'Backend', 'Cloud', 'AI', 'Tools'].map(category => (
              <button 
                key={category} 
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md border transition-all text-sm ${
                  activeCategory === category 
                    ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]' 
                    : 'border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {filteredSkills.map(skill => (
              <div key={skill.name} className="glass-card p-6 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 mx-auto mb-3 relative">
                  <Image src={skill.logo} alt={skill.name} fill className="object-contain" />
                </div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[hsl(var(--primary))] text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[hsl(var(--primary))]">Software Development Engineer</h3>
                  <p className="text-lg font-medium mt-1">Amazon.com</p>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">Aug 2021 – Present</p>
              </div>
              <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                <li>• Increased credit card application completion rates by 23% through implementing a session persistence feature that enabled customers to resume incomplete applications.</li>
                <li>• Modernized legacy infrastructure through AWS cloud migration and implemented optimizations to the card application service resulting in a 2-month reduction in new marketplace launch time, 2x faster front-end build performance, and 6.5x smaller page assets for improved application load times.</li>
              </ul>
            </div>
            <div className="glass-card rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[hsl(var(--primary))]">Software Developer Intern</h3>
                  <p className="text-lg font-medium mt-1">American Airlines</p>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] text-sm">May 2019 - May 2021</p>
              </div>
              <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                <li>• Created a web services client with Java and the framework Spring Boot as the backend as well as Java Server Pages (HTML) and XML to learn how to query our APIs, reduced the time to learn to use our team's APIs from weeks to hours</li>
                <li>• Improved the interface of a Spring Boot front-end for monitoring Kafka by supporting different endpoints using a dropdown menu and supporting it throughout the interface</li>
                <li>• Worked on integrating chaos engineering with VMware Mangle to the team's deployment workflow to improve resiliency of the team's development process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[hsl(var(--primary))]">Let's Connect!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you have questions about my work experience, want to connect professionally, or simply want to say hello, I'd love to hear from you.
          </p>
          <div className="mb-8">
            <a href="mailto:ningchen227+dev@gmail.com" className="px-8 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))] transition-all inline-flex items-center gap-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Get in Touch
            </a>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">Or connect with me directly:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/nich227" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))] transition-all inline-flex items-center gap-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nich227" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--primary))] transition-all inline-flex items-center gap-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 bg-[hsl(var(--card))] border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
        <p>Made with 💚 in WA</p>
      </footer>
    </div>
  );
}


