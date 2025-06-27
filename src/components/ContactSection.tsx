import React, { useRef, useState } from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    if (!form.current) return;

    // Extra: Validate email before sending
    const emailInput = form.current.elements.namedItem('user_email') as HTMLInputElement;
    if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus('error');
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    emailjs
      .sendForm(
        'service_a711aqp',      // Your EmailJS service ID
        'template_tnr0nfa',     // Your EmailJS template ID
        form.current,
        'Q5RIvWXrGC2Wr66n8'     // Your EmailJS public key
      )
      .then(
        () => {
          setStatus('success');
          toast({
            title: "Message sent successfully!",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          if (form.current) form.current.reset();
        },
        (error) => {
          setStatus('error');
          toast({
            title: "Error",
            description: "There was an error sending your message. Please try again later.",
            variant: "destructive",
          });
          // Debug: log the error
          console.error("EmailJS error:", error);
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray mb-16">
          Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray mb-6">Let's Connect</h3>
              <p className="text-gray text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology. 
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">@</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:nadeerawithana2k20@gmail.com"
                    className="text-gray hover:underline break-all"
                  >
                    nadeerawithana2k20@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-gray font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Nadee07" 
                  className="w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nadeera-withana-966a74347/" 
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center mt-2">Failed to send message. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp size={20} />
      </button>
    </section>
  );
};

export default ContactSection;
