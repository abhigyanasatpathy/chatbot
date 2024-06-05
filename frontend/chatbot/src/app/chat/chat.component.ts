import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  question: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initializeVoiceRecognition();
  }

  askQuestion() {
    if (this.question.trim() !== '') {
      this.messages.push({ sender: 'User', text: this.question });
      this.http.post<any>('http://localhost:5000/ask', { question: this.question }).subscribe(
        (response) => {
          this.messages.push({ sender: 'Bot', text: response.answer });
          this.speak(response.answer);
        },
        (error) => {
          console.error('Error asking question:', error);
        }
      );
      this.question = '';
    }
  }

  initializeVoiceRecognition() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('SpeechRecognition API not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      let transcript = event.results[0][0].transcript;
      transcript = transcript.trim().toLowerCase();
      this.question = transcript;
      this.askQuestion();
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };

    const voiceButton = document.getElementById('voice-button');
    if (voiceButton) {
      voiceButton.addEventListener('click', () => {
        recognition.start();
      });
    }
  }

  speak(text: string) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const femaleVoice = voices.find(voice => voice.name === 'Google US English Female') || voices.find(voice => voice.name.includes('Female'));
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    synth.speak(utterance);
  }
  // speak(text: string, gender: string) {
  //   const synth = window.speechSynthesis;
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   const voices = synth.getVoices();
  //   let selectedVoice;

  //   if (gender === 'female') {
  //     selectedVoice = voices.find(voice => voice.name === 'Google US English Female') || voices.find(voice => voice.name.includes('Female'));
  //   } else {
  //     selectedVoice = voices.find(voice => voice.name === 'Google US English Male') || voices.find(voice => voice.name.includes('Male'));
  //   }
    
  //   if (selectedVoice) {
  //     utterance.voice = selectedVoice;
  //   }
    
  //   synth.speak(utterance);
  // }
}
