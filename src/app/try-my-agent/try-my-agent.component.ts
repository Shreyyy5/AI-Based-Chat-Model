import { Component } from '@angular/core';

@Component({
  selector: 'app-try-my-agent',
  templateUrl: './try-my-agent.component.html',
  styleUrls: ['./try-my-agent.component.css']
})
export class TryMyAgentComponent {
  view = 'aiNav'; // default view
  isAiNav = true; // Default to AI Nav view
  toggleText = 'AI Nav';
  toggleIcon = 'fa fa-sun'; // Default icon
  businessName: string = '';
  agentName: string = '';
  selectedColor: string = '';
  faqs = [
    {
      question: "What if I'm not happy with the agent's answer?",
      answer: "To allow your agent to understand more context about your business, you can add more data sources in the 'Training Materials' page. To further refine or correct your agent's responses, you can add skills such as FAQs and Escalations.",
      open: false
    },
    {
      question: "What is the difference between 'Training Materials' and 'Agent Skills'?",
      answer: "Training materials are the first-hand resources your agent learns from. Agent Skills is the refined knowledge you wish to add on top of the existing training material to further customize your agent's behavior. We will prioritize the skills you create over the training materials.",
      open: false
    },
    {
      question: "Where can I change the agent's look?",
      answer: "You can change it in the 'Appearance' page. You can change the agent logo, agent's name, agent's name, color and more.",
      open: false
    },
    {
      question: "What counts as a message credit?",
      answer: "Although your agent may appear to be loading several messages in a single response, each response counts as 1 message credit. It will simply display multiple message bubbles.",
      open: false
    }
  ];

  toggleAnswer(faq) {
    faq.open = !faq.open;
  }

  toggleContent() {
    this.isAiNav = !this.isAiNav;
    this.toggleText = this.isAiNav ? 'AI Nav' : 'Widget';
    this.toggleIcon = this.isAiNav ? 'fa fa-sun' : 'fa fa-moon';
  }

  toggleView(view: string) {
    this.view = view;
  }
}
