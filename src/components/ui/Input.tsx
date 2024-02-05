import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

const inputVariants = cva(
  'rounded-lg p-3 text-sm focus-visible:outline-brand-purple-normal',
  {
    variants: {
      variant: {
        primary: 'border border-neutral-400',
        transparent: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const Input = ({ label, className, variant, ...props }: InputProps) => {
  return (
    <label className="flex flex-col">
      {label && (
        <span className="block mb-1 text-xs font-medium text-neutral-400">
          {label}
        </span>
      )}
      <input className={cn(inputVariants({ variant, className }))} {...props} />
    </label>
  );
};

export default Input;
