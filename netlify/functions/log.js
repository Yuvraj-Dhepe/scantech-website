// Netlify function to capture logs
exports.handler = async function(event, context) {
  try {
    // Only accept POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' })
      };
    }

    // Parse the request body
    const body = JSON.parse(event.body);
    const { level, message, data } = body;

    // Log the message with the appropriate level
    switch (level) {
      case 'info':
        console.log(`[INFO] ${message}`, data || '');
        break;
      case 'error':
        console.error(`[ERROR] ${message}`, data || '');
        break;
      case 'warn':
        console.warn(`[WARN] ${message}`, data || '');
        break;
      case 'debug':
        console.debug(`[DEBUG] ${message}`, data || '');
        break;
      default:
        console.log(`[LOG] ${message}`, data || '');
    }

    // Return success
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Log captured successfully' })
    };
  } catch (error) {
    console.error('Error capturing log:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error capturing log' })
    };
  }
};
