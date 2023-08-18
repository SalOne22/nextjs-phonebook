import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType } from 'react';

type ButtonOwnProps<E extends ElementType> = {
  variant?: 'ghost' | 'solid' | 'outline';
  as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

export default function Button<E extends ElementType = 'button'>({
  as,
  variant,
  className,
  ...props
}: ButtonProps<E>) {
  const As = as || 'button';

  const styles = clsx([
    'inline-flex items-center px-4 rounded-md font-semibold h-10 transition',
    variant === 'ghost' && 'bg-transparent hover:bg-black/40',
    className,
  ]);

  return <As className={styles} {...props} />;
}
