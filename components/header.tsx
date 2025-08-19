import Link from "next/link"

export default function Header() {
  return (
    <nav className="navbar">
      <div className="padding-global">
        <div className="navbar_component">
          <Link href="/" aria-current="page" className="navbar_logo-wrap w-inline-block w--current">
            <img
              src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/684f11d4e313a362d3663da0_logo-3.svg"
              loading="lazy"
              alt=""
              className="navbar_logo"
            />
          </Link>
          <div className="navbar_links-wrap">
            <div className="navbar_links">
              <Link href="/" aria-current="page" className="navbar_link w-inline-block w--current">
                <div className="navbar_link-text _1">Home</div>
                <div className="navbar_link-text _2">Home</div>
              </Link>
              <Link href="/about" className="navbar_link w-inline-block">
                <div className="navbar_link-text _1">About</div>
                <div className="navbar_link-text _2">About</div>
              </Link>
              <Link href="/works" className="navbar_link w-inline-block">
                <div className="navbar_link-text _1">Works</div>
                <div className="navbar_link-text _2">Works</div>
              </Link>
              <Link href="/blog" className="navbar_link w-inline-block">
                <div className="navbar_link-text _1">Blog</div>
                <div className="navbar_link-text _2">Blog</div>
              </Link>
            </div>
            <Link
              data-wf-button-variant="light-small"
              href="/contact"
              className="button w-variant-994e88c4-baec-2bbf-d0b3-8a2991a92ab2 w-inline-block"
            >
              <div className="button_inner w-variant-994e88c4-baec-2bbf-d0b3-8a2991a92ab2">
                <div className="button_gradient">
                  <div className="button_gradient-ball ball-1 w-variant-994e88c4-baec-2bbf-d0b3-8a2991a92ab2" suppressHydrationWarning></div>
                  <div className="button_gradient-ball ball-2 w-variant-994e88c4-baec-2bbf-d0b3-8a2991a92ab2" suppressHydrationWarning></div>
                </div>
                <div className="button_text">Contact</div>
              </div>
              <div className="button_gradient-glow">
                <div className="button_gradient-ball ball-1 w-variant-994e88c4-baec-2bbf-d0b3-8a2991a92ab2" suppressHydrationWarning></div>
                <div className="button_gradient-ball ball-2 w-variant-994e88c4-baec-2bbf-d0b3-8a2991a92ab2" suppressHydrationWarning></div>
              </div>
            </Link>
          </div>
          <div className="navbar_hamburger-wrap">
            <div className="navbar_hamburger">
              <div className="navbar_hamburger-line _1" suppressHydrationWarning></div>
              <div className="navbar_hamburger-line _2" suppressHydrationWarning></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
