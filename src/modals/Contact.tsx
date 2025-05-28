import React, { useState } from 'react';

import type { ContactFormData } from '../lib/types';

interface ValidationErrors {
    name?: string;
    email?: string;
    inquiryType?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        inquiryType: '',
        message: ''
    });

    const [errors, setErrors] = useState<ValidationErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const inquiryTypes = [
        'General Inquiry',
        'Sales',
        'Support',
        'Partnership',
        'Feedback',
        'Other'
    ];

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                break;
            case 'email':
                if (!value) return 'Email is required';
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return 'Invalid email address';
                }
                break;
            case 'inquiryType':
                if (!value) return 'Please select an inquiry type';
                break;
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                break;
            default:
                return '';
        }
        return '';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // Validate on change if field was touched
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors((prev) => ({
                ...prev,
                [name]: error
            }));
        }
    };

    const handleBlur = (name: string) => {
        setTouched((prev) => ({
            ...prev,
            [name]: true
        }));

        const value = formData[name as keyof ContactFormData];
        const error = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error
        }));
    };

    const handleInquiryTypeSelect = (type: string) => {
        setFormData((prev) => ({
            ...prev,
            inquiryType: type
        }));
        setIsDropdownOpen(false);

        // Validate inquiry type
        if (touched.inquiryType) {
            const error = validateField('inquiryType', type);
            setErrors((prev) => ({
                ...prev,
                inquiryType: error
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};
        let isValid = true;

        // Mark all fields as touched
        const allTouched = Object.keys(formData).reduce(
            (acc, key) => ({
                ...acc,
                [key]: true
            }),
            {}
        );
        setTouched(allTouched);

        // Validate all fields
        Object.entries(formData).forEach(([key, value]) => {
            const error = validateField(key, value);
            if (error) {
                newErrors[key as keyof ValidationErrors] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Handle form submission here
        }
    };

    return (
        <div className="h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full md:w-[80%] bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-[1.75rem] md:text-[2.75rem] font-semibold text-gray-900 text-center mb-8">
                    Contact Us
                </h1>

                <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-[1.25rem] md:text-[1.5rem] font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('name')}
                            className={`w-full px-6 py-[1.15rem] border ${touched.name && errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                            placeholder=""
                        />
                        {touched.name && errors.name && (
                            <p className="mt-2 text-[1.25rem] md:text-[1.5rem] text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-[1.25rem] md:text-[1.5rem] font-medium text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('email')}
                            className={`w-full px-6 py-[1.15rem] border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                            placeholder=""
                        />
                        {touched.email && errors.email && (
                            <p className="mt-2 text-[1.25rem] md:text-[1.5rem] text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Inquiry Type Dropdown */}
                    <div>
                        <label
                            htmlFor="inquiryType"
                            className="block text-[1.25rem] md:text-[1.5rem] font-medium text-gray-700 mb-2"
                        >
                            Inquiry Type
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsDropdownOpen(!isDropdownOpen);
                                    if (!touched.inquiryType) {
                                        handleBlur('inquiryType');
                                    }
                                }}
                                className={`w-full px-6 py-[1.15rem] border ${touched.inquiryType && errors.inquiryType ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between`}
                            >
                                <span
                                    className={`
                                        ${formData.inquiryType} ? 'text-gray-900' : 'text-gray-500'
                                        text-[1.25rem] md:text-[1.5rem]
                                        `}
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
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
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
                                            className="w-full px-3 py-[1.15rem] text-left text-[1.25rem] md:text-[1.5rem] hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-md last:rounded-b-md"
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {touched.inquiryType && errors.inquiryType && (
                                <p className="mt-2 text-[1.25rem] md:text-[1.5rem] text-red-500">
                                    {errors.inquiryType}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-[1.25rem] md:text-[1.5rem] font-medium text-gray-700 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('message')}
                            rows={4}
                            className={`w-full px-6 py-[1.15rem] border ${touched.message && errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none`}
                            placeholder=""
                        />
                        {touched.message && errors.message && (
                            <p className="mt-2 text-[1.25rem] md:text-[1.5rem] text-red-500">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-btn-active hover:bg-btn-hover text-white text-[1.25rem] md:text-[1.5rem] font-medium py-[1.25rem] px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
