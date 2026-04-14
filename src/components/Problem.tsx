import { Section } from './ui/Section';
import { FileText, Mail, Database, AlertCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Problem() {
  return (
    <Section bg="white" id="probleem">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">De realiteit van een complex dossier</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p className="text-slate-900 font-medium">
              Je moet een beslissing nemen — maar je weet niet of je alle informatie hebt.
            </p>
            <p>
              In één dossier zit informatie verspreid over systemen, documentmappen, losse notities en e-mails.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {[
                "Onduidelijke bestandsnamen",
                "Versnipperde notities",
                "Geen centrale zoekfunctie",
                "Inconsistente structuren"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {item}
                </div>
              ))}
            </div>

            <p>
              Daardoor ben je vaak meer tijd kwijt aan zoeken en controleren dan aan het nemen van de juiste beslissing.
            </p>
            
            <p className="font-semibold text-brand pt-4 flex items-center gap-3">
              <span className="w-8 h-px bg-brand" />
              Ik bouw oplossingen die dit weer samenbrengen.
            </p>
          </div>
        </motion.div>

        {/* 3D Visual Representation */}
        <div className="relative perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-inner overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-slate-300">
              <AlertCircle size={28} />
            </div>
            
            <div className="space-y-6 relative z-10">
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-5 p-5 card-3d opacity-80 translate-x-8"
              >
                <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                  <Mail size={24} />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-2.5 w-32 bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-20 bg-slate-50 rounded-full"></div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: -10, scale: 1.02 }}
                className="flex items-center gap-5 p-5 card-3d -translate-x-4 border-brand/20 shadow-teal-500/5"
              >
                <div className="p-3 bg-teal-50 text-brand rounded-xl">
                  <Database size={24} />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-2.5 w-48 bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-32 bg-slate-50 rounded-full"></div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 15, scale: 1.02 }}
                className="flex items-center gap-5 p-5 card-3d opacity-90 translate-x-12"
              >
                <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                  <FileText size={24} />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-2.5 w-24 bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-16 bg-slate-50 rounded-full"></div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3 text-slate-500">
                <Clock size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Tijdverlies</span>
              </div>
              <span className="text-2xl font-serif font-bold text-slate-900">10+ min <span className="text-sm font-sans font-normal text-slate-500">per dossier</span></span>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
