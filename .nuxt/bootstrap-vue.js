import Vue from 'vue';

import {
  LayoutPlugin,
  NavbarPlugin,
  ButtonPlugin,
  OverlayPlugin,
  ToastPlugin,
  CardPlugin,
  PaginationNavPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  AlertPlugin,
  LinkPlugin,
  BadgePlugin,
  VBHoverPlugin,
  BIcon,
  BIconstack,
  BIconBookmarkFill,
  BIconCircle,
  BIconCircleFill,
  BIconTrashFill,
  BIconPencilSquare,
  BIconShareFill,
  BIconClockHistory
} from 'bootstrap-vue';

Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(ButtonPlugin);
Vue.use(OverlayPlugin);
Vue.use(ToastPlugin);
Vue.use(CardPlugin);
Vue.use(PaginationNavPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(AlertPlugin);
Vue.use(LinkPlugin);
Vue.use(BadgePlugin);
Vue.use(VBHoverPlugin);

Vue.component('BIcon', BIcon);
Vue.component('BIconstack', BIconstack);
Vue.component('BIconBookmarkFill', BIconBookmarkFill);
Vue.component('BIconCircle', BIconCircle);
Vue.component('BIconCircleFill', BIconCircleFill);
Vue.component('BIconTrashFill', BIconTrashFill);
Vue.component('BIconPencilSquare', BIconPencilSquare);
Vue.component('BIconShareFill', BIconShareFill);
Vue.component('BIconClockHistory', BIconClockHistory);
