import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-gray-50 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-gray-900 mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:quochenry06@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    quochenry06@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Phone</h3>
                  <a
                    href="tel:+17273313776"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    (727)-331-3776
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Daytona Beach, FL</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
