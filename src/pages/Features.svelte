<script lang="ts">
  import { Zap, Scan, Database, Shield, LineChart, Network } from "lucide-svelte";

  const features = [
    {
      title: "Real-time Synchronization",
      description: "Any change made on the mobile scanner is instantly reflected on the desktop dashboard. Never double-count or miss an update.",
      icon: Zap,
      iconBg: "bg-red-50 dark:bg-red-950/50",
      iconBorder: "border-red-100 dark:border-red-900/50",
      iconText: "text-red-500"
    },
    {
      title: "AI-Powered Scanning",
      description: "Advanced image recognition helps identify automotive parts faster than standard barcode scanners. Just point and manage.",
      icon: Scan,
      iconBg: "bg-blue-50 dark:bg-blue-950/50",
      iconBorder: "border-blue-100 dark:border-blue-900/50",
      iconText: "text-blue-500"
    },
    {
      title: "Deep Vehicle Fitment",
      description: "Unlike generic inventory systems, Retora understands automotive schemas, tracking exactly which part fits which vehicle model.",
      icon: Database,
      iconBg: "bg-violet-50 dark:bg-violet-950/50",
      iconBorder: "border-violet-100 dark:border-violet-900/50",
      iconText: "text-violet-500"
    },
    {
      title: "Multi-branch Network",
      description: "Manage stock across multiple geographic locations. Transfer stock easily and track exactly where your parts are.",
      icon: Network,
      iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
      iconBorder: "border-emerald-100 dark:border-emerald-900/50",
      iconText: "text-emerald-500"
    },
    {
      title: "Advanced Analytics",
      description: "Predict demand and understand sales trends through beautiful, interactive charts on your dashboard.",
      icon: LineChart,
      iconBg: "bg-amber-50 dark:bg-amber-950/50",
      iconBorder: "border-amber-100 dark:border-amber-900/50",
      iconText: "text-amber-500"
    },
    {
      title: "Enterprise Security",
      description: "Role-based access controls dictate who can modify stock versus who can only view, keeping your inventory numbers safe.",
      icon: Shield,
      iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
      iconBorder: "border-indigo-100 dark:border-indigo-900/50",
      iconText: "text-indigo-500"
    }
  ];
</script>

<div class="container mx-auto px-6 py-20 pb-32">
  <div class="text-center max-w-3xl mx-auto mb-16">
    <h1 class="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">Powerful <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Features.</span></h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 transition-colors">
      Retora isn't just an inventory app; it's a complete ecosystem tailored for the automotive and hardware industry.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each features as feature}
      <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-lg">
        <div class="w-14 h-14 {feature.iconBg} border {feature.iconBorder} rounded-xl flex items-center justify-center {feature.iconText} mb-6 transition-colors">
          <svelte:component this={feature.icon} size={28} />
        </div>
        <h3 class="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{feature.title}</h3>
        <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
          {feature.description}
        </p>
      </div>
    {/each}
  </div>
</div>
