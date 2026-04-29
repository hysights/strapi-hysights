// Helper function to generate preview URLs based on content type
const getPreviewPathname = (uid, { locale, document }) => {
  const baseUrl = 'https://staging.hysights.com';
  
  switch (uid) {
    // Single Types - Static URLs
    case 'api::home.home':
      return baseUrl;
    case 'api::rating.rating':
      return `${baseUrl}/ratings`;
    case 'api::about.about':
      return `${baseUrl}/about`;
    case 'api::press.press':
      return `${baseUrl}/press`;
    case 'api::deal-flow-intelligence.deal-flow-intelligence':
      return `${baseUrl}/deal-flow-intelligence`;
    case 'api::market-intelligence-platform.market-intelligence-platform':
      return `${baseUrl}/market-intelligence-platform`;
    case 'api::for-investor.for-investor':
      return `${baseUrl}/investors`;
    case 'api::for-project-developer.for-project-developer':
      return `${baseUrl}/developers-platforms-oems`;
    case 'api::for-offtaker.for-offtaker':
      return `${baseUrl}/offtakers`;
    case 'api::privacy-policy.privacy-policy':
      return `${baseUrl}/privacy-policy`;
    case 'api::cookies-policy.cookies-policy':
      return `${baseUrl}/cookies-policy`;
    case 'api::terms-and-condition.terms-and-condition':
      return `${baseUrl}/terms-and-conditions`;
    case 'api::global.global':
      return baseUrl;
    
    // Collection Types - Dynamic URLs with slug
    case 'api::article.article':
      return document?.slug ? `${baseUrl}/insights/${document.slug}` : null;
    
    default:
      return null;
  }
};

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: ['https://staging.hysights.com'],
      async handler(uid, { documentId, locale, status }) {
        // Fetch the document to get its data (like slug for dynamic URLs)
        const document = await strapi.documents(uid).findOne({
          documentId,
        });
        
        // Generate the preview URL based on content type
        const previewUrl = getPreviewPathname(uid, { locale, document });
        
        // If no preview URL is configured for this content type, disable preview
        if (!previewUrl) {
          return null;
        }
        
        // Return the direct preview URL
        return previewUrl;
      },
    },
  },
});
