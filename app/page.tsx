'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, Star, 
  ChevronRight, Scissors, Sparkles, Gem, 
  Shirt, ShieldCheck, Heart, Send, CheckCircle2
} from 'lucide-react';

const CATEGORIES = [
  { id: 1, title: 'Ladies Suit Fabrics', desc: 'Premium unstitched materials for elegant suits.', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Dress Materials', desc: 'A wide range of high-quality dress fabrics.', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Printed Fabrics', desc: 'Vibrant and trendy prints for all occasions.', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Designer Collections', desc: 'Exclusive pieces for a unique, luxurious look.', image: 'https://images.unsplash.com/photo-1563283259-2f22b827e8d1?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Fashion Fabrics', desc: 'The latest textures and blends in modern fashion.', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80' },
  { id: 6, title: 'Daily Wear Collection', desc: 'Comfortable and durable fabrics for everyday use.', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80' },
  { id: 7, title: 'Party Wear Materials', desc: 'Embellished and rich fabrics for celebrations.', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80' },
  { id: 8, title: 'Seasonal Fashion', desc: 'Curated fabrics perfect for the current season.', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80' },
];

const FEATURES = [
  { icon: <Gem className="w-6 h-6 text-amber-600" />, title: 'Best Quality Fabrics', desc: 'Handpicked, premium materials ensuring durability and elegance.' },
  { icon: <ShieldCheck className="w-6 h-6 text-amber-600" />, title: 'Affordable Prices', desc: 'Luxury fashion made accessible without breaking the bank.' },
  { icon: <Sparkles className="w-6 h-6 text-amber-600" />, title: 'Latest Fashion Trends', desc: 'Constantly updated collections to keep you in style.' },
  { icon: <Heart className="w-6 h-6 text-amber-600" />, title: 'Trusted Local Store', desc: 'A pillar of Saharanpur’s fashion community.' },
  { icon: <CheckCircle2 className="w-6 h-6 text-amber-600" />, title: 'Friendly Customer Service', desc: 'Personalized assistance to help you find the perfect match.' },
  { icon: <Shirt className="w-6 h-6 text-amber-600" />, title: 'Wide Variety', desc: 'An extensive catalog of colors, patterns, and textiles.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1603251579431-8041402bca29?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574344400595-65fb7cf7990b?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
];

const REVIEWS = [
  { id: 1, text: "Best fabric quality and excellent collection in Saharanpur. The staff is very helpful!", author: "Neha Sharma", rating: 5 },
  { id: 2, text: "I always buy my suit materials from Golden Cut Piece Centre. Amazing variety and completely affordable.", author: "Ritu Verma", rating: 5 },
  { id: 3, text: "The premium feel of their fabrics is unmatched. Highly recommend visiting for party wear.", author: "Anjali Gupta", rating: 5 },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif text-2xl font-bold tracking-tight text-gray-900">
                Golden <span className="text-amber-600">Cut Piece</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">About</a>
              <a href="#collection" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Collection</a>
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Features</a>
              <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">Reviews</a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm">
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50">About</a>
            <a href="#collection" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50">Collection</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50">Features</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50">Contact Us</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1574344400595-65fb7cf7990b?auto=format&fit=crop&q=80" 
            alt="Premium Fashion Fabric Store" 
            fill 
            className="object-cover opacity-[0.07]"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-8 border border-amber-100">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>5.0 Star Rated Local Store in Saharanpur</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-gray-900 tracking-tight leading-tight mb-6">
              Premium Fabrics & <br className="hidden md:block"/> 
              <span className="italic text-amber-600">Fashion Collection</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Discover trendy cut pieces, ladies fabrics, dress materials, and stylish clothing collections at affordable prices in the heart of Saharanpur.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#collection" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all">
                Explore Collection
              </a>
              <a href="tel:+919528819698" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-medium rounded-full text-gray-900 bg-transparent hover:border-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
                alt="Golden Cut Piece Centre Interior" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-black/5 rounded-3xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">About The Store</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Crafting Elegance Since Inception
              </h3>
              <p className="text-gray-600 mb-6 text-lg font-light leading-relaxed">
                Golden Cut Piece Centre (गोल्डन कट पीस सेंटर) is Saharanpur&apos;s most trusted destination for premium clothing and fabrics. We believe that true luxury lies in the quality of the thread and the canvas of the weave.
              </p>
              <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">
                Whether you are looking for traditional elegance or modern fashion options, our curated selection caters to families and women who demand the best fabrics, the latest trends, and affordable pricing with guaranteed customer satisfaction.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-serif font-bold text-gray-900 mb-1">5.0</div>
                  <div className="text-sm text-gray-500 font-medium">Customer Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-gray-900 mb-1">1000+</div>
                  <div className="text-sm text-gray-500 font-medium">Quality Fabrics</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="collection" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Our Offerings</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Product Categories</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-5">
                  <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                     <h4 className="text-xl font-serif font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors">{cat.title}</h4>
                     <p className="text-white/80 text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                       {cat.desc}
                     </p>
                  </div>
                </div>
                <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                  View Collection <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">The Golden Standard</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose Us</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience shopping where quality meets exceptional craftsmanship and affordability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-serif font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Gallery</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Featured Collections</h3>
            </div>
            <a href="#contact" className="mt-6 md:mt-0 inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
              Visit Store to See More <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY.map((img, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-zoom-in"
               >
                 <Image 
                   src={img} 
                   alt={`Gallery image ${idx + 1}`} 
                   width={600} 
                   height={800} 
                   className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
               </motion.div>
            ))}
          </div>
         </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
               ))}
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Customer Love</h3>
            <p className="text-gray-600">Rated 5.0 Stars by our beautiful community in Saharanpur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 font-serif text-lg leading-relaxed mb-6 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="font-semibold text-gray-900">{review.author}</span>
                  <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Info & Map */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">Visit Us</h2>
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">Store Information</h3>

               <div className="space-y-6 mb-10">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                     <MapPin className="w-5 h-5 text-gray-900" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 mb-1">Store Address</h4>
                     <p className="text-gray-600 text-sm leading-relaxed">Golden Cut Piece Centre<br/>Ankit Vihar, Kazipura,<br/>Saharanpur, Kamboh Majra,<br/>Uttar Pradesh 247001, India</p>
                     <p className="text-amber-600 text-sm font-medium mt-1">Plus Code: XG2G+XR</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                     <Phone className="w-5 h-5 text-gray-900" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                     <a href="tel:+919528819698" className="text-gray-600 hover:text-amber-600 transition-colors text-sm">+91 95288 19698</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                     <Clock className="w-5 h-5 text-gray-900" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                     <p className="text-gray-600 text-sm">Friday: 10:00 AM – 8:00 PM<br/>(Please call for other days)</p>
                   </div>
                 </div>
               </div>

               <div className="w-full h-80 rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }}
                   loading="lazy" 
                   allowFullScreen 
                   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Golden%20Cut%20Piece%20Centre,%20Ankit%20Vihar,%20Kazipura,%20Saharanpur+(Golden%20Cut%20Piece%20Centre)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                 ></iframe>
               </div>
             </motion.div>

             {/* Contact Form */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-gray-50 rounded-3xl p-8 md:p-10"
             >
               <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Send an Inquiry</h3>
               <p className="text-gray-600 text-sm mb-8">Looking for something specific? Let us know and we&apos;ll get back to you.</p>

               {isSubmitted ? (
                 <div className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-amber-100">
                   <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                     <CheckCircle2 className="w-8 h-8 text-amber-500" />
                   </div>
                   <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                   <p className="text-gray-500 text-sm mb-6">Thank you for reaching out. We will contact you soon.</p>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="text-amber-600 font-medium hover:text-amber-700 text-sm"
                   >
                     Send another message
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                     <input 
                       type="text" 
                       id="name" 
                       required
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white"
                       placeholder="Your name"
                     />
                   </div>
                   <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                     <input 
                       type="tel" 
                       id="phone" 
                       required
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white"
                       placeholder="+91"
                     />
                   </div>
                   <div>
                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message Required</label>
                     <textarea 
                       id="message" 
                       required
                       rows={4}
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white resize-none"
                       placeholder="Tell us what fabrics you are looking for..."
                     ></textarea>
                   </div>
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-medium py-3.5 px-6 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-70"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     ) : (
                       <>Send Message <Send className="w-4 h-4 ml-1" /></>
                     )}
                   </button>
                 </form>
               )}
             </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <a href="#" className="font-serif text-3xl font-bold tracking-tight text-white mb-6 inline-block">
                Golden <span className="text-amber-500">Cut Piece</span>
              </a>
              <p className="text-gray-400 max-w-sm font-light leading-relaxed mb-6">
                Premium Fabrics & Fashion Collection in Saharanpur. Elevating local fashion with unmatched quality and trust.
              </p>
              <div className="text-sm text-gray-500 italic">&quot;Designed with modern fashion aesthetics&quot;</div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#collection" className="hover:text-amber-500 transition-colors">Our Collection</a></li>
                <li><a href="#features" className="hover:text-amber-500 transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Store Location</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>Saharanpur, Uttar Pradesh</li>
                <li><a href="tel:+919528819698" className="hover:text-amber-500 transition-colors">+91 95288 19698</a></li>
                <li>Open Friday: 10AM - 8PM</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Golden Cut Piece Centre. All rights reserved.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders if needed */}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919528819698?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20fabrics." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        {/* Simple inline SVG for Whatsapp to avoid adding more icon libraries */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
