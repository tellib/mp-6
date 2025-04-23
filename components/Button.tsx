export function Button({
  type = "button",
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={
        "font-bold bg-foreground/10 hover:bg-foreground/20 hover:cursor-pointer transition-colors rounded-md px-4 py-2 ring-1 ring-inset ring-foreground/10"
      }
      {...props}
    >
      {children}
    </button>
  );
}
