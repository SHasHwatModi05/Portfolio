import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  delay?: number;
}

export function CertificateCard({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  logo,
  delay = 0
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative group"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-primary/10 to-cyan/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-accent/20">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent via-primary to-cyan flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/50 group-hover:shadow-xl group-hover:shadow-accent/60">
            {logo ? (
              <img src={logo} alt={issuer} className="w-10 h-10 object-contain" />
            ) : (
              <Award className="w-8 h-8 text-white" />
            )}
          </div>

          <div className="flex-grow">
            <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:bg-clip-text transition-all">
              {title}
            </h3>
            <p className="text-muted-foreground font-medium mb-2">{issuer}</p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>

            {credentialId && (
              <p className="text-xs text-muted-foreground mb-2 font-mono">
                ID: {credentialId}
              </p>
            )}

            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Verify Credential</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
