import { cn } from '@/lib/clientUtils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'w-full inline-flex justify-center rounded-xl py-3 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  {
    variants: {
      variant: {
        primary:
          'w-full inline-flex justify-center rounded-xl py-3 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-brand-purple-normal text-white hover:bg-brand-purple-darker active:bg-brand-purple-dark active:text-white/800',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, ...props }: ButtonProps) => (
  <button className={cn(buttonVariants({ variant, className }))} {...props} />
);

export default Button;
