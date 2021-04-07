import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.defioasis.com/#/swap?outputCurrency= ', // OASIS mainnet address to be added
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.defioasis.com/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/ ', // OASIS mainnet address to be added
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Oasis',
    icon: 'PoolIcon',
    href: '/oasis',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/ ', // OASIS mainnet address to be added
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/DeFiOasis/',
      },
      {
        label: 'Docs',
        href: 'https://defioasis.gitbook.io/defioasis/',
      },
      {
        label: 'Blog',
        href: 'https://defioasis.medium.com/',
      },
    ],
  },
]

export default config
