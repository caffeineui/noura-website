import Link from "next/link"

export default function CTA() {
  return (
    <section className="section_cta">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-medium">
          <div className="cta_component">
            <div className="cta_graphic-wrap"></div>
            <div className="cta_content">
              <div className="cta_head">
                <div className="pill_wrap">
                  <div className="cta_pill">Talk to us</div>
                </div>
                <div className="spacer-small"></div>
                <h2 className="heading-style-h5">
                  Partner with a design team that turns ideas into powerful digital experiences
                </h2>
              </div>
              <div className="cta_button-wrap">
                <Link data-wf-button-variant="dark" href="#" className="button w-inline-block">
                  <div className="button_inner">
                    <div className="button_gradient">
                      <div className="button_gradient-ball ball-1" suppressHydrationWarning></div>
                      <div className="button_gradient-ball ball-2" suppressHydrationWarning></div>
                    </div>
                    <div className="button_text">Start now</div>
                  </div>
                  <div className="button_gradient-glow">
                    <div className="button_gradient-ball ball-1" suppressHydrationWarning></div>
                    <div className="button_gradient-ball ball-2" suppressHydrationWarning></div>
                  </div>
                </Link>
                <p className="cta_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  )
}
