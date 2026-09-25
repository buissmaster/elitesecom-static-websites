import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Calendar,
  Tag,
  User,
  ChevronLeft,
  Lightbulb,
  CheckCircle,
  BookOpen,
  Share2,
} from "lucide-react";
import {
  findBlogBySlug,
  findBlogById,
  allBlogEntries,
  getBlogImageSrcSet,
  type BlogEntry,
} from "../lib/blogSlugs";

interface BlogDetailProps {
  onNavigate?: (page: string) => void;
}

/* ── Category images ── */
const catImages: Record<string, string> = {
  "Seller Problems": "/blog-cat-seller.jpg",
  Marketplaces: "/blog-cat-market.jpg",
  "Shopify & D2C": "/blog-cat-shopify.jpg",
  Warehouse: "/blog-cat-warehouse.jpg",
  Inventory: "/blog-cat-inventory.jpg",
  OMS: "/blog-cat-oms.jpg",
  Returns: "/blog-cat-returns.jpg",
  Growth: "/blog-cat-growth.jpg",
  Comparisons: "/blog-cat-compare.jpg",
  Reconciliation: "/Returns blog/Returns 3.jpeg",
};

const catColors: Record<string, string> = {
  "Seller Problems": "#EA580C",
  Marketplaces: "#2563EB",
  "Shopify & D2C": "#16A34A",
  Warehouse: "#EA580C",
  Inventory: "#16A34A",
  OMS: "#9333EA",
  Returns: "#DB2777",
  Growth: "#F5B800",
  Comparisons: "#0891B2",
  Reconciliation: "#059669",
};

