import { mainnet, polygon, sepolia, polygonMumbai } from 'wagmi/chains';

export const ETH_CHAINS = [mainnet, polygon, sepolia, polygonMumbai];
export const WALLET_CONNECT_PROJECT_ID = 'YOUR_WALLET_CONNECT_PROJECT_ID';

export const SITE_NAME = '0xwat';
export const SITE_DESCRIPTION =
	'Next.js dApp (boilr3)';
export const SITE_URL = 'https://boilr3.vercel.app';

export const SOCIAL_TWITTER = 'Envoy_1084';
export const SOCIAL_GITHUB = 'Envoy-VC/boilr3';

export const NFT_CONTRACT_ADDRESS =
	'0x0Fc5f8A784810dEd101BD734cC59F6F7b868A3AF';

export const ironOptions = {
	cookieName: SITE_NAME,
	password:
		process.env.SESSION_PASSWORD ??
		'set_a_complex_password_at_least_32_characters_long',
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production',
	},
};
