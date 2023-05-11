import solidLogo from '@renderer/assets/solid-logo.svg';
import styles from './index.module.css';
import { Counter } from '@renderer/components/Counter';

export function WelcomeView() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class='flex gap-3'>
          <img src={solidLogo} class={styles.logo} alt='logo' />
          <img
            src='https://skillicons.dev/icons?i=electron'
            class={styles.logo + ' rounded-full'}
            alt='logo'
          />
        </div>
        <p class='text-[2rem]'>
          Quick Started Template for Electron + Solid.js
        </p>
        <img
          class='h-[4rem]'
          src='https://skillicons.dev/icons?i=electron,vite,solidjs,ts,tailwindcss'
          alt='skillicons'
        />
        <Counter class={'mt-5'} />
      </header>
    </div>
  );
}
