import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { HTMLAttributes } from 'react';

const textVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-medium tracking-tight mb-2',
      h2: 'text-3xl font-medium tracking-tight mb-2',
      h3: 'text-2xl font-medium tracking-tight mb-2',
      p: 'text-lg text-gray-600',
      xs: 'mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase',
      xl: 'text-xl font-bold tracking-tight',
      '2xl': 'text-2xl font-bold tracking-tight',
      '3xl': 'text-3xl font-bold tracking-tight',
      '4xl': 'text-3xl font-bold tracking-tight',
    },
  },
});

type AllowedTextTypes = 'h1' | 'h2' | 'h3' | 'p';

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  type?: AllowedTextTypes;
}

const Text = ({ className, variant, type, ...props }: TextProps) => {
  if (type === 'h1')
    return (
      <h1
        className={cn(textVariants({ variant: variant ?? 'h1', className }))}
        {...props}
      />
    );
  if (type === 'h2')
    return (
      <h2
        className={cn(textVariants({ variant: variant ?? 'h2', className }))}
        {...props}
      />
    );
  if (type === 'h3')
    return (
      <h3
        className={cn(textVariants({ variant: variant ?? 'h3', className }))}
        {...props}
      />
    );
  return (
    <p
      className={cn(textVariants({ variant: variant ?? 'p', className }))}
      {...props}
    />
  );
};

export default Text;
