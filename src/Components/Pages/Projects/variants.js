// Pop-Up Animation Variants
export const overlayVariants = {
    open: {
      background: 'rgba(0, 0, 0, 0.7)',
      transition: {
        duration: 0.25,
        when: 'beforeChildren'
      }
    },
    closed: {
      background: 'rgba(0, 0, 0, 0)',
      transition: {
        duration: 0.25,
        when: 'afterChildren'
      }
    }}

export const containerVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      y: '-2rem',
      transition: {
        duration: 0.25
      }
    }}

export const imageVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      x: '-2rem',
      opacity: 0,
      transition: {

      }
    }}

export const smImageVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    closed: {
        y: '-2rem',
        opacity: 0
    }
}

export const contentVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
        duration: 0.3
        }
    },
    closed: {
        opacity: 0,
        x: '2rem',
        transition: {
        duration: 0.25
        }
    }}

export const spanVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    },
    closed: {
        opacity: 0,
        y:'3rem',
        transition: {
            duration: 0.25
        }
    }}


// Player options at different sizes
export const smPlayerOpts = {
    height: '200px',
    width: '260px',
    playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        showinfo: 0,
        fs: 0,
        rel: 0
    }}

export const mdPlayerOpts = {
    height: '430px',
    width: '400px',
    playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        showinfo: 0,
        fs: 0,
        rel: 0
    }}

export const lgPlayerOpts = {
    height: '600px',
    width: '580px',
    playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        showinfo: 0,
        fs: 0,
        rel: 0,
        color: 'black'
    }}