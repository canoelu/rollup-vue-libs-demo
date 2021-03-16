import Test from "./components/Test/index";
import Test2 from "./components/Test2/index";
import ImoocLoading from "./components/ImoocLoading/index";
import ImoocFlybox from "./components/ImoocFlybox/index";
import Container from "./components/Container/index";

export default function (Vue) {
  Vue.use(Test);
  Vue.use(Test2);
  Vue.use(Container);
  Vue.use(ImoocLoading);
  Vue.use(ImoocFlybox);
}
