/* Typography */
import VkTitle from '../components/Typography/Title/Title'
import VkHeadline from '../components/Typography/Headline/Headline'
import VkSubhead from '../components/Typography/Subhead/Subhead'
import VkCaption from '../components/Typography/Caption/Caption'
import VkText from '../components/Typography/Text/Text'

/* Service */
import VkTappable from '../components/Tappable/Tappable'

/* Layout */
import VkRoot from './Root/Root.vue'
import VkPopoutRoot from './PopoutRoot/PopoutRoot'
import VkPanelHeader from './PanelHeader/PanelHeader'
import VkFixedLayout from './FixedLayout/FixedLayout'
import VkSplitLayout from './SplitLayout/SplitLayout'
import VkSplitCol from './SplitCol/SplitCol'
/* Layout */

/* Popouts */
import VkSnackbar from './Snackbar/Snackbar'

// Blocks
import VkButton from './Button/Button'
import VkIconButton from './IconButton/IconButton'
import VkCard from './Card/Card'
import VkCardGrid from './CardGrid/CardGrid'
import VkCardScroll from './CardScroll/CardScroll'
import VkContentCard from './ContentCard/ContentCard'
import VkDiv from './Div/Div'
import VkLink from './Link/Link'
import VkHeader from './Header/Header'
import VkGroup from './Group/Group'
import VkGradient from './Gradient/Gradient'
import VkSimpleCell from './SimpleCell/SimpleCell'
import VkCell from './Cell/Cell'
import VkCellButton from './CellButton/CellButton'
import VkRichCell from './RichCell/RichCell'
import VkHorizontalCell from './HorizontalCell/HorizontalCell'
import VkList from './List/List'
import VkFooter from './Footer/Footer'
import VkSpinner from './Spinner/Spinner'
import VkSwitch from './Switch/VkSwitch'
import VkInfoRow from './InfoRow/InfoRow'
import VkAvatar from './Avatar/Avatar'
import VkProgress from './Progress/Progress'
import VkSearch from './Search/Search'
import VkTabs from './Tabs/Tabs'
import VkTabsItem from './TabsItem/TabsItem'
import VkTooltip from './Tooltip/Tooltip'
import VkPullToRefresh from './PullToRefresh/PullToRefresh'
import VkCounter from './Counter/Counter'
import VkUsersStack from './UsersStack/UsersStack'
import VkSeparator from './Separator/Separator'
import VkPlaceholder from './Placeholder/Placeholder'
import VkBanner from './Banner/Banner'
import VkMiniInfoCell from './MiniInfoCell/MiniInfoCell'
import VkWriteBar from './WriteBar/WriteBar'
import VkWriteBarIcon from './WriteBarIcon/WriteBarIcon'
/* Forms */
import VkSelect from './Select/VkSelect'

const Components = {
  /* Typography */
  VkTitle,
  VkHeadline,
  VkSubhead,
  VkCaption,
  VkText,
  /* Service */
  VkTappable,
  /* Layout */
  VkRoot,
  VkPopoutRoot,
  VkPanelHeader,
  VkFixedLayout,
  VkSplitLayout,
  VkSplitCol,
  /* Layout */
  /* Blocks */
  VkButton,
  VkIconButton,
  VkCard,
  VkCardGrid,
  VkCardScroll,
  VkContentCard,
  VkDiv,
  VkLink,
  VkHeader,
  VkGroup,
  VkGradient,
  VkSimpleCell,
  VkCell,
  VkCellButton,
  VkRichCell,
  VkHorizontalCell,
  VkList,
  VkFooter,
  VkSpinner,
  VkSwitch,
  VkInfoRow,
  VkAvatar,
  VkProgress,
  VkSearch,
  VkTabs,
  VkTabsItem,
  VkTooltip,
  VkPullToRefresh,
  VkCounter,
  VkUsersStack,
  VkSeparator,
  VkPlaceholder,
  VkBanner,
  VkMiniInfoCell,
  VkWriteBar,
  VkWriteBarIcon,
  /* Forms */
  VkSelect
}

const install = function (Vue, options) {
  const theme = options.theme || 'bright_light'
  const platform = options.platform || 'ios'
  for (const i in Components) {
    Vue.component(i, Components[i])
  }
  Vue.prototype.VkSnack = VkSnackbar
  Vue.prototype.VkPlatform = platform
  window.VkPlatform = platform
  document.body.setAttribute('scheme', theme)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install

export default Components
