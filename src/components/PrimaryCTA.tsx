'use client'

import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'

interface PrimaryCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
  loading?: boolean
  href?: string
  variant?: 'primary' | 'secondary'
}

export const PrimaryCTA = forwardRef<HTMLButtonElement, PrimaryCTAProps>(
  (
    {
      children,
      icon,
      loading = false,
      variant = 'primary',
      className = '',
      disabled,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center
      h-12 px-4 rounded-lg
      font-medium transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#957C3D] focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      shadow-lg hover:shadow-xl
      primary-cta-button
    `

    const primaryClasses = `
      ${baseClasses}
      bg-[#4F0341] text-[#957C3D] border-2 border-[#4F0341]
      hover:bg-[#6B0557] hover:border-[#6B0557] hover:text-[#B8956A]
      hover:scale-105 hover:shadow-2xl
    `

    const secondaryClasses = `
      ${baseClasses}
      bg-transparent text-[#4F0341] border-2 border-[#4F0341]
      hover:bg-[#4F0341] hover:text-[#957C3D]
      hover:scale-105
    `

    const buttonClasses = variant === 'primary' ? primaryClasses : secondaryClasses

    const ButtonContent = () => (
      <>
        {icon && (
          <span className={`transition-transform duration-300 ${children ? 'mr-2' : ''}`}>
            {icon}
          </span>
        )}
        {loading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <span className="font-medium">
            {children}
          </span>
        )}
      </>
    )

    if (href) {
      return (
        <a
          href={href}
          className={`${buttonClasses} ${className}`}
        >
          <ButtonContent />
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={`${buttonClasses} ${className}`}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        <ButtonContent />
      </button>
    )
  }
)

PrimaryCTA.displayName = 'PrimaryCTA'
