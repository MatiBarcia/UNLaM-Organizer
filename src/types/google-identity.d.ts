// Tipado mínimo de la porción de Google Identity Services (GIS) que usamos
// (google.accounts.oauth2), cargada como script global en index.html.
// https://developers.google.com/identity/oauth2/web/reference/js-reference

interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  error?: string;
  error_description?: string;
}

interface GoogleTokenClient {
  requestAccessToken: (overrideConfig?: { prompt?: string }) => void;
}

interface GoogleTokenClientConfig {
  client_id: string;
  scope: string;
  callback: (response: GoogleTokenResponse) => void;
  error_callback?: (error: { type: string; message?: string }) => void;
}

interface Window {
  google?: {
    accounts: {
      oauth2: {
        initTokenClient: (config: GoogleTokenClientConfig) => GoogleTokenClient;
        revoke: (accessToken: string, done?: () => void) => void;
      };
    };
  };
}
