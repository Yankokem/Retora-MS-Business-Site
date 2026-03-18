<script lang="ts">
  import { Check, Minus, X } from "lucide-svelte";
  
  const comparisons = [
    {
      feature: "Connectivity",
      legacy: "Manual Sync",
      auto: "Hybrid/Online",
      retora: "Offline & Multi-Branch Ready"
    },
    {
      feature: "Identification",
      legacy: "Manual Entry",
      auto: "Text-Based Search",
      retora: "AI Image Recognition"
    },
    {
      feature: "Compatibility",
      legacy: "Non-existent",
      auto: "Specialized",
      retora: "Deep Vehicle Fitment"
    },
    {
      feature: "Workflow",
      legacy: "Static/Paper",
      auto: "Counter-Focused",
      retora: "Mobile-First Scanning"
    },
    {
      feature: "Scalability",
      legacy: "Single PC Install",
      auto: "Requires VPNs",
      retora: "Unlimited Cloud Scaling"
    },
    {
      feature: "Analytics & Insights",
      legacy: "Basic Export",
      auto: "Standard Reports",
      retora: "Predictive & Custom Graphs"
    },
    {
      feature: "Setup Time",
      legacy: "Weeks (Manual)",
      auto: "Days (Trainer req.)",
      retora: "Minutes (Self-serve)"
    },
    {
      feature: "Pricing Model",
      legacy: "Expensive One-off",
      auto: "Pricey Hardware fees",
      retora: "Transparent & Flexible"
    }
  ];
</script>

<div class="container mx-auto px-6 py-20 pb-32">
  <div class="text-center max-w-3xl mx-auto mb-16">
    <h1 class="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white transition-colors">
      Competitive <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Advantage.</span>
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 transition-colors">
      See why moving away from legacy software and rigid automotive ERPs makes sense for modern auto shops and hardware stores.
    </p>
  </div>

  <div class="max-w-5xl mx-auto w-full overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-xl dark:shadow-2xl relative transition-colors">
    
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-neutral-100 dark:bg-neutral-950/80 transition-colors">
          <th class="p-6 font-bold text-neutral-800 dark:text-neutral-300 w-1/4">Features</th>
          <th class="p-6 font-semibold text-neutral-600 dark:text-neutral-400 w-1/4">Legacy <br/><span class="text-sm font-normal text-neutral-400 dark:text-neutral-500">(Inventoria)</span></th>
          <th class="p-6 font-semibold text-neutral-600 dark:text-neutral-400 w-1/4">Automotive ERP <br/><span class="text-sm font-normal text-neutral-400 dark:text-neutral-500">(Motodisk)</span></th>
          <th class="p-6 font-bold text-white bg-red-600 dark:bg-red-900 border-x border-t border-red-500 dark:border-red-700 w-1/4 text-center">Retora MS </th>
        </tr>
      </thead>
      <tbody>
        {#each comparisons as row, i}
          <tr class="border-t border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
            <td class="p-6 font-medium text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-950/40">{row.feature}</td>
            <td class="p-6 text-neutral-600 dark:text-neutral-400">{row.legacy}</td>
            <td class="p-6 text-neutral-700 dark:text-neutral-300">{row.auto}</td>
            <td class="p-6 font-bold text-white bg-red-600/90 dark:bg-red-800/80 border-x border-red-500 dark:border-red-700 text-center shadow-[inset_0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]">
              {row.retora}
            </td>
          </tr>
        {/each}
        <tr class="border-t border-neutral-200 dark:border-neutral-800 transition-colors">
          <td class="p-6 bg-neutral-50 dark:bg-neutral-950/40 rounded-bl-2xl"></td>
          <td class="p-6"></td>
          <td class="p-6"></td>
          <td class="bg-red-600 dark:bg-red-900 border-x border-b border-red-500 dark:border-red-700 rounded-br-2xl"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
