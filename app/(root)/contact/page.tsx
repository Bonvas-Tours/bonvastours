'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from 'lucide-react'
import { submitContactForm } from '../actions/contact'
import { socialIcons } from '@/content'


export default function GetInTouch() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)
        try {
            const response = await submitContactForm(formData)
            setMessage(`Thank you for your message. We will get back to you soon! ${response}`)
        } catch (error) {
            setMessage(`Something went wrong. Please try again later. ${error}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="section_container">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter text-center mb-20">
                    Get in touch
                </h2>

                <div className="grid lg:grid-cols-2 md:gap-32 gap-12">
                    {/* Contact Information */}
                    <div className="p-12 shadow-xl rounded-lg grid lg:grid-cols-2 border-2 gap-8">
                        <div className='flex flex-col gap-2'>
                            <MapPin className="w-8 h-8 text-white bg-secondary mt-1 p-2 rounded-full" />
                            <div>
                                <h3 className="font-semibold mb-1">Address</h3>
                                <p className="text-muted-foreground">KNUST Ayigya</p>
                                <p className="text-muted-foreground">Ecocent Street</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Phone className="w-8 h-8 text-white bg-secondary mt-1 p-2 rounded-full" />
                            <div>
                                <h3 className="font-semibold mb-1">Contact phone</h3>
                                <p className="text-muted-foreground">+233 261 671 686</p>
                                <p className="text-muted-foreground">+233 531 090 068</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Mail className="w-8 h-8 text-white bg-secondary mt-1 p-2 rounded-full" />
                            <div>
                                <h3 className="font-semibold mb-1">Email</h3>
                                <p className="text-muted-foreground">info@bonvastours.com</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold">Social Media</h3>
                            <div className="flex space-x-1">
                                {socialIcons.map(({ Icon, href, name }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                        aria-label={name}
                                    >
                                        <Icon className="w-4 h-4 text-secondary" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <form action={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">NAME</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Input Name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">EMAIL</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Input Email"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">MESSAGE</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>
                        </form>

                        {message && (
                            <p className="text-center text-sm text-muted-foreground">
                                {message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Map */}
                <div className="mt-20 h-[400px] rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253619.03934442176!2d-1.723818715288977!3d6.671996738491988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbonvas%20tours!5e0!3m2!1sen!2sgh!4v1732725749298!5m2!1sen!2sgh"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}

