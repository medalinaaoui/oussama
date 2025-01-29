import { cn } from "@/lib/utils";

export const H1 = ({
  children,
  className,
  id,
  style,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl relative top-0 w-fit h-auto py-4 items-center text-primary bg-clip-text  text-center select-auto",
        className
      )}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
  id,
  style,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl relative top-0 w-fit h-auto  items-center text-primary bg-clip-text   select-auto",
        className
      )}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
  id,
  style,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "text-lg font-extrabold leading-none tracking-tight md:text-xl lg:text-2xl relative top-0 w-fit h-auto  items-center text-primary bg-clip-text   select-auto",
        className
      )}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H4 = ({
  children,
  className,
  id,
  style,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "text-xl font-bold leading-none tracking-tight md:text-2xl lg:text-3xl relative top-0 w-fit h-auto py-4 items-center text-primary bg-clip-text select-auto",
        className
      )}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </h4>
  );
};
