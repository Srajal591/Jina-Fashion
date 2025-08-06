// import React, { useState } from 'react'
// import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
// import { useToast } from '../context/ToastContext'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   })
//   const { addToast } = useToast()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     addToast('Thank you for contacting us. We\'ll get back to you soon.', 'success')
//     setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
//   }

//   return (
//     <div className="min-h-screen bg-[#faf6f0] py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-black font-serif mb-4">
//             Contact Us
//           </h1>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             We'd love to hear from you. Reach out to us for any queries about our jewelry collection.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div>
//             <h2 className="text-2xl font-bold text-black font-serif mb-8">
//               Get in Touch
//             </h2>

//             <div className="space-y-6">
//               {[
//                 {
//                   icon: <MapPin className="w-6 h-6 text-[#f4dfc8]" />,
//                   title: 'Visit Our Store',
//                   content: '123 Jewelry Street, Fashion District\nMumbai, Maharashtra 400001\nIndia'
//                 },
//                 {
//                   icon: <Phone className="w-6 h-6 text-[#f4dfc8]" />,
//                   title: 'Call Us',
//                   content: '+91 98765 43210\n+91 87654 32109',
//                   extra: (
//                     <a
//                       href="https://wa.me/919876543210"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center text-green-600 hover:text-green-700 mt-2 transition"
//                     >
//                       <MessageCircle className="w-4 h-4 mr-1" />
//                       WhatsApp
//                     </a>
//                   )
//                 },
//                 {
//                   icon: <Mail className="w-6 h-6 text-[#f4dfc8]" />,
//                   title: 'Email Us',
//                   content: 'info@jinafashion.com\nsupport@jinafashion.com'
//                 },
//                 {
//                   icon: <Clock className="w-6 h-6 text-[#f4dfc8]" />,
//                   title: 'Store Hours',
//                   content: 'Mon - Sat: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM'
//                 }
//               ].map((item, idx) => (
//                 <div key={idx} className="bg-[#f4eae0] p-6 rounded-lg shadow-sm">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#f4dfc8]">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                       <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
//                       {item.extra}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <div className="bg-[#f4eae0] p-8 rounded-lg shadow-sm">
//               <h2 className="text-2xl font-bold text-black font-serif mb-6">
//                 Send us a Message
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#f4dfc8] outline-none bg-white"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#f4dfc8] outline-none bg-white"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#f4dfc8] outline-none bg-white"
//                   />
//                   <input
//                     type="text"
//                     name="subject"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#f4dfc8] outline-none bg-white"
//                   />
//                 </div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows="6"
//                   className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#f4dfc8] outline-none bg-white resize-none"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-[#000000] hover:bg-gray-800 text-[#f4dfc8] font-semibold py-3 rounded-md transition"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="mt-16">
//           <h2 className="text-3xl font-bold text-black font-serif mb-8 text-center">
//             Find Us
//           </h2>
//           <div className="bg-[#f4eae0] rounded-lg shadow-sm overflow-hidden">
//             <div className="h-96 flex items-center justify-center text-gray-500">
//               Interactive Map Would Go Here
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useToast } from '../context/ToastContext'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const { addToast } = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    addToast("Thank you for contacting us. We'll get back to you soon.", 'success')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8D493A] font-serif mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#5a312a] max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries about our jewelry collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#8D493A] font-serif mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-[#D0B8A8]" />,
                  title: 'Visit Our Store',
                  content: '123 Jewelry Street, Fashion District\nMumbai, Maharashtra 400001\nIndia'
                },
                {
                  icon: <Phone className="w-6 h-6 text-[#D0B8A8]" />,
                  title: 'Call Us',
                  content: '+91 98765 43210\n+91 87654 32109',
                  extra: (
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 mt-2 transition"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </a>
                  )
                },
                {
                  icon: <Mail className="w-6 h-6 text-[#D0B8A8]" />,
                  title: 'Email Us',
                  content: 'info@jinafashion.com\nsupport@jinafashion.com'
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#D0B8A8]" />,
                  title: 'Store Hours',
                  content: 'Mon - Sat: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#DFD3C3] p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#D0B8A8]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#8D493A]">{item.title}</h3>
                      <p className="text-[#5a312a] whitespace-pre-line">{item.content}</p>
                      {item.extra}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#DFD3C3] p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-[#8D493A] font-serif mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#D0B8A8] outline-none bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#D0B8A8] outline-none bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#D0B8A8] outline-none bg-white"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#D0B8A8] outline-none bg-white"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-[#D0B8A8] outline-none bg-white resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#8D493A] hover:bg-[#70382e] text-[#F8EDE3] font-semibold py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#8D493A] font-serif mb-8 text-center">
            Find Us
          </h2>
          <div className="bg-[#DFD3C3] rounded-lg shadow-sm overflow-hidden">
            <div className="h-96 flex items-center justify-center text-gray-500">
              Interactive Map Would Go Here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