/* ── Unique text sections per article ── */
function getArticleContent(entry: BlogEntry) {
  // console.log(entry);
  const { title, category } = entry;
  /* Category-specific section text */
  const contentLibrary: Record<
    string,
    Record<
      string,
      {
        sections: { title: string; text: string }[];
        proTip: string;
        takeaways: string[];
      }
    >
  > = {
    "Solution for Growing Businesses": {
      "solution-for-growing-businesses": {
        sections: [
          {
            title: "Introduction",
            text: `
              <p>Managing an ecommerce business today is more complex than ever. Sellers are no longer limited to a single marketplace or website. Most growing brands sell across multiple channels such as Amazon, Flipkart, Meesho, Shopify, and other ecommerce platforms to maximize their reach and revenue.</p>

              <p>While multi-channel selling creates more opportunities, it also introduces operational challenges. Orders come from different platforms, inventory needs to be synchronized, returns must be tracked accurately, payments need reconciliation, and warehouse operations must run efficiently.</p>

              <p>When these processes are handled through separate systems, businesses often face delays, errors, overselling issues, and increased operational costs.</p>

              <p>Elitesecom solves these challenges by centralizing ecommerce operations into one unified platform. From order management and inventory control to warehouse operations, reconciliation, and analytics, Elitesecom provides complete visibility and control over your business.</p>
            `,
          },

          {
            title: "Why Centralized Ecommerce Operations Matter",
            text: `
              <p>As order volumes grow, managing operations through multiple dashboards becomes inefficient.</p>

              <h4>Common challenges include:</h4>

              <ul>
                <li>Switching between different seller panels</li>
                <li>Manually updating inventory across channels</li>
                <li>Tracking payments from multiple marketplaces</li>
                <li>Managing returns and refunds separately</li>
                <li>Handling warehouse operations through disconnected systems</li>
                <li>Generating reports from scattered data sources</li>
              </ul>

              <p>These inefficiencies consume valuable time and limit business growth.</p>

              <p>A centralized system eliminates these issues by bringing all critical ecommerce functions into one platform.</p>
            `,
          },

          {
            title: "1. Multi-channel Order Management",
            text: `
              <p>One of the biggest challenges for ecommerce sellers is managing orders from multiple sales channels.</p>

              <p>Elitesecom automatically consolidates orders from Amazon, Flipkart, Meesho, Shopify, and other connected platforms into a single dashboard.</p>

              <p>Instead of logging into multiple seller accounts, businesses can manage every order from one place.</p>

              <h4>Key Benefits</h4>

              <ul>
                <li>Unified order processing</li>
                <li>Real-time order synchronization</li>
                <li>Faster fulfillment workflows</li>
                <li>Improved operational visibility</li>
                <li>Reduced manual effort</li>
              </ul>
            `,
          },

          {
            title: "2. Warehouse Management System (WMS)",
            text: `
              <p>Efficient warehouse operations are critical for delivering orders accurately and on time.</p>

              <p>Elitesecom includes a powerful Warehouse Management System designed to streamline fulfillment processes.</p>

              <h4>The system helps businesses manage:</h4>

              <ul>
                <li>Stock allocation</li>
                <li>Picking operations</li>
                <li>Packing workflows</li>
                <li>Inventory movement</li>
                <li>Dispatch management</li>
              </ul>

              <h4>Key Benefits</h4>

              <ul>
                <li>Faster order fulfillment</li>
                <li>Improved warehouse accuracy</li>
                <li>Reduced picking errors</li>
                <li>Better inventory control</li>
                <li>Enhanced operational efficiency</li>
              </ul>
            `,
          },

          {
            title: "3. Centralized Inventory Management System",
            text: `
              <p>Inventory management becomes increasingly difficult when selling across multiple channels.</p>

              <p>Elitesecom provides a centralized inventory management system that keeps stock synchronized across all connected sales channels.</p>

              <h4>Features</h4>

              <ul>
                <li>Real-time inventory updates</li>
                <li>SKU-level stock tracking</li>
                <li>Multi-channel inventory synchronization</li>
                <li>Multi-warehouse visibility</li>
                <li>Automated stock adjustments</li>
              </ul>

              <h4>Key Benefits</h4>

              <ul>
                <li>Prevent overselling</li>
                <li>Reduce stock mismatches</li>
                <li>Improve inventory accuracy</li>
                <li>Minimize cancellations</li>
                <li>Increase customer satisfaction</li>
              </ul>
            `,
          },

          {
            title: "4. Return Reconciliation",
            text: `
              <p>Returns are an unavoidable part of ecommerce operations.</p>

              <p>Elitesecom simplifies return reconciliation by centralizing return management and tracking.</p>

              <h4>Features</h4>

              <ul>
                <li>Return order tracking</li>
                <li>Return status monitoring</li>
                <li>Inventory updates after returns</li>
                <li>Marketplace return reconciliation</li>
                <li>Refund visibility</li>
              </ul>
            `,
          },

          {
            title: "5. Payment Reconciliation",
            text: `
              <p>Tracking payments from multiple marketplaces can become complicated as order volumes increase.</p>

              <p>Elitesecom automates payment reconciliation by matching settlements with actual order data.</p>

              <h4>Features</h4>

              <ul>
                <li>Settlement tracking</li>
                <li>Order-to-payment matching</li>
                <li>Fee and deduction visibility</li>
                <li>Marketplace payout monitoring</li>
                <li>Financial reconciliation reports</li>
              </ul>
            `,
          },

          {
            title: "6. Advanced Dashboard & Reports",
            text: `
              <p>Elitesecom provides advanced dashboards and reporting tools that bring all business data into one centralized view.</p>

              <h4>Monitor Key Metrics</h4>

              <ul>
                <li>Order performance</li>
                <li>Revenue trends</li>
                <li>Inventory status</li>
                <li>Return rates</li>
                <li>Warehouse efficiency</li>
                <li>Payment reconciliation</li>
                <li>Channel-wise sales performance</li>
              </ul>
            `,
          },

          {
            title: "7. One-Click All Platform Label Download",
            text: `
              <p>Shipping label management can become a repetitive and time-consuming task when handling orders from multiple marketplaces.</p>

              <h4>Features</h4>

              <ul>
                <li>Bulk label generation</li>
                <li>Marketplace label consolidation</li>
                <li>Centralized shipping workflow</li>
                <li>Faster fulfillment processing</li>
              </ul>
            `,
          },

          {
            title: "8. iOS & Android Mobile App",
            text: `
              <p>Elitesecom offers dedicated iOS and Android mobile applications that allow business owners and teams to stay connected wherever they are.</p>

              <h4>Mobile Access To</h4>

              <ul>
                <li>Order management</li>
                <li>Inventory tracking</li>
                <li>Sales performance</li>
                <li>Shipment monitoring</li>
                <li>Business reports</li>
                <li>Operational updates</li>
              </ul>
            `,
          },

          {
            title: "The Elitesecom Advantage",
            text: `
              <ul>
                <li>✓ Multi-channel Order Management</li>
                <li>✓ Warehouse Management System</li>
                <li>✓ Centralized Inventory Management</li>
                <li>✓ Return Reconciliation</li>
                <li>✓ Payment Reconciliation</li>
                <li>✓ Advanced Dashboard & Reports</li>
                <li>✓ One-Click All Platform Label Download</li>
                <li>✓ iOS & Android Mobile App</li>
              </ul>

              <p>Instead of relying on disconnected tools and manual processes, businesses can manage everything through a single integrated platform.</p>
            `,
          },

          {
            title: "Conclusion",
            text: `
              <p>As ecommerce businesses scale, operational complexity grows rapidly.</p>

              <p>Elitesecom centralizes every critical ecommerce function into one powerful platform, helping businesses streamline operations, improve accuracy, increase productivity, and make smarter decisions.</p>

              <p>By bringing your entire ecommerce workflow into one dashboard, Elitesecom helps you focus less on managing systems and more on growing your business.</p>
            `,
          },
        ],
        proTip:
          "Centralizing order management, inventory, warehouse operations, and reconciliation into a single platform significantly improves operational efficiency and reduces manual errors.",

        takeaways: [
          "Manage orders from all channels in one dashboard",
          "Synchronize inventory across marketplaces",
          "Automate payment reconciliation",
          "Track returns from a centralized system",
          "Monitor business performance through advanced dashboards",
          "Improve fulfillment with WMS",
          "Download shipping labels in one click",
          "Manage operations from mobile apps",
        ],
      },
    },
    "Seller Problems": {
      "why-your-inventory-never-matches-marketplace-stock": {
        sections: [
          {
            title: "Key Concepts",
            text: "Inventory mismatches almost always trace back to one of three causes: unsynced multi-channel sales (a unit sold on one platform hasn't yet decremented stock shown on others), unrecorded damage or loss (items removed from sellable stock without a corresponding system update), or manual count errors during receiving or cycle counts. Treating a mismatch as 'the system is wrong' without identifying which of these three caused it means the same gap reappears repeatedly.",
          },
          {
            title: "Best Practices",
            text: "When you find a mismatch, trace it back to one of the three causes before adjusting the count — this tells you whether to fix a sync process, a damage-reporting process, or a counting process, not just the number itself. Run cycle counts on your top-selling SKUs more frequently than your long tail, since mismatches on high-velocity items cause the most damage (oversold orders) the fastest. Record damage and loss at the moment it happens, not in a batch update days later.",
          },
          {
            title: "Implementation",
            text: "Pick your 10 highest-velocity SKUs and do a physical count against system count today — this quickly reveals whether you have a sync problem, a damage-reporting gap, or a counting process issue. Real-time inventory sync across every channel addresses the most common cause (unsynced multi-channel sales) directly, while a simple damage-logging habit closes the second.",
          },
        ],
        proTip: "A mismatch on a slow-moving SKU is an annoyance; the same mismatch on your best-seller is what causes an oversold order and a cancelled customer purchase — prioritize accuracy where it matters most.",
        takeaways: [
          "Mismatches trace back to unsynced sales, unrecorded damage/loss, or counting errors — identify which",
          "Fix the underlying process, not just the number, when you find a gap",
          "Cycle count high-velocity SKUs more often than the long tail",
          "Log damage and loss immediately, not in a delayed batch",
          "Real-time sync addresses the most common cause of mismatches directly",
        ],
      },
      "the-hidden-cost-of-manual-order-processing": {
        sections: [
          {
            title: "Key Concepts",
            text: "The three hidden costs: staff time (hours spent on tasks a system could do automatically, valued at what that time could otherwise generate), error-driven costs (wrong items shipped, missed cancellations, double-fulfilled orders — each with a direct refund or reshipment cost), and opportunity cost (the growth held back because manual processes cap how much order volume a team can actually handle). None of these show up as an obvious expense, which is exactly why they go unaddressed longer than they should.",
          },
          {
            title: "Best Practices",
            text: "Calculate actual hours spent weekly on manual order tasks (confirmation, label generation, inventory checks) and multiply by a reasonable hourly cost — this converts an invisible cost into a real number worth comparing against automation pricing. Track fulfillment errors specifically caused by manual steps (not product issues) for a month to see the real refund/reshipment cost. Ask directly: what order volume would manual processes break at, and how close are you to that ceiling right now.",
          },
          {
            title: "Implementation",
            text: "Run this calculation for your own operation: current weekly manual hours × hourly cost + last month's manual-error-driven refunds = your current hidden cost of manual processing. Compare that monthly total against the cost of an OMS that automates the repetitive parts — for most sellers past a few hundred monthly orders, the automation cost is lower than the hidden cost it replaces.",
          },
        ],
        proTip: "The opportunity cost is usually the largest of the three and the hardest to see — a team capped at handling 500 orders manually isn't just spending time, it's leaving growth on the table that a system could absorb without adding headcount.",
        takeaways: [
          "Manual processing costs show up as staff time, error-driven refunds, and capped growth",
          "Calculate actual hours and error costs to convert a hidden cost into a real number",
          "Compare that number directly against automation cost, not just intuition",
          "Opportunity cost (growth capped by manual capacity) is often the largest, least visible factor",
          "Past a few hundred monthly orders, automation typically costs less than the manual alternative",
        ],
      },
      "how-to-reduce-order-errors-by-90": {
        sections: [
          {
            title: "Key Concepts",
            text: "Order errors cluster around a small number of failure points: picking errors (wrong item or wrong quantity pulled from the shelf), address errors (shipping label doesn't match the current order's delivery address, common when processing orders in batch), and confirmation errors (an order shipped after being cancelled or modified by the customer). Each has a specific, systematic fix rather than requiring a broad 'be more careful' approach.",
          },
          {
            title: "Best Practices",
            text: "Use barcode scanning at the pick stage to verify the correct item and quantity before it's packed, rather than relying on visual checks alone. Auto-generate shipping labels directly from the order record at time of packing, not from a pre-printed batch that can drift out of sync with last-minute order changes. Build a hard stop that prevents shipping an order that's been cancelled or modified after confirmation, rather than relying on staff to notice manually.",
          },
          {
            title: "Implementation",
            text: "Track your errors for two weeks and categorize each one as a picking, address, or confirmation error — this tells you which of the three fixes to prioritize first, since most sellers find one category dominates. Barcode-based pick verification and automated label generation directly address the two most common categories, typically without requiring a warehouse redesign.",
          },
        ],
        proTip: "'Reduce errors by 90%' isn't about a single big fix — it's about closing the two or three specific gaps that cause the vast majority of errors, which are usually identifiable within a couple weeks of tracking.",
        takeaways: [
          "Picking, address, and confirmation errors account for most fulfillment mistakes",
          "Barcode scanning at pick verifies correct item and quantity before packing",
          "Generate labels from the live order record, not a pre-printed batch",
          "Build a hard stop against shipping cancelled or modified orders",
          "Track and categorize errors for two weeks to identify which fix to prioritize first",
        ],
      },
      "why-growing-sellers-struggle-with-operations": {
        sections: [
          {
            title: "Key Concepts",
            text: "Growth adds complexity along several dimensions at once, not just order count: more SKUs (more inventory to track accurately), more channels (more systems to keep synced), and more team members (more people who need consistent processes, not just founder intuition). A process that worked fine at low complexity on all three dimensions can break down even at similar order volume once any one dimension multiplies — which is why 'we're struggling even though revenue only grew moderately' is a common, valid complaint.",
          },
          {
            title: "Best Practices",
            text: "Track complexity, not just revenue or order count, as you grow — specifically monitor SKU count, channel count, and team size as separate signals of operational risk. Standardize processes (documented, repeatable steps) before adding the next dimension of complexity, rather than adding channels or SKUs onto an already-strained ad hoc process. Revisit your tooling specifically when any one of these three dimensions doubles, even if overall revenue growth feels moderate.",
          },
          {
            title: "Implementation",
            text: "Compare your SKU count, channel count, and team size today against a year ago — often one of these three has grown disproportionately faster than the others and is the actual source of current strain, even if it's not the one getting blamed. Addressing the specific dimension causing strain (often inventory tooling for SKU growth, or an OMS for channel growth) is more effective than a broad 'we need to get more organized' response.",
          },
        ],
        proTip: "When a growing seller says operations 'just feel harder now,' it's rarely one big problem — it's usually complexity that grew along a dimension nobody was specifically tracking.",
        takeaways: [
          "Complexity (SKUs, channels, team size), not just revenue, drives operational strain",
          "Track each dimension separately rather than assuming growth is uniform",
          "Standardize processes before adding the next layer of complexity",
          "Revisit tooling when any single dimension doubles, even if revenue growth is moderate",
          "Identify which specific dimension is actually causing current strain before responding broadly",
        ],
      },
      "operational-bottlenecks-that-kill-ecommerce-growth": {
        sections: [
          {
            title: "Key Concepts",
            text: "The most common growth-capping bottlenecks: fulfillment capacity (a warehouse or team that physically can't process more orders per day without breaking), inventory visibility (inaccurate stock counts that force conservative selling to avoid overselling, capping potential revenue), and decision latency (how long it takes to reorder stock, approve a return, or resolve an order issue — slow decisions create backlogs even when execution itself is fast). Identifying which is the actual constraint matters more than addressing all three equally.",
          },
          {
            title: "Best Practices",
            text: "Identify your true bottleneck by asking what would happen if demand doubled tomorrow — the process that would break first is your real constraint, not necessarily the one that feels most stressful day to day. Address fulfillment capacity through process efficiency (better picking routes, batch processing) before assuming more headcount is the only answer. Reduce decision latency by pre-setting rules for common decisions (reorder points, return approval thresholds) so they don't require a person's judgment every single time.",
          },
          {
            title: "Implementation",
            text: "Run the 'demand doubled tomorrow' thought experiment honestly against your fulfillment capacity, inventory visibility, and decision-making speed — this usually surfaces one clear answer rather than an even split across all three. Address that specific constraint first; fixing a non-bottleneck process, however inefficient it feels, won't actually increase your growth ceiling.",
          },
        ],
        proTip: "Growth-capping bottlenecks are rarely the process that feels the most chaotic — they're the process that would break first under more volume, which isn't always the same thing.",
        takeaways: [
          "Fulfillment capacity, inventory visibility, and decision latency are the most common growth-capping bottlenecks",
          "Identify the true constraint by asking what breaks first if demand doubled",
          "Address fulfillment capacity through process efficiency before assuming headcount is the answer",
          "Pre-set rules for common decisions to reduce latency without needing manual judgment each time",
          "Fix the actual bottleneck, not just the process that feels most stressful day to day",
        ],
      },
      "why-sellers-lose-orders-during-sale-events": {
        sections: [
          {
            title: "The Sale Event Challenge",
            text: "Sale events like Big Billion Days and Prime Day bring massive traffic spikes. Without proper preparation, sellers lose 15-30% of potential orders due to inventory sync delays, website crashes, and manual processing bottlenecks.",
          },
          {
            title: "Common Order Loss Reasons",
            text: "Orders are lost primarily through stockouts, listing errors, delayed order acceptance, and payment gateway failures. Each of these has preventable root causes that can be addressed with proper planning and technology.",
          },
          {
            title: "Pre-Sale Preparation",
            text: "Successful sellers begin preparation 4-6 weeks before major sales. This includes inventory buffer stocking, system stress testing, staff training, and setting up automated order processing workflows.",
          },
        ],
        proTip:
          "Sellers who pre-buffer inventory by 40% before major sales see 85% fewer stockouts during peak periods.",
        takeaways: [
          "Pre-buffer inventory by 40% before major sales",
          "Test all systems under simulated peak load",
          "Set up automated order acceptance",
          "Monitor stock levels in real-time",
          "Have backup payment gateways ready",
        ],
      },
      "how-to-handle-1000-orders-per-day-without-hiring-more-staff": {
        sections: [
          {
            title: "The Scaling Problem",
            text: "Many sellers believe handling 1000+ daily orders requires a proportionally larger team. However, leading sellers process 5x more orders per employee by leveraging automation, batch processing, and intelligent workflow design.",
          },
          {
            title: "Automation-First Approach",
            text: "Start by automating repetitive tasks: order import, label generation, inventory updates, and customer notifications. Each automated task frees up 2-3 hours of daily manual work.",
          },
          {
            title: "Workflow Optimization",
            text: "Organize warehouse operations using zone picking, batch processing, and smart packing stations. Combine pick lists by zone to reduce walking time by up to 60%.",
          },
        ],
        proTip:
          "One trained employee with proper automation can process 300+ orders per day compared to 80-100 with manual methods.",
        takeaways: [
          "Automate order import and label generation",
          "Use zone picking to reduce walking time",
          "Implement batch processing for similar orders",
          "Set up auto-rules for common scenarios",
          "Measure and optimize daily processing metrics",
        ],
      },
      "common-reasons-for-order-delays-and-how-to-fix-them": {
        sections: [
          {
            title: "Key Concepts",
            text: "The most common delay causes, in order of frequency: order confirmation lag (an order sits unconfirmed longer than the marketplace SLA allows), inventory mismatch (stock shown as available isn't actually on the shelf), label generation bottlenecks (manual label creation during high-volume periods), and courier handoff delays (orders ready but not picked up on schedule). Each of these is individually small but compounds — a 2-hour confirmation delay plus a mispicked item plus a missed courier pickup window easily becomes a 2-day delay.",
          },
          {
            title: "Best Practices",
            text: "Confirm orders on a fixed, frequent schedule (ideally automated) rather than reactively, since confirmation lag is usually the first domino. Cross-check available stock against physical stock regularly, not just when a mismatch causes a problem. Batch label generation during predictable high-volume windows (post-sale-event, post-marketing-push) rather than processing labels one at a time as orders trickle in.",
          },
          {
            title: "Implementation",
            text: "Track your last 20 delayed orders and note where in the process each one actually broke down — confirmation, inventory, labeling, or courier handoff. This usually reveals one specific stage causing the majority of delays, rather than delays being evenly spread across all four causes. From there, automating that specific stage (most commonly order confirmation or label generation) removes the biggest single source of delay.",
          },
        ],
        proTip:
          "Delays are rarely one big failure — they're usually 3-4 small gaps stacking together. Fixing the first gap in the chain (usually order confirmation) often prevents the rest from compounding.",
        takeaways: [
          "Order confirmation lag is usually the first and most common delay cause",
          "Cross-check available vs. physical stock regularly, not just after a mismatch occurs",
          "Batch label generation during predictable high-volume windows",
          "Track where delays actually originate before assuming the cause",
          "Automating the earliest-stage bottleneck often prevents delays from compounding further",
        ],
      },
    },
    Inventory: {
      "inventory-forecasting-for-ecommerce": {
        sections: [
          {
            title: "What is Inventory Forecasting",
            text: "Inventory forecasting is the process of predicting future inventory needs based on historical sales data, market trends, and seasonal patterns. Accurate forecasting helps businesses maintain optimal stock levels, reducing both stockouts and excess inventory.",
          },
          {
            title: "Why It Matters",
            text: "Poor inventory forecasting costs ecommerce businesses billions annually. Overstocking ties up capital and increases storage costs, while stockouts lead to lost sales and dissatisfied customers.",
          },
          {
            title: "Best Practices",
            text: "Start by analyzing at least 12 months of sales data across all channels. Factor in marketplace-specific events like Amazon Prime Day and Flipkart Big Billion Days. Use safety stock formulas to buffer against demand variability.",
          },
        ],
        proTip:
          "Brands using real-time inventory synchronization can reduce overselling risks by up to 95% while improving stock availability across all channels simultaneously.",
        takeaways: [
          "Analyze 12+ months of sales data across all channels",
          "Factor in marketplace-specific events and seasonality",
          "Use safety stock formulas to buffer demand variability",
          "Integrate forecasting with your OMS for real-time adjustments",
          "Review and adjust forecasts based on actual performance monthly",
        ],
      },
      "safety-stock-what-it-is-and-why-it-matters": {
        sections: [
          {
            title: "Understanding Safety Stock",
            text: "Safety stock is extra inventory kept beyond expected demand to protect against uncertainty. It acts as a buffer against demand fluctuations, supplier delays, and forecast errors.",
          },
          {
            title: "Calculating Safety Stock",
            text: "The standard formula considers average daily sales, maximum daily sales, lead time, and maximum lead time. More sophisticated approaches use statistical methods based on desired service levels.",
          },
          {
            title: "When to Adjust",
            text: "Safety stock levels should be reviewed monthly and adjusted based on actual demand patterns, supplier reliability changes, and seasonal factors. Over time, better data leads to lower safety stock requirements.",
          },
        ],
        proTip:
          "Most ecommerce businesses maintain safety stock equal to 15-25% of average monthly sales for their top 20% of products.",
        takeaways: [
          "Calculate safety stock based on demand variability and lead time",
          "Review safety stock levels monthly",
          "Focus safety stock investment on top-selling products",
          "Track service level metrics to validate safety stock levels",
          "Reduce safety stock as forecast accuracy improves",
        ],
      },
    },
    OMS: {
      "advanced-oms-features-every-growing-business-needs": {
        sections: [
          {
            title: "Essential OMS Features",
            text: "A modern OMS must handle multi-channel order aggregation, intelligent order routing, real-time inventory sync, automated fulfillment rules, and comprehensive analytics. These features form the backbone of scalable ecommerce operations.",
          },
          {
            title: "Intelligent Routing",
            text: "Smart order routing considers inventory availability, warehouse proximity, shipping costs, and carrier capacity to automatically assign each order to the optimal fulfillment location.",
          },
          {
            title: "Automation Engine",
            text: "Rule-based automation handles routine decisions like order approval, carrier selection, and customer communication. This reduces manual intervention by 80% while improving accuracy.",
          },
        ],
        proTip:
          "Sellers who fully utilize OMS automation report 3x faster order processing and 50% fewer errors.",
        takeaways: [
          "Implement multi-channel order aggregation",
          "Use intelligent order routing",
          "Set up rule-based automation",
          "Enable real-time inventory synchronization",
          "Leverage analytics for continuous improvement",
        ],
      },
      "ai-in-order-management-systems": {
        sections: [
          {
            title: "AI in Modern OMS",
            text: "Artificial intelligence is transforming order management through demand forecasting, fraud detection, intelligent routing, and predictive analytics. AI-powered systems learn from patterns to make better decisions over time.",
          },
          {
            title: "Key AI Applications",
            text: "Machine learning models predict demand spikes, identify fraudulent orders, optimize shipping routes, and personalize customer communication. Natural language processing enables conversational interfaces for order queries.",
          },
          {
            title: "Implementation Strategy",
            text: "Start with one AI use case that addresses your biggest pain point. Most sellers begin with demand forecasting or fraud detection, then expand to other applications as they see results.",
          },
        ],
        proTip:
          "AI-powered demand forecasting can improve accuracy by 30-40% compared to traditional statistical methods.",
        takeaways: [
          "Identify your biggest operational pain point",
          "Start with one AI use case",
          "Ensure data quality before implementing AI",
          "Measure ROI before expanding to other use cases",
          "Choose cloud-based AI for easier integration",
        ],
      },
    },
    Warehouse: {
      "what-is-warehouse-management": {
        sections: [
          {
            title: "Warehouse Management Basics",
            text: "Warehouse management encompasses the processes and systems used to control and administer warehouse operations from the time inventory enters until it leaves. It includes receiving, storage, picking, packing, and shipping.",
          },
          {
            title: "Key Components",
            text: "A complete warehouse management system covers inventory tracking, space optimization, labor management, equipment utilization, and performance measurement. Each component must work together for efficient operations.",
          },
          {
            title: "Technology Role",
            text: "Modern warehouse management relies on barcode scanning, mobile devices, WMS software, and automation equipment. Technology transforms warehouses from cost centers into competitive advantages.",
          },
        ],
        proTip:
          "Companies that implement a formal WMS see an average 25% improvement in warehouse productivity within the first year.",
        takeaways: [
          "Map your complete warehouse workflow",
          "Implement barcode scanning for accuracy",
          "Use WMS software for visibility and control",
          "Define KPIs for continuous improvement",
          "Plan for automation as volumes grow",
        ],
      },
      "oms-vs-wms-key-differences": {
        sections: [
          {
            title: "What is WMS",
            text: "A Warehouse Management System (WMS) focuses on optimizing warehouse operations including receiving, put-away, picking, packing, and shipping. It manages bin locations and tracks inventory movements within the warehouse.",
          },
          {
            title: "What is OMS",
            text: "An Order Management System handles the broader order lifecycle across all sales channels. It decides which warehouse should fulfill an order and coordinates inventory across locations.",
          },
          {
            title: "How They Work Together",
            text: "When an order arrives, the OMS determines the optimal warehouse. It then sends the order to the WMS, which handles physical picking, packing, and shipping. The WMS updates the OMS with fulfillment status.",
          },
        ],
        proTip:
          "Integrated WMS and OMS systems reduce order processing time by up to 60% and improve inventory accuracy to 99.9%.",
        takeaways: [
          "WMS optimizes physical warehouse operations",
          "OMS orchestrates orders across channels and warehouses",
          "Integration enables intelligent order routing",
          "Combined visibility improves customer service",
          "Start with OMS and add WMS as warehouse operations grow",
        ],
      },
    },
    Returns: {
      "how-to-reduce-product-returns": {
        sections: [
          {
            title: "Understanding Return Reasons",
            text: "The first step in reducing returns is understanding why customers return products. Common reasons include wrong size (25%), product not as described (22%), damaged in transit (18%), and changed mind (15%).",
          },
          {
            title: "Product Page Optimization",
            text: "Detailed product descriptions, accurate sizing guides, and high-quality images from multiple angles can reduce size-related returns by up to 40%. Include customer reviews with photos.",
          },
          {
            title: "Quality Control",
            text: "Implement thorough quality checks before products leave your warehouse. Partner with reliable suppliers and conduct regular quality audits.",
          },
        ],
        proTip:
          "Companies that implement comprehensive return prevention strategies see average return rate reductions of 35%.",
        takeaways: [
          "Analyze return data to identify primary causes",
          "Optimize product pages with detailed descriptions",
          "Implement thorough quality control",
          "Invest in durable packaging",
          "Include clear sizing guides and fit information",
        ],
      },
    },
    Reconciliation: {
      "amazon-payment-reconciliation-guide-for-sellers": {
        sections: [
          {
            title: "Why Amazon Payment Reconciliation Matters",
            text: "Amazon settlements include order payments, referral fees, FBA charges, refunds, and adjustments spread across multiple reports. Without automated payment reconciliation, sellers lose 2–5% of GMV to unmatched deductions, duplicate fees, and delayed payout discrepancies.",
          },
          {
            title: "Key Amazon Reports to Reconcile",
            text: "Reconcile Order Reports, Settlement Reports, and Remittance Details against your OMS order ledger. Match each order ID to its payout line, flag short payments, and track unsettled orders still pending in Amazon's payment cycle.",
          },
          {
            title: "Automating Reconciliation with EliteOMS",
            text: "EliteOMS imports Amazon settlement data, matches it to fulfilled orders automatically, and highlights commission overcharges, missing credits, and refund mismatches. Finance teams save 15–20 hours per month while recovering lost revenue.",
          },
        ],
        proTip:
          "Run payment reconciliation weekly during sale events — Amazon fee structures change dynamically and manual spreadsheets cannot keep up at peak volume.",
        takeaways: [
          "Match settlements to order IDs, not just totals",
          "Track FBA fees and referral commissions separately",
          "Automate reconciliation before month-end close",
          "Investigate unsettled orders older than 14 days",
          "Use OMS reconciliation to recover 2–5% GMV",
        ],
      },
      "flipkart-settlement-and-reconciliation-explained": {
        sections: [
          {
            title: "How Flipkart Settlements Work",
            text: "Flipkart pays sellers on a settlement cycle after deducting commissions, shipping charges, return refunds, and penalties. Each settlement file contains hundreds of line items that must be matched against your order management system.",
          },
          {
            title: "Common Flipkart Reconciliation Issues",
            text: "Sellers frequently face commission calculation errors, missing return credits, shipping fee overcharges, and penalty deductions without clear order mapping. Manual Excel reconciliation breaks down above 500 orders per month.",
          },
          {
            title: "Flipkart Reconciliation with EliteOMS",
            text: "EliteOMS syncs Flipkart orders in real time and auto-matches settlement payouts to order records. Discrepancies are flagged instantly so your team can raise claims before Flipkart's dispute window closes.",
          },
        ],
        proTip:
          "Always reconcile Flipkart returns separately — return refunds often appear in a different settlement cycle than the original order payment.",
        takeaways: [
          "Understand Flipkart's settlement cycle timing",
          "Map every deduction to a specific order ID",
          "Separate payment reconciliation from return reconciliation",
          "Automate before scaling past 1,000 orders/month",
          "Recover lost revenue through systematic claim tracking",
        ],
      },
      "meesho-payout-reconciliation-guide": {
        sections: [
          {
            title: "Meesho Payout Structure",
            text: "Meesho payouts combine order values minus platform fees, shipping adjustments, and return deductions. Reseller and supplier models have different fee structures, making manual reconciliation especially complex for high-volume sellers.",
          },
          {
            title: "Tracking Unsettled Meesho Orders",
            text: "Unsettled orders — delivered but not yet paid — are a major blind spot. EliteOMS tracks order status against payout status and alerts you when orders remain unsettled beyond expected payment windows.",
          },
          {
            title: "Automated Meesho Reconciliation",
            text: "Connect Meesho to EliteOMS for automatic payout matching, fee validation, and return credit tracking. Reduce finance team workload while improving payout accuracy across your Meesho catalog.",
          },
        ],
        proTip:
          "Meesho return rates can spike during festive sales — run return reconciliation daily during Meesho sale events.",
        takeaways: [
          "Track unsettled orders separately from settled payouts",
          "Validate platform fees against Meesho's fee schedule",
          "Reconcile returns in the same cycle when possible",
          "Use OMS alerts for overdue payouts",
          "Scale Meesho operations without adding finance headcount",
        ],
      },
      "return-reconciliation-vs-payment-reconciliation": {
        sections: [
          {
            title: "What is Payment Reconciliation?",
            text: "Payment reconciliation matches marketplace payouts and settlements to your fulfilled orders. It answers: 'Did I receive the correct amount for every order I shipped?' This includes verifying commissions, shipping fees, and net payout amounts.",
          },
          {
            title: "What is Return Reconciliation?",
            text: "Return reconciliation tracks returned orders, refund amounts, restocking status, and return-related fee reversals. It answers: 'Was I correctly credited for every return, and is my inventory accurately updated?'",
          },
          {
            title: "Why You Need Both",
            text: "Payment and return reconciliation are interconnected but distinct processes. A returned order affects both your payout (payment reconciliation) and your inventory (return reconciliation). EliteOMS handles both in one platform, eliminating spreadsheet chaos.",
          },
        ],
        proTip:
          "Sellers who only reconcile payments but ignore returns typically discover 1–3% inventory and revenue gaps during annual audits.",
        takeaways: [
          "Payment reconciliation = payout vs orders shipped",
          "Return reconciliation = refunds vs returns received",
          "Both are required for accurate P&L",
          "Automate both processes in your OMS",
          "Run reconciliation weekly minimum, daily during sales",
        ],
      },
      "gst-reconciliation-for-marketplace-sellers": {
        sections: [
          {
            title: "GST Challenges for Marketplace Sellers",
            text: "Marketplace sellers must reconcile GST on every transaction including TCS (Tax Collected at Source), TDS deductions, interstate vs intrastate supplies, and credit notes for returns. Each marketplace reports differently, creating compliance complexity.",
          },
          {
            title: "TCS and Invoice Matching",
            text: "Amazon, Flipkart, and other marketplaces deduct TCS and issue tax invoices. Your GST reconciliation must match marketplace tax reports with your GSTR-1 filings and ensure credit notes for returns are properly accounted.",
          },
          {
            title: "GST Reconciliation with EliteOMS",
            text: "EliteOMS generates reconciliation reports aligned with marketplace tax data, helping finance teams validate TCS credits, match invoices to orders, and prepare accurate GST filings without manual data extraction.",
          },
        ],
        proTip:
          "Reconcile GST monthly but validate TCS credits quarterly — mismatches compound quickly across multiple marketplaces.",
        takeaways: [
          "Track TCS separately for each marketplace",
          "Match credit notes to return reconciliation data",
          "Automate invoice generation from OMS order data",
          "Validate interstate vs intrastate tax treatment",
          "Use OMS reports for GSTR-1 preparation",
        ],
      },
    },
    Growth: {
      "how-to-scale-from-100-orders-to-10000-orders-monthly": {
        sections: [
          {
            title: "The Scaling Roadmap",
            text: "Scaling from 100 to 10,000 orders per month requires systematic improvements across inventory management, order processing, warehouse operations, and team structure. Each 10x milestone demands different capabilities.",
          },
          {
            title: "Phase-Based Approach",
            text: "Phase 1 (100-500): Fix basics with inventory sync and automation. Phase 2 (500-2000): Add warehouse systems and team structure. Phase 3 (2000-10000): Full automation with AI-powered optimization.",
          },
          {
            title: "Technology Investment",
            text: "At each phase, different technology investments become critical. Early investments in OMS and inventory sync pay dividends as volume grows.",
          },
        ],
        proTip:
          "Sellers who invest in OMS before reaching 500 daily orders scale 2x faster than those who wait until they hit operational crises.",
        takeaways: [
          "Invest in OMS before hitting 500 daily orders",
          "Build team structure for each growth phase",
          "Automate inventory sync from day one",
          "Design processes for 10x current volume",
          "Measure and optimize at each milestone",
        ],
      },
    },
    Comparisons: {
      "oms-vs-erp-complete-comparison-guide": {
        sections: [
          {
            title: "What is an OMS",
            text: "An Order Management System (OMS) is a specialized platform designed to handle the complete order lifecycle from receipt to delivery. It manages order routing, inventory allocation, and fulfillment coordination across multiple sales channels.",
          },
          {
            title: "What is an ERP",
            text: "An Enterprise Resource Planning (ERP) system is a comprehensive business management platform that integrates finance, HR, manufacturing, supply chain, and other core functions.",
          },
          {
            title: "Key Differences",
            text: "OMS focuses specifically on order orchestration with deep marketplace integrations, real-time inventory sync, and flexible fulfillment rules. ERP provides broad business management but often lacks specialized multi-channel capabilities.",
          },
        ],
        proTip:
          "The most successful ecommerce brands use a best-of-breed approach, combining a specialized OMS for order management with an ERP for financial and operational management.",
        takeaways: [
          "OMS specializes in multi-channel order orchestration",
          "ERP provides broad business management",
          "Modern OMS offers deeper marketplace integrations",
          "Many businesses benefit from using both systems",
          "Choose based on your primary operational challenges",
        ],
      },
    },
    Marketplaces: {
      "flipkart-order-management-best-practices": {
        sections: [
          {
            title: "Key Concepts",
            text: "Flipkart tracks two metrics closely tied to account health: Order Defect Rate (cancellations, returns, and negative feedback combined) and Late Shipment Rate (orders dispatched after the promised date). Both are visible in Seller Hub but often go unmonitored until they trigger a penalty or listing restriction. Unlike Amazon's Buy Box mechanics, Flipkart's ranking and visibility are tied more directly to these health metrics, making them worth tracking proactively rather than reactively.",
          },
          {
            title: "Best Practices",
            text: "Check your Order Defect Rate and Late Shipment Rate in Seller Hub weekly, not just when a penalty notice arrives. Confirm and dispatch orders as early as possible within your SLA window — Flipkart's late shipment tracking is strict and doesn't offer much grace. Set inventory buffers on fast-moving SKUs to avoid the cancellations that come from confirming an order you can't actually fulfill.",
          },
          {
            title: "Implementation",
            text: "Pull your last 30 days of Order Defect Rate and Late Shipment Rate from Seller Hub and identify which orders specifically drove each metric up — this usually reveals one or two recurring causes (a specific SKU, a specific fulfillment delay pattern) rather than a broad problem. An OMS connected to Flipkart's Seller API can auto-confirm orders within SLA and flag inventory risk before a sale is even confirmed, addressing both metrics at the source.",
          },
        ],
        proTip: "A single week of elevated Late Shipment Rate can affect your account health score for months — catching and fixing the root cause quickly matters more than the size of the dip itself.",
        takeaways: [
          "Monitor Order Defect Rate and Late Shipment Rate weekly, not reactively",
          "Confirm and dispatch orders as early as possible within the SLA window",
          "Set inventory buffers on fast movers to prevent fulfillment-driven cancellations",
          "Identify the specific recurring cause behind metric dips rather than assuming a broad issue",
          "Address account health metrics quickly — their impact compounds over time",
        ],
      },
      "how-top-marketplace-sellers-automate-operations": {
        sections: [
          {
            title: "Key Concepts",
            text: "Across Amazon, Flipkart, and Meesho, the operational tasks that scale worst manually are the same everywhere: confirming orders within SLA, generating shipping labels, and keeping stock counts accurate across every platform. Sellers who automate these three specifically free up the most time, since these are also the tasks most likely to cause customer-facing problems (missed SLAs, wrong labels, overselling) when done manually at volume.",
          },
          {
            title: "Best Practices",
            text: "Automate order confirmation first — it's usually the simplest to set up and has the most direct impact on SLA compliance. Batch label generation on a schedule rather than one order at a time. Set inventory sync to real-time (not batch) for your highest-velocity SKUs specifically, since that's where manual tracking fails first.",
          },
          {
            title: "Implementation",
            text: "Track how much manual time your team spends weekly on these three tasks specifically — most sellers underestimate it until they measure. From there, an OMS that automates order confirmation, label generation, and inventory sync across every connected marketplace removes the majority of that manual load in one implementation.",
          },
        ],
        proTip:
          "Sellers who automate order confirmation alone typically see the fastest ROI — it's the single task most likely to cause an SLA miss if handled manually during a busy period.",
        takeaways: [
          "Automate order confirmation, label generation, and inventory sync first — these cause the most manual strain",
          "Real-time sync matters most for your highest-velocity SKUs",
          "Measure actual time spent on these tasks before assuming automation isn't worth it",
          "Batch label generation rather than processing one at a time",
          "Order confirmation automation usually delivers the fastest ROI",
        ],
      },
      "multi-marketplace-selling-challenges-and-solutions": {
        sections: [
          {
            title: "Key Concepts",
            text: "The three compounding risks of multi-marketplace selling: inventory desync (stock shown as available on one platform when it's already sold on another), SLA conflicts (each marketplace has different confirmation windows, making a single manual workflow impossible to keep up with all of them), and fragmented reconciliation (payment reports from Amazon, Flipkart, and Meesho each use different formats, making manual matching error-prone as the number of platforms grows).",
          },
          {
            title: "Best Practices",
            text: "Treat inventory as one pool synced across every platform, not separate counts per marketplace. Build your order-confirmation workflow around the tightest SLA window among your platforms, so no single marketplace gets neglected. Standardize how you track reconciliation internally, even if each marketplace's raw report format differs, so your team works from one consistent internal view.",
          },
          {
            title: "Implementation",
            text: "Start by listing your current SLA windows and payment cycles for each marketplace you sell on side by side — this reveals exactly where a single manual process is most likely to fail. A unified OMS handles inventory sync, order routing by platform-specific SLA, and reconciliation across all connected marketplaces from one system, removing the need to juggle each platform's quirks manually.",
          },
        ],
        proTip:
          "The more marketplaces you add, the more a single missed sync or SLA becomes inevitable with manual processes — multi-marketplace selling is exactly where automation stops being optional.",
        takeaways: [
          "Inventory desync, SLA conflicts, and fragmented reconciliation compound as you add marketplaces",
          "Treat inventory as one synced pool, not separate per-platform counts",
          "Build workflows around your tightest SLA window, not an average",
          "Standardize reconciliation tracking internally despite different report formats per platform",
          "Automation becomes necessary, not optional, past 2-3 marketplaces",
        ],
      },
      "amazon-inventory-management-guide-for-sellers": {
        sections: [
          {
            title: "Key Concepts",
            text: "Amazon's algorithm tracks stockout frequency, not just current availability, when deciding Buy Box eligibility. A seller who oscillates between in-stock and out-of-stock repeatedly signals unreliability to Amazon's system, even if each individual stockout is brief. Combined with FBA's own storage and replenishment rules, this means inventory management on Amazon is less about \"how much stock do I have\" and more about \"how consistently do I keep it available.\"",
          },
          {
            title: "Best Practices",
            text: "Set reorder points based on your actual lead time plus a buffer, not a flat \"reorder at 20 units\" rule — a SKU with a 3-day supplier lead time needs a very different buffer than one with a 3-week lead time. For FBA sellers, monitor your Inventory Performance Index (IPI) score specifically, since a low IPI can trigger storage limits that create stockouts you didn't see coming. Separate your fast-moving SKUs from slow movers and review them on different cadences — daily for top sellers, weekly for the long tail.",
          },
          {
            title: "Implementation",
            text: "Start by pulling your last 90 days of Amazon sales velocity per SKU and comparing it against your current reorder points — most sellers find their reorder points were set once and never revisited as sales patterns changed. From there, real-time inventory sync connected directly to Seller Central prevents the two failure modes that hurt Buy Box eligibility most: unexpected stockouts and overselling from unsynced multi-channel stock.",
          },
        ],
        proTip:
          "A single well-timed stockout during a high-velocity period can cost more in lost Buy Box ranking than weeks of steady sales can rebuild — treat inventory buffers on your top 20% of SKUs as non-negotiable.",
        takeaways: [
          "Set reorder points based on actual lead time, not a flat number across all SKUs",
          "Monitor your Inventory Performance Index (IPI) score, not just stock levels",
          "Review fast-moving SKUs daily, slow movers weekly",
          "Sync inventory in real time if selling on Amazon alongside other channels",
          "Treat stockouts on top-selling SKUs as a Buy Box risk, not just a sales miss",
        ],
      },
      "how-to-manage-multiple-marketplaces-from-one-dashboard": {
        sections: [
          {
            title: "Key Concepts",
            text: "Not every marketplace task benefits equally from consolidation. Order confirmation and inventory sync are the two functions where manual, panel-by-panel work causes real damage (missed SLAs, overselling). Listing optimization and customer service, by contrast, often still need platform-specific attention, since Amazon's search algorithm and Meesho's catalog rules work differently. A unified dashboard should consolidate the first category fully and support — not replace — platform-specific work on the second.",
          },
          {
            title: "Best Practices",
            text: "Route every order through one queue regardless of source marketplace, so your team works one list, not four. Set a single inventory threshold per SKU that triggers reorder across every channel simultaneously, rather than tracking stock separately per platform. Keep a lightweight platform-specific checklist for listing quality (each marketplace has different image, title, and attribute rules) even after consolidating operations.",
          },
          {
            title: "Implementation",
            text: "Audit how many hours your team currently spends switching between marketplace panels in a typical week — this number is usually higher than expected once tracked honestly. A unified OMS connects to each marketplace's API, pulling every order into one queue and pushing inventory updates back out to all platforms simultaneously, which is the part that actually eliminates the manual switching cost.",
          },
        ],
        proTip:
          "Consolidation saves the most time on inventory and order syncing — don't expect it to eliminate platform-specific listing work, since Amazon, Flipkart, and Meesho each still require their own catalog compliance.",
        takeaways: [
          "Consolidate order queues and inventory sync first — these cause the most operational damage when manual",
          "Keep platform-specific attention on listings, since catalog rules differ per marketplace",
          "Track how many hours are actually spent switching panels before assuming consolidation is worth it",
          "Set one inventory threshold per SKU that triggers across all channels at once",
          "A unified OMS should support platform-specific work, not eliminate it",
        ],
      },
      "marketplace-inventory-sync-explained": {
        sections: [
          {
            title: "Key Concepts",
            text: "There are two common approaches to multi-marketplace inventory: batch sync (updates pushed on a schedule, e.g. every 30-60 minutes) and true real-time sync (updates pushed the instant a sale is confirmed). Batch sync feels \"good enough\" until a high-velocity SKU sells out on one platform during the gap between syncs — at which point it's still shown as available on every other platform, creating an oversold order that has to be manually cancelled.",
          },
          {
            title: "Best Practices",
            text: "For your top 10-20% of SKUs by sales velocity, insist on true real-time sync — the gap window is where overselling actually happens, and it happens disproportionately on your best sellers. For slower-moving SKUs, batch sync every 15-30 minutes is usually sufficient and less resource-intensive. Always maintain a small safety buffer (even 1-2 units) on your fastest SKUs specifically to absorb any sync delay, however small.",
          },
          {
            title: "Implementation",
            text: "Check whether your current setup (if any) syncs inventory in real time or on a batch schedule — many sellers assume real-time sync when they're actually on a 30-60 minute batch cycle. An OMS connected directly to each marketplace's API via webhooks (not scheduled polling) achieves true real-time sync, decrementing stock across every connected platform the moment an order is confirmed anywhere.",
          },
        ],
        proTip:
          "Overselling almost always happens on your fastest-moving SKUs during high-traffic periods — that's exactly when sync delays matter most and when the cost of a cancelled order (to your seller rating) is highest.",
        takeaways: [
          "Batch sync creates a real gap window where overselling can happen",
          "Prioritize true real-time sync for your top 10-20% of SKUs by velocity",
          "Keep a small safety buffer on fastest-moving SKUs to absorb sync delays",
          "Check whether your current sync is truly real-time or just frequent batch updates",
          "Webhook-based sync (not scheduled polling) is what achieves genuine real-time updates",
        ],
      },
      "common-marketplace-selling-mistakes": {
        sections: [
          {
            title: "Key Concepts",
            text: "The most damaging mistakes aren't visible immediately — they're the ones that erode margin slowly. Underpricing to compete on visibility without accounting for marketplace commission and shipping costs is the most common; a seller can be \"winning\" on order volume while actually losing money per unit. The second is treating each marketplace's return policy as identical to their own, when Meesho, Flipkart, and Amazon each have different return windows and cost-absorption rules. The third is failing to track payment reconciliation from day one, which means discrepancies pile up before a seller even knows to look for them.",
          },
          {
            title: "Best Practices",
            text: "Calculate true landed cost per order (product cost + marketplace commission + shipping + expected return rate) before setting prices, not after. Read each marketplace's specific return and RTO policy rather than assuming they're the same — Meesho's return handling, for example, differs meaningfully from Flipkart's. Start reconciling payments against orders from your very first sale, even manually, so discrepancies are caught in week one, not month three.",
          },
          {
            title: "Implementation",
            text: "Pull your last 30 days of orders across all marketplaces you sell on and calculate actual margin per order after all fees and returns — many first-time sellers are surprised by what this reveals. From there, an OMS with built-in reconciliation flags mismatches automatically as they happen, rather than requiring a manual audit after the fact.",
          },
        ],
        proTip:
          "The sellers who avoid these mistakes aren't the ones with better products — they're the ones who checked their true per-order margin before scaling volume, not after.",
        takeaways: [
          "Calculate true landed cost (including commission, shipping, expected returns) before pricing",
          "Learn each marketplace's specific return/RTO policy — they are not interchangeable",
          "Start payment reconciliation from your first sale, not after volume grows",
          "Check actual margin per order regularly, not just total revenue",
          "Catch discrepancies early — they compound and become harder to trace over time",
        ],
      },
      "meesho-seller-operations-guide": {
        sections: [
          {
            title: "Key Concepts",
            text: "Meesho's Supplier Panel handles listing, order confirmation, and basic tracking — but three things happen outside that panel that catch most sellers off guard: payment settlement doesn't automatically match against original order value, returns get deducted from payouts without clear flagging, and there's no built-in way to sync inventory if you're also selling on Flipkart or Amazon. Sellers processing under 50 orders a day can usually manage this manually. Past that, the panel alone isn't enough.",
          },
          {
            title: "Best Practices",
            text: "Confirm every order within Meesho's SLA window (typically 24–48 hours) to protect your fulfillment-rate score. Reconcile payments weekly against Meesho's settlement report rather than waiting for month-end, so return deductions and commission adjustments don't pile up unexplained. If you sell on multiple marketplaces, check stock levels across all panels before confirming any order — overselling the same SKU is one of the fastest ways to tank your seller rating on two platforms at once.",
          },
          {
            title: "Implementation",
            text: "Start by pulling your last 30 days of Meesho settlement reports and manually matching five orders against their payouts — this shows you exactly where the gaps are (commission deductions, RTO charges, delivery date mismatches). If that reconciliation is already eating more than an hour a week, that's your signal to automate it. An OMS connected to the Meesho Supplier Panel API can auto-match settlements, flag return-related deductions, and sync inventory across every marketplace you sell on in real time.",
          },
        ],
        proTip:
          "Most sellers don't lose money on Meesho from low prices — they lose it from unreconciled return deductions they never caught. A 5-minute weekly settlement check catches this before it compounds.",
        takeaways: [
          "Confirm orders within the SLA window to protect your seller rating",
          "Reconcile payments weekly, not monthly",
          "Match every return against its original order before assuming it's a loss",
          "Sync inventory in real time if selling on more than one marketplace",
          "Automate reconciliation once manual matching takes over an hour a week",
        ],
      },
    },
    "Shopify & D2C": {
      "shopify-inventory-management-explained": {
        sections: [
          {
            title: "Key Concepts",
            text: "Shopify tracks inventory accurately for orders placed directly through your store, but it has no native awareness of stock committed elsewhere unless explicitly connected. A brand selling on Shopify plus even one marketplace needs a system that treats Shopify as one sales channel among several, not the single source of truth — otherwise, a marketplace sale won't decrement Shopify's count, and vice versa, creating the exact overselling risk multi-channel sellers most want to avoid.",
          },
          {
            title: "Best Practices",
            text: "Use Shopify's location feature properly if you have multiple warehouses or fulfillment points — treating all stock as one undifferentiated pool causes fulfillment routing errors. Set low-stock alerts meaningfully below your actual reorder point (not at zero), so there's time to act before a stockout, not after. If selling on any other channel alongside Shopify, connect real inventory sync rather than relying on manual updates or Shopify's app-store integrations that update on a delay.",
          },
          {
            title: "Implementation",
            text: "Check whether your current inventory count in Shopify matches your actual physical stock right now — for most multi-channel sellers, it doesn't, and that gap is exactly what causes overselling. From there, a proper OMS syncs Shopify with every other channel in real time so a sale anywhere updates stock everywhere, rather than treating Shopify as an isolated system.",
          },
        ],
        proTip:
          "Shopify's own inventory tools are excellent for what they're built for — a single-channel store. The moment you add a second channel, inventory management becomes a cross-platform problem, not a Shopify problem.",
        takeaways: [
          "Shopify has no native awareness of stock sold on other channels unless connected",
          "Use Shopify's location feature correctly if managing multiple warehouses",
          "Set low-stock alerts well before your actual reorder point",
          "Check for a live mismatch between Shopify's stock count and physical inventory",
          "Sync inventory in real time the moment you sell on more than just Shopify",
        ],
      },
      "how-d2c-brands-scale-operations-efficiently": {
        sections: [
          {
            title: "Key Concepts",
            text: "The jump from a founder-run operation to a scaled D2C brand usually breaks at a predictable point: when order volume exceeds what one or two people can manually track in a spreadsheet. Before that point, manual processes feel efficient because overhead is low. Past it, the same manual processes cause missed orders, inventory errors, and customer service backlogs — not because the team got worse, but because the volume outgrew the process.",
          },
          {
            title: "Best Practices",
            text: "Identify your own \"breaking point\" order volume — the number at which manual tracking started causing visible errors — rather than waiting to hit it before planning for it. Separate operational roles (fulfillment, customer service, inventory) even if one person currently wears multiple hats, so responsibilities are clear as you hire. Automate the parts of fulfillment that don't need human judgment (label generation, order confirmation, low-stock alerts) well before volume forces the issue.",
          },
          {
            title: "Implementation",
            text: "Look at your order volume trend over the last 6 months and estimate when you'll cross 500 and 2,000 monthly orders at current growth rate — these are the thresholds where most D2C brands report operational strain. Before reaching them, put inventory sync and order automation in place so the transition doesn't create a customer-facing backlog.",
          },
        ],
        proTip:
          "The brands that scale smoothly aren't the ones with the most funding — they're the ones who automated order and inventory processes before volume forced an emergency fix.",
        takeaways: [
          "Most operational breakdowns happen between 500 and 2,000 monthly orders",
          "Identify your own breaking-point volume rather than waiting to hit it",
          "Separate operational roles early, even if one person covers multiple for now",
          "Automate label generation, order confirmation, and stock alerts before they become urgent",
          "Plan for scale based on your actual growth trend, not current volume alone",
        ],
      },
      "oms-for-shopify-stores-benefits-and-features": {
        sections: [
          {
            title: "Key Concepts",
            text: "A dedicated OMS adds three things Shopify's native tools don't fully cover: real-time inventory sync with external marketplaces, automated fulfillment routing across multiple warehouses or 3PLs, and consolidated reconciliation if you sell anywhere besides your Shopify store. For a pure single-channel Shopify store with one fulfillment location, native tools are often sufficient — the need for a dedicated OMS scales directly with how many channels and locations you're managing.",
          },
          {
            title: "Best Practices",
            text: "Evaluate the need for an OMS against your actual complexity, not order volume alone — a single-channel store doing 2,000 orders a month may need less than a 3-channel store doing 500. Prioritize OMS features that solve your specific bottleneck (inventory sync if you're multi-channel, fulfillment routing if you're multi-warehouse) rather than adopting every feature at once. Keep Shopify as your storefront and let the OMS handle backend orchestration — don't try to replace Shopify's customer-facing functions.",
          },
          {
            title: "Implementation",
            text: "Map out every channel and fulfillment location currently feeding into or out of your Shopify store — if that map has more than one node on either side, that's your signal an OMS adds real value. From there, connect the OMS to Shopify's API alongside your other channels so order and inventory data flows through one system instead of being manually reconciled between platforms.",
          },
        ],
        proTip:
          "The right time to add an OMS isn't a specific order-volume number — it's the point where you're manually reconciling data between two or more systems on a regular basis.",
        takeaways: [
          "A dedicated OMS matters most once you add a second channel or fulfillment location",
          "Complexity (channels + locations), not order volume alone, determines OMS need",
          "Prioritize the specific feature that solves your actual bottleneck first",
          "Keep Shopify as the storefront; let the OMS handle backend orchestration",
          "Regular manual reconciliation between systems is the clearest signal it's time for an OMS",
        ],
      },
      "website-vs-marketplace-orders-managing-both-efficiently": {
        sections: [
          {
            title: "Key Concepts",
            text: "Website orders (via Shopify or similar) give you full control over fulfillment timing and customer communication, but no built-in SLA enforcement — you set your own standards. Marketplace orders come with strict, platform-enforced SLAs, automated penalty systems for missed windows, and less flexibility in how you communicate with customers. A single workflow that doesn't account for this difference either over-polices your website orders or under-protects your marketplace fulfillment rate.",
          },
          {
            title: "Best Practices",
            text: "Set internal SLAs for website orders that match or beat your marketplace SLA commitments, so customer experience stays consistent regardless of channel. Prioritize marketplace order confirmation within their platform-enforced windows first, since missing these has direct rating consequences that missing a self-imposed website SLA doesn't. Keep inventory synced across both so a marketplace sale doesn't oversell a website order or vice versa.",
          },
          {
            title: "Implementation",
            text: "Compare your actual average fulfillment time for website orders against your marketplace orders over the last month — most sellers find an unintentional gap, often favoring one channel without meaning to. A unified system that pulls both website and marketplace orders into one queue, prioritized by actual SLA urgency rather than order source, closes this gap without requiring a completely separate process for each channel.",
          },
        ],
        proTip:
          "Marketplace SLA penalties are automatic and immediate; website customer dissatisfaction from slow fulfillment is quieter but compounds just as much in the long run through reviews and repeat purchase rates.",
        takeaways: [
          "Marketplace orders carry enforced SLA penalties; website orders don't, but still need consistent standards",
          "Set internal website SLAs that match your marketplace commitments",
          "Prioritize marketplace order confirmation first given automatic rating consequences",
          "Sync inventory across both channels to prevent cross-channel overselling",
          "Measure actual fulfillment time gaps between channels rather than assuming parity",
        ],
      },
      "d2c-operations-management-guide": {
        sections: [
          {
            title: "Key Concepts",
            text: "Operational excellence for a D2C brand rests on three foundations built early, not added later: accurate inventory visibility (knowing real stock, not estimated stock), a repeatable fulfillment workflow (the same steps every time, regardless of who's doing them), and clear ownership of each operational function (someone specifically responsible for inventory, someone for fulfillment, even if it's the same person wearing multiple hats initially). Brands that delay building these foundations tend to hit a painful catch-up phase once growth outpaces ad hoc processes.",
          },
          {
            title: "Best Practices",
            text: "Build your fulfillment workflow as a documented, repeatable process from your first hire, not just founder intuition — this makes onboarding and scaling far smoother later. Track real inventory (physical counts, reconciled regularly) rather than relying solely on system counts that can drift from reality. Assign clear ownership even at small scale, so accountability doesn't get lost as the team grows.",
          },
          {
            title: "Implementation",
            text: "Document your current fulfillment process exactly as it happens today, step by step — most founder-run D2C brands discover the process only exists in someone's head, not written down anywhere. From there, an OMS that enforces this workflow consistently (regardless of who's executing it) and keeps inventory counts reconciled against reality removes the two most common points of operational drift as you scale.",
          },
        ],
        proTip:
          "The D2C brands that scale smoothly built their fulfillment process to be boring and repeatable early — the exciting, ad hoc version only works until volume makes it break.",
        takeaways: [
          "Build accurate inventory visibility, a repeatable workflow, and clear ownership before scaling, not after",
          "Document fulfillment processes explicitly rather than relying on founder intuition",
          "Reconcile system inventory against physical counts regularly",
          "Assign clear operational ownership even at small team size",
          "A boring, repeatable process scales better than an efficient but undocumented one",
        ],
      },
      "omnichannel-selling-vs-multichannel-selling": {
        sections: [
          {
            title: "Key Concepts",
            text: "Multichannel selling treats each platform (Shopify, Amazon, Flipkart) as a separate operation with its own inventory count and order queue — simpler to start, but risk of overselling and fragmented data grows with each additional channel. Omnichannel selling connects every channel to one shared inventory and customer view, so a sale anywhere reflects everywhere instantly. Most brands start multichannel by necessity (adding platforms one at a time) and only become omnichannel once they connect those platforms through a unifying system.",
          },
          {
            title: "Best Practices",
            text: "If you're multichannel with 2 or fewer platforms and low order volume, the operational risk of separate systems may still be manageable manually. Past 2-3 channels or a few hundred monthly orders, the case for moving to a true omnichannel setup (shared inventory, unified order queue) grows quickly, since manual cross-checking no longer scales. Prioritize unifying inventory first — it's the highest-risk gap between multichannel and omnichannel operations.",
          },
          {
            title: "Implementation",
            text: "Assess how many channels you're currently selling on and whether your inventory counts across them are genuinely synced or just similar — many 'multichannel' sellers assume they're closer to omnichannel than they actually are. Moving to a real omnichannel setup means connecting every channel to one OMS that maintains a single, shared inventory and order view rather than separate counts per platform.",
          },
        ],
        proTip:
          "The gap between multichannel and omnichannel isn't about how many platforms you sell on — it's about whether those platforms share one source of truth for inventory and orders.",
        takeaways: [
          "Multichannel means separate operations per platform; omnichannel means one connected system",
          "Manual multichannel management becomes risky past 2-3 channels or a few hundred monthly orders",
          "Unifying inventory is the highest-priority step toward true omnichannel operations",
          "Check whether your current setup is genuinely synced or just superficially similar across platforms",
          "One OMS connecting every channel is what actually achieves omnichannel, not just adding more platforms",
        ],
      },
      "how-fast-growing-d2c-brands-automate-fulfillment": {
        sections: [
          {
            title: "Key Concepts",
            text: "Fulfillment automation works best on tasks that follow consistent rules: which courier to assign based on pincode and weight, when to trigger a low-stock reorder, how to generate and print shipping labels in batch. Tasks that need human judgment — handling a damaged-item complaint, deciding how to resolve an unusual return — don't automate well and shouldn't be the first target. Brands that automate the rule-based tasks first free up their team's time for the judgment-based work that actually needs a person.",
          },
          {
            title: "Best Practices",
            text: "Start automation with courier/carrier assignment and label generation — these are the most rule-based and highest-volume repetitive tasks in most fulfillment workflows. Automate low-stock reorder triggers based on actual sales velocity, not a fixed calendar reminder. Keep a human in the loop for exceptions (damaged items, unusual return requests) rather than trying to automate judgment calls.",
          },
          {
            title: "Implementation",
            text: "List your fulfillment team's most repetitive daily tasks and sort them into 'follows a consistent rule' versus 'needs judgment' — the first category is where automation delivers immediate time savings. An OMS with rule-based courier assignment, automated label generation, and velocity-based reorder triggers handles the first category, freeing the team to focus on the second.",
          },
        ],
        proTip:
          "The fastest-scaling D2C brands automate the boring 80% of fulfillment decisions first, which is exactly what frees up the team's time for the 20% that actually requires a person's judgment.",
        takeaways: [
          "Automate rule-based tasks (courier assignment, label generation, reorder triggers) first",
          "Keep judgment-based work (damaged items, unusual returns) with a human",
          "Base reorder triggers on actual sales velocity, not a fixed schedule",
          "Sort your team's current tasks into rule-based vs. judgment-based before automating",
          "Automation should free the team for exception-handling, not replace it entirely",
        ],
      },
      "common-d2c-scaling-challenges": {
        sections: [
          {
            title: "Key Concepts",
            text: "The three most common scaling challenges: inventory visibility breaking down (system counts drifting from physical reality as SKU count and order volume grow), fulfillment consistency slipping (the same order type handled differently depending on who's working that day), and customer service response time growing faster than the team, as more orders mean more support tickets without a proportional increase in support capacity. Each of these is manageable at low volume and becomes a real problem specifically during rapid growth phases.",
          },
          {
            title: "Best Practices",
            text: "Reconcile system inventory against physical counts on a fixed schedule, not just when a discrepancy is noticed. Document fulfillment steps so they're followed consistently regardless of who's executing them, rather than relying on tribal knowledge. Set up self-service or automated responses for the most common support questions (order status, return policy) so ticket volume doesn't scale linearly with order volume.",
          },
          {
            title: "Implementation",
            text: "Identify which of these three challenges is hitting hardest right now — most brands feel one more acutely than the others at any given growth stage. Addressing inventory visibility usually has the fastest payoff, since it prevents the customer-facing problems (overselling, wrong stock shown) that create support tickets and fulfillment errors downstream.",
          },
        ],
        proTip:
          "These three challenges tend to hit in a predictable order as you scale — inventory visibility first, then fulfillment consistency, then support capacity. Knowing which one is next lets you get ahead of it instead of reacting to it.",
        takeaways: [
          "Inventory visibility, fulfillment consistency, and support capacity are the three most common scaling challenges",
          "Reconcile inventory on a fixed schedule, not reactively",
          "Document fulfillment steps so they're consistent regardless of who executes them",
          "Automate responses to common support questions before ticket volume outpaces team capacity",
          "These challenges tend to hit in a predictable sequence as a brand scales",
        ],
      },
    },
    "Feature Guide": {
      "solution-for-growing-businesses": {
        sections: [
          {
            title: "Key Concepts",
            text: "Each marketplace — Amazon Seller Central, Flipkart Seller Hub, Meesho Supplier Panel, and Shopify's admin — has its own order queue, its own inventory count, and its own SLA rules. A seller manually checking all four risks two specific failures: overselling the same SKU across platforms before stock updates everywhere, and missing an order confirmation window on one platform while focused on another. Neither shows up as a single big mistake — they show up as a slow leak of cancelled orders and lowered seller ratings across every platform at once.",
          },
          {
            title: "Best Practices",
            text: "Set a single source of truth for inventory count — one system every platform reads from and writes to, not four separate spreadsheets or panels. Confirm orders on a fixed schedule (e.g., every 2 hours) across all four platforms rather than reactively, so no single marketplace's SLA window gets missed while you're focused on another. Watch each platform's fulfillment-rate metric separately — Amazon, Flipkart, and Meesho each penalize missed SLAs differently, and a good score on one doesn't protect you on another.",
          },
          {
            title: "Implementation",
            text: "Start by logging into all four seller panels on the same day and noting your current stock count for your 10 best-selling SKUs on each — in most cases, at least one of the four will already be out of sync with the others. That gap is exactly what causes overselling. From there, a unified order management system connects to all four marketplace APIs directly, syncing inventory in real time so a sale on Shopify instantly updates stock on Amazon, Flipkart, and Meesho simultaneously, and pulls every order into one queue so nothing gets missed regardless of which platform it came from.",
          },
        ],
        proTip:
          "The most common multi-channel mistake isn't picking the wrong platform to focus on — it's assuming your inventory numbers already match across all four. Check that first, before anything else.",
        takeaways: [
          "Use one inventory source of truth across all four platforms, not four separate counts",
          "Confirm orders on a fixed schedule so no single marketplace's SLA window gets missed",
          "Track each platform's fulfillment rate separately — a good score on one doesn't protect the others",
          "Check for inventory mismatches across platforms before assuming stock is accurate",
          "Sync inventory in real time once you're managing more than 2 marketplaces simultaneously",
        ],
      },
    },
  };

  /* Try to find specific text, fall back to generic */
  const specific = contentLibrary[category]?.[entry.slug];
  if (specific) {
    return {
      toc: specific.sections.map((section) => section.title),
      ...specific,
    };
  }

  /* Generic fallback with article-specific text */
  const sections = [
    {
      title: "Key Concepts",
      text: `${title} is a critical topic for ecommerce sellers. Understanding the fundamentals helps you make better decisions and avoid costly mistakes that can impact your bottom line.`,
    },
    {
      title: "Best Practices",
      text: `Leading sellers follow proven best practices for ${title.toLowerCase()}. These include systematic workflows, proper technology adoption, and continuous monitoring of key performance indicators.`,
    },
    {
      title: "Implementation",
      text: `Start by assessing your current situation and identifying gaps in ${title.toLowerCase()}. Then implement changes incrementally, measuring results at each step to minimize disruption while maximizing improvement.`,
    },
  ];

  return {
    toc: sections.map((section) => section.title),
    sections,
    proTip: `Investing time in ${title.toLowerCase()} pays dividends through improved efficiency, reduced costs, and better customer satisfaction.`,
    takeaways: [
      "Assess your current operations",
      "Identify key improvement areas",
      "Implement changes incrementally",
      "Measure results continuously",
      "Iterate based on data",
    ],
  };
}

