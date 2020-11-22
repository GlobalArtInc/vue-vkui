import Root from './Root/Root.vue'
import PopoutRoot from './PopoutRoot/PopoutRoot'
import PanelHeader from './PanelHeader/PanelHeader'
import FixedLayout from './FixedLayout/FixedLayout'
import Div from './Div/Div'
import SplitLayout from './SplitLayout/SplitLayout'
import Spinner from './Spinner/Spinner'
import Separator from './Separator/Separator'

const Components = {
  Root,
  PopoutRoot,
  PanelHeader,
  FixedLayout,
  Div,
  SplitLayout,
  Spinner,
  Separator
}

const install = function (Vue, options) {
  const theme = options.theme || 'bright_light'
  const platform = options.platform || 'ios'
  for (const i in Components) {
    Vue.component(i, Components[i])
  }
  Vue.prototype.VkPlatform = platform
  window.VkPlatform = platform
  document.body.setAttribute('scheme', theme)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install

export default Components
