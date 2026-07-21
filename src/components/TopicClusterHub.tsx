import { TOPIC_CLUSTERS, type TopicCluster } from "@/lib/topicClusters";

interface TopicClusterHubProps {
  onSelectCategory: (category: string) => void;
  activeCategory?: string;
  variant?: "home" | "blog";
}

function ClusterCard({
  cluster,
  onSelect,
  isActive,
  compact,
}: {
  cluster: TopicCluster;
  onSelect: (category: string) => void;
  isActive: boolean;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(cluster.blogCategory)}
      className={`text-left rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        compact ? "p-4" : "p-5"
      } ${
        isActive
          ? "border-gold bg-gold/5 shadow-sm"
          : "border-slate-200 bg-white hover:border-gold/40"
      }`}
    >
      <h3
        className={`font-heading font-bold text-slate-900 ${compact ? "text-sm mb-1" : "text-base mb-2"}`}
      >
        {cluster.title}
      </h3>
      <p
        className={`text-slate-500 leading-relaxed ${compact ? "text-xs line-clamp-2" : "text-sm"}`}
      >
        {cluster.description}
      </p>
      {!compact && (
        <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-gold-700">
          {cluster.keywords.slice(0, 3).join(" · ")}
        </p>
      )}
    </button>
  );
}

export function TopicClusterHub({
  onSelectCategory,
  activeCategory,
  variant = "blog",
}: TopicClusterHubProps) {
  const isHome = variant === "home";

  return (
    <section
      className={
        isHome
          ? "py-14 bg-slate-50 border-y border-slate-100"
          : "py-10 bg-[#FAFAF7] border-y border-slate-100"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isHome ? "text-center max-w-3xl mx-auto mb-8" : "mb-6"}`}>
          <h2
            className={`font-heading font-bold text-slate-900 ${isHome ? "text-2xl sm:text-3xl mb-3" : "text-xl sm:text-2xl mb-2"}`}
          >
            {isHome
              ? "Explore OMS & Reconciliation Topics"
              : "Topic Clusters — Build Topical Authority"}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isHome
              ? "In-depth guides for order management, reconciliation, inventory, and warehouse operations — written for marketplace sellers."
              : "Browse by strategic topic to find guides on OMS, reconciliation, WMS, and multichannel inventory."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPIC_CLUSTERS.map((cluster) => (
            <ClusterCard
              key={cluster.id}
              cluster={cluster}
              onSelect={onSelectCategory}
              isActive={activeCategory === cluster.blogCategory}
              compact={isHome}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
