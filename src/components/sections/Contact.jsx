import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Reveal from '../ui/Reveal'

const contactDetails = [
    {
        icon: MapPin,
        label: "Address",
        value: "Rüzhükhrie Government Higher Secondary School\nRüzhükhrie, Kohima\nNagaland – 797001, India",
        multiline: true,
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 XXXXX XXXXX",
        multiline: false,
    },
    {
        icon: Mail,
        label: "Email",
        value: "contact@rghss.edu.in",
        multiline: false,
    },
    {
        icon: Clock,
        label: "Office Hours",
        value: "Monday – Friday\n8:00 AM – 4:00 PM",
        multiline: true,
    },
]

function Contact() {
    return (
        <>


            <section id="contact" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                        {/* Left Column */}
                        <div className="flex flex-col gap-10">

                            {/* Header */}
                            <Reveal>
                                <div>
                                    <p className="font-mono text-[11px] font-bold text-gold tracking-[0.16em] uppercase mb-3">
                                        Visit & Contact
                                    </p>
                                    <h2 className="font-display font-semibold text-4xl text-charcoal leading-snug mb-4">
                                        Get in Touch with{' '}
                                        <span className="text-navy">Rüzhükhrie</span>
                                    </h2>
                                    <p className="font-body text-base text-soft-gray leading-relaxed">
                                        For admissions enquiries, academic information, or general correspondence,
                                        the school administration is available during office hours. We welcome
                                        students, parents, and community members to visit our campus in Kohima.
                                    </p>
                                </div>
                            </Reveal>

                            {/* Contact Cards */}
                            <div className="flex flex-col gap-4">
                                {contactDetails.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <Reveal key={item.label} stagger={80} index={index}>
                                            <div
                                                className="flex gap-4 p-5 border border-slate-200 rounded-[4px] hover:border-gold hover:shadow-sm transition-all duration-300 group"
                                            >
                                                <div className="w-10 h-10 rounded-[4px] bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                                                    <Icon size={18} className="text-navy group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <p className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase">
                                                        {item.label}
                                                    </p>
                                                    {item.multiline ? (
                                                        <div>
                                                            {item.value.split('\n').map((line, i) => (
                                                                <p key={i} className="font-body text-sm text-charcoal leading-relaxed">
                                                                    {line}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <p className="font-body text-sm text-charcoal">{item.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })}
                            </div>

                            {/* Affiliation note */}
                            <Reveal delay={200}>
                                <div className="border-t border-slate-200 pt-6">
                                    <p className="font-body text-sm text-soft-gray leading-relaxed">
                                        Administered under the{' '}
                                        <span className="font-semibold text-navy">Department of School Education</span>,
                                        Government of Nagaland. Affiliated to the{' '}
                                        <span className="font-semibold text-navy">Nagaland Board of School Education (NBSE)</span>.
                                    </p>
                                </div>
                            </Reveal>

                        </div>

                        {/* Right Column — Map */}
                        <Reveal direction="right">
                            <div className="flex flex-col gap-4">

                                {/* Gold top accent */}
                                <div className="h-[3px] bg-gold rounded-t-[4px]" />

                                {/* Map embed */}
                                <div className="rounded-b-[4px] overflow-hidden border border-slate-200 shadow-sm">
                                    <iframe
                                        title="RGHSS Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.35613123448!2d94.09466041133454!3d25.69263021136089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374621a6d44ee5d9%3A0x7e5afd70d9fe8483!2sR%C3%BCzh%C3%BCkhrie%20Government%20Higher%20Secondary%20School%2C%20Kohima!5e0!3m2!1sen!2sin!4v1780235013331!5m2!1sen!2sin"
                                        width="100%"
                                        height="420"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full"
                                    />
                                </div>

                                {/* Location badge */}
                                <div className="flex items-center gap-3 p-4 bg-[#FAFAF9] border border-slate-200 rounded-[4px]">
                                    <MapPin size={16} className="text-gold shrink-0" strokeWidth={1.5} />
                                    <div>
                                        <p className="font-body text-sm font-semibold text-navy">
                                            Rüzhükhrie, Kohima
                                        </p>
                                        <p className="font-body text-xs text-soft-gray">
                                            Nagaland – 797001, India
                                        </p>
                                    </div>

                                    <a
                                        href="https://maps.app.goo.gl/b8uQgmSjCZRE3vxYA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto font-body text-xs font-semibold text-navy hover:text-gold transition-colors"
                                    >
                                        Open in Maps →
                                    </a>
                                </div>

                            </div>
                        </Reveal>

                    </div>

                </div>
            </section>

            
        </>
    )
}

export default Contact