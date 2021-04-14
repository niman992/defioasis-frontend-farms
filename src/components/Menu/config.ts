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
        href: 'https://exchange.defioasis.finance/#/swap?outputCurrency=0x8f0f0986063600413060E22B6f8cdB964cA7e58D ', // OASIS mainnet address to be added
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.defioasis.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x8f0f0986063600413060E22B6f8cdB964cA7e58D ', // OASIS mainnet address to be added
      },
    ],
  },
  {
    label: 'Oasis',
    icon: 'FarmIcon',
    href: '/oasis',
  },
  {
    label: 'Bazaar',
    icon: 'PoolIcon',
    href: '/bazaar',
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
        href: 'https://pancakeswap.info/token/0x8f0f0986063600413060E22B6f8cdB964cA7e58D', // OASIS mainnet address to be added
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
        href: 'https://defioasis.gitbook.io/defi-oasis/',
      },
      {
        label: 'Roadmap',
        href: 'https://defioasis.gitbook.io/defi-oasis/core/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@defioasis',
      },
    ],
  },
    {
    label: 'Forked from audited Goosedefi',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
]

export default config
