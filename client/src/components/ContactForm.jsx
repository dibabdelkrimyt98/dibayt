// src/components/ContactForm.jsx
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success', 'error', 'sending', null

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // 👇️ CREDENTIALS IMPLEMENTED HERE 👇️
    emailjs.sendForm(
      'service_ztlo5zf',    // Your Service ID
      'template_rktp6qa',   // Your Template ID
      form.current, 
      'h9x0PpZ0hmANt51ja'   // Your Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setStatus('success');
      form.current.reset(); // Clear form on success
    }, (error) => {
      console.error('Email failed to send:', error.text);
      setStatus('error');
    });
  };

  return (
    <motion.form 
      ref={form} 
      onSubmit={sendEmail} 
      className="space-y-6 bg-white p-8 md:p-10 rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-4">Send Me a Message</h2>

      {/* Form Status Messages */}
      {status === 'success' && (
        <div className="bg-emerald-100 border-l-4 border-emerald-500 text-emerald-700 p-4 font-medium" role="alert">
          Thank you! Your message has been successfully sent.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 font-medium" role="alert">
          Failed to send. Please check your network or try again later.
        </div>
      )}

      {/* Name and Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-secondary mb-1">Your Name</label>
          <input 
            type="text" 
            id="user_name" 
            name="user_name" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent transition"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-secondary mb-1">Your Email</label>
          <input 
            type="email" 
            id="user_email" 
            name="user_email" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent transition"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent transition"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent transition"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-6 py-3 rounded-lg font-bold text-white transition-all ${
          status === 'sending' 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-accent hover:bg-orange-600 shadow-md hover:shadow-lg'
        }`}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
};

export default ContactForm;