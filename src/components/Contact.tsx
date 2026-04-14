import { Section } from './ui/Section';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <Section bg="white" id="contact" className="text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto card-3d p-12 md:p-20 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Laten we kennismaken</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto">
            Loop je vast in een specifiek werkproces? Of ben je benieuwd of we een praktisch prototype kunnen bouwen? Stuur me een bericht.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:luuk.coolen@gmail.com" 
              className="inline-flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl hover:bg-brand-dark transition-all font-bold shadow-xl shadow-teal-500/25 active:scale-95 w-full sm:w-auto"
            >
              <Mail size={20} />
              Stuur een e-mail
            </a>
            <a 
              href="https://www.linkedin.com/in/luuk-coolen-6b8a2968/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-700 px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all font-bold border border-slate-200 shadow-sm active:scale-95 w-full sm:w-auto"
            >
              <Linkedin size={20} className="text-[#0077b5]" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
      </motion.div>
    </Section>
  );
}
