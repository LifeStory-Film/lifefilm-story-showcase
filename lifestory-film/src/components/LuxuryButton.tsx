'use client'

import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import { useLuxuryCursor } from './LuxuryCursor'

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'filled' | 'ghost' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: ReactNode
  loading?: boolean
  href?: string
}

export const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({
    variant = 'outline',
    size = 'md',
    children,
    icon,
    loading = false,
    className = '',
    disabled,
    href,
    onClick,
    ...props
  }, ref) => {
    const cursorProps = useLuxuryCursor('pointer')

    const baseClasses = `
      relative inline-flex items-center justify-center
      font-medium transition-all duration-500 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--luxury-gold))]
      disabled:opacity-50 disabled:cursor-not-allowed
      group overflow-hidden
    `

    const sizeClasses = {
      sm: 'px-4 py-2 text-xs letter-spacing-[0.1em]',
      md: 'px-8 py-4 text-sm letter-spacing-[0.05em]',
      lg: 'px-12 py-6 text-base letter-spacing-[0.02em]'
    }

    const variantClasses = {
      outline: `
        bg-transparent border border-[hsl(var(--luxury-gold)/0.5)]
        text-[hsl(var(--luxury-pearl))]
        hover:border-[hsl(var(--luxury-gold))]
        hover:shadow-[0_0_20px_hsl(var(--luxury-gold)/0.3),inset_0_0_20px_hsl(var(--luxury-gold)/0.1)]
        hover:-translate-y-1
      `,
      filled: `
        bg-[hsl(var(--luxury-gold))] border border-[hsl(var(--luxury-gold))]
        text-[hsl(var(--luxury-obsidian))]
        hover:bg-[hsl(var(--luxury-pearl))] hover:border-[hsl(var(--luxury-pearl))]
        hover:shadow-[0_8px_25px_hsl(var(--luxury-gold)/0.4)]
        hover:-translate-y-1
      `,
      ghost: `
        bg-transparent border-0
        text-[hsl(var(--luxury-platinum))]
        hover:text-[hsl(var(--luxury-gold))]
        hover:bg-[hsl(var(--luxury-gold)/0.1)]
      `,
      minimal: `
        bg-transparent border-0 p-0
        text-[hsl(var(--luxury-platinum))]
        hover:text-[hsl(var(--luxury-gold))]
        underline decoration-[hsl(var(--luxury-gold)/0.3)] underline-offset-4
        hover:decoration-[hsl(var(--luxury-gold))]
      `
    }

    const buttonClasses = `
      ${baseClasses}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `

    const ButtonContent = () => (
      <>
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[hsl(var(--luxury-pearl)/0.1)] to-transparent" />

        {/* Icon */}
        {icon && (
          <span className="mr-2 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        )}

        {/* Loading state */}
        {loading ? (
          <div className="luxury-loader w-4 h-4" />
        ) : (
          <>
            {/* Text content */}
            <span className="relative z-10 uppercase tracking-wider font-medium">
              {children}
            </span>

            {/* Arrow for outline buttons */}
            {variant === 'outline' && (
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </>
        )}
      </>
    )

    if (href) {
      return (
        <a
          href={href}
          className={buttonClasses}
          {...cursorProps}
        >
          <ButtonContent />
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={onClick}
        {...cursorProps}
        {...props}
      >
        <ButtonContent />
      </button>
    )
  }
)

LuxuryButton.displayName = 'LuxuryButton'

// Floating Action Button variant
export function LuxuryFAB({
  children,
  className = '',
  onClick,
  ...props
}: Omit<LuxuryButtonProps, 'variant' | 'size'>) {
  const cursorProps = useLuxuryCursor('pointer')

  return (
    <button
      className={`
        fixed bottom-8 right-8 z-50
        w-14 h-14 rounded-full
        bg-[hsl(var(--luxury-gold))]
        border border-[hsl(var(--luxury-gold))]
        text-[hsl(var(--luxury-obsidian))]
        shadow-[0_8px_25px_hsl(var(--luxury-gold)/0.4)]
        hover:shadow-[0_12px_35px_hsl(var(--luxury-gold)/0.6)]
        hover:scale-110 hover:-translate-y-1
        transition-all duration-300 ease-out
        group
        ${className}
      `}
      onClick={onClick}
      {...cursorProps}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>

      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-[hsl(var(--luxury-gold))] animate-ping opacity-20" />
    </button>
  )
}

// Icon Button variant
export function LuxuryIconButton({
  children,
  size = 'md',
  className = '',
  ...props
}: Omit<LuxuryButtonProps, 'variant'>) {
  const cursorProps = useLuxuryCursor('pointer')

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  return (
    <button
      className={`
        ${sizeClasses[size]}
        rounded-full
        bg-transparent border border-[hsl(var(--luxury-gold)/0.3)]
        text-[hsl(var(--luxury-platinum))]
        hover:border-[hsl(var(--luxury-gold))]
        hover:text-[hsl(var(--luxury-gold))]
        hover:bg-[hsl(var(--luxury-gold)/0.1)]
        hover:shadow-[0_0_15px_hsl(var(--luxury-gold)/0.3)]
        transition-all duration-300 ease-out
        flex items-center justify-center
        group
        ${className}
      `}
      {...cursorProps}
      {...props}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {children}
      </div>
    </button>
  )
}
