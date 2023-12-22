type ButtonProps = {
  onClick: () => void;
  children: string;
};

export function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
