<script lang="ts">
  import { Check, X, Building2, Store, Phone, Layers } from "lucide-svelte";

  let isAnnual = $state(false);

  // Pricing data (PHP)
  const standardMonthly = 4999;
  const standardAnnual = 3999;
  const multiBranchMonthly = 14999;
  const multiBranchAnnual = 12499;

  const standardSetupFee = 15000; // one-time setup for standard
</script>

<div class="container mx-auto px-6 py-10 pb-20">
  <!-- Header -->
  <div class="text-center max-w-3xl mx-auto mb-12">
    <h1 class="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
      Simple, Transparent <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Pricing.</span>
    </h1>
    <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-400 transition-colors">
      Whether you're a single auto parts shop or a growing enterprise network, Retora has a plan tailored for your inventory needs.
    </p>
  </div>

  <!-- Subscription Pricing -->
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-10">      
      <!-- Billing Toggle -->
      <div class="inline-flex items-center p-1 bg-neutral-200 dark:bg-neutral-800 rounded-xl relative z-10 transition-colors">
        <button 
          class="relative px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 {!isAnnual ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}"
          onclick={() => isAnnual = false}
        >
          Monthly
        </button>
        <button 
          class="relative px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 {isAnnual ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}"
          onclick={() => isAnnual = true}
        >
          Annually
        </button>
        <!-- Save Badge -->
        <span class="absolute -top-3 -right-6 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800/50">Save 20%</span>
      </div>
    </div>

    <!-- Pricing Cards (3 Columns) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Card 1: Standard Tier -->
      <div class="bg-white dark:bg-neutral-900 border-2 border-red-500 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col relative overflow-hidden ring-1 ring-red-500/30">
        <div class="flex items-center gap-3 mb-2">
          <Store class="text-red-500" size={24} />
          <h3 class="text-2xl font-bold text-neutral-900 dark:text-white">Standard</h3>
        </div>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-6 h-10">Perfect for single-location automotive and hardware shops.</p>
        
        <div class="mb-8">
          <span class="text-5xl font-extrabold text-neutral-900 dark:text-white">₱{isAnnual ? standardAnnual.toLocaleString() : standardMonthly.toLocaleString()}</span>
          <span class="text-neutral-500 dark:text-neutral-400 font-medium">/mo</span>
          
          <div class="mt-4 space-y-2">
            {#if isAnnual}
              <div class="text-xs font-bold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-500/10 inline-block px-2 py-1 rounded-md">Billed ₱{(standardAnnual * 12).toLocaleString()} yearly</div>
            {:else}
              <div class="text-xs font-bold text-transparent inline-block px-2 py-1 select-none pointer-events-none">&nbsp;</div>
            {/if}
            <div class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 block">+ ₱{standardSetupFee.toLocaleString()} One-time Implementation & Training Fee</div>
          </div>
        </div>
        
        <ul class="space-y-4 mb-8 flex-1">
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Single Branch Management</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Real-time Mobile App Sync</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Base Fitment Database Access</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Standard Email Support</span>
          </li>
          <li class="flex items-start gap-3">
            <X class="text-neutral-300 dark:text-neutral-700 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-400 dark:text-neutral-600">Cross-branch Analytics</span>
          </li>
        </ul>
        
        <button class="w-full py-4 px-6 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          Get Started
        </button>
      </div>

      <!-- Card 2: Multi-branching Tier -->
      <div class="bg-white dark:bg-neutral-900 border-2 border-red-500 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col relative overflow-hidden ring-1 ring-red-500/30">
        <div class="flex items-center gap-3 mb-2">
          <Building2 class="text-red-500" size={24} />
          <h3 class="text-2xl font-bold text-neutral-900 dark:text-white">Multi-Branch</h3>
        </div>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-6 h-10 max-w-[85%]">For complex networks requiring stock transfers and centralized control.</p>
        
        <div class="mb-8">
          <span class="text-5xl font-extrabold text-neutral-900 dark:text-white">₱{isAnnual ? multiBranchAnnual.toLocaleString() : multiBranchMonthly.toLocaleString()}</span>
          <span class="text-neutral-500 dark:text-neutral-400 font-medium">/mo</span>
          
          <div class="mt-4 space-y-2">
            {#if isAnnual}
              <div class="text-xs font-bold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-500/10 inline-block px-2 py-1 rounded-md">Billed ₱{(multiBranchAnnual * 12).toLocaleString()} yearly</div>
            {:else}
              <div class="text-xs font-bold text-transparent inline-block px-2 py-1 select-none pointer-events-none">&nbsp;</div>
            {/if}
            <div class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 block">+ Implementation quoted based on branch count</div>
          </div>
        </div>
        
        <ul class="space-y-4 mb-8 flex-1">
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Unlimited Branch Management</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Streamlined Stock Transfers</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Advanced Cross-branch Analytics</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Role-based Access Control</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-red-500 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Priority 24/7 Phone Support</span>
          </li>
        </ul>
        
        <button class="w-full py-4 px-6 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          Contact Sales
        </button>
      </div>

      <!-- Card 3: Custom Modules -->
      <div class="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 border-t-4 border-t-neutral-800 dark:border-t-white rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-lg flex flex-col relative overflow-hidden">
        
        <div class="flex items-center gap-3 mb-2">
          <Layers class="text-neutral-700 dark:text-neutral-300" size={24} />
          <h3 class="text-2xl font-bold text-neutral-900 dark:text-white">Custom</h3>
        </div>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-6 h-10">Bespoke integrations and specialized modules for strict workflows.</p>
        
        <div class="mb-8">
          <span class="text-4xl font-extrabold text-neutral-900 dark:text-white">Variable</span>
          <div class="text-xs font-bold text-neutral-500 dark:text-neutral-400 mt-2 bg-neutral-200 dark:bg-neutral-800 inline-block px-2 py-1 rounded-md">Priced per requirements</div>
        </div>
        
        <ul class="space-y-4 mb-8 flex-1">
          <li class="flex items-start gap-3">
            <Check class="text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Massive ERP/API Integrations</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Custom Feature Development</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Specialized Fitment Handling</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">Dedicated Success Manager</span>
          </li>
          <li class="flex items-start gap-3">
            <Check class="text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" size={18} />
            <span class="text-sm text-neutral-600 dark:text-neutral-300">On-Premises Deployment Options</span>
          </li>
        </ul>
        
        <a href="/contact" class="flex justify-center items-center gap-2 w-full py-3 px-6 rounded-xl font-bold text-neutral-900 bg-white dark:text-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
          <Phone size={16} />
          Reach Out To Us
        </a>
      </div>

    </div>
  </div>
</div>
