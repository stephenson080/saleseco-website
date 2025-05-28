import React, { useState } from 'react';

import type { ContactFormData } from '../lib/types';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        inquiryType: '',
        message: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const inquiryTypes = [
        'General Inquiry',
        'Sales',
        'Support',
        'Partnership',
        'Feedback',
        'Other'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInquiryTypeSelect = (type: string) => {
        setFormData((prev) => ({
            ...prev,
            inquiryType: type
        }));
        setIsDropdownOpen(false);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-[1.75rem] md:text-[2.5rem] font-semibold text-gray-900 text-center mb-8">
                    Contact Us
                </h1>

                <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder=""
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder=""
                        />
                    </div>

                    {/* Inquiry Type Dropdown */}
                    <div>
                        <label
                            htmlFor="inquiryType"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Inquiry Type
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                            >
                                <span
                                    className={
                                        formData.inquiryType ? 'text-gray-900' : 'text-gray-500'
                                    }
                                >
                                    {formData.inquiryType || 'Select inquiry type'}
                                </span>
                                <span
                                    className={`inline-block ${isDropdownOpen ? 'rotate-180' : ''}`}
                                >
                                    <svg
                                        className="size-6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 1L5 5L1 1"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                                    {inquiryTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => handleInquiryTypeSelect(type)}
                                            className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-md last:rounded-b-md"
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                            placeholder=""
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
