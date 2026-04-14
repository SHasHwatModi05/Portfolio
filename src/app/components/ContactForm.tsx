import { useState, useRef, ReactNode, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles, Shield } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// ─── EmailJS credentials from Vite env vars ──────────────────────────────────
// These are injected at build time by Vite from your .env file.
// All must be prefixed with VITE_ to be accessible on import.meta.env.
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactFormData {
  from_name : string;  // matches EmailJS template variable {{from_name}}
  from_email: string;  // matches EmailJS template variable {{from_email}}
  message   : string;  // matches EmailJS template variable {{message}}
}

interface FormErrors {
  from_name ?: string;
  from_email?: string;
  message   ?: string;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

// ─── Email regex ──────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Validate ─────────────────────────────────────────────────────────────────
function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.from_name.trim()) {
    errors.from_name = 'Name is required.';
  } else if (data.from_name.trim().length < 2) {
    errors.from_name = 'Name must be at least 2 characters.';
  }

  if (!data.from_email.trim()) {
    errors.from_email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(data.from_email.trim())) {
    errors.from_email = 'Please enter a valid email address.';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (data.message.trim().length > 2000) {
    errors.message = 'Message must be under 2000 characters.';
  }

  return errors;
}

// ─── Floating label field wrapper ─────────────────────────────────────────────
function FloatingField({
  id, label, error, isFocused, hasValue, children,
}: {
  id       : string;
  label    : string;
  error   ?: string;
  isFocused: boolean;
  hasValue : boolean;
  children : ReactNode;
}) {
  const lifted = isFocused || hasValue;
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 z-10 transition-all duration-200 pointer-events-none font-medium select-none ${
          lifted
            ? '-top-2.5 text-xs bg-white dark:bg-[#1f2937] px-2 rounded text-primary'
            : 'top-4 text-muted-foreground text-sm'
        }`}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1.5 pl-1"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ContactForm() {
  // formRef is passed to emailjs.sendForm() — it reads field values directly
  // from the HTML form using the `name` attributes on each input/textarea.
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    from_name : '',
    from_email: '',
    message   : '',
  });

  const [errors,       setErrors      ] = useState<FormErrors>({});
  const [touched,      setTouched     ] = useState<Record<string, boolean>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status,       setStatus      ] = useState<SubmitStatus>('idle');

  // ── onChange: keep state in sync and re-validate touched fields live ────────
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value } as ContactFormData;
    setFormData(updated);
    if (touched[name]) setErrors(validate(updated));
  };

  // ── onBlur: mark field as touched and validate ──────────────────────────────
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setFocusedField(null);
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  // ── onSubmit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    setTouched({ from_name: true, from_email: true, message: true });
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error('Please fix the highlighted fields before sending.');
      return;
    }

    // Check that EmailJS env vars are actually set
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        'EmailJS keys are missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file, then restart the dev server.'
      );
      return;
    }

    setStatus('sending');

    try {
      // emailjs.sendForm reads field values from the <form> DOM node via `name` attributes.
      // Field names MUST match your EmailJS template variables:
      //   name="from_name"  → {{from_name}}
      //   name="from_email" → {{from_email}}
      //   name="message"    → {{message}}
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);

      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
      setTouched({});
      setErrors({});

      toast.success('Message sent successfully! 🚀', {
        description: `Thanks ${formData.from_name.trim()}! I'll get back to you soon.`,
        duration   : 5000,
      });

      setTimeout(() => setStatus('idle'), 4000);
    } catch (err: unknown) {
      console.error('EmailJS sendForm error:', err);
      setStatus('error');

      toast.error('Failed to send message. Please try again.', {
        description: 'Check the browser console for details.',
        duration   : 6000,
      });

      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const isSending = status === 'sending';
  const charCount = formData.message.length;

  // Shared input class builder
  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 pt-5 pb-3 bg-gray-50 dark:bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all text-foreground text-sm disabled:opacity-60 disabled:cursor-not-allowed ${
      touched[field] && errors[field]
        ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400'
        : 'border-gray-200 dark:border-white/10 focus:ring-primary/40 focus:border-primary'
    }`;

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-emerald-500/10 to-primary/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative bg-white/90 dark:bg-white/5 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl"
        style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
      >

        {/* ── Name: name="from_name" must match {{from_name}} in EmailJS template */}
        <FloatingField
          id="from_name"
          label="Your Name *"
          error={touched.from_name ? errors.from_name : undefined}
          isFocused={focusedField === 'from_name'}
          hasValue={!!formData.from_name}
        >
          <motion.input
            whileFocus={{ scale: 1.005 }}
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            onFocus={() => setFocusedField('from_name')}
            onBlur={handleBlur}
            required
            disabled={isSending}
            autoComplete="name"
            className={inputClass('from_name')}
          />
        </FloatingField>

        {/* ── Email: name="from_email" must match {{from_email}} in EmailJS template */}
        <FloatingField
          id="from_email"
          label="Your Email *"
          error={touched.from_email ? errors.from_email : undefined}
          isFocused={focusedField === 'from_email'}
          hasValue={!!formData.from_email}
        >
          <motion.input
            whileFocus={{ scale: 1.005 }}
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            onFocus={() => setFocusedField('from_email')}
            onBlur={handleBlur}
            required
            disabled={isSending}
            autoComplete="email"
            className={inputClass('from_email')}
          />
        </FloatingField>

        {/* ── Message: name="message" must match {{message}} in EmailJS template */}
        <FloatingField
          id="message"
          label="Your Message *"
          error={touched.message ? errors.message : undefined}
          isFocused={focusedField === 'message'}
          hasValue={!!formData.message}
        >
          <motion.textarea
            whileFocus={{ scale: 1.005 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={handleBlur}
            required
            rows={5}
            disabled={isSending}
            maxLength={2000}
            className={inputClass('message')}
          />
          <div className={`text-xs text-right mt-1 pr-1 tabular-nums transition-colors ${
            charCount > 1800 ? 'text-red-400' : 'text-muted-foreground'
          }`}>
            {charCount} / 2000
          </div>
        </FloatingField>

        {/* ── Submit button with animated states ─────────────────────────────── */}
        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: isSending ? 1 : 1.02, y: isSending ? 0 : -2 }}
          whileTap={{ scale: isSending ? 1 : 0.97 }}
          className={`w-full px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-lg relative overflow-hidden group ${
            status === 'success'
              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-emerald-500/30'
              : status === 'error'
              ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-red-500/30'
              : 'bg-gradient-to-r from-primary to-emerald-500 text-white hover:shadow-2xl hover:shadow-primary/40 disabled:opacity-70 disabled:cursor-not-allowed shadow-primary/25'
          }`}
        >
          {/* Shimmer on hover (idle only) */}
          {status === 'idle' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          )}

          <AnimatePresence mode="wait">
            {status === 'sending' && (
              <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending…
              </motion.span>
            )}
            {status === 'success' && (
              <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" />
                Message Sent!
              </motion.span>
            )}
            {status === 'error' && (
              <motion.span key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5" />
                Failed – Try Again
              </motion.span>
            )}
            {status === 'idle' && (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                <Send className="w-5 h-5" />
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* ── Footer ── */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <Shield className="w-3.5 h-3.5 text-primary/60" />
          <p className="text-xs text-muted-foreground font-medium">
            Secured with EmailJS · Your info is never shared
          </p>
          <Sparkles className="w-3.5 h-3.5 text-primary/60" />
        </div>

      </motion.form>
    </div>
  );
}
