<script lang="ts">
  import { onMount } from "svelte";
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import Home from "./pages/Home.svelte";
  import Features from "./pages/Features.svelte";
  import Comparison from "./pages/Comparison.svelte";
  import Pricing from "./pages/Pricing.svelte";
  import Contact from "./pages/Contact.svelte";

  let currentPath = $state(window.location.pathname);

  onMount(() => {
    const handlePopState = () => {
      currentPath = window.location.pathname;
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  });

  function navigate(event: MouseEvent, path: string) {
    event.preventDefault();
    window.history.pushState({}, '', path);
    currentPath = path;
    window.scrollTo(0, 0);
  }
</script>

<!-- Add a basic layout setup here -->
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white font-sans flex flex-col transition-colors duration-300">
    <!-- Navbar -->
    <header class="border-b border-neutral-200 dark:border-neutral-900 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div class="container mx-auto px-6 h-14 flex items-center justify-between relative">
        <a href="/" class="flex items-center gap-2 text-lg font-bold text-red-600">
          <!-- Logo Placeholder -->
          <div class="w-7 h-7 bg-red-600 rounded-md flex items-center justify-center text-white text-xs">R</div>
          Retora
        </a>
        <nav class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a href="/" onclick={(e) => navigate(e, '/')} class="hover:text-neutral-900 dark:hover:text-white transition-colors {currentPath === '/' ? 'text-red-600 dark:text-red-500 font-bold' : ''}">Home</a>
          <a href="/features" onclick={(e) => navigate(e, '/features')} class="hover:text-neutral-900 dark:hover:text-white transition-colors {currentPath === '/features' ? 'text-red-600 dark:text-red-500 font-bold' : ''}">Features</a>
          <a href="/comparison" onclick={(e) => navigate(e, '/comparison')} class="hover:text-neutral-900 dark:hover:text-white transition-colors {currentPath === '/comparison' ? 'text-red-600 dark:text-red-500 font-bold' : ''}">Advantage</a>
          <a href="/pricing" onclick={(e) => navigate(e, '/pricing')} class="hover:text-neutral-900 dark:hover:text-white transition-colors {currentPath === '/pricing' ? 'text-red-600 dark:text-red-500 font-bold' : ''}">Pricing</a>
          <a href="/contact" onclick={(e) => navigate(e, '/contact')} class="hover:text-neutral-900 dark:hover:text-white transition-colors {currentPath === '/contact' ? 'text-red-600 dark:text-red-500 font-bold' : ''}">Contact</a>
        </nav>
        <div class="flex items-center gap-4">
          <ThemeToggle />
          <a href="#" class="hidden md:flex text-sm font-medium hover:text-neutral-900 dark:hover:text-white transition-colors text-neutral-600 dark:text-neutral-400">Sign In</a>
          <a href="#" class="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-[0_0_15px_rgba(220,38,38,0.2)] dark:shadow-[0_0_15px_rgba(220,38,38,0.3)]">Get Started</a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      {#if currentPath === '/'}
        <Home {navigate} />
      {:else if currentPath === '/features'}
        <Features />
      {:else if currentPath === '/comparison'}
        <Comparison />
      {:else if currentPath === '/pricing'}
        <Pricing />
      {:else if currentPath === '/contact'}
        <Contact />
      {:else}
        <div class="flex items-center justify-center min-h-[50vh]">
          <h1 class="text-3xl font-bold text-neutral-400">404 - Page Not Found</h1>
        </div>
      {/if}
    </main>

    <!-- Footer -->
    <footer class="border-t border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-950 py-16 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div class="col-span-1 md:col-span-2">
            <a href="/" class="flex items-center gap-2 text-xl font-bold text-red-600 mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center text-white text-sm">R</div>
              Retora
            </a>
            <p class="text-neutral-600 dark:text-neutral-400 max-w-sm mb-6">
              Empowering modern auto shops and hardware stores with AI-driven inventory control and seamless multi-branch scaling.
            </p>
          </div>
          <div>
            <h4 class="font-bold text-neutral-900 dark:text-white mb-4">Product</h4>
            <ul class="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="/features" onclick={(e) => navigate(e, '/features')} class="hover:text-red-500 transition-colors">Features</a></li>
              <li><a href="/comparison" onclick={(e) => navigate(e, '/comparison')} class="hover:text-red-500 transition-colors">The Retora Advantage</a></li>
              <li><a href="/pricing" onclick={(e) => navigate(e, '/pricing')} class="hover:text-red-500 transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Mobile Scanner App</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Desktop Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-neutral-900 dark:text-white mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="/contact" onclick={(e) => navigate(e, '/contact')} class="hover:text-red-500 transition-colors">Contact Us</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-red-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-neutral-200 dark:border-neutral-900 text-center text-sm text-neutral-500">
          <p>&copy; 2026 Retora Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
