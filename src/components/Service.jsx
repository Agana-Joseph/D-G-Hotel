import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
    {
        icon: 'wifi',
        title: 'Free Wi-Fi Available',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'concierge-bell',
        title: 'Meetings & Special Events',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'mobile-alt',
        title: 'Free Cancellation Anytime',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'tag',
        title: 'Best Price Guarantee',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'calendar-alt',
        title: 'Book Now to Secure Availability',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'clock',
        title: 'Late Check-out on Request',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
];

const ServiceCard = ({ icon, title, description }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="border border-gray-400 p-6 text-center hover:shadow-lg">
            <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={['fas', icon]} />
            </div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

const OurServices = () => (
    <section className="bg-bgWhite py-10">
        <div className="container mx-auto">
            <div className="text-left mb-10">
                <h2 className="text-3xl font-bold" data-title="Services">Our Services</h2>
                <div className="mt-2">
                    <div className="w-20 h-1 bg-blue-600" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="project-detail.html" className="btn-half site-button px-2">
                    <span className='p-2'>View All</span><em></em>
                </a>
            </div>
        </div>
    </section>
);


export default OurServices;
