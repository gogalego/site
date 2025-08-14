/* filepath: src/components/Navigation/Navigation.tsx */
import React, { useState, useEffect } from 'react'
import './navigation.css'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

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
      // Add event listener for ESC key
      document.addEventListener('keydown', handleEscKey)
      
      // Prevent body scroll and add class for styling
      document.body.classList.add('navigation-open')
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      // Remove body scroll prevention
      document.body.classList.remove('navigation-open')
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    // Cleanup function
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
    // Only close if clicking on the overlay itself, not the drawer
    if (e.target === e.currentTarget) {
      setOpen(false)
    }
  }

  // Prevent drawer click from closing the navigation
  const handleDrawerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className="navigation-container">
      <FiMenu 
        className="navigation-menu-icon" 
        onClick={openDrawer}
        aria-label="Open navigation menu"
      />
      
      {/* Custom Drawer with Overlay */}
      {open && (
        <div 
          className={`navigation-overlay ${open ? 'open' : ''}`} 
          onClick={handleOverlayClick}
        >
          <div 
            className={`navigation-drawer ${open ? 'open' : ''}`}
            onClick={handleDrawerClick}
          >
            <div className="navigation-header">
              <button
                className="navigation-close" 
                onClick={closeDrawer}
                aria-label="Close navigation menu"
              >
                <IoMdClose />
              </button>
            </div>
            
            <div className="navigation-links">
              <a 
                href="#home" 
                className="navigation-link" 
                onClick={handleLinkClick}
              >
                <span className="navigation-link-text">Home</span>
              </a>
              <a 
                href="#about" 
                className="navigation-link" 
                onClick={handleLinkClick}
              >
                <span className="navigation-link-text">About</span>
              </a>
              <a 
                href="#workExperience" 
                className="navigation-link" 
                onClick={handleLinkClick}
              >
                <span className="navigation-link-text">Work Experience</span>
              </a>
              <a 
                href="#projects" 
                className="navigation-link" 
                onClick={handleLinkClick}
              >
                <span className="navigation-link-text">Projects</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navigation