import type { ReactNode, ButtonHTMLAttributes } from "react"
import styles from "./button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "small"
  withGradient?: boolean
  href?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  withGradient = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    variant === "secondary" ? styles.secondary : "",
    size === "small" ? styles.small : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const content = (
    <>
      <div className={styles.buttonInner}>
        <div className={styles.buttonText}>{children}</div>
        {withGradient && (
          <div className={styles.buttonGradient}>
            <div className={`${styles.gradientBall} ${styles.gradientBallOne}`}></div>
            <div className={`${styles.gradientBall} ${styles.gradientBallTwo}`}></div>
          </div>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  )
}
