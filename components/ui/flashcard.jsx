'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

const Flashcard = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative w-[300px] h-[200px] rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Flashcard.displayName = 'Flashcard';

const FlashcardFront = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute inset-0 flex items-center justify-center p-6 text-center backface-hidden [backface-visibility:hidden]',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
FlashcardFront.displayName = 'FlashcardFront';

const FlashcardBack = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute inset-0 flex items-center justify-center p-6 text-center backface-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary text-primary-foreground rounded-xl',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
FlashcardBack.displayName = 'FlashcardBack';

export { Flashcard, FlashcardFront, FlashcardBack };
