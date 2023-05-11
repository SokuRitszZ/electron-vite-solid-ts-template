import { ComponentProps, createSignal } from 'solid-js';

export function Counter(props: ComponentProps<'button'>) {
  const [count, setCount] = createSignal(0);

  return (
    <button {...props} onClick={() => setCount(count() + 1)}>
      COUNT: {count()}
    </button>
  );
}
