import { cn } from '@/lib/clientUtils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'w-full inline-flex justify-center items-center rounded-xl p-3 font-semibold outline-2 outline-offset-2 transition-colors disabled:cursor-disabled disabled:text-neutral-400',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-purple-normal text-white hover:bg-brand-purple-darker active:bg-brand-purple-dark active:text-white/800',
        neutral:
          'bg-neutral-100 text-black hover:bg-neutral-300 active:bg-neutral-300 active:text-black/800',
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
