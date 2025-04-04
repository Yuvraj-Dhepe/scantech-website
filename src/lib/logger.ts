// Enhanced logger utility for both client and server with Netlify function integration

// Helper function to send logs to Netlify function
async function sendToNetlifyFunction(level: string, message: string, data: any) {
  try {
    // Only send to Netlify function in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      await fetch('/.netlify/functions/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          level,
          message,
          data,
        }),
      });
    }
  } catch (error) {
    // Silently fail if the Netlify function call fails
    console.error('Failed to send log to Netlify function:', error);
  }
}

const logger = {
  info: (message: string, ...args: any[]) => {
    if (typeof window === 'undefined') {
      // Server-side logging
      console.log(`[INFO] ${message}`, ...args);
    } else {
      // Client-side logging
      console.log(`[INFO] ${message}`, ...args);
      // Send to Netlify function
      sendToNetlifyFunction('info', message, args.length > 0 ? args[0] : undefined);
    }
  },

  error: (message: string, ...args: any[]) => {
    if (typeof window === 'undefined') {
      // Server-side logging
      console.error(`[ERROR] ${message}`, ...args);
    } else {
      // Client-side logging
      console.error(`[ERROR] ${message}`, ...args);
      // Send to Netlify function
      sendToNetlifyFunction('error', message, args.length > 0 ? args[0] : undefined);
    }
  },

  warn: (message: string, ...args: any[]) => {
    if (typeof window === 'undefined') {
      // Server-side logging
      console.warn(`[WARN] ${message}`, ...args);
    } else {
      // Client-side logging
      console.warn(`[WARN] ${message}`, ...args);
      // Send to Netlify function
      sendToNetlifyFunction('warn', message, args.length > 0 ? args[0] : undefined);
    }
  },

  debug: (message: string, ...args: any[]) => {
    // Only log in development or when DEBUG is enabled
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG) {
      if (typeof window === 'undefined') {
        // Server-side logging
        console.debug(`[DEBUG] ${message}`, ...args);
      } else {
        // Client-side logging
        console.debug(`[DEBUG] ${message}`, ...args);
        // Send to Netlify function
        sendToNetlifyFunction('debug', message, args.length > 0 ? args[0] : undefined);
      }
    }
  }
};

export default logger;
