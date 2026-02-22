import React from 'react';

interface InputFieldProps {
    label: string;
    type?: string;
    value: string | number;
    onChange: (value: any) => void;
    placeholder?: string;
    error?: string;
    options?: { label: string; value: string | number }[];
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    error,
    options,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-primary mb-1">
                {label}
            </label>
            {options ? (
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
