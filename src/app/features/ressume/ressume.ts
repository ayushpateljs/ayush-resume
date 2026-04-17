import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ressume',
  imports: [],
  templateUrl: './ressume.html',
  styleUrl: './ressume.css',
})
export class Ressume {
  experiences = signal([
    {
      role: 'Senior Software Engineer',
      company: 'Chetu Inc',
      period: 'Aug 2021 - Present',
      location: 'New Delhi, India',
      bullets: [
        'Senior frontend engineering for  chetu.com — 300M+ monthly page views, 69M+ unique users',
        'Developed and maintained a suite of reusable Angular Component, React components, improving development efficiency and consistency',
        'Integrated OpenAI API for AI-driven content summarisation, recommendations, and editorial workflows'
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Core Web Vitals', 'OpenAI API']
    },
    
  ]);

  downloadResume() {
    window.open('Ayush-Resume.pdf', '_blank');
  }
}
