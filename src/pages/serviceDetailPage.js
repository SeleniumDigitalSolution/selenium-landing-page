export function renderServiceDetailPage({
  service,
  labels,
  icons,
  whatsappUrl,
}) {
  return `
    <section class="py-section relative overflow-hidden"
             aria-labelledby="service-detail-heading">
      <div class="section-container relative z-10 pt-16">
        <a href="/#services"
           data-router-link
           class="btn-ghost btn-sm mb-10">
          ${labels.backCta}
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-14 items-start">
          <article>
            <div class="service-icon-wrap mb-6">
              ${icons.get(service.icon, "w-6 h-6")}
            </div>

            <h1 id="service-detail-heading"
                class="font-display font-bold tracking-tight mb-6"
                style="font-size:clamp(2.5rem,6vw,5rem);line-height:1.05;">
              ${service.title}
            </h1>

            <p class="section-subheading mb-10 max-w-3xl">
              ${service.longDescription}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section class="se-card" aria-labelledby="service-benefits-heading">
                <h2 id="service-benefits-heading"
                    class="font-display font-semibold text-xl mb-5">
                  ${labels.benefitsHeading}
                </h2>
                <ul class="space-y-4" role="list">
                  ${service.benefits
                    .map(
                      (benefit) => `
                    <li class="flex gap-3 text-sm leading-relaxed">
                      <span class="text-se-cyan mt-0.5 flex-shrink-0">
                        ${icons.get("checkCircle", "w-5 h-5")}
                      </span>
                      <span>${benefit}</span>
                    </li>
                  `,
                    )
                    .join("")}
                </ul>
              </section>

              <section class="se-card" aria-labelledby="service-process-heading">
                <h2 id="service-process-heading"
                    class="font-display font-semibold text-xl mb-5">
                  ${labels.processHeading}
                </h2>
                <ol class="space-y-4" role="list">
                  ${service.process
                    .map(
                      (step, index) => `
                    <li class="flex gap-3 text-sm leading-relaxed">
                      <span class="w-7 h-7 rounded-sm border border-se-cyan/30 text-se-cyan font-mono text-xs flex items-center justify-center flex-shrink-0">
                        ${index + 1}
                      </span>
                      <span>${step}</span>
                    </li>
                  `,
                    )
                    .join("")}
                </ol>
              </section>
            </div>
          </article>

          <aside class="se-card lg:sticky lg:top-28">
            <h2 class="font-display font-semibold text-xl mb-3">
              ${labels.cta}
            </h2>
            <p class="text-sm leading-relaxed mb-6">
              ${service.description}
            </p>
            <a href="${whatsappUrl}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-secondary btn-lg w-full justify-center text-center">
              ${labels.cta}
              ${icons.get("arrowRight", "w-4 h-4")}
            </a>
          </aside>
        </div>
      </div>
    </section>
  `;
}

export function renderServiceNotFoundPage({ labels }) {
  return `
    <section class="py-section relative overflow-hidden"
             aria-labelledby="service-not-found-heading">
      <div class="section-container pt-16">
        <div class="se-card max-w-2xl mx-auto text-center">
          <h1 id="service-not-found-heading"
              class="font-display font-bold text-3xl md:text-5xl mb-4">
            ${labels.notFoundTitle}
          </h1>
          <p class="section-subheading mx-auto mb-8">
            ${labels.notFoundDescription}
          </p>
          <a href="/#services" data-router-link class="btn-secondary justify-center">
            ${labels.backCta}
          </a>
        </div>
      </div>
    </section>
  `;
}
