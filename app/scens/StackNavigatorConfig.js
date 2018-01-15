/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/15]
 *@date 2018/1/15
 *@description
 */
import HomeSecondePage from '../pages/HomeSecondePage';
import HomeThirdPage from '../pages/HomeThirdPage';
import HomeFourPage from '../pages/HomeFourPage';
import Tab from './HomeTabNavigator';

export const scensConfig = {
    Tab: {
        screen: Tab,
        navigationOptions: {
            header: null,//隐藏顶部导航栏
        }
    },
    HomeSecondePage: {
        screen: HomeSecondePage,
        headerMode: 'none',
        navigationOptions: {
            headerTitle: 'HomeSecondePage',
        }
    },
    HomeThirdPage: {
        screen: HomeThirdPage,
        headerMode: 'none',
        navigationOptions: {
            headerTitle: 'HomeThirdPage',
        }
    },
    HomeFourPage: {
        screen: HomeFourPage,
        headerMode: 'none',
        navigationOptions: {
            headerTitle: 'HomeFourPage',
        }
    },
};

export const stackRouteConfig = {
    mode: 'card',//card默认，modal ios从底部弹出页面，android无效
    headerMode: 'float',//float默认 header先出现，screen header随screen一起出现
    navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,//是否允许侧滑或下滑翻页
    }),
};