import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition-all group gap-1 bg-black text-white hover:bg-black/90",
  variants: {
    variant: {
      primary: " rounded-md",
      secondary: "rounded-full",
      gradient:
        "rounded-full bg-gradient-to-r from-[#FE7F23]  to-[#FF4900] hover:opacity-80",
    },
    size: {
      sm: "h-7 py-1 px-3",
      md: "h-10 py-2 px-8",
      lg: "h-12 py-2 px-14",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

export const buttonTextVariants = tv({
  variants: {
    variant: {
      primary: "",
      secondary: "",
      gradient: "",
    },
    size: {
      sm: "text-sm",
      md: "text-xs tracking-widest",
      lg: "text-lg font-bold",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {}

export function Button({
  variant,
  size,
  disabled,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, disabled, className })}
      {...rest}
    >
      <span className={buttonTextVariants({ variant, size })}>{children}</span>
    </button>
  );
}