export function BlogDetailPage({ onNavigate }: BlogDetailProps) {
  const [activeSection, setActiveSection] = useState("");
  const [entry, setEntry] = useState<BlogEntry | null>(null);

  /* ── Parse slug from URL ── handles both new slugs and old IDs */
  useEffect(() => {
    const loadBlog = () => {
      const slugPart = window.location.pathname.split("/Blog/")[1] || "";

      let blog: BlogEntry | undefined;

      // Try slug lookup first
      blog = findBlogBySlug(slugPart);

      // If not found, try old ID lookup
      if (!blog) {
        const byId = findBlogById(slugPart);
        if (byId) blog = byId;
      }

      // Final fallback
      if (!blog) blog = allBlogEntries[0];

      setEntry(blog);
      window.scrollTo(0, 0);
    };

    loadBlog();

    window.addEventListener("popstate", loadBlog);

    return () => {
      window.removeEventListener("popstate", loadBlog);
    };
  }, []);

  const isClickScrolling = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id^='section-']");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-title") || "");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-120px 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [entry]);

  const handleTocClick = (item: string, idx: number) => {
    setActiveSection(item);
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      isClickScrolling.current = true;
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Release scroll block lock after the jump animation ends
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  const goBack = () => {
    const savedScroll = sessionStorage.getItem("blogScroll") || "0";

    window.history.pushState({}, "", "/Blog");
    window.dispatchEvent(new PopStateEvent("popstate"));

    setTimeout(() => {
      window.scrollTo(0, parseInt(savedScroll, 10));
    }, 100);
  };

  const goToBlog = (slug: string) => {
    window.history.pushState({}, "", `/Blog/${slug}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  const shareArticle = async () => {
    if (!entry) return;

    const shareData = {
      title: entry.title,
      text: entry.subtitle,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard?.writeText(window.location.href);
  };

  if (!entry) return null;

  // const color = catColors[entry.category] || '#2563EB';
  const color = catColors[entry.category] || "#2563EB";
  const image = entry.image || "/blog-hero-new.jpg";
  const imageSrcSet = getBlogImageSrcSet(image);
  const text = getArticleContent(entry);

  const relatedPosts = allBlogEntries
    .filter((e) => e.category === entry.category && e.slug !== entry.slug)
    .slice(0, 3);

  console.log("entry:", entry);
  console.log("title:", entry?.title);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="relative min-h-[520px] lg:min-h-[620px] overflow-hidden bg-slate-950">
        <img
          src={image}
          srcSet={imageSrcSet}
          sizes="100vw"
          alt={entry.title}
          className="absolute inset-0 h-full w-full object-cover scale-[1.04] motion-kenburns opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,184,0,0.24),transparent_28%),linear-gradient(105deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.76)_42%,rgba(15,23,42,0.34)_100%)]" />
        {/* <div className="absolute left-[6%] top-[20%] h-28 w-28 rounded-full border border-white/15 motion-orbit opacity-70" /> */}
        <div className="absolute bottom-[18%] right-[10%] h-20 w-20 rounded-3xl border border-gold/30 bg-gold/10 blur-[1px] motion-float-soft" />

        <div className="relative z-10 flex min-h-[520px] lg:min-h-[620px] items-end px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="max-w-4xl">
              <button
                onClick={goBack}
                className="motion-link mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl transition-all hover:border-gold/60 hover:bg-gold/15 hover:text-gold"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Blog
              </button>
              {/* <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-xl">
                  <Tag className="w-3.5 h-3.5" /> {entry.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-slate-950 shadow-[0_12px_32px_rgba(245,184,0,0.35)]">
                  <BookOpen className="w-3.5 h-3.5" /> {entry.readTime}
                </span>
              </div> */}
              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[58px]">
                {entry.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/80 sm:text-lg">
                {entry.subtitle}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="motion-glass-card rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Reading Snapshot
                </p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span className="text-sm text-white/70">Sections</span>
                    <span className="text-2xl font-bold">
                      {text.sections.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                    <span className="text-sm text-white/70">Category</span>
                    <span className="text-sm font-semibold">
                      {entry.category}
                    </span>
                  </div>
                  <button
                    onClick={shareArticle}
                    className="motion-button inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-gold"
                  >
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="motion-meta-pill flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
              <User className="w-4 h-4" />
              Elitesecom Team
            </span>
            <span className="motion-meta-pill flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
              <Calendar className="w-4 h-4" />
              {entry.date}
            </span>
            {/* <span className="motion-meta-pill flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
              <Clock className="w-4 h-4" />
              {entry.readTime}
            </span> */}
            {/* <button
              onClick={shareArticle}
              className="motion-meta-pill ml-auto hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-all hover:border-gold hover:text-gold-700 sm:flex"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button> */}
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
            {/* TOC Sidebar — self-start required so sticky works inside CSS grid */}
            <aside className="hidden lg:block self-start w-[280px] sticky top-[85px]">
              <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm max-h-[calc(100vh-7rem)] overflow-y-auto">
                <h3 className="font-bold  mb-4">Table of Contents</h3>

                <nav className="space-y-2">
                  {text.toc.map((item: string, idx: number) => (
                    <button
                      key={item}
                      onClick={() => handleTocClick(item, idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 block truncate ${
                        activeSection === item
                          ? "bg-gold text-white font-medium shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article>
              {/* Sections */}
              <div className="space-y-6">
                {text.sections.map((section: any, idx: number) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    data-title={section.title}
                    data-page-reveal
                    className="motion-article-section group scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl sm:p-7"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="motion-number h-9 w-9 rounded-full bg-gold text-white flex items-center justify-center font-bold text-lg shadow-[0_8px_24px_rgba(245,184,0,0.28)]">
                        {idx + 1}
                      </div>

                      <h2 className="text-[22px] font-extrabold tracking-normal  sm:text-[24px]">
                        {section.title}
                      </h2>
                    </div>

                    <div
                      className="
                      text-[16px] font-normal leading-8 text-slate-600

    [&>p]:mb-4

    [&>ul]:mb-7
    [&>ul]:pl-6

    [&>li]:mb-3

    [&>h4]:text-[17px]
    [&>h4]:font-bold
    [&>h4]:mt-5
    [&>h4]:mb-2
    [&>h4]:
  "
                      dangerouslySetInnerHTML={{ __html: section.text }}
                    />
                  </section>
                ))}
              </div>

              {/* Pro Tip */}
              {text.proTip && (
                <div
                  data-page-reveal
                  className="motion-tip-card mt-12 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-orange-50 p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />

                    <h3 className="font-bold text-xl ">Pro Tip</h3>
                  </div>

                  <p className="text-slate-700 leading-8 text-lg">
                    {text.proTip}
                  </p>
                </div>
              )}

              {/* Feature Image */}
              <div
                data-page-reveal
                className="motion-media-frame my-12 overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10"
              >
                <img
                  src={image}
                  srcSet={imageSrcSet}
                  sizes="(max-width: 1024px) calc(100vw - 2rem), 900px"
                  alt={entry.title}
                  className="w-full h-[420px] object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Key Takeaways */}
              {text.takeaways?.length > 0 && (
                <div
                  data-page-reveal
                  className="motion-takeaway-card rounded-3xl p-7 border border-slate-100 shadow-sm"
                >
                  <h3 className="font-bold  mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {text.takeaways.map((item: string, idx: number) => (
                      <li
                        key={item}
                        className="motion-list-item flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-slate-600 text-sm shadow-sm"
                        style={{ transitionDelay: `${idx * 45}ms` }}
                      >
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
      {/* Related */}
      {relatedPosts?.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl  mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((post) => {
                const relatedImage =
                  post.image ||
                  catImages[post.category] ||
                  "/blog-hero-new.jpg";
                return (
                  <article
                    key={post.slug}
                    onClick={() => goToBlog(post.slug)}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                  >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedImage}
                      srcSet={getBlogImageSrcSet(relatedImage)}
                      sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1024px) calc((100vw - 4rem) / 3), 304px"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold  group-hover:text-gold-600 transition-colors line-clamp-2 text-sm">
                      {post.title}
                    </h4>
                    <span className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="motion-cta-card relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl motion-float-soft" />
            <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-lavender/20 blur-3xl motion-float-soft" />
            <div className="relative">
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Ready to Simplify Your Operations?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Manage orders, inventory, warehouses, and returns from one
                platform.
              </p>
              <button
                onClick={() => onNavigate?.("contact")}
                className="motion-button inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold  font-semibold hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] transition-all hover:-translate-y-0.5"
              >
                Book Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
