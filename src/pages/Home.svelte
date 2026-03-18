<script lang="ts">
  import { ArrowRight, Box, Smartphone, Server } from "lucide-svelte";

  interface HomeProps {
    navigate: (event: MouseEvent, path: string) => void;
  }

  let { navigate }: HomeProps = $props();
</script>

<!-- Hero Section -->
<div class="container mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
  <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
    Manage your inventory with <br/>
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Crimson Precision.</span>
  </h1>

  <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 transition-colors">
    Retora is a seamless ecosystem spanning across Desktop, Mobile, and Web to give you unparalleled control and AI-driven insights into your inventory.
  </p>

  <div class="flex flex-col sm:flex-row gap-4">
    <a href="/features" onclick={(e) => navigate(e, '/features')} class="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
      Explore Features
      <ArrowRight size={20} />
    </a>
    <a href="/comparison" onclick={(e) => navigate(e, '/comparison')} class="inline-flex items-center justify-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-sm dark:shadow-none">
      The Retora Advantage
    </a>
  </div>
</div>

<!-- Built for Modern Businesses -->
<div class="bg-white dark:bg-neutral-900/50 py-24 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
  <div class="container mx-auto px-6">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">Built for <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Modern Businesses</span></h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        Designed from the ground up for industries that require speed, accuracy, and deep categorization.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors hover:border-red-300 dark:hover:border-red-900/50">
        <h3 class="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Auto Parts & Repair Shops</h3>
        <ul class="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li class="flex items-center gap-3"><span class="flex-shrink-0 w-2 h-2 rounded-full bg-red-500"></span> Deep vehicle fitment & compatibility search</li>
          <li class="flex items-center gap-3"><span class="flex-shrink-0 w-2 h-2 rounded-full bg-red-500"></span> Fast part identification via mobile camera</li>
          <li class="flex items-center gap-3"><span class="flex-shrink-0 w-2 h-2 rounded-full bg-red-500"></span> Intuitive management of alternate part numbers</li>
        </ul>
      </div>
      <div class="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors hover:border-red-300 dark:hover:border-red-900/50">
        <h3 class="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Hardware & Supply Stores</h3>
        <ul class="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li class="flex items-center gap-3"><span class="flex-shrink-0 w-2 h-2 rounded-full bg-red-500"></span> Real-time granular, aisle-level inventory views</li>
          <li class="flex items-center gap-3"><span class="flex-shrink-0 w-2 h-2 rounded-full bg-red-500"></span> Instant multi-branch stock transfers</li>
          <li class="flex items-center gap-3"><span class="flex-shrink-0 w-2 h-2 rounded-full bg-red-500"></span> Fast workflow scanning for the storage backrooms</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Platform Cards -->
<div class="bg-neutral-50 dark:bg-neutral-950 py-24 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
  <div class="container mx-auto px-6">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">One <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Ecosystem</span></h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">Three interconnected platforms working in perfect sync across your entire business.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div class="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl hover:border-blue-300 dark:hover:border-blue-900/50 transition-colors shadow-sm dark:shadow-none">
        <div class="w-12 h-12 bg-blue-50 dark:bg-blue-950/50 text-blue-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
          <Smartphone size={24} />
        </div>
        <h3 class="text-xl font-bold mb-3 text-neutral-900 dark:text-white">Mobile Scanner</h3>
        <p class="text-neutral-600 dark:text-neutral-400">Scan barcodes instantly from anywhere in your warehouse. Mobile-first workflow designed for speed.</p>
      </div>

      <div class="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl hover:border-amber-300 dark:hover:border-amber-900/50 transition-colors shadow-sm dark:shadow-none">
        <div class="w-12 h-12 bg-amber-50 dark:bg-amber-950/50 text-amber-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
          <Box size={24} />
        </div>
        <h3 class="text-xl font-bold mb-3 text-neutral-900 dark:text-white">Desktop Dashboard</h3>
        <p class="text-neutral-600 dark:text-neutral-400">Comprehensive control over stock, analytics, and settings via a powerful electron-based desktop application.</p>
      </div>

      <div class="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl hover:border-red-300 dark:hover:border-red-900/50 transition-colors shadow-sm dark:shadow-none">
        <div class="w-12 h-12 bg-red-50 dark:bg-red-950/50 text-red-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
          <Server size={24} />
        </div>
        <h3 class="text-xl font-bold mb-3 text-neutral-900 dark:text-white">Centralized Server</h3>
        <p class="text-neutral-600 dark:text-neutral-400">Real-time sync and robust APIs to ensure your stock counts are always accurate across all branches.</p>
      </div>
    </div>
  </div>
</div>
