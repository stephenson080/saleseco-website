import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import type { FormData, Interest, ValidationErrors } from '../../lib/types';

const SalesEcoForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        country: '',
        state: '',
        gender: '',
        interests: [],
        budget: '',
        agreeToUpdates: false
    });

    const [errors, setErrors] = useState<ValidationErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (name: string, value: any): string => {
        switch (name) {
            case 'email':
                if (!value) return 'Email is required';
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return 'Invalid email address';
                }
                break;
            case 'country':
                if (!value) return 'Please select your country';
                break;
            case 'state':
                if (!value && formData.country === 'US') return 'Please select your state';
                break;
            case 'gender':
                if (!value) return 'Please select your gender';
                break;
            case 'interests':
                if (!value || (Array.isArray(value) && value.length === 0)) {
                    return 'Please select at least one interest';
                }
                break;
            case 'budget':
                if (!value) return 'Please select your budget range';
                break;
            default:
                return '';
        }
        return '';
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: newValue
        }));

        // Validate on change
        const error = validateField(name, newValue);
        setErrors((prev) => ({
            ...prev,
            [name]: error
        }));
    };

    const handleBlur = (name: string) => {
        setTouched((prev) => ({
            ...prev,
            [name]: true
        }));

        const value = formData[name as keyof FormData];
        const error = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error
        }));
    };

    const handleInterestChange = (interest: string): void => {
        const newInterests = formData.interests.includes(interest)
            ? formData.interests.filter((i) => i !== interest)
            : [...formData.interests, interest];

        setFormData((prev) => ({
            ...prev,
            interests: newInterests
        }));

        // Validate interests
        const error = validateField('interests', newInterests);
        setErrors((prev) => ({
            ...prev,
            interests: error
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};
        let isValid = true;

        // Validate all fields
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) {
                newErrors[key as keyof ValidationErrors] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Mark all fields as touched
        const allTouched = Object.keys(formData).reduce(
            (acc, key) => ({
                ...acc,
                [key]: true
            }),
            {}
        );
        setTouched(allTouched);

        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Handle form submission here
        } else {
            console.log('Form has errors');
        }
    };

    const interests: Interest[] = [
        { id: 'electronics', label: 'Electronics & Gadgets' },
        { id: 'fashion', label: 'Fashion & Accessories' },
        { id: 'home', label: 'Home & Living' },
        { id: 'beauty', label: 'Beauty & Personal Care' },
        { id: 'sports', label: 'Sports & Fitness' },
        { id: 'toys', label: 'Toys & Games' },
        { id: 'automotive', label: 'Automotive' },
        { id: 'books', label: 'Books & Media' },
        { id: 'art', label: 'Art & Collectibles' },
        { id: 'other', label: 'Other Categories' }
    ];

    return (
        <div className="h-fit">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-[4rem] w-full">
                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Email Address */}
                    <div>
                        <label className="block text-[1.25rem] md:text-[1.5rem] mb-4">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('email')}
                            placeholder="your@email.com"
                            className={`w-full px-6 py-[1.15rem] border ${
                                touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                            } rounded-md text-[1.25rem] md:text-[1.5rem] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {touched.email && errors.email && (
                            <p className="mt-2 text-red-500 text-[1.25rem] md:text-[1.5rem]">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Country and State */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[1.25rem] md:text-[1.5rem] mb-4">
                                Country
                            </label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                onBlur={() => handleBlur('country')}
                                className={`w-full px-3 py-[1.15rem] border ${
                                    touched.country && errors.country
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                } rounded-md text-[1.25rem] md:text-[1.5rem] text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            >
                                <option value="">select your country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="AU">Australia</option>
                                <option value="DE">Germany</option>
                                <option value="FR">France</option>
                                <option value="JP">Japan</option>
                                <option value="other">Other</option>
                            </select>
                            {touched.country && errors.country && (
                                <p className="mt-2 text-red-500 text-[1.25rem] md:text-[1.5rem]">
                                    {errors.country}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-[1.25rem] md:text-[1.5rem] mb-4">
                                State
                            </label>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                onBlur={() => handleBlur('state')}
                                className={`w-full px-3 py-[1.15rem] border ${
                                    touched.state && errors.state
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                } rounded-md text-[1.25rem] md:text-[1.5rem] text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            >
                                <option value="">select your state</option>
                                <option value="AL">Alabama</option>
                                <option value="CA">California</option>
                                <option value="FL">Florida</option>
                                <option value="NY">New York</option>
                                <option value="TX">Texas</option>
                                <option value="other">Other</option>
                            </select>
                            {touched.state && errors.state && (
                                <p className="mt-2 text-red-500 text-[1.25rem] md:text-[1.5rem]">
                                    {errors.state}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-[1.25rem] md:text-[1.5rem] text-gray-700 mb-4">
                            Gender
                        </label>
                        <div className="flex space-x-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                    className="size-6 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-[1.25rem] md:text-[1.5rem] text-gray-700">
                                    Male
                                </span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                    className="size-6 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-[1.25rem] md:text-[1.5rem] text-gray-700">
                                    Female
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <label className="block text-[1.25rem] md:text-[1.5rem] text-gray-700 mb-6">
                            What do you intend to buy or sell? (Max 4)
                        </label>
                        <div className="space-y-6 grid grid-cols-1 md:grid-cols-4 items-baseline">
                            {interests.map((interest) => (
                                <label key={interest.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.interests.includes(interest.id)}
                                        onChange={() => handleInterestChange(interest.id)}
                                        disabled={
                                            formData.interests.length >= 4 &&
                                            !formData.interests.includes(interest.id)
                                        }
                                        className="size-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                                    />
                                    <span className="ml-2 text-[1.25rem] md:text-[1.5rem] text-gray-700">
                                        {interest.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                        {touched.interests && errors.interests && (
                            <p className="mt-2 text-red-500 text-[1.25rem] md:text-[1.5rem]">
                                {errors.interests}
                            </p>
                        )}
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block text-[1.25rem] md:text-[1.5rem] text-gray-700 mb-4">
                            What's your spend capacity?
                        </label>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-3 py-[1.15rem] border border-gray-300 rounded-md text-[1.25rem] md:text-[1.5rem] text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">Select budget range</option>
                            <option value="0-100">$0 - $100</option>
                            <option value="100-500">$100 - $500</option>
                            <option value="500-1000">$500 - $1,000</option>
                            <option value="1000-5000">$1,000 - $5,000</option>
                            <option value="5000+">$5,000+</option>
                        </select>
                    </div>

                    {/* Agreement */}
                    <div>
                        <label className="flex items-start">
                            <input
                                type="checkbox"
                                name="agreeToUpdates"
                                checked={formData.agreeToUpdates}
                                onChange={handleInputChange}
                                className="size-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                                required
                            />
                            <span className="ml-4 text-[1.25rem] md:text-[1.5rem] leading-[1.5rem] text-gray-700">
                                I agree to receive updates about SalesEco and understand I can
                                unsubscribe at any time.
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="cursor-pointer mt-4 w-full bg-btn-active duration-300 text-white py-[1.25rem] px-4 rounded-md text-[1.5rem] font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Join waitlist
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SalesEcoForm;
