'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT || '', {
        method: 'POST',
        body: formDataObj,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-(--color-primary)/10 to-(--color-secondary)/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-(--color-foreground)">
            ¿Listo para <span className="text-(--color-secondary)">profesionalizar</span> tu arte?
          </h2>
          <p className="text-xl text-(--color-fg-secondary)">
            Cuéntame sobre tu proyecto y empecemos a trabajar juntos
          </p>
        </motion.div>

        {/* Bloque del Formulario / Tarjeta Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-(--color-background) rounded-3xl shadow-2xl p-8 md:p-12 border border-(--color-bg-secondary)/20"
        >
          {sent ? (
            /* Estado: Mensaje Enviado con Éxito */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-(--color-primary)/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-bold text-(--color-foreground) mb-3">
                ¡Mensaje enviado!
              </h3>
              <p className="text-(--color-fg-secondary) mb-6">
                Te responderé en menos de 24 horas. Revisa tu correo (incluyendo spam).
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-(--color-secondary) font-semibold hover:underline cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            /* Estado: Formulario Activo */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-(--color-fg-secondary) mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-(--color-bg-secondary)/30 bg-(--color-background) text-(--color-foreground) focus:ring-2 focus:ring-(--color-secondary) focus:border-transparent transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-(--color-fg-secondary) mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-(--color-bg-secondary)/30 bg-(--color-background) text-(--color-foreground) focus:ring-2 focus:ring-(--color-secondary) focus:border-transparent transition-all outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-(--color-fg-secondary) mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-(--color-bg-secondary)/30 bg-(--color-background) text-(--color-foreground) focus:ring-2 focus:ring-(--color-secondary) focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Cuéntame sobre tu proyecto, qué tipo de portafolio necesitas, etc."
                />
              </div>

              {/* Estado: Alerta de Error Integrada */}
              {error && (
                <div className="p-4 rounded-xl bg-(--color-secondary)/10 border border-(--color-secondary)/20 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-(--color-secondary) shrink-0" />
                  <p className="text-sm text-(--color-fg-secondary)">
                    Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a hola@cristhdeveloper.com
                  </p>
                </div>
              )}

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-linear-to-r from-(--color-primary) to-(--color-secondary) text-white font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-6 h-6" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Nota Aclaratoria Inferior */}
          <p className="mt-6 text-center text-sm text-(--color-fg-secondary)">
            Las cotizaciones detalladas, plazos de entrega y opciones de dominio se discuten
            directamente por correo electrónico para ofrecerte una solución a tu medida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}