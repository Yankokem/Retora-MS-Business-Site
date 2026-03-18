<script lang="ts">
  import { Sun, Moon, Monitor } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let theme = $state('system');
  let isDark = $state(false);
  let isOpen = $state(false);

  function applyTheme(t: string) {
    theme = t;
    localStorage.setItem('theme', t);
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (t === 'dark' || (t === 'system' && prefersDark)) {
      document.documentElement.classList.add('dark');
      isDark = true;
    } else {
      document.documentElement.classList.remove('dark');
      isDark = false;
    }
    isOpen = false;
  }

  onMount(() => {
    const stored = localStorage.getItem('theme');
    if (stored) applyTheme(stored);
    else applyTheme('system');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    mediaQuery.addEventListener('change', onChange);
    
    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  });
</script>

<div class="relative">
  <button onclick={() => isOpen = !isOpen} class="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400" aria-label="Toggle Theme">
    {#if theme === 'light'}
      <Sun size={20} />
    {:else if theme === 'dark'}
      <Moon size={20} />
    {:else}
      <Monitor size={20} />
    {/if}
  </button>
  
  {#if isOpen}
    <button class="fixed inset-0 w-full h-full cursor-default z-40" onclick={() => isOpen = false} aria-label="Close menu" tabindex="-1"></button>
    <div class="absolute right-0 mt-2 w-36 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl overflow-hidden z-50 py-1">
      <button onclick={() => applyTheme('light')} class="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors {theme === 'light' ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300'}">
        <Sun size={16} /> Light
      </button>
      <button onclick={() => applyTheme('dark')} class="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors {theme === 'dark' ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300'}">
        <Moon size={16} /> Dark
      </button>
      <button onclick={() => applyTheme('system')} class="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors {theme === 'system' ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300'}">
        <Monitor size={16} /> System
      </button>
    </div>
  {/if}
</div>
