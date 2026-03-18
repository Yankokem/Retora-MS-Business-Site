<script lang="ts">
  import { Mail, MessageSquare, MapPin, Globe, Zap } from "lucide-svelte";
</script>

<div class="relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors flex flex-col justify-center py-20 pb-40">
  <!-- Dynamic Background Effects -->
  <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-[pulse_4s_infinite]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl animate-[pulse_6s_infinite_1s]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0,transparent_60%)]"></div>
  </div>

  <div class="container mx-auto px-6 relative z-10 pt-10">
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight text-neutral-900 dark:text-white">
        Get in <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Touch.</span>
      </h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-400">
        Let's integrate Retora into your workflow. Our technical engineers are standing by to connect your systems.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

      <!-- Contact Form -->
      <div class="bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl shadow-xl dark:shadow-2xl">
        <div class="flex items-center gap-3 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <MessageSquare class="text-red-500" size={24} />
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">Send a Message</h2>
        </div>

        <form class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="name" class="text-xs font-bold text-neutral-500 uppercase tracking-wider">Name</label>
              <input id="name" type="text" class="w-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="John Doe" />
            </div>
            <div class="space-y-2">
              <label for="email" class="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email</label>
              <input id="email" type="email" class="w-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="john@company.com" />
            </div>
          </div>
          <div class="space-y-2">
            <label for="message" class="text-xs font-bold text-neutral-500 uppercase tracking-wider">Message</label>
            <textarea id="message" class="w-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors min-h-[120px] resize-none" placeholder="Tell us about your business..."></textarea>
          </div>
          <button type="button" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            <Zap size={20} class="group-hover:animate-ping absolute opacity-50" />
            <Zap size={20} class="relative z-10" />
            Send Message
          </button>
        </form>
      </div>

      <!-- Contact Info Cards -->
      <div class="space-y-6 flex flex-col justify-center">
        <a href="mailto:hello@retorasystems.com" class="group flex items-start gap-6 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl hover:bg-white dark:hover:bg-neutral-900 transition-all hover:border-red-500/50">
          <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <div>
            <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-1">Email Us</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm">For partnerships, server inquiries, or general support.</p>
            <p class="text-red-600 dark:text-red-400 font-mono text-sm mt-2">hello@retorasystems.com</p>
          </div>
        </a>

        <div class="group flex items-start gap-6 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl hover:bg-white dark:hover:bg-neutral-900 transition-all hover:border-red-500/50">
          <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <MapPin size={24} />
          </div>
          <div>
            <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-1">Our Location</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm">Main technical hub and development center.</p>
            <p class="text-neutral-500 dark:text-neutral-500 font-mono text-xs mt-2 group-hover:text-red-500 transition-colors">Manila, Philippines · 14.5995° N, 120.9842° E</p>
          </div>
        </div>

        <div class="group flex items-start gap-6 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl hover:bg-white dark:hover:bg-neutral-900 transition-all hover:border-red-500/50">
          <div class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Globe size={24} />
          </div>
          <div>
            <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-1">Community</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm">Join the open forums to discuss implementations.</p>
            <a href="/community" class="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-medium text-sm mt-2 hover:underline">
              Access Forums &rarr;
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
