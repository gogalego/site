/* filepath: src/components/Navigation/Navigation.tsx */
import React, { useState, useEffect } from 'react'
import './navigation.css'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

const links = [
  { href: '#home', label: 'Home', index: '01' },
  { href: '#about', label: 'About', index: '02' },
  { href: '#workExperience', label: 'Work Experience', index: '03' },
  { href: '#projects', label: 'Projects', index: '04' },
]

const Navigation = () => {
  const [open, setOpen] = useState(false)

  // Handle ESC key press and body scroll
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscKey)
      document.body.classList.add('navigation-open')
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.classList.remove('navigation-open')
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.classList.remove('navigation-open')
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [open])

  const openDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  const handleLinkClick = () => {
    setOpen(false)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false)
    }
  }

  const handleDrawerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className="navigation-container">
      <a href="#home" className="header-wordmark">
        Go<em>Galego</em>
      </a>

      <nav className="navigation-inline" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="navigation-inline-link">
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="navigation-menu-button"
        onClick={openDrawer}
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <FiMenu className="navigation-menu-icon" aria-hidden="true" />
      </button>

      {open && (
        <div
          className={`navigation-overlay ${open ? 'open' : ''}`}
          onClick={handleOverlayClick}
        >
          <div
            className={`navigation-drawer ${open ? 'open' : ''}`}
            onClick={handleDrawerClick}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="navigation-header">
              <span className="navigation-shelf-label">Menu</span>
              <button
                className="navigation-close"
                onClick={closeDrawer}
                aria-label="Close navigation menu"
              >
                <IoMdClose />
              </button>
            </div>

            <div className="navigation-links">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="navigation-link"
                  onClick={handleLinkClick}
                >
                  <span className="navigation-link-index" aria-hidden="true">
                    {link.index}
                  </span>
                  <span className="navigation-link-text">{link.label}</span>
                </a>
              ))}
            </div>

            <p className="navigation-footnote">Gonçalo Galego</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navigation
